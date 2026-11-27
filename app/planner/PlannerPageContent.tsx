
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  createDefaultPlannerConfig,
  readPlannerConfig,
  savePlannerConfig,
} from "@/lib/planner-storage";

import type { PlannerConfig } from "@/types/planner";
import type { Movie } from "@/types/movie";

type PlannerPageContentProps = {
  movies: Movie[];
  essentialsMovieIds: string[];
  defaultTargetDate: string;
};

const budgetOptions = [
  { value: 30, label: "30 minutes" },
  { value: 45, label: "45 minutes" },
  { value: 60, label: "1 hour" },
  { value: 90, label: "1.5 hours" },
  { value: 120, label: "2 hours" },
  { value: 150, label: "2.5 hours" },
  { value: 180, label: "3 hours" },
  { value: 240, label: "4 hours" },
];

const inputClassName =
  "w-full rounded-xl border border-border bg-background-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-doom-gold";

export function PlannerPageContent({
  movies,
  essentialsMovieIds,
  defaultTargetDate,
}: PlannerPageContentProps) {
  const {
    isLoaded: isProgressLoaded,
    isWatched,
  } = useWatchProgress();

  const defaultConfig = useMemo(
    () =>
      createDefaultPlannerConfig(
        essentialsMovieIds,
        defaultTargetDate
      ),
    [essentialsMovieIds, defaultTargetDate]
  );

  const orderedMovies = useMemo(
    () =>
      [...movies].sort(
        (a, b) => a.watchOrder - b.watchOrder
      ),
    [movies]
  );

  const [config, setConfig] =
    useState<PlannerConfig>(defaultConfig);

  const [isLoaded, setIsLoaded] = useState(false);

  const [saveStatus, setSaveStatus] = useState<
    "loading" | "saved" | "error"
  >("loading");

  const [searchQuery, setSearchQuery] = useState("");

  // Load the saved planner configuration.
  useEffect(() => {
    const savedConfig = readPlannerConfig(
      defaultConfig,
      movies.map((movie) => movie.id)
    );

    window.requestAnimationFrame(() => {
      setConfig(savedConfig);
      setIsLoaded(true);
      setSaveStatus("saved");
    });
  }, [defaultConfig, movies]);

  const updateConfig = (
    updater: (current: PlannerConfig) => PlannerConfig
  ) => {
    const nextConfig = updater(config);

    setConfig(nextConfig);

    setSaveStatus(
      savePlannerConfig(nextConfig)
        ? "saved"
        : "error"
    );
  };

  const selectedMovieSet = useMemo(
    () => new Set(config.selectedMovieIds),
    [config.selectedMovieIds]
  );

  const selectedMovies = useMemo(
    () =>
      orderedMovies.filter((movie) =>
        selectedMovieSet.has(movie.id)
      ),
    [orderedMovies, selectedMovieSet]
  );

  const watchedSelectedCount = selectedMovies.filter(
    (movie) => isWatched(movie.id)
  ).length;

  const filteredMovies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return orderedMovies;

    return orderedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
  }, [orderedMovies, searchQuery]);

  const handleCollectionChange = (
    collection: "essentials" | "catalogue" | "custom"
  ) => {
    updateConfig((current) => {
      let selectedMovieIds = current.selectedMovieIds;

      if (collection === "essentials") {
        selectedMovieIds = essentialsMovieIds;
      }

      if (collection === "catalogue") {
        selectedMovieIds = orderedMovies.map(
          (movie) => movie.id
        );
      }

      if (
        collection === "custom" &&
        current.collection !== "custom"
      ) {
        selectedMovieIds = essentialsMovieIds;
      }

      return {
        ...current,
        collection,
        selectedMovieIds: [...selectedMovieIds],
      };
    });
  };

  const toggleMovie = (movieId: string) => {
    updateConfig((current) => {
      const exists =
        current.selectedMovieIds.includes(movieId);

      const selectedMovieIds = exists
        ? current.selectedMovieIds.filter(
            (id) => id !== movieId
          )
        : [...current.selectedMovieIds, movieId];

      return {
        ...current,
        selectedMovieIds,
      };
    });
  };

  const selectAllMovies = () => {
    updateConfig((current) => ({
      ...current,
      selectedMovieIds: orderedMovies.map(
        (movie) => movie.id
      ),
    }));
  };

  const clearAllMovies = () => {
    updateConfig((current) => ({
      ...current,
      selectedMovieIds: [],
    }));
  };

  const handleBudgetChange = (value: string) => {
    updateConfig((current) => ({
      ...current,
      dailyBudgetMinutes: Number(value),
    }));
  };

  const handleTargetDateChange = (value: string) => {
    updateConfig((current) => ({
      ...current,
      targetDate: value,
    }));
  };

  const handleIncludeWatchedChange = (
    checked: boolean
  ) => {
    updateConfig((current) => ({
      ...current,
      includeWatched: checked,
    }));
  };

  const collections = [
    {
      id: "essentials" as const,
      title: "Essentials",
      count: essentialsMovieIds.length,
      description:
        "The curated selection covering the major stories.",
      recommended: true,
    },
    {
      id: "catalogue" as const,
      title: "Full catalogue",
      count: movies.length,
      description:
        "Every title in the main Doomsday watch catalogue.",
      recommended: false,
    },
    {
      id: "custom" as const,
      title: "Custom selection",
      count: null,
      description:
        "Build your own watchlist by selecting individual titles.",
      recommended: false,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-doom-red/15 blur-[130px]" />
          <div className="absolute -bottom-40 left-0 size-[350px] rounded-full bg-doom-gold/5 blur-[120px]" />
        </div>

        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge variant="neutral">
              YOUR PERSONAL WATCH PLAN
            </Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-doom-gold">
              THE ROAD TO DOOMSDAY
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your time.
              <br />
              Your watchlist.
              <span className="text-doom-red-light">
                {" "}Your plan.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary">
              Build a realistic viewing plan around
              your schedule. Choose what you want to
              watch, how much time you have each day,
              and when you want to finish.
            </p>
          </div>
        </Container>
      </section>

      {/* Planner Setup */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="space-y-12">
              {/* Collection */}
              <div>
                <SectionHeading
                  eyebrow="STEP 01"
                  title="Choose your watchlist"
                  description="Start with a curated selection or create your own."
                />

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {collections.map((collection) => {
                    const active =
                      config.collection === collection.id;

                    return (
                      <button
                        key={collection.id}
                        type="button"
                        disabled={!isLoaded}
                        aria-pressed={active}
                        onClick={() =>
                          handleCollectionChange(
                            collection.id
                          )
                        }
                        className={[
                          "relative rounded-2xl border p-5 text-left transition-colors disabled:opacity-50",
                          active
                            ? "border-doom-gold/60 bg-doom-gold/5"
                            : "border-border bg-surface hover:border-border-strong",
                        ].join(" ")}
                      >
                        {collection.recommended && (
                          <span className="absolute right-4 top-4">
                            <Badge variant="recommended">
                              Recommended
                            </Badge>
                          </span>
                        )}

                        <span className="block pr-2 text-base font-semibold text-foreground">
                          {collection.title}
                        </span>

                        <span className="mt-2 block text-xs leading-6 text-foreground-secondary">
                          {collection.description}
                        </span>

                        <span className="mt-5 block text-xs font-medium text-doom-gold">
                          {collection.count !== null
                            ? `${collection.count} titles`
                            : "Choose your titles"}
                        </span>

                        <span className="mt-4 block text-xs font-semibold">
                          {active ? (
                            <span className="text-doom-gold">
                              Selected ✓
                            </span>
                          ) : (
                            <span className="text-foreground-muted">
                              Select collection →
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom selection */}
              {config.collection === "custom" && (
                <div>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <SectionHeading
                      eyebrow="CUSTOM WATCHLIST"
                      title="Select your titles"
                      description="Choose exactly what you want included in your plan."
                    />

                    <div className="flex gap-3">
                      <button
                        type="button"
                        disabled={!isLoaded}
                        onClick={selectAllMovies}
                        className="text-xs font-semibold text-doom-gold hover:text-doom-red-light disabled:opacity-50"
                      >
                        Select all
                      </button>

                      <button
                        type="button"
                        disabled={!isLoaded}
                        onClick={clearAllMovies}
                        className="text-xs font-semibold text-foreground-muted hover:text-foreground disabled:opacity-50"
                      >
                        Clear all
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) =>
                        setSearchQuery(event.target.value)
                      }
                      placeholder="Search movies and series..."
                      className={inputClassName}
                    />
                  </div>

                  <div className="mt-4 max-h-[520px] overflow-y-auto rounded-2xl border border-border bg-surface p-3">
                    {filteredMovies.map((movie) => {
                      const selected =
                        selectedMovieSet.has(movie.id);

                      const watched =
                        isProgressLoaded &&
                        isWatched(movie.id);

                      return (
                        <label
                          key={movie.id}
                          className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-background-secondary"
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            disabled={!isLoaded}
                            onChange={() =>
                              toggleMovie(movie.id)
                            }
                            className="mt-1 size-4 shrink-0 accent-[#c49a58]"
                          />

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-foreground">
                              {movie.title}
                            </span>

                            <span className="mt-1 block text-xs text-foreground-muted">
                              {movie.year} · {movie.universe}
                              {movie.type === "series"
                                ? " · Series"
                                : ""}
                            </span>
                          </span>

                          {watched && (
                            <span className="shrink-0 text-[10px] font-semibold text-doom-gold">
                              Watched
                            </span>
                          )}
                        </label>
                      );
                    })}

                    {filteredMovies.length === 0 && (
                      <p className="p-6 text-center text-sm text-foreground-muted">
                        No titles match your search.
                      </p>
                    )}
                  </div>

                  <p className="mt-3 text-xs text-foreground-muted">
                    {selectedMovies.length} of {movies.length} titles selected
                  </p>
                </div>
              )}

              {/* Daily budget */}
              <div>
                <SectionHeading
                  eyebrow="STEP 02"
                  title="Set your daily viewing time"
                  description="Choose how much time you can realistically spend watching each day."
                />

                <div className="mt-7 max-w-xl">
                  <label
                    htmlFor="daily-budget"
                    className="mb-3 block text-sm font-medium text-foreground"
                  >
                    Daily viewing budget
                  </label>

                  <select
                    id="daily-budget"
                    value={config.dailyBudgetMinutes}
                    disabled={!isLoaded}
                    onChange={(event) =>
                      handleBudgetChange(event.target.value)
                    }
                    className={inputClassName}
                  >
                    {budgetOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <p className="mt-3 text-xs leading-6 text-foreground-muted">
                    This is your daily target, not a strict
                    limit. Longer titles may need more than
                    one day&apos;s budget.
                  </p>
                </div>
              </div>

              {/* Target date */}
              <div>
                <SectionHeading
                  eyebrow="STEP 03"
                  title="Choose your finish date"
                  description="Set the date by which you want to complete your watchlist."
                />

                <div className="mt-7 max-w-xl">
                  <label
                    htmlFor="target-date"
                    className="mb-3 block text-sm font-medium text-foreground"
                  >
                    Target completion date
                  </label>

                  <input
                    id="target-date"
                    type="date"
                    value={config.targetDate}
                    disabled={!isLoaded}
                    onChange={(event) =>
                      handleTargetDateChange(event.target.value)
                    }
                    className={inputClassName}
                  />

                  <p className="mt-3 text-xs leading-6 text-foreground-muted">
                    The default date is based on your configured
                    release region. You can change it at any time.
                  </p>
                </div>
              </div>

              {/* Watched titles */}
              <div>
                <SectionHeading
                  eyebrow="STEP 04"
                  title="Already watched something?"
                  description="Decide how the planner should handle titles you've completed."
                />

                <label className="mt-7 flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                  <input
                    type="checkbox"
                    checked={config.includeWatched}
                    disabled={!isLoaded}
                    onChange={(event) =>
                      handleIncludeWatchedChange(
                        event.target.checked
                      )
                    }
                    className="mt-1 size-4 shrink-0 accent-[#c49a58]"
                  />

                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      Include already watched titles
                    </span>

                    <span className="mt-2 block text-xs leading-6 text-foreground-secondary">
                      When disabled, completed titles will
                      be excluded from the generated schedule.
                      Your original watch history will not
                      be changed.
                    </span>
                  </span>
                </label>
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
                  YOUR PLANNER SETUP
                </p>

                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  Almost ready.
                </h2>

                <p className="mt-2 text-sm leading-6 text-foreground-secondary">
                  Here&apos;s what your schedule will be based on.
                </p>

                <div className="my-6 space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground-muted">
                      Collection
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {config.collection === "essentials"
                        ? "Essentials"
                        : config.collection === "catalogue"
                          ? "Full catalogue"
                          : "Custom"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground-muted">
                      Selected titles
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-foreground">
                      {selectedMovies.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground-muted">
                      Daily budget
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {config.dailyBudgetMinutes} min
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground-muted">
                      Include watched
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {config.includeWatched ? "Yes" : "No"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground-muted">
                      Already completed
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {isProgressLoaded
                        ? `${watchedSelectedCount} titles`
                        : "Loading..."}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground-muted">
                      Setup status
                    </span>

                    <span
                      className={[
                        "text-xs font-semibold",
                        saveStatus === "saved"
                          ? "text-doom-gold"
                          : saveStatus === "error"
                            ? "text-red-400"
                            : "text-foreground-muted",
                      ].join(" ")}
                    >
                      {saveStatus === "saved"
                        ? "Saved on device"
                        : saveStatus === "error"
                          ? "Save failed"
                          : "Loading..."}
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-doom-gold/20 bg-doom-gold/5 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Next up: your schedule
                  </p>

                  <p className="mt-2 text-xs leading-6 text-foreground-secondary">
                    Once the setup is ready, we&apos;ll distribute
                    your selected titles across the available
                    days while respecting your daily viewing
                    budget.
                  </p>
                </div>

                {selectedMovies.length === 0 && (
                  <p className="mt-4 text-xs font-medium text-red-400">
                    Select at least one title before generating
                    a schedule.
                  </p>
                )}

                <Link
                  href="/essentials"
                  className="mt-6 block text-center text-xs font-semibold text-foreground-muted transition-colors hover:text-doom-gold"
                >
                  Browse your watchlist →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
