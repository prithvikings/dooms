
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { EssentialsPageContent } from "./EssentialsPageContent";
import { getEssentials } from "@/data/movies";

export const metadata: Metadata = {
  title: "Essentials",
  description:
    "Explore the 16 essential Marvel movies and series to watch before Avengers: Doomsday.",
};

export default function EssentialsPage() {
  const essentials = getEssentials();

  return (
    <PageShell>
      <EssentialsPageContent movies={essentials} />
    </PageShell>
  );
}
