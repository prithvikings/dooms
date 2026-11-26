
import type { Movie } from "@/types/movie";

export function validateMovies(movies: Movie[]) {
  const errors: string[] = [];

  const ids = new Set<string>();
  const slugs = new Set<string>();
  const watchOrders = new Set<number>();
  const storyOrders = new Set<number>();

  for (const movie of movies) {
    if (ids.has(movie.id)) {
      errors.push(`Duplicate ID: ${movie.id}`);
    }

    if (slugs.has(movie.slug)) {
      errors.push(`Duplicate slug: ${movie.slug}`);
    }

    if (watchOrders.has(movie.watchOrder)) {
      errors.push(`Duplicate watch order: ${movie.watchOrder}`);
    }

    if (storyOrders.has(movie.storyOrder)) {
      errors.push(`Duplicate story order: ${movie.storyOrder}`);
    }

    ids.add(movie.id);
    slugs.add(movie.slug);
    watchOrders.add(movie.watchOrder);
    storyOrders.add(movie.storyOrder);

    if (!movie.title || !movie.poster || !movie.backdrop) {
      errors.push(`Missing required information: ${movie.id}`);
    }

    if (
      movie.runtimeMinutes !== null &&
      movie.runtimeMinutes <= 0
    ) {
      errors.push(`Invalid runtime: ${movie.id}`);
    }

    if (
      movie.runtimeMinutes === null &&
      !movie.isDoomsdayEntry
    ) {
      errors.push(`Unconfirmed runtime: ${movie.id}`);
    }

    if (
      movie.isDoomsdayEntry &&
      movie.id !== "avengers-doomsday"
    ) {
      errors.push(`Unexpected final destination: ${movie.id}`);
    }
  }

  // Validate movie references after collecting all IDs.
  for (const movie of movies) {
    for (const relatedId of movie.relatedMovieIds) {
      if (!ids.has(relatedId)) {
        errors.push(
          `Unknown related movie "${relatedId}" referenced by "${movie.id}"`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    total: movies.length,
    errors,
  };
}
