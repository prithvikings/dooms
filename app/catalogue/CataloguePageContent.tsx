
"use client";

import { useMemo, useState } from "react";

import { MovieCard } from "@/components/movies/MovieCard";
import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Movie } from "@/types/movie";

type CataloguePageContentProps = {
  movies: Movie[];
};

type ImportanceFilter = "all" | Movie["importance"];
type UniverseFilter = "all" | "MCU" | "FOX";
type TypeFilter = "all" | Movie["type"];
type WatchFilter = "all" | "watched" | "unwatched";

type SortOption =
  | "watch-order"
  | "release-date"
  | "newest"
  | "oldest"
  | "title";

const selectClassName =
  "w-full rounded-lg border border-border bg-background-secondary px-3 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-green";

export function CataloguePageContent({
  movies,
}: CataloguePageContentProps) {
  const { isLoaded, isWatched } = useWatchProgress();

  const [searchQuery, setSearchQuery] = useState("");
  const [importance, setImportance] =
    useState<ImportanceFilter>("all");
  const [universe, setUniverse] =
    useState<UniverseFilter>("all");
  const [contentType, setContentType] =
    useState<TypeFilter>("all");
  const [watchStatus, setWatchStatus] =
    useState<WatchFilter>("all");
  const [sortBy, setSortBy] =
    useState<SortOption>("watch-order");

  const filteredMovies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = movies.filter((movie) => {
      const matchesSearch =
        query.length === 0 ||
        movie.title.toLowerCase().includes(query);

      const matchesImportance =
        importance === "all" ||
        movie.importance === importance;

      const matchesUniverse =
        universe === "all" ||
        movie.universe === universe;

      const matchesType =
        contentType === "all" ||
        movie.type === contentType;

      const watched = isWatched(movie.id);

      const matchesWatchStatus =
        watchStatus === "all" ||
        (watchStatus === "watched" && watched) ||
        (watchStatus === "unwatched" && !watched);

      return (
        matchesSearch &&
        matchesImportance &&
        matchesUniverse &&
        matchesType &&
        matchesWatchStatus
      );
    });

    switch (sortBy) {
      case "release-date":
        result.sort(
          (a, b) =>
            a.releaseDate.localeCompare(b.releaseDate)
        );
        break;

      case "newest":
        result.sort(
          (a, b) =>
            b.year - a.year ||
            b.releaseDate.localeCompare(a.releaseDate)
        );
        break;

      case "oldest":
        result.sort(
          (a, b) =>
            a.year - b.year ||
            a.releaseDate.localeCompare(b.releaseDate)
        );
        break;

      case "title":
        result.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "watch-order":
      default:
        result.sort(
          (a, b) => a.watchOrder - b.watchOrder
        );
        break;
    }

    return result;
  }, [
    movies,
    searchQuery,
    importance,
    universe,
    contentType,
    watchStatus,
    sortBy,
    isWatched,
  ]);

  
const hasActiveFilters =
  searchQuery.trim().length > 0 ||
  importance !== "all" ||
  universe !== "all" ||
  contentType !== "all" ||
  watchStatus !== "all" ||
  sortBy !== "watch-order";


  const clearFilters = () => {
    setSearchQuery("");
    setImportance("all");
    setUniverse("all");
    setContentType("all");
    setWatchStatus("all");
    setSortBy("watch-order");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-accent-green/10 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 size-[350px] rounded-full bg-accent-green/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge variant="neutral">
              THE COMPLETE COLLECTION
            </Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
              EXPLORE THE MULTIVERSE
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The full catalogue
              <span className="text-accent-green-light">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary">
              Every movie and series in the main watch guide,
              organised in one place. Find what matters to you,
              follow the recommended order and keep track of
              your progress.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {movies.length}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Total titles
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {movies.filter(
                    (movie) => movie.universe === "MCU"
                  ).length}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  MCU titles
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {movies.filter(
                    (movie) => movie.universe === "FOX"
                  ).length}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Fox titles
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Catalogue */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FIND YOUR NEXT WATCH"
            title="Explore the collection."
            description="Search, narrow things down and choose your own path through the Marvel universe."
          />

          {/* Search */}
          <div className="mt-10">
            <label
              htmlFor="catalogue-search"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground-muted"
            >
              Search titles
            </label>

            <input
              id="catalogue-search"
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search for Iron Man, Loki, X-Men..."
              className={selectClassName}
            />
          </div>

          {/* Filters */}
          <div className="mt-6 rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-foreground">
                Filters
              </h2>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-medium text-accent-green transition-colors hover:text-accent-green-light"
                >
                  Clear all filters
                </button>
              )}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="importance-filter"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Importance
                </label>

                <select
                  id="importance-filter"
                  value={importance}
                  onChange={(event) =>
                    setImportance(
                      event.target.value as ImportanceFilter
                    )
                  }
                  className={selectClassName}
                >
                  <option value="all">All importance</option>
                  <option value="essential">Essential</option>
                  <option value="recommended">Recommended</option>
                  <option value="optional">Optional</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="universe-filter"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Universe
                </label>

                <select
                  id="universe-filter"
                  value={universe}
                  onChange={(event) =>
                    setUniverse(
                      event.target.value as UniverseFilter
                    )
                  }
                  className={selectClassName}
                >
                  <option value="all">All universes</option>
                  <option value="MCU">MCU</option>
                  <option value="FOX">Fox X-Men</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="type-filter"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Content type
                </label>

                <select
                  id="type-filter"
                  value={contentType}
                  onChange={(event) =>
                    setContentType(
                      event.target.value as TypeFilter
                    )
                  }
                  className={selectClassName}
                >
                  <option value="all">All content</option>
                  <option value="movie">Movies</option>
                  <option value="series">Series</option>
                  <option value="special">Specials</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="watch-filter"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Watch status
                </label>

                <select
                  id="watch-filter"
                  value={watchStatus}
                  onChange={(event) =>
                    setWatchStatus(
                      event.target.value as WatchFilter
                    )
                  }
                  className={selectClassName}
                  disabled={!isLoaded}
                >
                  <option value="all">All titles</option>
                  <option value="watched">Watched</option>
                  <option value="unwatched">Unwatched</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results toolbar */}
          <div className="mt-8 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="text-sm font-medium text-foreground"
                aria-live="polite"
              >
                {filteredMovies.length}{" "}
                {filteredMovies.length === 1 ? "title" : "titles"} found
              </p>

              <p className="mt-1 text-xs text-foreground-muted">
                {hasActiveFilters
                  ? "Showing matching titles"
                  : "Showing the complete collection"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label
                htmlFor="catalogue-sort"
                className="shrink-0 text-xs text-foreground-muted"
              >
                Sort by
              </label>

              <select
                id="catalogue-sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className={`${selectClassName} sm:w-52`}
              >
                <option value="watch-order">
                  Recommended watch order
                </option>
                <option value="release-date">
                  Release date
                </option>
                <option value="newest">
                  Newest first
                </option>
                <option value="oldest">
                  Oldest first
                </option>
                <option value="title">
                  Title A–Z
                </option>
              </select>
            </div>
          </div>

          {/* Movie grid */}
          {filteredMovies.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  variant="detailed"
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-border bg-surface px-6 py-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                NO MATCHES FOUND
              </p>

              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Nothing in this universe.
              </h2>

              <p className="mt-3 text-sm leading-7 text-foreground-secondary">
                Try another search or remove some filters to
                find what you are looking for.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-lg bg-accent-green px-5 py-3 text-sm font-semibold text-[#071006] transition-colors hover:bg-accent-green-light"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
