export type ReleaseRegion = {
  id: string;
  name: string;
  countryCode: string;
  releaseDate: string;
  timezone: string;
};

export const RELEASE_DATES: ReleaseRegion[] = [
  {
    id: "india",
    name: "India",
    countryCode: "IN",
    releaseDate: "2026-12-17T00:00:00+05:30",
    timezone: "Asia/Kolkata",
  },
  {
    id: "usa",
    name: "United States",
    countryCode: "US",
    releaseDate: "2026-12-18T00:00:00-05:00",
    timezone: "America/New_York",
  },
];

export const DEFAULT_RELEASE_REGION = "india";
