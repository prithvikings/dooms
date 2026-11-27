
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { PlannerPageContent } from "./PlannerPageContent";

import {
  DEFAULT_RELEASE_REGION,
  RELEASE_DATES,
} from "@/data/config/release-dates";

import {
  essentialsCollection,
  movies,
} from "@/data/movies";

export const metadata: Metadata = {
  title: "Watch Planner",
  description:
    "Build your personal Marvel watch schedule before Avengers: Doomsday.",
};

export default function PlannerPage() {
  const defaultReleaseRegion = RELEASE_DATES.find(
    (region) => region.id === DEFAULT_RELEASE_REGION
  );

  const defaultTargetDate =
    defaultReleaseRegion?.releaseDate.slice(0, 10) ??
    "2026-12-17";

  return (
    <PageShell>
      <PlannerPageContent
        movies={movies}
        essentialsMovieIds={essentialsCollection.movieIds}
        defaultTargetDate={defaultTargetDate}
      />
    </PageShell>
  );
}
