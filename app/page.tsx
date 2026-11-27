
import { PageShell } from "@/components/layout/PageShell";
import { WatchProgressProvider } from "@/components/providers/WatchProgressProvider";
import { HomePageContent } from "@/components/home/HomePageContent";

import {
  movies,
  extraMovies,
  getEssentials,
} from "@/data/movies";

export default function Home() {
  const essentials = getEssentials();

  return (
    <PageShell>
      <WatchProgressProvider
        validMovieIds={movies.map((movie) => movie.id)}
      >
        <HomePageContent
          essentials={essentials}
          totalMovies={movies.length}
          totalExtras={extraMovies.length}
        />
      </WatchProgressProvider>
    </PageShell>
  );
}
