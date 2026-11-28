
"use client";

import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { ExtraMovieCard } from "@/components/movies/ExtraMovieCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ExtraCollection, ExtraMovie } from "@/types/movie";

type ExtrasCollectionWithMovies = ExtraCollection & {
  movies: ExtraMovie[];
};

type ExtrasPageContentProps = {
  collections: ExtrasCollectionWithMovies[];
};

const collectionDescriptions: Record<
  ExtraCollection["category"],
  { eyebrow: string; accent: string }
> = {
  "spider-man": {
    eyebrow: "ALTERNATE SPIDER-MAN UNIVERSES",
    accent: "The web goes further.",
  },
  sony: {
    eyebrow: "SONY'S SPIDER-MAN UNIVERSE",
    accent: "Beyond the friendly neighbourhood.",
  },
  "x-men": {
    eyebrow: "THE FOX MUTANT SAGA",
    accent: "The rest of the mutant story.",
  },
  legacy: {
    eyebrow: "BEFORE THE MCU",
    accent: "Marvel's cinematic history.",
  },
};

export function ExtrasPageContent({
  collections,
}: ExtrasPageContentProps) {
  const totalTitles = collections.reduce(
    (total, collection) => total + collection.movies.length,
    0
  );

  const {
    isExtraLoaded,
    extraWatchedCount,
    extraTotalCount,
    extraProgressPercentage,
    clearExtraProgress,
  } = useWatchProgress();

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
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-border bg-surface/70 px-3.5 text-sm font-medium text-foreground-secondary transition-colors hover:border-accent-green/40 hover:bg-surface hover:text-accent-green"
              >
                <span aria-hidden="true">←</span>
                Back to home
              </Link>

              <Badge variant="neutral">
                BEYOND THE ESSENTIALS
              </Badge>
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
              EXPLORE THE WIDER MULTIVERSE
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The extras
              <span className="text-accent-green-light">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary">
              Want to go beyond the essential watchlist?
              Explore the earlier Spider-Man films, Sony&apos;s
              standalone universe, the wider Fox X-Men saga
              and Marvel&apos;s legacy adaptations.
            </p>

            {/* Collection statistics */}
            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {totalTitles}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Additional titles
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {collections.length}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Collections
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-accent-green">
                  {isExtraLoaded ? extraWatchedCount : "—"}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Titles watched
                </p>
              </div>
            </div>

            {/* Extras watch progress */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface/80 p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                    YOUR EXPLORATION
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {isExtraLoaded && extraWatchedCount === extraTotalCount
                      ? "You’ve explored every collection."
                      : isExtraLoaded && extraWatchedCount > 0
                        ? "Your multiverse journey is underway."
                        : "Every universe has a story worth exploring."}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-foreground-secondary">
                    {isExtraLoaded
                      ? extraWatchedCount === extraTotalCount
                        ? "All additional titles are marked as watched. You can revisit any collection whenever you like."
                        : `${extraTotalCount - extraWatchedCount} titles left to explore across the collections below. Take them at your own pace.`
                      : "Your watched titles and completion progress will appear here."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:min-w-52">
                  <div className="rounded-lg border border-border bg-background-secondary px-4 py-3">
                    <p className="text-2xl font-semibold tabular-nums text-foreground">
                      {isExtraLoaded ? extraWatchedCount : "—"}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-foreground-muted">
                      Completed
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background-secondary px-4 py-3">
                    <p className="text-2xl font-semibold tabular-nums text-foreground">
                      {isExtraLoaded ? extraTotalCount - extraWatchedCount : "—"}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-foreground-muted">
                      Remaining
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground-secondary">
                    Collection progress
                  </span>
                  <span className="font-semibold tabular-nums text-accent-green">
                    {isExtraLoaded ? `${extraProgressPercentage}%` : "—"}
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full bg-background-tertiary"
                  role="progressbar"
                  aria-label="Extras watch progress"
                  aria-valuenow={isExtraLoaded ? extraProgressPercentage : 0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-accent-green transition-all duration-500"
                    style={{
                      width: `${isExtraLoaded ? extraProgressPercentage : 0}%`,
                    }}
                  />
                </div>
              </div>

              {isExtraLoaded && extraWatchedCount > 0 && (
                <div className="mt-3 flex justify-end border-t border-border pt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearExtraProgress}
                  >
                    Reset extras progress
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Collection navigation */}
      <section className="border-b border-border bg-background-secondary py-8">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            EXPLORE COLLECTIONS
          </p>

          <div className="flex flex-wrap gap-3">
            {collections.map((collection) => (
              <a
                key={collection.id}
                href={`#${collection.id}`}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:border-accent-green/40 hover:text-accent-green"
              >
                {collection.title}
                <span className="ml-2 text-xs text-foreground-muted">
                  {collection.movies.length}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Collections */}
      <section className="py-16 sm:py-20">
        <Container className="space-y-20">
          {collections.map((collection) => {
            const description =
              collectionDescriptions[collection.category];

            return (
              <section
                key={collection.id}
                id={collection.id}
                className="scroll-mt-28"
              >
                <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <SectionHeading
                    eyebrow={description.eyebrow}
                    title={collection.title}
                    description={collection.description}
                  />

                  <Badge variant="neutral">
                    {collection.movies.length} titles
                  </Badge>
                </div>

                <p className="mb-6 text-sm font-medium text-accent-green">
                  {description.accent}
                </p>

                {collection.movies.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {collection.movies.map((movie) => (
                      <ExtraMovieCard
                        key={movie.id}
                        movie={movie}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-border bg-surface p-8 text-center">
                    <p className="text-sm text-foreground-secondary">
                      No titles have been added to this
                      collection yet.
                    </p>
                  </div>
                )}
              </section>
            );
          })}
        </Container>
      </section>


    </>
  );
}
