
import { STORAGE_KEYS } from "@/lib/constants";
import type {
  PlannerCollection,
  PlannerConfig,
} from "@/types/planner";

const ALLOWED_BUDGETS = [
  30,
  45,
  60,
  90,
  120,
  150,
  180,
  240,
];

function isPlannerCollection(
  value: unknown
): value is PlannerCollection {
  return (
    value === "essentials" ||
    value === "catalogue" ||
    value === "custom"
  );
}

function isValidDate(value: unknown): value is string {
  if (typeof value !== "string") return false;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value
  );
}

export function createDefaultPlannerConfig(
  essentialsMovieIds: string[],
  targetDate: string
): PlannerConfig {
  return {
    version: 1,
    collection: "essentials",
    selectedMovieIds: [...essentialsMovieIds],
    dailyBudgetMinutes: 90,
    targetDate,
    includeWatched: false,
  };
}

export function readPlannerConfig(
  fallback: PlannerConfig,
  validMovieIds: string[]
): PlannerConfig {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(
      STORAGE_KEYS.PLANNER_CONFIG
    );

    if (!raw) return fallback;

    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed !== "object" ||
      parsed === null
    ) {
      return fallback;
    }

    const value = parsed as Record<string, unknown>;

    if (value.version !== 1) return fallback;

    const validMovieIdSet = new Set(validMovieIds);

    const selectedMovieIds = Array.isArray(
      value.selectedMovieIds
    )
      ? [
          ...new Set(
            value.selectedMovieIds.filter(
              (id): id is string =>
                typeof id === "string" &&
                validMovieIdSet.has(id)
            )
          ),
        ]
      : fallback.selectedMovieIds;

    return {
      version: 1,

      collection: isPlannerCollection(value.collection)
        ? value.collection
        : fallback.collection,

      selectedMovieIds,

      dailyBudgetMinutes:
        typeof value.dailyBudgetMinutes === "number" &&
        ALLOWED_BUDGETS.includes(
          value.dailyBudgetMinutes
        )
          ? value.dailyBudgetMinutes
          : fallback.dailyBudgetMinutes,

      targetDate: isValidDate(value.targetDate)
        ? value.targetDate
        : fallback.targetDate,

      includeWatched:
        typeof value.includeWatched === "boolean"
          ? value.includeWatched
          : fallback.includeWatched,
    };
  } catch {
    return fallback;
  }
}

export function savePlannerConfig(
  config: PlannerConfig
): boolean {
  try {
    window.localStorage.setItem(
      STORAGE_KEYS.PLANNER_CONFIG,
      JSON.stringify(config)
    );

    return true;
  } catch {
    return false;
  }
}
