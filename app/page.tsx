
import { PageShell } from "@/components/layout/PageShell";
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
      <HomePageContent
        essentials={essentials}
        totalMovies={movies.length}
        totalExtras={extraMovies.length}
      />
    </PageShell>
  );
}
