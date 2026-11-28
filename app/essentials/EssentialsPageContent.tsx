
"use client";

import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Movie } from "@/types/movie";
import { MovieCard } from "@/components/movies/MovieCard";

type EssentialsPageContentProps = {
  movies: Movie[];
};

export function EssentialsPageContent({
  movies,
}: EssentialsPageContentProps) {
  const {
    isLoaded,
    isWatched,
  } = useWatchProgress();

  const watchedCount = movies.filter((movie) =>
    isWatched(movie.id)
  ).length;

  const progressPercentage =
    movies.length === 0
      ? 0
      : Math.round((watchedCount / movies.length) * 100);

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
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent-green"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>

            <Badge variant="essential">
              THE CURATED WATCHLIST
            </Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
              THE ROAD TO DOOMSDAY
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The essentials<span className="text-accent-green-light">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary">
              Not every Marvel project needs to be on your
              watchlist. These 16 carefully selected stories
              cover the major characters, multiverse connections
              and teams leading into Avengers: Doomsday.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {movies.length}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Curated titles
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {isLoaded ? `${progressPercentage}%` : "—"}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Your completion
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/80 px-5 py-4">
                <p className="text-2xl font-semibold text-foreground">
                  {isLoaded ? `${watchedCount}/${movies.length}` : "—"}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Watched
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Watchlist */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="YOUR WATCHLIST"
              title="16 stories. One journey."
              description="Follow the curated selection and mark each title as you complete it. Your progress stays synced with the rest of the guide."
            />

            <Badge variant="neutral">
              {isLoaded
                ? `${watchedCount} of ${movies.length} completed`
                : "Loading progress"}
            </Badge>
          </div>

          <div
            className="mb-10 h-2 overflow-hidden rounded-full bg-background-tertiary"
            role="progressbar"
            aria-label="Essentials completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={isLoaded ? progressPercentage : 0}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-green to-accent-green-light transition-[width] duration-500"
              style={{
                width: `${isLoaded ? progressPercentage : 0}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
    variant="detailed"
  />
))}
          </div>

          {/* Completion message */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            {isLoaded && watchedCount === movies.length ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  COLLECTION COMPLETED
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-foreground">
  You&apos;ve completed the essentials.
</h2>

                <p className="mt-3 text-sm leading-7 text-foreground-secondary">
  You&apos;ve covered all 16 curated stories on the
  road to Doomsday.
</p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  KEEP GOING
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  Every story brings you closer.
                </h2>

                <p className="mt-3 text-sm leading-7 text-foreground-secondary">
                  {isLoaded
                    ? `${movies.length - watchedCount} titles left in your essentials watchlist.`
                    : "Your watch progress is loading."}
                </p>
              </>
            )}

            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-border-strong bg-background-secondary px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              Back to the home page
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
