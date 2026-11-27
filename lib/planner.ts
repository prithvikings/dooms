
import type { Movie } from "@/types/movie";
import type {
  PlannerError,
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

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

function parseDateOnly(value: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const timestamp = Date.parse(`${value}T00:00:00.000Z`);

  if (Number.isNaN(timestamp)) {
    return null;
  }

  const parsed = new Date(timestamp);

  return parsed.toISOString().slice(0, 10) === value
    ? timestamp
    : null;
}

function getAvailableDays(
  start: number,
  end: number
): number {
  return Math.floor(
    (end - start) / MILLISECONDS_PER_DAY
  ) + 1;
}

function isValidRuntime(
  runtime: number | null
): runtime is number {
  return (
    runtime !== null &&
    Number.isFinite(runtime) &&
    runtime > 0
  );
}

export function getLocalDateString(
  date = new Date()
): string {
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

  const knownRuntimeMovies = orderedMovies.filter(
    (movie) => isValidRuntime(movie.runtimeMinutes)
  );

  const unknownRuntimeMovieIds = orderedMovies
    .filter((movie) => !isValidRuntime(movie.runtimeMinutes))
    .map((movie) => movie.id);

  // Total runtime always represents all eligible titles with
  // known runtimes, including titles that cannot be scheduled.
  const totalRuntime = knownRuntimeMovies.reduce(
  (total, movie) => total + (movie.runtimeMinutes ?? 0),
  0
);

  const parsedToday = parseDateOnly(today);
  const parsedTargetDate = parseDateOnly(targetDate);

  let error: PlannerError | null = null;

  if (
    !Number.isFinite(dailyBudgetMinutes) ||
    dailyBudgetMinutes <= 0
  ) {
    error = "invalid-budget";
  } else if (parsedToday === null) {
    error = "invalid-today";
  } else if (parsedTargetDate === null) {
    error = "invalid-target-date";
  } else if (parsedTargetDate < parsedToday) {
    error = "deadline-passed";
  }

  const availableDays =
    parsedToday !== null &&
    parsedTargetDate !== null &&
    parsedTargetDate >= parsedToday
      ? getAvailableDays(parsedToday, parsedTargetDate)
      : 0;

  const schedule: ScheduledMovie[] = [];
  const unscheduledMovieIds: string[] = [];

  // Invalid settings should never silently produce a successful plan.
  if (error !== null) {
    return {
      schedule,
      selectedMovieIds: orderedMovies.map((movie) => movie.id),
      excludedWatchedMovieIds,
      unknownRuntimeMovieIds,
      unscheduledMovieIds: knownRuntimeMovies.map(
        (movie) => movie.id
      ),
      totalRuntime,
      totalDays: 0,
      availableDays,
      dailyBudgetMinutes,
      overBudgetMovieIds: [],
      isComplete: false,
      error,
    };
  }

  let currentDay = 1;
  let minutesUsedToday = 0;

  for (const movie of knownRuntimeMovies) {
    const runtime = movie.runtimeMinutes;

    // The type guard above guarantees this is a valid number.
    if (!isValidRuntime(runtime)) continue;

    const overBudget = runtime > dailyBudgetMinutes;

    // An over-budget title must start on a fresh day.
    if (overBudget && minutesUsedToday > 0) {
      currentDay += 1;
      minutesUsedToday = 0;
    }

    // Move to the next day when a normal title does not fit.
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
      // An over-budget title occupies the entire day.
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

  const overBudgetMovieIds = schedule
    .filter((item) => item.overBudget)
    .map((item) => item.movieId);

  const isComplete =
    unscheduledMovieIds.length === 0 &&
    unknownRuntimeMovieIds.length === 0;

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
    overBudgetMovieIds,
    isComplete,
    error: null,
  };
}
