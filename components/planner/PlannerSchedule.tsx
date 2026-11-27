
"use client";

import type { Movie } from "@/types/movie";
import type { PlannerResult } from "@/types/planner";

type PlannerScheduleProps = {
  result: PlannerResult;
  movies: Movie[];
  today: string;
  watchedMovieIds: string[];
  isProgressLoaded: boolean;
  onToggleWatched: (movieId: string) => void;
};

function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00.000Z`);

  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) return `${remainingMinutes} min`;
  if (remainingMinutes === 0) return `${hours} hr`;

  return `${hours} hr ${remainingMinutes} min`;
}

const errorMessages = {
  "invalid-budget": "Your daily viewing budget is invalid. Choose a valid budget to generate a schedule.",
  "invalid-today": "The current date could not be interpreted. Refresh the page and try again.",
  "invalid-target-date": "Your target date is invalid. Choose a valid completion date.",
  "deadline-passed": "Your target date has already passed. Choose today or a future date.",
};

export function PlannerSchedule({
  result,
  movies,
  today,
  watchedMovieIds,
  isProgressLoaded,
  onToggleWatched,
}: PlannerScheduleProps) {
  const movieById = new Map(
    movies.map((movie) => [movie.id, movie])
  );

  const watchedSet = new Set(watchedMovieIds);

  const scheduleByDay = new Map<
    number,
    typeof result.schedule
  >();

  for (const item of result.schedule) {
    const currentItems = scheduleByDay.get(item.day) ?? [];
    scheduleByDay.set(item.day, [...currentItems, item]);
  }

  const days = [...scheduleByDay.entries()].sort(
    ([dayA], [dayB]) => dayA - dayB
  );

  const scheduledRuntime = result.schedule.reduce(
    (total, item) => total + item.duration,
    0
  );

  const scheduledCount = result.schedule.length;

  const completionPercentage =
    result.selectedMovieIds.length === 0
      ? 0
      : Math.round(
          (scheduledCount / result.selectedMovieIds.length) * 100
        );

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
            YOUR WATCH PLAN
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Your schedule.
          </h2>

          <p className="mt-4 text-sm leading-7 text-foreground-secondary">
            Your selected titles are arranged in watch order
            across the days available before your target date.
          </p>
        </div>

        {result.error && (
          <div
            role="alert"
            className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/5 p-5"
          >
            <p className="text-sm font-semibold text-red-300">
              Schedule cannot be generated
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground-secondary">
              {errorMessages[result.error]}
            </p>
          </div>
        )}

        {!result.error && result.selectedMovieIds.length === 0 && (
          <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-base font-semibold text-foreground">
              Your watchlist is empty
            </p>
            <p className="mt-2 text-sm text-foreground-secondary">
              Select at least one title above to generate your schedule.
            </p>
          </div>
        )}

        {!result.error && result.selectedMovieIds.length > 0 && (
          <>
            {/* Overview */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-foreground-muted">
                  Scheduled titles
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
                  {scheduledCount}
                  <span className="ml-1 text-sm font-normal text-foreground-muted">
                    / {result.selectedMovieIds.length}
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-foreground-muted">
                  Total watch time
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
                  {formatRuntime(result.totalRuntime)}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-foreground-muted">
                  Scheduled days
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
                  {result.totalDays}
                  <span className="ml-1 text-sm font-normal text-foreground-muted">
                    / {result.availableDays}
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-foreground-muted">
                  Daily viewing budget
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
                  {result.dailyBudgetMinutes}
                  <span className="ml-1 text-sm font-normal text-foreground-muted">
                    min
                  </span>
                </p>
              </div>
            </div>

            {/* Overall completion */}
            <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  Schedule coverage
                </p>
                <p className="text-sm tabular-nums text-foreground-secondary">
                  {completionPercentage}%
                </p>
              </div>

              <div
                className="mt-3 h-2 overflow-hidden rounded-full bg-background-tertiary"
                role="progressbar"
                aria-label="Schedule coverage"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={completionPercentage}
              >
                <div
                  className="h-full rounded-full bg-doom-gold transition-all"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-foreground-muted">
                {result.isComplete
                  ? "Every eligible title with a known runtime has been scheduled."
                  : "Some titles still need attention. Review the warnings below."}
              </p>
            </div>

            {/* Warnings */}
            {(result.unscheduledMovieIds.length > 0 ||
              result.unknownRuntimeMovieIds.length > 0 ||
              result.overBudgetMovieIds.length > 0) && (
              <div className="mt-6 space-y-4">
                {result.unscheduledMovieIds.length > 0 && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
                    <p className="text-sm font-semibold text-red-300">
                      {result.unscheduledMovieIds.length} title(s) could not fit before your deadline
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
                      {result.unscheduledMovieIds.map((id) => (
                        <li key={id}>
                          {movieById.get(id)?.title ?? id}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.unknownRuntimeMovieIds.length > 0 && (
                  <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <p className="text-sm font-semibold text-yellow-200">
                      {result.unknownRuntimeMovieIds.length} title(s) have no usable runtime
                    </p>
                    <p className="mt-2 text-xs leading-6 text-foreground-secondary">
                      These titles are not automatically scheduled because their viewing time is unknown.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
                      {result.unknownRuntimeMovieIds.map((id) => (
                        <li key={id}>
                          {movieById.get(id)?.title ?? id}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.overBudgetMovieIds.length > 0 && (
                  <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <p className="text-sm font-semibold text-yellow-200">
                      {result.overBudgetMovieIds.length} title(s) exceed your daily budget
                    </p>
                    <p className="mt-2 text-xs leading-6 text-foreground-secondary">
                      These titles are kept intact and scheduled alone on their respective days.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Daily schedule */}
            <div className="mt-10">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Day-by-day plan
                  </h3>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Titles stay in the catalogue&apos;s viewing order.
                  </p>
                </div>
                <p className="text-xs text-foreground-muted">
                  {formatRuntime(scheduledRuntime)} scheduled
                </p>
              </div>

              {days.length === 0 ? (
                <div className="mt-5 rounded-2xl border border-border bg-surface p-6 text-sm text-foreground-secondary">
                  No titles could be scheduled with the current settings.
                </div>
              ) : (
                <div className="mt-6 space-y-5">
                  {days.map(([day, items]) => {
                    const date = addDays(today, day - 1);
                    const dayRuntime = items.reduce(
                      (total, item) => total + item.duration,
                      0
                    );

                    const budgetPercentage =
                      result.dailyBudgetMinutes > 0
                        ? Math.round(
                            (dayRuntime / result.dailyBudgetMinutes) * 100
                          )
                        : 0;

                    const dayOverBudget =
                      dayRuntime > result.dailyBudgetMinutes;

                    return (
                      <div
                        key={day}
                        className="overflow-hidden rounded-2xl border border-border bg-surface"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-doom-gold">
                              DAY {day}
                            </p>
                            <h4 className="mt-1 text-sm font-semibold text-foreground">
                              {formatDate(date)}
                            </h4>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-semibold tabular-nums text-foreground">
                              {formatRuntime(dayRuntime)}
                            </p>
                            <p
                              className={[
                                "mt-1 text-xs",
                                dayOverBudget
                                  ? "text-yellow-200"
                                  : "text-foreground-muted",
                              ].join(" ")}
                            >
                              {budgetPercentage}% of daily budget
                            </p>
                          </div>
                        </div>

                        <div className="px-5 py-3">
                          <div className="h-1.5 overflow-hidden rounded-full bg-background-tertiary">
                            <div
                              className={[
                                "h-full rounded-full",
                                dayOverBudget
                                  ? "bg-yellow-400"
                                  : "bg-doom-gold",
                              ].join(" ")}
                              style={{
                                width: `${Math.min(budgetPercentage, 100)}%`,
                              }}
                            />
                          </div>
                        </div>

                        <div className="divide-y divide-border">
                          {items.map((item) => {
                            const movie = movieById.get(item.movieId);

                            if (!movie) return null;

                            const watched = watchedSet.has(movie.id);

                            return (
                              <div
                                key={item.movieId}
                                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                              >
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-sm font-semibold text-foreground">
                                      {movie.title}
                                    </p>

                                    {movie.type === "series" && (
                                      <span className="rounded-md bg-background-tertiary px-2 py-1 text-[10px] text-foreground-secondary">
                                        SERIES
                                      </span>
                                    )}

                                    {item.overBudget && (
                                      <span className="rounded-md bg-yellow-400/10 px-2 py-1 text-[10px] font-semibold text-yellow-200">
                                        OVER BUDGET
                                      </span>
                                    )}

                                    {watched && (
                                      <span className="rounded-md bg-doom-gold/10 px-2 py-1 text-[10px] font-semibold text-doom-gold">
                                        WATCHED
                                      </span>
                                    )}
                                  </div>

                                  <p className="mt-1 text-xs text-foreground-muted">
                                    {movie.year} · {movie.universe} · {formatRuntime(item.duration)}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  disabled={!isProgressLoaded}
                                  onClick={() => onToggleWatched(movie.id)}
                                  className={[
                                    "shrink-0 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors disabled:opacity-50",
                                    watched
                                      ? "border-doom-gold/40 text-doom-gold hover:bg-doom-gold/10"
                                      : "border-border-strong text-foreground-secondary hover:border-doom-gold/50 hover:text-doom-gold",
                                  ].join(" ")}
                                >
                                  {watched
                                    ? "Mark unwatched"
                                    : "Mark watched"}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
