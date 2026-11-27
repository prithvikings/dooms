
export type PlannerMode = "automatic" | "manual";

export type PlannerOrder = "release" | "chronological";

export type PlannerCollection =
  | "essentials"
  | "catalogue"
  | "custom";

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

  selectedMovieIds: string[];
  excludedWatchedMovieIds: string[];
  unknownRuntimeMovieIds: string[];
  unscheduledMovieIds: string[];

  totalRuntime: number;
  totalDays: number;
  availableDays: number;
  dailyBudgetMinutes: number;

  overBudgetMovieIds: string[];
  isComplete: boolean;
};
