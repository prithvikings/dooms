
import { DEFAULT_RELEASE_REGION, RELEASE_DATES } from "@/data/config/release-dates";
import { STORAGE_KEYS } from "@/lib/constants";

const validRegionIds = new Set(
  RELEASE_DATES.map((region) => region.id)
);

export function readReleaseRegion(): string {
  try {
    const savedRegion = window.localStorage.getItem(
      STORAGE_KEYS.RELEASE_REGION
    );

    if (savedRegion && validRegionIds.has(savedRegion)) {
      return savedRegion;
    }
  } catch {
    // Fall back to the configured default if storage is unavailable.
  }

  return DEFAULT_RELEASE_REGION;
}

export function saveReleaseRegion(regionId: string): boolean {
  if (!validRegionIds.has(regionId)) {
    return false;
  }

  try {
    window.localStorage.setItem(
      STORAGE_KEYS.RELEASE_REGION,
      regionId
    );

    return true;
  } catch {
    return false;
  }
}
