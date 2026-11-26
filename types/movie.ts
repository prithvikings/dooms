
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

export type Movie = {
  id: string;
  slug: string;
  title: string;
  originalTitle?: string;

  year: number;
  releaseDate?: string;

  type: ContentType;
  importance: MovieImportance;
  universe: MarvelUniverse;

  runtime: number;

  poster: string;
  backdrop?: string;

  releaseOrder: number;
  chronologicalOrder: number;

  description: string;
  doomsdayRelevance: string;

  genres: string[];

  trailerUrl?: string;
  imdbUrl?: string;

  isDoomsdayEntry?: boolean;
};

export type MovieCollection = {
  id: string;
  title: string;
  description: string;
  movieIds: string[];
};
