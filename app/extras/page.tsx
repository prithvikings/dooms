
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import {
  extraCollections,
  getExtraMoviesByIds,
} from "@/data/movies";

import { ExtrasPageContent } from "./ExtrasPageContent";

export const metadata: Metadata = {
  title: "Extras",
  description:
    "Explore additional Spider-Man, Sony, Fox X-Men and legacy Marvel movies connected to the wider multiverse.",
};

export default function ExtrasPage() {
  const collections = extraCollections.map((collection) => ({
    ...collection,
    movies: getExtraMoviesByIds(collection.movieIds),
  }));

  return (
    <PageShell>
      <ExtrasPageContent collections={collections} />
    </PageShell>
  );
}
