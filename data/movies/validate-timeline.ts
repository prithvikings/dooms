
import type { Movie } from "@/types/movie";

const EXPECTED_FOX_IDS = new Set([
  "x-men",
  "x2-x-men-united",
  "x-men-days-of-future-past",
]);

const EXPECTED_TVA_IDS = new Set([
  "loki-season-1",
  "loki-season-2",
]);

const EXPECTED_MULTIVERSE_IDS = new Set([
  "spider-man-no-way-home",
  "doctor-strange-multiverse-of-madness",
  "deadpool-and-wolverine",
  "the-fantastic-four-first-steps",
]);

export function validateTimeline(movies: Movie[]) {
  const errors: string[] = [];

  const storyOrders = movies.map((movie) => movie.storyOrder);
  const uniqueOrders = new Set(storyOrders);

  // Every movie must have a unique chronological position.
  if (uniqueOrders.size !== movies.length) {
    errors.push("Duplicate storyOrder values detected");
  }

  // Chronological positions must be continuous.
  const sortedOrders = [...storyOrders].sort((a, b) => a - b);

  sortedOrders.forEach((order, index) => {
    if (order !== index + 1) {
      errors.push(
        `Expected storyOrder ${index + 1}, found ${order}`
      );
    }
  });

  for (const movie of movies) {
    const shouldBeFox = EXPECTED_FOX_IDS.has(movie.id);

    if (
      shouldBeFox &&
      movie.timelineGroup !== "fox"
    ) {
      errors.push(`${movie.id} should belong to the Fox timeline`);
    }

    if (
      !shouldBeFox &&
      movie.timelineGroup !== "mcu"
    ) {
      errors.push(`${movie.id} should belong to the MCU timeline`);
    }

    const uniqueTags = new Set(movie.timelineTags);

    if (uniqueTags.size !== movie.timelineTags.length) {
      errors.push(`Duplicate timeline tags on ${movie.id}`);
    }

    const shouldHaveTvaTag = EXPECTED_TVA_IDS.has(movie.id);
    const hasTvaTag = movie.timelineTags.includes("tva");

    if (shouldHaveTvaTag !== hasTvaTag) {
      errors.push(`Incorrect TVA tag on ${movie.id}`);
    }

    const shouldHaveMultiverseTag =
      EXPECTED_MULTIVERSE_IDS.has(movie.id);

    const hasMultiverseTag =
      movie.timelineTags.includes("multiverse");

    if (shouldHaveMultiverseTag !== hasMultiverseTag) {
      errors.push(`Incorrect multiverse tag on ${movie.id}`);
    }
  }

  const mcuCount = movies.filter(
    (movie) => movie.timelineGroup === "mcu"
  ).length;

  const foxCount = movies.filter(
    (movie) => movie.timelineGroup === "fox"
  ).length;

  return {
    valid: errors.length === 0,
    total: movies.length,
    mcuCount,
    foxCount,
    errors,
  };
}
