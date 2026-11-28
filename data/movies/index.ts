import type { ExtraMovie, Movie } from "@/types/movie";

import { movies } from "./movies";
import { extraMovies } from "./extra-movies";
import { essentialsCollection } from "./essentials";
import { extraCollections } from "./extras";

export { movies, extraMovies };
export { essentialsCollection, extraCollections };

export function getMovieById(id: string) {
  return movies.find((movie) => movie.id === id);
}

export function getMovieBySlug(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}

export function getExtraMovieById(id: string) {
  return extraMovies.find((movie) => movie.id === id);
}

export function getExtraMovieBySlug(slug: string) {
  return extraMovies.find((movie) => movie.slug === slug);
}

export function getMoviesByReleaseOrder() {
  return [...movies].sort((a, b) => a.watchOrder - b.watchOrder);
}

export function getMoviesByChronologicalOrder() {
  return [...movies].sort((a, b) => a.storyOrder - b.storyOrder);
}

export function getMoviesByImportance(importance: Movie["importance"]) {
  return movies.filter((movie) => movie.importance === importance);
}

export function getMoviesByUniverse(universe: Movie["universe"]) {
  return movies.filter((movie) => movie.universe === universe);
}

export function getMoviesByIds(ids: string[]) {
  return ids.map(getMovieById).filter((movie) => movie !== undefined);
}

export function getExtraMoviesByIds(ids: string[]) {
  return ids.map(getExtraMovieById).filter((movie) => movie !== undefined);
}

export function getEssentials() {
  return getMoviesByIds(essentialsCollection.movieIds);
}

export function getExtrasByCollection(collectionId: string) {
  const collection = extraCollections.find((item) => item.id === collectionId);
  if (!collection) return undefined;

  return {
    ...collection,
    movies: getExtraMoviesByIds(collection.movieIds),
  };
}

export function getMoviesByTimelineTag(tag: Movie["timelineTags"][number]) {
  return movies.filter((movie) => movie.timelineTags.includes(tag));
}

export type CatalogueTitle = Movie | ExtraMovie;

export function getRelatedTitles(movieId: string): CatalogueTitle[] {
  const allTitles: CatalogueTitle[] = [...movies, ...extraMovies];
  const current = allTitles.find((title) => title.id === movieId);
  if (!current) return [];

  const directIds =
    "relatedMovieIds" in current ? current.relatedMovieIds ?? [] : [];

  const reverseIds = allTitles
    .filter((title) => {
      if (title.id === movieId || !("relatedMovieIds" in title)) return false;
      return title.relatedMovieIds?.includes(movieId) ?? false;
    })
    .map((title) => title.id);

  const relatedIds = new Set([...directIds, ...reverseIds]);
  return allTitles
    .filter((title) => relatedIds.has(title.id) && title.id !== movieId)
    .slice(0, 6);
}
