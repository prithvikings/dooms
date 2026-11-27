
"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import type { Movie } from "@/types/movie";
import { MovieCard } from "@/components/movies/MovieCard";

type HomePageContentProps = {
  essentials: Movie[];
  totalMovies: number;
  totalExtras: number;
};

export function HomePageContent({
  essentials,
  totalMovies,
  totalExtras,
}: HomePageContentProps) {
  const {
    watchedCount,
    progressPercentage,
    isLoaded,
    isWatched,
  } = useWatchProgress();

  const essentialWatchedCount = essentials.filter((movie) =>
    isWatched(movie.id)
  ).length;

  return (
    <>
      {/* Hero */}
      <section
        id="guide"
        className="relative isolate overflow-hidden border-b border-border"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 size-[550px] rounded-full bg-doom-red/10 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 size-[400px] rounded-full bg-doom-gold/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <Container className="grid min-h-[620px] items-center gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <div className="flex flex-col items-start gap-7 lg:col-span-8">
            <Badge variant="neutral">
              THE MARVEL WATCH GUIDE
            </Badge>

            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-doom-gold">
                THE ROAD TO DOOMSDAY
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Every story leads to{" "}
                <span className="text-doom-red-light">
                  Doomsday.
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-foreground-secondary sm:text-lg">
                The Marvel universe is vast. Your watchlist
                doesn&apos;t have to be. Follow a curated path
                through the stories that matter before
                Avengers: Doomsday.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#essentials"
                className="inline-flex items-center justify-center rounded-lg bg-doom-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-doom-red-light"
              >
                Start with the essentials
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="#progress"
                className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
              >
                Track your progress
              </Link>
            </div>

            <p className="text-xs text-foreground-muted">
              A curated journey. Not another endless watchlist.
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:col-span-4 lg:block">
            <div className="relative mx-auto aspect-[3/4] max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#38242a] via-[#17191f] to-[#090a0d] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(184,50,61,0.32),transparent_65%)]" />

              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-doom-red/10 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-5 flex size-24 items-center justify-center rounded-full border border-doom-gold/30 bg-black/20 text-5xl font-bold text-doom-gold shadow-[0_0_60px_rgba(196,154,88,0.12)]">
                  D
                </div>

                <p className="text-xs font-medium tracking-[0.35em] text-doom-gold">
                  THE ROAD TO
                </p>

                <p className="mt-3 text-3xl font-bold tracking-[0.15em] text-foreground">
                  DOOMSDAY
                </p>

                <div className="mt-6 h-px w-16 bg-doom-gold/50" />

                <p className="mt-5 text-[10px] tracking-[0.25em] text-foreground-muted">
                  THE MULTIVERSE AWAITS
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-10 rounded-xl border border-border bg-background-secondary/95 px-5 py-4 shadow-xl">
              <p className="text-[10px] uppercase tracking-widest text-foreground-muted">
                Your collection
              </p>
              <p className="mt-1 text-2xl font-semibold text-foreground">
                {totalMovies}
                <span className="ml-2 text-sm font-normal text-foreground-secondary">
                  titles
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Watch progress */}
      <section id="progress" className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
                    YOUR JOURNEY
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    Your watch progress
                  </h2>

                  <p className="mt-2 text-sm text-foreground-secondary">
                    Every title you complete brings you one
                    step closer.
                  </p>
                </div>

                <Badge variant="neutral">
                  {isLoaded ? "Progress saved locally" : "Loading"}
                </Badge>
              </div>

              <div className="mt-9">
                <div className="flex items-end justify-between gap-4">
                  <p className="text-4xl font-semibold tabular-nums text-foreground">
                    {isLoaded ? `${progressPercentage}%` : "—"}
                  </p>

                  <p className="text-sm text-foreground-secondary">
                    {isLoaded
                      ? `${watchedCount} of ${totalMovies} watched`
                      : "Loading your progress"}
                  </p>
                </div>

                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-background-tertiary"
                  role="progressbar"
                  aria-label="Overall watch progress"
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
              </div>

              <p className="mt-5 text-xs leading-6 text-foreground-muted">
                Your progress is stored in this browser. It
                stays available when you return using the same
                browser and storage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <p className="text-xs uppercase tracking-widest text-foreground-muted">
                  Total titles
                </p>
                <p className="mt-4 text-3xl font-semibold text-foreground">
                  {totalMovies}
                </p>
                <p className="mt-2 text-xs text-foreground-secondary">
                  Main catalogue
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <p className="text-xs uppercase tracking-widest text-foreground-muted">
                  Essentials
                </p>
                <p className="mt-4 text-3xl font-semibold text-foreground">
                  {essentials.length}
                </p>
                <p className="mt-2 text-xs text-foreground-secondary">
                  Curated must-watches
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <p className="text-xs uppercase tracking-widest text-foreground-muted">
                  Extras
                </p>
                <p className="mt-4 text-3xl font-semibold text-foreground">
                  {totalExtras}
                </p>
                <p className="mt-2 text-xs text-foreground-secondary">
                  Additional titles
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <p className="text-xs uppercase tracking-widest text-foreground-muted">
                  Essentials watched
                </p>
                <p className="mt-4 text-3xl font-semibold text-foreground">
                  {isLoaded ? essentialWatchedCount : "—"}
                </p>
                <p className="mt-2 text-xs text-foreground-secondary">
                  Of {essentials.length} titles
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Essentials */}
      <section
        id="essentials"
        className="border-t border-border bg-background-secondary py-20 sm:py-24"
      >
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="WHERE TO BEGIN"
                title="The essentials."
                description="Sixteen carefully selected stories that cover the major characters, multiverse connections and events leading into Doomsday."
              />

              <Badge variant="essential">
                {essentials.length} essential titles
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {essentials.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
    variant="compact"
  />
))}
            </div>

            <div className="flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
              <p className="text-sm text-foreground-secondary">
                {isLoaded
                  ? `${essentialWatchedCount} of ${essentials.length} essentials completed`
                  : "Loading watch progress"}
              </p>

              <p className="text-xs text-foreground-muted">
                Your journey is just getting started.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-doom-red/20 bg-gradient-to-br from-[#241519] to-background-secondary px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-doom-red/15 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-doom-gold">
                THE MULTIVERSE AWAITS
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready for what comes next?
              </h2>

              <p className="text-sm leading-7 text-foreground-secondary">
                Start with the essentials, keep track of what
                you have watched and explore the stories
                connected to Doomsday.
              </p>

              <Link
                href="#essentials"
                className="inline-flex items-center justify-center rounded-lg bg-doom-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-doom-red-light"
              >
                Continue your journey →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
