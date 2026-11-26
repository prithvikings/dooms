
import type { Movie } from "@/types/movie";

import { movies } from "./movies";
import { extraMovies } from "./extra-movies";
import { essentialsCollection } from "./essentials";
import { extraCollections } from "./extras";

export { movies, extraMovies };
export { essentialsCollection, extraCollections };

// Main catalogue lookup
export function getMovieById(id: string) {
  return movies.find((movie) => movie.id === id);
}

export function getMovieBySlug(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}

// Extras lookup
export function getExtraMovieById(id: string) {
  return extraMovies.find((movie) => movie.id === id);
}

export function getExtraMovieBySlug(slug: string) {
  return extraMovies.find((movie) => movie.slug === slug);
}

// Main catalogue sorting
export function getMoviesByReleaseOrder() {
  return [...movies].sort(
    (a, b) => a.watchOrder - b.watchOrder
  );
}

export function getMoviesByChronologicalOrder() {
  return [...movies].sort(
    (a, b) => a.storyOrder - b.storyOrder
  );
}

// Main catalogue filters
export function getMoviesByImportance(
  importance: Movie["importance"]
) {
  return movies.filter(
    (movie) => movie.importance === importance
  );
}

export function getMoviesByUniverse(
  universe: Movie["universe"]
) {
  return movies.filter(
    (movie) => movie.universe === universe
  );
}

// Collection lookups
export function getMoviesByIds(ids: string[]) {
  return ids
    .map(getMovieById)
    .filter((movie) => movie !== undefined);
}

export function getExtraMoviesByIds(ids: string[]) {
  return ids
    .map(getExtraMovieById)
    .filter((movie) => movie !== undefined);
}

// Collection helpers
export function getEssentials() {
  return getMoviesByIds(essentialsCollection.movieIds);
}

export function getExtrasByCollection(collectionId: string) {
  const collection = extraCollections.find(
    (item) => item.id === collectionId
  );

  if (!collection) return undefined;

  return {
    ...collection,
    movies: getExtraMoviesByIds(collection.movieIds),
  };
}
export function getMoviesByTimelineTag(
  tag: Movie["timelineTags"][number]
) {
  return movies.filter((movie) =>
    movie.timelineTags.includes(tag)
  );
}
