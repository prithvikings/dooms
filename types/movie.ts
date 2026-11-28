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
  id: string;
  slug: string;
  title: string;
  year: number;
  releaseDate: string;
  type: ContentType;
  universe: MarvelUniverse;
  runtimeMinutes: number | null;
  episodeCount?: number;
  importance: MovieImportance;
  watchOrder: number;
  storyOrder: number;
  poster: string;
  backdrop: string;
  synopsis: string;
  doomsdayRelevance: string;
  genres: string[];
  director?: string;
  creators?: string[];
  cast?: string[];
  trailerUrl?: string;
  imdbUrl?: string;
  relatedMovieIds: string[];
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
  relatedMovieIds?: string[];
}

export type TimelineGroup = "mcu" | "fox";
export type TimelineTag = "tva" | "multiverse";
