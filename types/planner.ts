export type PlannerMode = "automatic" | "manual";

export type PlannerOrder = "release" | "chronological";

export type PlannerConfig = {
  daysAvailable: number;
  hoursPerDay: number;

  mode: PlannerMode;
  order: PlannerOrder;

  includeShows: boolean;
  excludeWatched: boolean;

  selectedMovieIds: string[];
};

export type ScheduledMovie = {
  movieId: string;

  day: number;

  startMinute: number;
  duration: number;

  isContinuation: boolean;
};

export type PlannerResult = {
  schedule: ScheduledMovie[];

  selectedMovieIds: string[];
  unscheduledMovieIds: string[];

  totalRuntime: number;
  totalDays: number;
  essentialCount: number;
};
