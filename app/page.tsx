
import { PageShell } from "@/components/layout/PageShell";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <PageShell>
      <section
        id="guide"
        className="flex min-h-[65vh] items-center py-20 sm:py-28"
      >
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Badge variant="neutral">
              THE MARVEL WATCH GUIDE
            </Badge>

            <SectionHeading
              align="center"
              eyebrow="THE ROAD TO DOOMSDAY"
              title="Your journey starts here."
              description="A curated collection of essential stories, multiverse connections and Marvel moments worth watching before Avengers: Doomsday."
            />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
              More coming soon
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
