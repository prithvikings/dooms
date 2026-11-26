
export type ContentType = "movie" | "series" | "special";

export type MovieImportance =
  | "essential"
  | "recommended"
  | "optional";

export type MarvelUniverse =
  | "MCU"
  | "FOX"
  | "SONY"
  | "LEGACY"
  | "OTHER";

export type SpoilerLevel = "none" | "minor" | "major";

export interface Movie {
  // Identity
  id: string;
  slug: string;
  title: string;

  // Basic information
  year: number;
  releaseDate: string;
  type: ContentType;
  universe: MarvelUniverse;

  // Viewing information
  runtimeMinutes: number | null;
  episodeCount?: number;

  // Classification
  importance: MovieImportance;

  // Viewing sequences
  watchOrder: number;
  storyOrder: number;

  // Artwork
  poster: string;
  backdrop: string;

  // Content
  synopsis: string;
  doomsdayRelevance: string;
  genres: string[];

  // Additional information
  director?: string;
  creators?: string[];
  cast?: string[];

  // External resources
  trailerUrl?: string;
  imdbUrl?: string;

  // Story connections
  relatedMovieIds: string[];

  // Optional behaviour
  spoilerLevel: SpoilerLevel;
  isDoomsdayEntry?: boolean;

  timelineGroup: TimelineGroup;
  timelineTags: TimelineTag[];
}

export interface MovieCollection {
  id: string;
  title: string;
  description: string;
  movieIds: string[];
}

export interface ExtraCollection extends MovieCollection {
  category: "spider-man" | "sony" | "x-men" | "legacy";
}

export interface ExtraMovie {
  id: string;
  slug: string;
  title: string;

  year: number;
  runtimeMinutes: number;

  universe: MarvelUniverse;

  poster: string;
  backdrop: string;

  synopsis: string;
  doomsdayRelevance: string;
}

export type TimelineGroup = "mcu" | "fox";

export type TimelineTag = "tva" | "multiverse";
