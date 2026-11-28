"use client";

import Image from "next/image";
import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatRuntime } from "@/lib/format-runtime";
import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
  variant?: "compact" | "detailed";
};

const posterBackgrounds = [
  "linear-gradient(145deg, #49352d, #17191f 75%)",
  "linear-gradient(145deg, #263d54, #17191f 75%)",
  "linear-gradient(145deg, #5b292e, #17191f 75%)",
  "linear-gradient(145deg, #344b3d, #17191f 75%)",
  "linear-gradient(145deg, #51432e, #17191f 75%)",
  "linear-gradient(145deg, #34304f, #17191f 75%)",
];

export function MovieCard({ movie, variant = "detailed" }: MovieCardProps) {
  const { isLoaded, isWatched, toggleWatched } = useWatchProgress();
  const watched = isWatched(movie.id);
  const isDetailed = variant === "detailed";
  const posterBackground = posterBackgrounds[(movie.watchOrder - 1) % posterBackgrounds.length];
  const viewingInfo = movie.runtimeMinutes !== null
    ? formatRuntime(movie.runtimeMinutes)
    : movie.episodeCount
      ? `${movie.episodeCount} episodes`
      : null;

  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-[#15171c]",
        "shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_14px_34px_rgba(0,0,0,0.3)]",
        watched ? "border-accent-green/35" : "border-white/10",
      ].join(" ")}
    >
      <Link href={`/movies/${movie.id}`} className="block" aria-label={`View details for ${movie.title}`}>
        <div className="relative aspect-[3/4] overflow-hidden" style={{ background: posterBackground }}>
          <Image
            src={movie.poster}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
          {watched && (
            <div className="absolute right-3 top-3 rounded-full border border-accent-green/45 bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-green backdrop-blur-sm">
              Watched ✓
            </div>
          )}
        </div>

        <div className={["flex flex-col gap-2.5 p-3", isDetailed ? "min-h-[190px]" : "min-h-[116px]"].join(" ")}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant={movie.importance} className="px-2.5 py-1 text-[10px] uppercase">
              {movie.importance}
            </Badge>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-foreground-muted">
              {movie.year}{viewingInfo ? ` · ${viewingInfo}` : ""}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="line-clamp-2 text-[15px] font-semibold leading-5 text-foreground transition-colors group-hover:text-white">
              {movie.title}
            </h3>

            {isDetailed && (
              <>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-foreground-secondary">
                  {movie.synopsis}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Badge variant="neutral" className="px-2 py-0.5 text-[10px]">{movie.universe}</Badge>
                  <Badge variant="neutral" className="px-2 py-0.5 text-[10px]">
                    {movie.type === "series" ? "Series" : movie.type === "special" ? "Special" : "Movie"}
                  </Badge>
                  {movie.genres.slice(0, 1).map((genre) => (
                    <Badge key={genre} variant="neutral" className="px-2 py-0.5 text-[10px]">{genre}</Badge>
                  ))}
                </div>
              </>
            )}
          </div>

          <p className="inline-flex items-center gap-1 text-xs font-semibold text-accent-green">
            View details <span aria-hidden="true">↗</span>
          </p>
        </div>
      </Link>

      <div className="mt-auto px-3 pb-3">
        <Button
          variant="secondary"
          size="sm"
          className={[
            "w-full rounded-lg border font-semibold shadow-sm transition-all duration-150",
            watched
              ? "border-white/10 bg-white/[0.04] text-foreground-secondary hover:border-white/20 hover:bg-white/[0.08]"
              : "!border-accent-green/35 !bg-accent-green/10 !text-accent-green shadow-[0_3px_12px_rgba(196,154,88,0.08)] hover:!border-accent-green hover:!bg-accent-green hover:!text-[#111111] hover:shadow-[0_5px_16px_rgba(196,154,88,0.18)]",
          ].join(" ")}
          disabled={!isLoaded}
          aria-pressed={watched}
          onClick={() => toggleWatched(movie.id)}
        >
          {watched ? "Mark unwatched" : "Mark as watched"}
        </Button>
      </div>
    </article>
  );
}
