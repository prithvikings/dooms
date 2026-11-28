"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatRuntime } from "@/lib/format-runtime";
import type { MovieGuideNote } from "@/data/movies/movie-guide";
import type { ExtraMovie, Movie } from "@/types/movie";

type CatalogueTitle = Movie | ExtraMovie;

type MovieDetailContentProps = {
  movie: CatalogueTitle;
  relatedMovies: CatalogueTitle[];
  isExtraMovie: boolean;
  spoilerSummary?: string;
  guideNote?: MovieGuideNote;
};

function RelatedTitleCard({ movie }: { movie: CatalogueTitle }) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent-green/50"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-background-secondary">
        <Image
          src={movie.poster}
          alt={`${movie.title} poster`}
          fill
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <p className="line-clamp-2 text-sm font-semibold text-foreground">
          {movie.title}
        </p>
        <p className="mt-1 text-xs text-foreground-muted">
          {movie.year} · {movie.universe}
        </p>
        <span className="mt-3 inline-flex text-xs font-semibold text-accent-green">
          Explore title <span aria-hidden="true" className="ml-1">↗</span>
        </span>
      </div>
    </Link>
  );
}

export function MovieDetailContent({
  movie,
  relatedMovies,
  isExtraMovie,
  spoilerSummary,
  guideNote,
}: MovieDetailContentProps) {
  const {
    isLoaded,
    isWatched,
    toggleWatched,
    isExtraLoaded,
    isExtraWatched,
    toggleExtraWatched,
  } = useWatchProgress();
  const [spoilersRevealed, setSpoilersRevealed] = useState(false);

  const watched = isExtraMovie
    ? isExtraWatched(movie.id)
    : isWatched(movie.id);
  const progressLoaded = isExtraMovie ? isExtraLoaded : isLoaded;
  const runtime = formatRuntime(movie.runtimeMinutes);
  const mainMovie = "watchOrder" in movie ? movie : null;
  const genres = "genres" in movie ? movie.genres : [];
  const director = "director" in movie ? movie.director : undefined;
  const creators = "creators" in movie ? movie.creators : undefined;
  const cast = "cast" in movie ? movie.cast : undefined;

  const toggleProgress = () => {
    if (isExtraMovie) {
      toggleExtraWatched(movie.id);
    } else {
      toggleWatched(movie.id);
    }
  };

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-48 size-[560px] rounded-full bg-accent-green/15 blur-[130px]" />
          <div className="absolute -bottom-56 left-0 size-[520px] rounded-full bg-accent-green/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <Container className="py-10 sm:py-14 lg:py-20">
          <Link
            href={isExtraMovie ? "/extras" : "/catalogue"}
            className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent-green"
          >
            <span aria-hidden="true">←</span>
            {isExtraMovie ? "Back to extras" : "Back to catalogue"}
          </Link>

          <div className="grid gap-9 md:grid-cols-[220px_minmax(0,1fr)] md:items-start lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-full max-w-[220px] md:max-w-none">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
                <Image
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  fill
                  priority
                  sizes="(max-width: 767px) 220px, 280px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-muted">
                {movie.universe} · {isExtraMovie ? "Extended collection" : "Main watch guide"}
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral">{movie.universe}</Badge>
                {mainMovie ? (
                  <>
                    <Badge variant={mainMovie.importance}>
                      {mainMovie.importance}
                    </Badge>
                    <Badge variant="neutral">{mainMovie.type}</Badge>
                  </>
                ) : (
                  <Badge variant="neutral">Extended watch</Badge>
                )}
                {mainMovie?.spoilerLevel && mainMovie.spoilerLevel !== "none" && (
                  <Badge variant="neutral">
                    {mainMovie.spoilerLevel} spoilers in story
                  </Badge>
                )}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
                {mainMovie ? `WATCH GUIDE · #${mainMovie.watchOrder}` : "THE WIDER MARVEL MULTIVERSE"}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {movie.title}
                <span className="text-accent-green-light">.</span>
              </h1>
              <p className="mt-4 text-sm text-foreground-muted">
                {movie.year} <span className="px-2 text-border-strong">·</span> {runtime}
                {mainMovie?.episodeCount ? ` · ${mainMovie.episodeCount} episodes` : ""}
                {director ? ` · Directed by ${director}` : ""}
              </p>

              <p className="mt-7 max-w-3xl text-base leading-8 text-foreground-secondary">
                {movie.synopsis}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant={watched ? "secondary" : "primary"}
                  disabled={!progressLoaded}
                  aria-pressed={watched}
                  onClick={toggleProgress}
                >
                  {watched ? "✓ Watched" : "Mark as watched"}
                </Button>
                <Link
                  href={isExtraMovie ? "/extras" : "/planner"}
                  className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
                >
                  {isExtraMovie ? "Explore extras" : "Add to your watch plan"}
                </Link>
              </div>

              {genres.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <Badge key={genre} variant="neutral">{genre}</Badge>
                  ))}
                </div>
              )}

              {(creators?.length || cast?.length) && (
                <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                  {creators && creators.length > 0 && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">Created by</p>
                      <p className="mt-2 text-sm text-foreground-secondary">{creators.join(", ")}</p>
                    </div>
                  )}
                  {cast && cast.length > 0 && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">Featuring</p>
                      <p className="mt-2 text-sm leading-6 text-foreground-secondary">{cast.join(", ")}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-green">WHY IT MATTERS</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Connection to Doomsday</h2>
                <p className="mt-4 text-sm leading-7 text-foreground-secondary">{movie.doomsdayRelevance}</p>
              </section>

              {guideNote && (
                <section className="space-y-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-green">THE STORY BEHIND THE STORY</p>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">A little deeper</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground-secondary">More context than a synopsis: what the story is exploring, what is worth noticing, and why it matters in the wider Marvel timeline.</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">01 · STORY CONTEXT</p>
                      <p className="mt-3 text-sm leading-7 text-foreground-secondary">{guideNote.storyContext}</p>
                    </article>
                    <article className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">02 · WHAT TO NOTICE</p>
                      <p className="mt-3 text-sm leading-7 text-foreground-secondary">{guideNote.whatToNotice}</p>
                    </article>
                    <article className="rounded-2xl border border-accent-green/20 bg-accent-green/5 p-6 sm:col-span-2 sm:p-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-green">03 · THE BIGGER PICTURE</p>
                      <p className="mt-3 text-sm leading-7 text-foreground-secondary">{guideNote.biggerPicture}</p>
                    </article>
                  </div>
                </section>
              )}

              {spoilerSummary && (
                <section className="overflow-hidden rounded-2xl border border-accent-green/30 bg-surface">
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-green-light">SPOILER ZONE</p>
                      <h2 className="mt-2 text-xl font-semibold text-foreground">Major story reveals</h2>
                      <p className="mt-2 text-sm text-foreground-muted">The following section discusses important plot events and the ending.</p>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      aria-expanded={spoilersRevealed}
                      onClick={() => setSpoilersRevealed((value) => !value)}
                    >
                      {spoilersRevealed ? "Hide spoilers" : "Reveal spoilers"}
                    </Button>
                  </div>
                  {spoilersRevealed && (
                    <div className="border-t border-accent-green/20 bg-accent-green/5 px-6 py-6 sm:px-8">
                      <p className="text-sm leading-7 text-foreground-secondary">{spoilerSummary}</p>
                    </div>
                  )}
                </section>
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-surface p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-muted">AT A GLANCE</p>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs text-foreground-muted">Release year</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{movie.year}</dd>
                </div>
                <div>
                  <dt className="text-xs text-foreground-muted">Runtime</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{runtime}</dd>
                </div>
                <div>
                  <dt className="text-xs text-foreground-muted">Universe</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{movie.universe}</dd>
                </div>
                {mainMovie && (
                  <>
                    <div>
                      <dt className="text-xs text-foreground-muted">Watch order</dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">#{mainMovie.watchOrder}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-foreground-muted">Story order</dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">#{mainMovie.storyOrder}</dd>
                    </div>
                  </>
                )}
                {director && (
                  <div>
                    <dt className="text-xs text-foreground-muted">Director</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{director}</dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      {relatedMovies.length > 0 && (
        <section className="border-t border-border bg-background-secondary py-14 sm:py-16">
          <Container>
            <div className="mb-8 max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-green">STORY CONNECTIONS</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">If this caught your attention...</h2>
              <p className="mt-3 text-sm leading-6 text-foreground-secondary">Explore titles connected by characters, story arcs or multiverse events. These are curated links, not a claim that every title is required viewing.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {relatedMovies.map((relatedMovie) => (
                <RelatedTitleCard key={relatedMovie.id} movie={relatedMovie} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
