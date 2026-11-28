import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { MovieDetailContent } from "@/components/movies/MovieDetailContent";
import {
  extraMovies,
  getMovieById,
  getRelatedTitles,
  movies,
} from "@/data/movies";
import { getMovieSpoilerNote } from "@/data/movies/movie-details";
import { getMovieGuideNote } from "@/data/movies/movie-guide";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return [...movies, ...extraMovies].map((movie) => ({
    id: movie.id,
  }));
}

export async function generateMetadata({
  params,
}: MoviePageProps): Promise<Metadata> {
  const { id } = await params;
  const movie =
    getMovieById(id) ?? extraMovies.find((item) => item.id === id);

  if (!movie) {
    return { title: "Title not found" };
  }

  return {
    title: movie.title,
    description: movie.synopsis,
    openGraph: {
      title: `${movie.title} — Doomsday`,
      description: movie.doomsdayRelevance,
      images: [{ url: movie.poster }],
    },
  };
}

export default async function MovieDetailPage({
  params,
}: MoviePageProps) {
  const { id } = await params;
  const movie = getMovieById(id) ?? extraMovies.find((item) => item.id === id);

  if (!movie) notFound();

  const isExtraMovie = !("watchOrder" in movie);
  const relatedMovies = getRelatedTitles(movie.id);
  const spoilerSummary = getMovieSpoilerNote(movie.id);
  const guideNote = getMovieGuideNote(movie.id);

  return (
    <PageShell>
      <MovieDetailContent
        movie={movie}
        relatedMovies={relatedMovies}
        isExtraMovie={isExtraMovie}
        spoilerSummary={spoilerSummary}
        guideNote={guideNote}
      />
    </PageShell>
  );
}
