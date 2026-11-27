
export type PlannerMode = "automatic" | "manual";

export type PlannerOrder = "release" | "chronological";

export type PlannerCollection =
  | "essentials"
  | "catalogue"
  | "custom";

export type PlannerError =
  | "invalid-budget"
  | "invalid-today"
  | "invalid-target-date"
  | "deadline-passed";

export interface PlannerConfig {
  version: 1;
  collection: PlannerCollection;
  selectedMovieIds: string[];
  dailyBudgetMinutes: number;
  targetDate: string;
  includeWatched: boolean;
}

export type ScheduledMovie = {
  movieId: string;
  day: number;
  startMinute: number;
  duration: number;
  isContinuation: boolean;
  overBudget: boolean;
};

export type PlannerResult = {
  schedule: ScheduledMovie[];

  // Eligible titles after applying the watched-title setting.
  selectedMovieIds: string[];
  excludedWatchedMovieIds: string[];
  unknownRuntimeMovieIds: string[];
  unscheduledMovieIds: string[];

  // Runtime of all eligible titles with a known, valid runtime,
  // whether scheduled or not.
  totalRuntime: number;

  totalDays: number;
  availableDays: number;
  dailyBudgetMinutes: number;

  overBudgetMovieIds: string[];
  isComplete: boolean;
  error: PlannerError | null;
};
