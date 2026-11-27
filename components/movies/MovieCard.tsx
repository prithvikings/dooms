
"use client";

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

export function MovieCard({
  movie,
  variant = "detailed",
}: MovieCardProps) {
  const { isLoaded, isWatched, toggleWatched } =
    useWatchProgress();

  const watched = isWatched(movie.id);
  const isDetailed = variant === "detailed";

  const posterBackground =
    posterBackgrounds[
      (movie.watchOrder - 1) % posterBackgrounds.length
    ];

  const viewingInfo =
    movie.runtimeMinutes !== null
      ? formatRuntime(movie.runtimeMinutes)
      : movie.episodeCount
        ? `${movie.episodeCount} episodes`
        : null;

  return (
    <article
      className={[
        "group overflow-hidden rounded-xl border bg-surface transition-colors",
        watched
          ? "border-doom-gold/40"
          : "border-border hover:border-border-strong",
      ].join(" ")}
    >
      {/* Poster */}
      <div
        className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
        style={{ background: posterBackground }}
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
      <div
        className={[
          "flex flex-col gap-4 p-4",
          isDetailed ? "min-h-[230px]" : "min-h-[140px]",
        ].join(" ")}
      >
        <div className="flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">
            {movie.title}
          </h3>

          <p className="mt-2 text-xs text-foreground-muted">
            {movie.year}
            {viewingInfo ? ` · ${viewingInfo}` : ""}
          </p>

          {isDetailed && (
            <>
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
            </>
          )}
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
}
