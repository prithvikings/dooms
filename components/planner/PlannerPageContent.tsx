"use client";

import { useEffect, useMemo, useState } from "react";
import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { PlannerSchedule } from "@/components/planner/PlannerSchedule";
import { Container } from "@/components/ui/Container";
import { createDefaultPlannerConfig, readPlannerConfig, savePlannerConfig } from "@/lib/planner-storage";
import { getLocalDateString } from "@/lib/planner";
import type { Movie } from "@/types/movie";
import type { PlannerConfig, PlannerOrder } from "@/types/planner";

type PlannerPageContentProps = {
  movies: Movie[];
  essentialsMovieIds: string[];
  defaultTargetDate: string;
};

const inputClassName = "w-full rounded-lg border border-border bg-background-secondary px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-green";

function getAvailableDays(start: string, end: string) {
  const startDate = new Date(`${start}T00:00:00.000Z`);
  const endDate = new Date(`${end}T00:00:00.000Z`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return 1;
  return Math.max(1, Math.floor((endDate.getTime() - startDate.getTime()) / 86400000) + 1);
}

export function PlannerPageContent({ movies, essentialsMovieIds, defaultTargetDate }: PlannerPageContentProps) {
  const { isLoaded: isProgressLoaded, isWatched, watchedMovieIds, toggleWatched } = useWatchProgress();
  const defaultConfig = useMemo(
    () => createDefaultPlannerConfig(essentialsMovieIds, defaultTargetDate),
    [essentialsMovieIds, defaultTargetDate]
  );
  const [config, setConfig] = useState<PlannerConfig>(defaultConfig);
  const [isLoaded, setIsLoaded] = useState(false);
  const [today, setToday] = useState("");
  const [sortOrder, setSortOrder] = useState<PlannerOrder>("release");
  const [searchQuery, setSearchQuery] = useState("");
  const [showWatched, setShowWatched] = useState(false);

  useEffect(() => {
    const currentDate = getLocalDateString();
    const saved = readPlannerConfig(defaultConfig, movies.map((movie) => movie.id));
    const safeTargetDate =
      saved.targetDate >= currentDate
        ? saved.targetDate
        : defaultConfig.targetDate >= currentDate
          ? defaultConfig.targetDate
          : currentDate;
    const initialConfig = { ...saved, targetDate: safeTargetDate };
    if (safeTargetDate !== saved.targetDate) savePlannerConfig(initialConfig);

    const frameId = window.requestAnimationFrame(() => {
      setConfig(initialConfig);
      setToday(currentDate);
      setIsLoaded(true);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [defaultConfig, movies]);

  const updateConfig = (updater: (current: PlannerConfig) => PlannerConfig) => {
    const next = updater(config);
    setConfig(next);
    savePlannerConfig(next);
  };

  const selectedMovies = useMemo(() => {
    const selected = new Set(config.selectedMovieIds);
    return movies
      .filter((movie) => selected.has(movie.id))
      .sort((a, b) =>
        sortOrder === "release"
          ? a.watchOrder - b.watchOrder
          : a.storyOrder - b.storyOrder
      );
  }, [movies, config.selectedMovieIds, sortOrder]);

  const orderedMovies = useMemo(
    () => selectedMovies.filter((movie) => !watchedMovieIds.includes(movie.id)),
    [selectedMovies, watchedMovieIds]
  );
  const scheduleMovies = showWatched ? selectedMovies : orderedMovies;

  const availableDays = today ? getAvailableDays(today, config.targetDate) : 1;
  const moviesPerDay = Math.max(1, Math.ceil(scheduleMovies.length / availableDays));
  const planDays = useMemo(() => {
    const groups = new Map<number, Movie[]>();
    scheduleMovies.forEach((movie, index) => {
      const day = Math.floor(index / moviesPerDay) + 1;
      const group = groups.get(day) ?? [];
      group.push(movie);
      groups.set(day, group);
    });
    return [...groups.entries()];
  }, [scheduleMovies, moviesPerDay]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const chooseCollection = (collection: "essentials" | "catalogue" | "custom") => {
    updateConfig((current) => ({
      ...current,
      collection,
      selectedMovieIds:
        collection === "essentials"
          ? [...essentialsMovieIds]
          : collection === "catalogue"
            ? movies.map((movie) => movie.id)
            : current.collection === "custom"
              ? current.selectedMovieIds
              : [...essentialsMovieIds],
    }));
  };

  const toggleMovie = (movieId: string) => {
    updateConfig((current) => ({
      ...current,
      selectedMovieIds: current.selectedMovieIds.includes(movieId)
        ? current.selectedMovieIds.filter((id) => id !== movieId)
        : [...current.selectedMovieIds, movieId],
    }));
  };

  const collections = [
    { id: "essentials" as const, label: "Essentials", count: essentialsMovieIds.length },
    { id: "catalogue" as const, label: "Full catalogue", count: movies.length },
    { id: "custom" as const, label: "Custom", count: null },
  ];

  return (
    <section id="planner" className="scroll-mt-24 border-t border-border py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">WATCH PLANNER</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Your watch plan, made simple.</h2>
            <p className="mt-2 text-sm leading-6 text-foreground-secondary">
              Pick what you want to watch, choose when you want to finish, and we’ll arrange the titles into a simple day-by-day plan.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-foreground">What do you want to watch?</h3>
                  <span className="text-xs text-foreground-muted">{isLoaded ? `${config.selectedMovieIds.length} selected` : "Loading…"}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {collections.map((collection) => {
                    const active = config.collection === collection.id;
                    return (
                      <button
                        key={collection.id}
                        type="button"
                        disabled={!isLoaded}
                        aria-pressed={active}
                        onClick={() => chooseCollection(collection.id)}
                        className={[
                          "rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors disabled:opacity-50",
                          active ? "border-accent-green/50 bg-accent-green/10 text-accent-green" : "border-border text-foreground-secondary hover:border-border-strong hover:text-foreground",
                        ].join(" ")}
                      >
                        {collection.label}{collection.count !== null ? ` · ${collection.count}` : ""}
                      </button>
                    );
                  })}
                </div>

                {config.collection === "custom" && (
                  <div className="mt-4 border-t border-border pt-4">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Find a movie or series…"
                      aria-label="Search titles"
                      className={inputClassName}
                    />
                    <div className="mt-3 max-h-64 overflow-y-auto divide-y divide-border">
                      {filteredMovies.map((movie) => (
                        <label key={movie.id} className="flex cursor-pointer items-center gap-3 py-2.5 text-sm">
                          <input
                            type="checkbox"
                            checked={config.selectedMovieIds.includes(movie.id)}
                            disabled={!isLoaded}
                            onChange={() => toggleMovie(movie.id)}
                            className="size-4 accent-[#7cff62]"
                          />
                          <span className="min-w-0 flex-1 text-foreground">{movie.title}</span>
                          <span className="text-xs text-foreground-muted">{movie.year}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <label htmlFor="planner-target-date" className="block text-xs font-semibold text-foreground">Finish by</label>
                  <input
                    id="planner-target-date"
                    type="date"
                    required
                    min={today || undefined}
                    value={config.targetDate}
                    disabled={!isLoaded}
                    onChange={(event) => updateConfig((current) => ({ ...current, targetDate: event.target.value }))}
                    className={`${inputClassName} mt-2`}
                  />
                  <p className="mt-2 text-[11px] text-foreground-muted">Default is the configured Doomsday release date.</p>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="block text-xs font-semibold text-foreground">Watch order</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      aria-pressed={sortOrder === "release"}
                      onClick={() => setSortOrder("release")}
                      className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors ${sortOrder === "release" ? "border-accent-green/50 bg-accent-green/10 text-accent-green" : "border-border text-foreground-secondary hover:text-foreground"}`}
                    >Release order</button>
                    <button
                      type="button"
                      aria-pressed={sortOrder === "chronological"}
                      onClick={() => setSortOrder("chronological")}
                      className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors ${sortOrder === "chronological" ? "border-accent-green/50 bg-accent-green/10 text-accent-green" : "border-border text-foreground-secondary hover:text-foreground"}`}
                    >Story order</button>
                  </div>
                  <p className="mt-2 text-[11px] text-foreground-muted">Watched titles are skipped automatically.</p>
                </div>
              </div>
            </div>

            <aside className="flex flex-col rounded-xl border border-border bg-surface p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-green">YOUR PLAN</p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-foreground">{orderedMovies.length}</p>
              <p className="text-xs text-foreground-muted">titles to watch</p>
              <div className="my-4 border-t border-border" />
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="text-foreground-muted">Days available</span>
                <span className="font-semibold text-foreground">{today ? availableDays : "—"}</span>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-foreground-muted">Your plan updates automatically when you change your watchlist, date or watch order.</p>
              <div className="mt-auto border-t border-border pt-4">
                <button
                  type="button"
                  aria-pressed={showWatched}
                  onClick={() => setShowWatched((current) => !current)}
                  className="group flex w-full items-center justify-between gap-3 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span>
                    <span className="block text-xs font-semibold text-foreground">Show watched titles</span>
                    <span className="mt-1 block text-[11px] text-foreground-muted">Include completed movies in your plan</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-200 ${showWatched ? "border-accent-green bg-accent-green" : "border-border-strong bg-background-tertiary"}`}
                  >
                    <span
                      className={`pointer-events-none absolute left-0.5 size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${showWatched ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </span>
                </button>
              </div>
            </aside>
          </div>

          <PlannerSchedule
            days={planDays}
            today={today}
            isProgressLoaded={isProgressLoaded}
            isLoaded={isLoaded}
            isWatched={isWatched}
            onToggleWatched={toggleWatched}
            showWatched={showWatched}
          />
        </div>
      </Container>
    </section>
  );
}
