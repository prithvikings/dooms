
import { PageShell } from "@/components/layout/PageShell";
import { DEFAULT_RELEASE_REGION, RELEASE_DATES } from "@/data/config/release-dates";
import { HomePageContent } from "@/components/home/HomePageContent";

import {
  movies,
  extraMovies,
  getEssentials,
  essentialsCollection,
} from "@/data/movies";

export default function Home() {
  const essentials = getEssentials();
  const defaultReleaseRegion = RELEASE_DATES.find(
    (region) => region.id === DEFAULT_RELEASE_REGION
  );
  const defaultTargetDate = defaultReleaseRegion?.releaseDate.slice(0, 10) ?? "2026-12-17";

  return (
    <PageShell>
      <HomePageContent
        essentials={essentials}
        totalMovies={movies.length}
        totalExtras={extraMovies.length}
        movies={movies}
        essentialsMovieIds={essentialsCollection.movieIds}
        defaultTargetDate={defaultTargetDate}
      />
    </PageShell>
  );
}
