
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { RELEASE_DATES } from "@/data/config/release-dates";
import { readReleaseRegion, saveReleaseRegion } from "@/lib/countdown-storage";
import { CountdownTimer } from "@/components/countdown/CountdownTimer";

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

  const [selectedRegionId, setSelectedRegionId] = useState(RELEASE_DATES[0].id);
  const [isRegionLoaded, setIsRegionLoaded] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedRegionId(readReleaseRegion());
    setIsRegionLoaded(true);
  }, []);

  const selectedRegion = RELEASE_DATES.find(
    (region) => region.id === selectedRegionId
  );

  function handleRegionChange(regionId: string) {
    setSelectedRegionId(regionId);
    setSaveError(!saveReleaseRegion(regionId));
  }

  const essentialWatchedCount = essentials.filter((movie) =>
    isWatched(movie.id)
  ).length;

  return (
    <>
      {/* Cinematic Doomsday countdown hero */}
      <section
        id="guide"
        className="relative isolate flex min-h-svh items-center overflow-hidden border-b border-white/10 bg-[#050706] text-white"
      >
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-black">
          <iframe
            title="Avengers: Doomsday trailer background"
            src="https://www.youtube-nocookie.com/embed/Wb8Tq_HD4E8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=Wb8Tq_HD4E8&playsinline=1&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-110 opacity-65"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.28)_34%,rgba(0,0,0,0.62)_66%,#030504_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_42%,rgba(42,91,62,0.28),transparent_62%)]" />

        <Container className="relative z-10 flex w-full flex-col items-center py-16 text-center sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-white/85 sm:text-sm">
            THE ROAD TO
          </p>

          <h1 className="mt-3 font-serif text-[clamp(3.6rem,12vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.055em] text-white [text-shadow:0_5px_35px_rgba(0,0,0,0.65)]">
            DOOMSDAY
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)] sm:text-lg">
            Every MCU movie and show you need before Doomsday, in order.
          </p>

          <div className="mt-8 w-full max-w-5xl">
            <CountdownTimer
              releaseDate={selectedRegion?.releaseDate ?? RELEASE_DATES[0].releaseDate}
              regionName={selectedRegion?.name ?? "India"}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80">
            <span>
              {selectedRegion
                ? `Out ${new Intl.DateTimeFormat("en-IN", {
                    timeZone: selectedRegion.timezone,
                    day: "numeric",
                    month: "short",
                  }).format(new Date(selectedRegion.releaseDate))} in ${selectedRegion.name}`
                : "Loading release date"}
            </span>
            <span aria-hidden="true">·</span>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isRegionMenuOpen}
                aria-controls="release-region-options"
                disabled={!isRegionLoaded}
                onClick={() => setIsRegionMenuOpen((open) => !open)}
                className="cursor-pointer border-0 border-b border-[#7cff62] bg-transparent px-1 py-1 font-semibold text-[#7cff62] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff62] disabled:cursor-wait disabled:opacity-60"
              >
                Change
              </button>

              {isRegionMenuOpen && (
                <div
                  id="release-region-options"
                  role="listbox"
                  aria-label="Choose release region"
                  className="absolute left-1/2 top-full z-30 mt-2 min-w-44 -translate-x-1/2 overflow-hidden border border-white/15 bg-[#10130f] py-1 text-left shadow-2xl"
                >
                  {RELEASE_DATES.map((region) => (
                    <button
                      key={region.id}
                      type="button"
                      role="option"
                      aria-selected={selectedRegionId === region.id}
                      onClick={() => {
                        handleRegionChange(region.id);
                        setIsRegionMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/10 aria-selected:bg-white/10"
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {saveError && (
            <p role="status" className="mt-2 text-xs text-red-200">
              Region is selected but could not be saved on this device.
            </p>
          )}

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/#essentials"
              className="inline-flex min-h-14 items-center justify-center bg-[#7cff62] px-8 py-4 text-sm font-bold shadow-[0_8px_35px_rgba(112,255,83,0.2)] transition-colors hover:bg-[#a0ff8a]"
            >
              <span style={{ color: "#000000" }}>See the essentials</span>
            </Link>

            <Link
              href="/planner"
              className="inline-flex min-h-14 items-center justify-center border border-white/35 bg-black/25 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10"
            >
              Make me a watch plan
            </Link>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
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
                    className="h-full rounded-full bg-gradient-to-r from-accent-green to-accent-green-light transition-[width] duration-500"
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

      {/* Essentials watchlist */}
      <section
        id="essentials"
        className="border-t border-border bg-background-secondary py-16 sm:py-20"
      >
        <Container>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="YOUR WATCHLIST"
              title="The essentials."
              description="Sixteen carefully selected stories that cover the major characters, multiverse connections and events leading into Doomsday. Mark each title as you complete it and your progress will stay synced with the rest of the guide."
            />

            <Badge variant="neutral">
              {isLoaded
                ? `${essentialWatchedCount} of ${essentials.length} completed`
                : "Loading progress"}
            </Badge>
          </div>

          <div
            className="mb-10 h-2 overflow-hidden rounded-full bg-background-tertiary"
            role="progressbar"
            aria-label="Essentials completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={isLoaded
              ? Math.round((essentialWatchedCount / Math.max(essentials.length, 1)) * 100)
              : 0}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-green to-accent-green-light transition-[width] duration-500"
              style={{
                width: `${isLoaded
                  ? Math.round((essentialWatchedCount / Math.max(essentials.length, 1)) * 100)
                  : 0}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {essentials.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                variant="detailed"
              />
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            {isLoaded && essentialWatchedCount === essentials.length ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  COLLECTION COMPLETED
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  You&apos;ve completed the essentials.
                </h2>
                <p className="mt-3 text-sm leading-7 text-foreground-secondary">
                  You&apos;ve covered all {essentials.length} curated stories on the road to Doomsday.
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
                    ? `${essentials.length - essentialWatchedCount} titles left in your essentials watchlist.`
                    : "Your watch progress is loading."}
                </p>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-accent-green/20 bg-gradient-to-br from-[#142116] to-background-secondary px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-accent-green/15 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-green">
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
                className="inline-flex items-center justify-center rounded-lg bg-accent-green px-6 py-3 text-sm font-semibold text-[#071006] transition-colors hover:bg-accent-green-light"
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
