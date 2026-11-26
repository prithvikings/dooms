
import { movies } from "./movies";
import { extraMovies } from "./extra-movies";
import { essentialsCollection } from "./essentials";
import { extraCollections } from "./extras";

export function validateCollections() {
  const errors: string[] = [];

  const mainIds = new Set(movies.map((movie) => movie.id));
  const extraIds = new Set(extraMovies.map((movie) => movie.id));

  // Validate Essentials
  const essentialIds = essentialsCollection.movieIds;

  if (essentialIds.length !== 16) {
    errors.push(
      `Expected 16 essentials, found ${essentialIds.length}`
    );
  }

  if (new Set(essentialIds).size !== essentialIds.length) {
    errors.push("Duplicate IDs in Essentials");
  }

  for (const id of essentialIds) {
    const movie = movies.find((item) => item.id === id);

    if (!movie) {
      errors.push(`Unknown essential movie: ${id}`);
    } else if (movie.importance !== "essential") {
      errors.push(`Essential item is not marked essential: ${id}`);
    }
  }

  for (const movie of movies) {
    if (
      movie.importance === "essential" &&
      !essentialIds.includes(movie.id)
    ) {
      errors.push(`Movie marked essential but missing from Essentials: ${movie.id}`);
    }
  }

  // Validate Extras
  const collectionIds = new Set<string>();
  let totalExtraReferences = 0;

  for (const collection of extraCollections) {
    if (collectionIds.has(collection.id)) {
      errors.push(`Duplicate collection: ${collection.id}`);
    }

    collectionIds.add(collection.id);

    if (new Set(collection.movieIds).size !== collection.movieIds.length) {
      errors.push(`Duplicate movie IDs in ${collection.title}`);
    }

    for (const id of collection.movieIds) {
      totalExtraReferences++;

      if (!extraIds.has(id)) {
        errors.push(
          `Unknown extra movie "${id}" in ${collection.title}`
        );
      }
    }
  }

  if (extraCollections.length !== 4) {
    errors.push(
      `Expected 4 extra collections, found ${extraCollections.length}`
    );
  }

  if (extraMovies.length !== 29) {
    errors.push(
      `Expected 29 extra movies, found ${extraMovies.length}`
    );
  }

  return {
    valid: errors.length === 0,
    mainMovies: movies.length,
    essentials: essentialIds.length,
    extraMovies: extraMovies.length,
    extraCollections: extraCollections.length,
    extraReferences: totalExtraReferences,
    errors,
  };
}
