
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { CountdownPageContent } from "./CountdownPageContent";

export const metadata: Metadata = {
  title: "Countdown",
  description:
    "Count down to the release of Avengers: Doomsday. Choose your region and follow the final countdown.",
};

export default function CountdownPage() {
  return (
    <PageShell>
      <CountdownPageContent />
    </PageShell>
  );
}
