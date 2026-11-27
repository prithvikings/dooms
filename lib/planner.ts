
import type { Movie } from "@/types/movie";
import type {
  PlannerResult,
  ScheduledMovie,
} from "@/types/planner";

type GenerateWatchScheduleOptions = {
  movies: Movie[];
  selectedMovieIds: string[];
  watchedMovieIds: string[];
  dailyBudgetMinutes: number;
  targetDate: string;
  today: string;
  includeWatched: boolean;
};

function parseDateOnly(value: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const timestamp = Date.parse(`${value}T00:00:00.000Z`);

  if (Number.isNaN(timestamp)) {
    return null;
  }

  const parsed = new Date(timestamp);

  if (parsed.toISOString().slice(0, 10) !== value) {
    return null;
  }

  return timestamp;
}

function getAvailableDays(
  today: string,
  targetDate: string
): number {
  const start = parseDateOnly(today);
  const end = parseDateOnly(targetDate);

  if (start === null || end === null || end < start) {
    return 0;
  }

  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return Math.floor((end - start) / millisecondsPerDay) + 1;
}

export function getLocalDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function generateWatchSchedule({
  movies,
  selectedMovieIds,
  watchedMovieIds,
  dailyBudgetMinutes,
  targetDate,
  today,
  includeWatched,
}: GenerateWatchScheduleOptions): PlannerResult {
  const availableDays = getAvailableDays(today, targetDate);

  const selectedIdSet = new Set(selectedMovieIds);
  const watchedIdSet = new Set(watchedMovieIds);

  const orderedMovies = movies
    .filter((movie) => selectedIdSet.has(movie.id))
    .filter(
      (movie) => includeWatched || !watchedIdSet.has(movie.id)
    )
    .sort(
      (a, b) =>
        a.watchOrder - b.watchOrder ||
        a.id.localeCompare(b.id)
    );

  const excludedWatchedMovieIds = movies
    .filter(
      (movie) =>
        selectedIdSet.has(movie.id) &&
        watchedIdSet.has(movie.id) &&
        !includeWatched
    )
    .map((movie) => movie.id);

  const schedule: ScheduledMovie[] = [];
  const unknownRuntimeMovieIds: string[] = [];
  const unscheduledMovieIds: string[] = [];

  let totalRuntime = 0;
  let currentDay = 1;
  let minutesUsedToday = 0;

  const validBudget =
    Number.isFinite(dailyBudgetMinutes) &&
    dailyBudgetMinutes > 0;

  if (!validBudget || availableDays === 0) {
    return {
      schedule,
      selectedMovieIds: orderedMovies.map((movie) => movie.id),
      excludedWatchedMovieIds,
      unknownRuntimeMovieIds: orderedMovies
        .filter(
          (movie) =>
            !Number.isFinite(movie.runtimeMinutes) ||
            movie.runtimeMinutes === null ||
            movie.runtimeMinutes <= 0
        )
        .map((movie) => movie.id),
      unscheduledMovieIds: orderedMovies
        .filter(
          (movie) =>
            Number.isFinite(movie.runtimeMinutes) &&
            movie.runtimeMinutes !== null &&
            movie.runtimeMinutes > 0
        )
        .map((movie) => movie.id),
      totalRuntime: 0,
      totalDays: 0,
      availableDays,
      dailyBudgetMinutes,
      overBudgetMovieIds: [],
      isComplete: orderedMovies.length === 0,
    };
  }

  for (const movie of orderedMovies) {
    const runtime = movie.runtimeMinutes;

    if (
      runtime === null ||
      !Number.isFinite(runtime) ||
      runtime <= 0
    ) {
      unknownRuntimeMovieIds.push(movie.id);
      continue;
    }

    totalRuntime += runtime;

    const overBudget = runtime > dailyBudgetMinutes;

    // An over-budget title must occupy its own day.
    if (overBudget && minutesUsedToday > 0) {
      currentDay += 1;
      minutesUsedToday = 0;
    }

    // A normal title moves to the next day if it does not fit.
    if (
      !overBudget &&
      minutesUsedToday + runtime > dailyBudgetMinutes
    ) {
      currentDay += 1;
      minutesUsedToday = 0;
    }

    if (currentDay > availableDays) {
      unscheduledMovieIds.push(movie.id);
      continue;
    }

    const scheduledItem: ScheduledMovie = {
      movieId: movie.id,
      day: currentDay,
      startMinute: minutesUsedToday,
      duration: runtime,
      isContinuation: false,
      overBudget,
    };

    schedule.push(scheduledItem);

    if (overBudget) {
      // Do not put another title on this day.
      currentDay += 1;
      minutesUsedToday = 0;
    } else {
      minutesUsedToday += runtime;
    }
  }

  const totalDays = schedule.reduce(
    (maximum, item) => Math.max(maximum, item.day),
    0
  );

  return {
    schedule,
    selectedMovieIds: orderedMovies.map((movie) => movie.id),
    excludedWatchedMovieIds,
    unknownRuntimeMovieIds,
    unscheduledMovieIds,
    totalRuntime,
    totalDays,
    availableDays,
    dailyBudgetMinutes,
    overBudgetMovieIds: schedule
      .filter((item) => item.overBudget)
      .map((item) => item.movieId),
    isComplete:
      unscheduledMovieIds.length === 0 &&
      unknownRuntimeMovieIds.length === 0,
  };
}
