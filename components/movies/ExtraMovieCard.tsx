"use client";

import Image from "next/image";
import Link from "next/link";

import { useWatchProgress } from "@/components/providers/WatchProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatRuntime } from "@/lib/format-runtime";
import type { ExtraMovie } from "@/types/movie";

type ExtraMovieCardProps = {
  movie: ExtraMovie;
};

const posterBackgrounds = [
  "linear-gradient(145deg, #49352d, #17191f 75%)",
  "linear-gradient(145deg, #263d54, #17191f 75%)",
  "linear-gradient(145deg, #5b292e, #17191f 75%)",
  "linear-gradient(145deg, #344b3d, #17191f 75%)",
  "linear-gradient(145deg, #51432e, #17191f 75%)",
  "linear-gradient(145deg, #34304f, #17191f 75%)",
];

export function ExtraMovieCard({ movie }: ExtraMovieCardProps) {
  const { isExtraLoaded, isExtraWatched, toggleExtraWatched } = useWatchProgress();
  const watched = isExtraWatched(movie.id);
  const backgroundIndex = movie.id.split("").reduce(
    (total, character) => total + character.charCodeAt(0), 0
  ) % posterBackgrounds.length;

  return (
    <article className={[
      "group overflow-hidden rounded-xl border bg-surface transition-colors",
      watched ? "border-doom-gold/40" : "border-border hover:border-border-strong",
    ].join(" ")}>
      <Link href={`/movies/${movie.id}`} className="block" aria-label={`View details for ${movie.title}`}>
        <div className="relative aspect-[2/3] overflow-hidden" style={{ background: posterBackgrounds[backgroundIndex] }}>
          <Image
            src={movie.poster}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <Badge variant="neutral">{movie.universe}</Badge>
          </div>
          {watched && (
            <div className="absolute right-3 top-3 rounded-full border border-doom-gold/40 bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-doom-gold">
              Watched ✓
            </div>
          )}
        </div>

        <div className="flex min-h-[220px] flex-col gap-3 p-4">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">{movie.title}</h3>
            <p className="mt-2 text-xs text-foreground-muted">{movie.year} · {formatRuntime(movie.runtimeMinutes)}</p>
            <p className="mt-3 line-clamp-3 text-xs leading-5 text-foreground-secondary">{movie.doomsdayRelevance}</p>
          </div>
          <p className="inline-flex items-center gap-1 text-xs font-semibold text-doom-gold">
            View details <span aria-hidden="true">↗</span>
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Button
          variant={watched ? "secondary" : "ghost"}
          size="sm"
          className="w-full"
          disabled={!isExtraLoaded}
          aria-pressed={watched}
          onClick={() => toggleExtraWatched(movie.id)}
        >
          {watched ? "Mark unwatched" : "Mark as watched"}
        </Button>
      </div>
    </article>
  );
}
