
"use client";

import { useMemo, useState } from "react";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getMoviesByChronologicalOrder } from "@/data/movies";
import { formatRuntime } from "@/lib/format-runtime";

type TimelineFilter =
  | "all"
  | "mcu"
  | "fox"
  | "tva"
  | "multiverse";

const filters: {
  id: TimelineFilter;
  label: string;
}[] = [
  { id: "all", label: "All timelines" },
  { id: "mcu", label: "MCU" },
  { id: "fox", label: "Fox universe" },
  { id: "tva", label: "TVA" },
  { id: "multiverse", label: "Multiverse" },
];

const timelineGroups = [
  {
    id: "mcu" as const,
    title: "MCU continuity",
    description:
      "The main Marvel Cinematic Universe storyline, from its earliest events to the latest entries.",
  },
  {
    id: "fox" as const,
    title: "Fox X-Men continuity",
    description:
      "The curated selection of films from the original Fox mutant universe.",
  },
];

const orderedMovies = getMoviesByChronologicalOrder();

export function InteractiveTimeline() {
  const [activeFilter, setActiveFilter] =
    useState<TimelineFilter>("all");

  const {
    isLoaded,
    isWatched,
    toggleWatched,
  } = useWatchProgress();

  const visibleMovies = useMemo(() => {
    return orderedMovies.filter((movie) => {
      switch (activeFilter) {
        case "mcu":
          return movie.timelineGroup === "mcu";

        case "fox":
          return movie.timelineGroup === "fox";

        case "tva":
          return movie.timelineTags.includes("tva");

        case "multiverse":
          return movie.timelineTags.includes("multiverse");

        default:
          return true;
      }
    });
  }, [activeFilter]);

  const watchedCount = visibleMovies.filter((movie) =>
    isWatched(movie.id)
  ).length;

  const progressPercentage =
    visibleMovies.length === 0
      ? 0
      : Math.round(
          (watchedCount / visibleMovies.length) * 100
        );

  const groups = timelineGroups
    .map((group) => ({
      ...group,
      movies: visibleMovies.filter(
        (movie) => movie.timelineGroup === group.id
      ),
    }))
    .filter((group) => group.movies.length > 0);

  return (
    <section
      id="timeline"
      className="border-y border-border bg-background-secondary py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="EXPLORE THE TIMELINES"
          title="Follow the story, your way."
          description="Explore the curated story order, switch between continuities, and keep track of the titles you've watched."
        />

        {/* Filters */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter timeline"
        >
          {filters.map((filter) => {
            const active = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(filter.id)}
                className={[
                  "rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "border-accent-green bg-accent-green text-white"
                    : "border-border bg-surface text-foreground-secondary hover:border-border-strong hover:text-foreground",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Progress summary */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Your timeline progress
              </p>

              <p className="mt-1 text-xs text-foreground-muted">
                {isLoaded
                  ? `${watchedCount} of ${visibleMovies.length} titles watched`
                  : "Loading your progress..."}
              </p>
            </div>

            <p className="text-2xl font-semibold tabular-nums text-accent-green">
              {isLoaded ? `${progressPercentage}%` : "—"}
            </p>
          </div>

          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-background"
            role="progressbar"
            aria-label="Timeline watch progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={isLoaded ? progressPercentage : 0}
          >
            <div
              className="h-full rounded-full bg-accent-green transition-all duration-500"
              style={{
                width: `${isLoaded ? progressPercentage : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Timeline groups */}
        <div className="mt-14 space-y-16">
          {groups.map((group) => (
            <div key={group.id}>
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {group.title}
                  </h3>

                  <Badge variant="neutral">
                    {group.movies.length} titles
                  </Badge>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground-secondary">
                  {group.description}
                </p>
              </div>

              <div className="relative ml-4 space-y-4 border-l border-border pl-6 sm:ml-5 sm:pl-8">
                {group.movies.map((movie) => {
                  const watched = isWatched(movie.id);

                  const runtime =
                    movie.runtimeMinutes !== null
                      ? formatRuntime(movie.runtimeMinutes)
                      : movie.episodeCount
                        ? `${movie.episodeCount} episodes`
                        : null;

                  return (
                    <article
  id={`timeline-${movie.id}`}
  key={movie.id}
  className="relative scroll-mt-28 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong sm:p-5"
>
                      {/* Timeline marker */}
                      <span
                        className={[
                          "absolute -left-[33px] top-6 size-3 rounded-full border-2 border-background-secondary sm:-left-[41px]",
                          watched
                            ? "bg-accent-green"
                            : "bg-foreground-muted",
                        ].join(" ")}
                        aria-hidden="true"
                      />

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold tabular-nums text-accent-green">
                              #{String(movie.storyOrder).padStart(2, "0")}
                            </span>

                            <span className="text-xs text-foreground-muted">
                              {movie.year}
                            </span>

                            <Badge variant={movie.importance}>
                              {movie.importance}
                            </Badge>

                            {movie.timelineTags.map((tag) => (
                              <Badge key={tag} variant="neutral">
                                {tag === "tva"
                                  ? "TVA"
                                  : "Multiverse"}
                              </Badge>
                            ))}
                          </div>

                          <h4 className="mt-3 text-base font-semibold text-foreground">
                            {movie.title}
                          </h4>

                          <p className="mt-1 text-xs text-foreground-muted">
                            {movie.type === "series"
                              ? "Series"
                              : movie.type === "special"
                                ? "Special"
                                : "Movie"}
                            {runtime ? ` · ${runtime}` : ""}
                          </p>

                          <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground-secondary">
                            {movie.doomsdayRelevance}
                          </p>
                        </div>

                        <button
                          type="button"
                          disabled={!isLoaded}
                          aria-pressed={watched}
                          onClick={() => toggleWatched(movie.id)}
                          className={[
                            "shrink-0 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
                            watched
                              ? "border-accent-green/40 bg-accent-green/10 text-accent-green hover:bg-accent-green/15"
                              : "border-border-strong bg-background text-foreground-secondary hover:border-accent-green/50 hover:text-accent-green",
                          ].join(" ")}
                        >
                          {watched ? "Watched ✓" : "Mark as watched"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {visibleMovies.length === 0 && (
          <div className="mt-10 rounded-xl border border-border bg-surface p-10 text-center">
            <p className="text-sm text-foreground-secondary">
              No titles found in this timeline.
            </p>
          </div>
        )}

        <p className="mt-10 text-xs leading-6 text-foreground-muted">
          The numbered order is this guide&apos;s curated story sequence,
          not a claim that every title follows a single exact in-universe
          chronology. The MCU and Fox selections are shown as separate
          continuities.
        </p>
      </Container>
    </section>
  );
}
