
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { STORAGE_KEYS } from "@/lib/constants";

type WatchProgressContextValue = {
  // Main catalogue
  watchedMovieIds: string[];
  watchedCount: number;
  totalCount: number;
  progressPercentage: number;
  isLoaded: boolean;
  isWatched: (movieId: string) => boolean;
  toggleWatched: (movieId: string) => void;
  clearProgress: () => void;
  isExtraLoaded: boolean;

  // Extras
  watchedExtraMovieIds: string[];
  extraWatchedCount: number;
  extraTotalCount: number;
  extraProgressPercentage: number;
  isExtraWatched: (movieId: string) => boolean;
  toggleExtraWatched: (movieId: string) => void;
  clearExtraProgress: () => void;
};

type WatchProgressProviderProps = {
  children: ReactNode;
  validMovieIds: string[];
  validExtraMovieIds: string[];
};

const WatchProgressContext =
  createContext<WatchProgressContextValue | null>(null);

const PROGRESS_EVENT = "watch-progress-change";

function getMainSnapshot(): string {
  try {
    return (
      window.localStorage.getItem(STORAGE_KEYS.WATCH_PROGRESS) ?? ""
    );
  } catch {
    return "";
  }
}

function getExtraSnapshot(): string {
  try {
    return (
      window.localStorage.getItem(
        STORAGE_KEYS.EXTRA_WATCH_PROGRESS
      ) ?? ""
    );
  } catch {
    return "";
  }
}

function getServerSnapshot(): null {
  return null;
}

function subscribe(callback: () => void) {
  const handleStorageChange = (event: StorageEvent) => {
    if (
      event.key !== STORAGE_KEYS.WATCH_PROGRESS &&
      event.key !== STORAGE_KEYS.EXTRA_WATCH_PROGRESS &&
      event.key !== null
    ) {
      return;
    }

    callback();
  };

  const handleProgressChange = () => callback();

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(PROGRESS_EVENT, handleProgressChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(PROGRESS_EVENT, handleProgressChange);
  };
}

function notifyProgressChange() {
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

function parseProgress(
  raw: string | null,
  validMovieIds: Set<string>
): string[] {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return [
      ...new Set(
        parsed.filter(
          (id): id is string =>
            typeof id === "string" && validMovieIds.has(id)
        )
      ),
    ];
  } catch {
    return [];
  }
}

export function WatchProgressProvider({
  children,
  validMovieIds,
  validExtraMovieIds,
}: WatchProgressProviderProps) {
  const storedProgress = useSyncExternalStore(
    subscribe,
    getMainSnapshot,
    getServerSnapshot
  );

  const storedExtraProgress = useSyncExternalStore(
    subscribe,
    getExtraSnapshot,
    getServerSnapshot
  );

  const validMovieIdSet = useMemo(
    () => new Set(validMovieIds),
    [validMovieIds]
  );

  const validExtraMovieIdSet = useMemo(
    () => new Set(validExtraMovieIds),
    [validExtraMovieIds]
  );

  const isLoaded = storedProgress !== null;
  const isExtraLoaded = storedExtraProgress !== null;

  const watchedMovieIds = useMemo(
    () => parseProgress(storedProgress, validMovieIdSet),
    [storedProgress, validMovieIdSet]
  );

  const watchedExtraMovieIds = useMemo(
    () =>
      parseProgress(
        storedExtraProgress,
        validExtraMovieIdSet
      ),
    [storedExtraProgress, validExtraMovieIdSet]
  );

  const watchedSet = useMemo(
    () => new Set(watchedMovieIds),
    [watchedMovieIds]
  );

  const watchedExtraSet = useMemo(
    () => new Set(watchedExtraMovieIds),
    [watchedExtraMovieIds]
  );

  const isWatched = useCallback(
    (movieId: string) => watchedSet.has(movieId),
    [watchedSet]
  );

  const isExtraWatched = useCallback(
    (movieId: string) => watchedExtraSet.has(movieId),
    [watchedExtraSet]
  );

  const toggleWatched = useCallback(
    (movieId: string) => {
      if (!validMovieIdSet.has(movieId)) return;

      const nextProgress = watchedSet.has(movieId)
        ? watchedMovieIds.filter((id) => id !== movieId)
        : [...watchedMovieIds, movieId];

      try {
        window.localStorage.setItem(
          STORAGE_KEYS.WATCH_PROGRESS,
          JSON.stringify(nextProgress)
        );

        notifyProgressChange();
      } catch {
        // Storage may be unavailable in restricted browser contexts.
      }
    },
    [validMovieIdSet, watchedSet, watchedMovieIds]
  );

  const toggleExtraWatched = useCallback(
    (movieId: string) => {
      if (!validExtraMovieIdSet.has(movieId)) return;

      const nextProgress = watchedExtraSet.has(movieId)
        ? watchedExtraMovieIds.filter((id) => id !== movieId)
        : [...watchedExtraMovieIds, movieId];

      try {
        window.localStorage.setItem(
          STORAGE_KEYS.EXTRA_WATCH_PROGRESS,
          JSON.stringify(nextProgress)
        );

        notifyProgressChange();
      } catch {
        // Storage may be unavailable in restricted browser contexts.
      }
    },
    [
      validExtraMovieIdSet,
      watchedExtraSet,
      watchedExtraMovieIds,
    ]
  );

  const clearProgress = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.WATCH_PROGRESS);
      notifyProgressChange();
    } catch {
      // Storage may be unavailable in restricted browser contexts.
    }
  }, []);

  const clearExtraProgress = useCallback(() => {
    try {
      window.localStorage.removeItem(
        STORAGE_KEYS.EXTRA_WATCH_PROGRESS
      );
      notifyProgressChange();
    } catch {
      // Storage may be unavailable in restricted browser contexts.
    }
  }, []);

  const totalCount = validMovieIdSet.size;
  const watchedCount = watchedMovieIds.length;

  const progressPercentage =
    totalCount === 0
      ? 0
      : Math.round((watchedCount / totalCount) * 100);

  const extraTotalCount = validExtraMovieIdSet.size;
  const extraWatchedCount = watchedExtraMovieIds.length;

  const extraProgressPercentage =
    extraTotalCount === 0
      ? 0
      : Math.round(
          (extraWatchedCount / extraTotalCount) * 100
        );

  const value = useMemo(
    () => ({
      watchedMovieIds,
      watchedCount,
      totalCount,
      progressPercentage,
      isLoaded,
      isWatched,
      toggleWatched,
      clearProgress,
      watchedExtraMovieIds,
      extraWatchedCount,
      extraTotalCount,
      extraProgressPercentage,
      isExtraWatched,
      toggleExtraWatched,
      clearExtraProgress,
      isExtraLoaded
    }),
    [
      watchedMovieIds,
      watchedCount,
      totalCount,
      progressPercentage,
      isLoaded,
      isWatched,
      toggleWatched,
      clearProgress,
      watchedExtraMovieIds,
      extraWatchedCount,
      extraTotalCount,
      extraProgressPercentage,
      isExtraWatched,
      toggleExtraWatched,
      clearExtraProgress,
      isExtraLoaded,
    ]
  );

  return (
    <WatchProgressContext.Provider value={value}>
      {children}
    </WatchProgressContext.Provider>
  );
}

export function useWatchProgress() {
  const context = useContext(WatchProgressContext);

  if (!context) {
    throw new Error(
      "useWatchProgress must be used inside WatchProgressProvider"
    );
  }

  return context;
}
