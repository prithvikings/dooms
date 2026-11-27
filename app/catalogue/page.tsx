
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { movies } from "@/data/movies";

import { CataloguePageContent } from "./CataloguePageContent";

export const metadata: Metadata = {
  title: "Full Catalogue",
  description:
    "Explore the complete Marvel watch catalogue for Avengers: Doomsday. Search, filter and sort movies, series and specials.",
};

export default function CataloguePage() {
  return (
    <PageShell>
      <CataloguePageContent movies={movies} />
    </PageShell>
  );
}
