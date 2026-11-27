
"use client";

import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatRuntime } from "@/lib/format-runtime";
import type { Movie } from "@/types/movie";

type EssentialsPageContentProps = {
  movies: Movie[];
};

const posterBackgrounds = [
  "linear-gradient(145deg, #49352d, #17191f 75%)",
  "linear-gradient(145deg, #263d54, #17191f 75%)",
  "linear-gradient(145deg, #5b292e, #17191f 75%)",
  "linear-gradient(145deg, #344b3d, #17191f 75%)",
  "linear-gradient(145deg, #51432e, #17191f 75%)",
  "linear-gradient(145deg, #34304f, #17191f 75%)",
];

export function EssentialsPageContent({
  movies,
}: EssentialsPageContentProps) {
  const {
    isLoaded,
    isWatched,
    toggleWatched,
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
          <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-doom-red/10 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 size-[350px] rounded-full bg-doom-gold/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-doom-gold"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>

            <Badge variant="essential">
              THE CURATED WATCHLIST
            </Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-doom-gold">
              THE ROAD TO DOOMSDAY
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The essentials<span className="text-doom-red-light">.</span>
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
              className="h-full rounded-full bg-gradient-to-r from-doom-red to-doom-red-light transition-[width] duration-500"
              style={{
                width: `${isLoaded ? progressPercentage : 0}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie, index) => {
              const watched = isWatched(movie.id);

              return (
                <article
                  key={movie.id}
                  className={[
                    "group overflow-hidden rounded-xl border bg-surface transition-colors",
                    watched
                      ? "border-doom-gold/40"
                      : "border-border hover:border-border-strong",
                  ].join(" ")}
                >
                  {/* Poster placeholder */}
                  <div
                    className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
                    style={{
                      background:
                        posterBackgrounds[
                          index % posterBackgrounds.length
                        ],
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.08),transparent_65%)]" />

                    <div className="relative flex size-16 items-center justify-center rounded-full border border-white/15 bg-black/15 text-2xl font-semibold text-white/70 transition-transform duration-300 group-hover:scale-110">
                      {String(movie.watchOrder).padStart(2, "0")}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <Badge variant={movie.importance}>
                        {movie.importance}
                      </Badge>
                    </div>

                    {watched && (
                      <div className="absolute right-3 top-3 rounded-full border border-doom-gold/40 bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-doom-gold">
                        Watched ✓
                      </div>
                    )}
                  </div>

                  {/* Movie information */}
                  <div className="flex min-h-[230px] flex-col gap-4 p-4">
                    <div className="flex-1">
                      <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">
                        {movie.title}
                      </h2>

                      <p className="mt-2 text-xs text-foreground-muted">
                        {movie.year}
                        {movie.runtimeMinutes !== null
                          ? ` · ${formatRuntime(movie.runtimeMinutes)}`
                          : movie.episodeCount
                            ? ` · ${movie.episodeCount} episodes`
                            : ""}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="neutral">
                          {movie.universe}
                        </Badge>

                        <Badge variant="neutral">
                          {movie.type}
                        </Badge>
                      </div>

                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-foreground-secondary">
                        {movie.doomsdayRelevance}
                      </p>
                    </div>

                    <Button
                      variant={watched ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full"
                      disabled={!isLoaded}
                      aria-pressed={watched}
                      onClick={() => toggleWatched(movie.id)}
                    >
                      {watched ? "Mark unwatched" : "Mark as watched"}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Completion message */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            {isLoaded && watchedCount === movies.length ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
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
