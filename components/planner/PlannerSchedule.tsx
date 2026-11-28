"use client";

import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/movie";
import { formatRuntime } from "@/lib/format-runtime";

type PlannerScheduleProps = {
  days: [number, Movie[]][];
  today: string;
  isProgressLoaded: boolean;
  isLoaded: boolean;
  isWatched: (movieId: string) => boolean;
  onToggleWatched: (movieId: string) => void;
  showWatched: boolean;
};

function addDays(dateString: string, days: number) {
  const date = new Date(`${dateString}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${dateString}T00:00:00.000Z`));
}

export function PlannerSchedule({
  days,
  today,
  isProgressLoaded,
  isLoaded,
  isWatched,
  onToggleWatched,
  showWatched,
}: PlannerScheduleProps) {
  if (!isLoaded || !isProgressLoaded || !today) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-8 text-center text-sm text-foreground-muted">
        Preparing your watch plan…
      </div>
    );
  }

  if (days.length === 0) {
    return (
      <section className="mt-9">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Your day-by-day plan</h3>
            <p className="mt-1 text-xs text-foreground-muted">Your watched titles are automatically left out.</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface px-5 py-10 text-center">
          <p className="text-sm font-semibold text-foreground">{showWatched ? "No titles in this watchlist" : "You’re all caught up"}</p>
          <p className="mt-1 text-xs text-foreground-muted">{showWatched ? "Choose a collection or add titles to your custom list." : "Turn on “Show watched” to see your completed titles."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-9">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Your day-by-day plan</h3>
          <p className="mt-1 text-xs text-foreground-muted">{showWatched ? "Showing completed and upcoming titles." : "Your watched titles are automatically left out."}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-foreground-muted">{days.reduce((total, [, items]) => total + items.length, 0)} titles · {days.length} days</span>
        </div>
      </div>

      <div className="space-y-3">
        {days.map(([day, items]) => {
          const date = addDays(today, day - 1);
          return (
            <section key={day} className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-background-secondary/60 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent-green/10 text-xs font-bold text-accent-green">
                    {String(day).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Day {day}</p>
                    <p className="mt-0.5 text-[11px] text-foreground-muted">{formatDate(date)}</p>
                  </div>
                </div>
                <span className="text-[11px] text-foreground-muted">{items.length} {items.length === 1 ? "title" : "titles"}</span>
              </div>

              <div className="divide-y divide-border">
                {items.map((movie) => {
                  const watched = isWatched(movie.id);
                  const runtime = movie.runtimeMinutes !== null
                    ? formatRuntime(movie.runtimeMinutes)
                    : movie.episodeCount
                      ? `${movie.episodeCount} episodes`
                      : "Runtime unavailable";

                  return (
                    <article key={movie.id} className="flex items-center gap-3 px-3 py-3 sm:gap-4 sm:px-4">
                      <Link href={`/movies/${movie.id}`} className="relative h-[76px] w-[54px] shrink-0 overflow-hidden rounded-md bg-background-tertiary" aria-label={`View ${movie.title} details`}>
                        <Image src={movie.poster} alt="" fill sizes="54px" className="object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link href={`/movies/${movie.id}`} className="line-clamp-2 text-sm font-semibold text-foreground transition-colors hover:text-accent-green">
                          {movie.title}
                        </Link>
                        <p className="mt-1 text-[11px] text-foreground-muted">
                          {movie.year} · {movie.type === "series" ? "Series" : movie.type === "special" ? "Special" : "Film"} · {runtime}
                        </p>
                        {watched && <p className="mt-1 text-[10px] font-semibold text-accent-green">Watched</p>}
                      </div>
                      <button
                        type="button"
                        disabled={!isProgressLoaded}
                        onClick={() => onToggleWatched(movie.id)}
                        className="shrink-0 rounded-lg border border-border px-2.5 py-2 text-[11px] font-semibold text-foreground-secondary transition-colors hover:border-accent-green/50 hover:text-accent-green disabled:opacity-50 sm:px-3"
                      >
                        {watched ? "Undo" : "Watched"}
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
