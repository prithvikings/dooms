export const APP_NAME = "Road to Doomsday";

export const APP_DESCRIPTION =
  "Your ultimate guide to preparing for Avengers: Doomsday.";

export const STORAGE_KEYS = {
  WATCH_PROGRESS: "doomsday:watch-progress",
  PLANNER_CONFIG: "doomsday:planner-config",
  RELEASE_REGION: "doomsday:release-region",
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Watch Order",
    href: "/watch-order",
  },
  {
    label: "Essentials",
    href: "/essentials",
  },
  {
    label: "Story",
    href: "/story",
  },
  {
    label: "Planner",
    href: "/planner",
  },
  {
    label: "Countdown",
    href: "/countdown",
  },
  {
    label: "Extras",
    href: "/extras",
  },
] as const;
