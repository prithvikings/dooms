
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { STORAGE_KEYS } from "@/lib/constants";

type WatchProgressContextValue = {
  watchedMovieIds: string[];
  watchedCount: number;
  totalCount: number;
  progressPercentage: number;
  isLoaded: boolean;
  isWatched: (movieId: string) => boolean;
  toggleWatched: (movieId: string) => void;
  clearProgress: () => void;
};

type WatchProgressProviderProps = {
  children: ReactNode;
  validMovieIds: string[];
};

const WatchProgressContext =
  createContext<WatchProgressContextValue | null>(null);

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
}: WatchProgressProviderProps) {
  const [watchedMovieIds, setWatchedMovieIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const validMovieIdSet = useMemo(
    () => new Set(validMovieIds),
    [validMovieIds]
  );

  useEffect(() => {
    const storedProgress = window.localStorage.getItem(
      STORAGE_KEYS.WATCH_PROGRESS
    );

    setWatchedMovieIds(
      parseProgress(storedProgress, validMovieIdSet)
    );

    setIsLoaded(true);

    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key !== STORAGE_KEYS.WATCH_PROGRESS &&
        event.key !== null
      ) {
        return;
      }

      setWatchedMovieIds(
        parseProgress(event.newValue, validMovieIdSet)
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [validMovieIdSet]);

  const toggleWatched = useCallback(
    (movieId: string) => {
      if (!validMovieIdSet.has(movieId)) return;

      const nextProgress = watchedMovieIds.includes(movieId)
        ? watchedMovieIds.filter((id) => id !== movieId)
        : [...watchedMovieIds, movieId];

      setWatchedMovieIds(nextProgress);

      try {
        window.localStorage.setItem(
          STORAGE_KEYS.WATCH_PROGRESS,
          JSON.stringify(nextProgress)
        );
      } catch {
        // Progress remains available in memory if storage is unavailable.
      }
    },
    [watchedMovieIds, validMovieIdSet]
  );

  const clearProgress = useCallback(() => {
    setWatchedMovieIds([]);

    try {
      window.localStorage.removeItem(STORAGE_KEYS.WATCH_PROGRESS);
    } catch {
      // Keep the in-memory state cleared.
    }
  }, []);

  const watchedSet = useMemo(
    () => new Set(watchedMovieIds),
    [watchedMovieIds]
  );

  const isWatched = useCallback(
    (movieId: string) => watchedSet.has(movieId),
    [watchedSet]
  );

  const totalCount = validMovieIdSet.size;
  const watchedCount = watchedMovieIds.length;

  const progressPercentage =
    totalCount === 0
      ? 0
      : Math.round((watchedCount / totalCount) * 100);

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
