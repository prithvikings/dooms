
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveTimeline } from "@/components/story/InteractiveTimeline";
import { StoryConnections } from "@/components/story/StoryConnections";
export const metadata: Metadata = {
  title: "The Story",
  description:
    "Understand the major Marvel storylines, universes and characters leading into Avengers: Doomsday.",
};

const storyThreads = [
  {
    number: "01",
    title: "The Avengers legacy",
    universe: "THE MCU",
    description:
      "From the original Avengers to the teams that emerged after the events of Endgame, Earth's heroes have changed. New leaders, old alliances and unresolved histories shape the current state of the MCU.",
    connection:
      "The history of the Avengers provides the foundation for the next major crossover.",
    accent: "from-[#24452a] to-[#17191f]",
  },
  {
    number: "02",
    title: "The multiverse",
    universe: "REALITIES BEYOND",
    description:
      "The MCU has moved beyond a single timeline. Alternate realities, branching timelines and encounters with different versions of familiar characters have expanded the scale of its storytelling.",
    connection:
      "The multiverse provides the framework for stories and characters from different realities to intersect.",
    accent: "from-[#27364d] to-[#17191f]",
  },
  {
    number: "03",
    title: "The Fantastic Four",
    universe: "ALTERNATE REALITY",
    description:
      "Marvel's First Family comes from a distinct reality introduced in The Fantastic Four: First Steps. Reed Richards and his team bring another important corner of Marvel's universe into the wider story.",
    connection:
      "Their presence introduces another major group into the Doomsday crossover.",
    accent: "from-[#35452b] to-[#17191f]",
  },
  {
    number: "04",
    title: "The X-Men legacy",
    universe: "FOX UNIVERSE",
    description:
      "The Fox X-Men films established a separate generation of mutant heroes. Characters such as Professor X, Magneto and Cyclops now form part of the wider crossover picture.",
    connection:
      "Their return connects the upcoming film with Marvel's earlier mutant film universe.",
    accent: "from-[#304537] to-[#17191f]",
  },
];

const confirmedFacts = [
  {
    label: "The central threat",
    value:
      "Marvel has identified Victor von Doom, played by Robert Downey Jr., as part of the film.",
  },
  {
    label: "The scale",
    value:
      "Marvel's official synopsis describes heroes from three distinct universes on a collision course.",
  },
  {
    label: "The creative team",
    value:
      "Anthony and Joe Russo direct the film, with Stephen McFeely credited as writer on Disney's film page.",
  },
];

export default function StoryPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 size-[550px] rounded-full bg-accent-green/15 blur-[130px]" />
          <div className="absolute -bottom-40 left-0 size-[400px] rounded-full bg-accent-green/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <Container className="py-24 sm:py-32">
          <div className="max-w-4xl">
            <Badge variant="neutral">
              THE STORY SO FAR
            </Badge>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
              UNDERSTANDING THE MULTIVERSE
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              One universe was
              <br />
              never going to be
              <span className="text-accent-green-light">
                {" "}enough.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-foreground-secondary sm:text-lg">
              The road to Avengers: Doomsday stretches
              across different teams, timelines and
              realities. Before following the watchlist,
              understand the bigger picture behind the
              stories coming together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#bigger-picture"
                className="inline-flex items-center justify-center rounded-lg bg-accent-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-green-light"
              >
                Explore the story
                <span className="ml-2" aria-hidden="true">
                  ↓
                </span>
              </a>

              <a
                href="/essentials"
                className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
              >
                View the essentials
              </a>
            </div>

            <p className="mt-8 text-xs text-foreground-muted">
              Spoiler-light overview · Officially confirmed
              details are separated from interpretation
            </p>
          </div>
        </Container>
      </section>

      {/* Bigger picture */}
      <section
        id="bigger-picture"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="THE BIGGER PICTURE"
                title="The world after Endgame."
                description="The Infinity Saga ended, but the Marvel story did not. New heroes emerged, old characters found new paths, and the boundaries between realities became increasingly important."
              />
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  CHAPTER ONE
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  A changing world
                </h3>

                <p className="mt-4 text-sm leading-7 text-foreground-secondary">
                  The events of Infinity War and Endgame
                  changed the lives of heroes across the
                  MCU. The original team is no longer the
                  same, and a new generation has stepped
                  into the spotlight.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  CHAPTER TWO
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  Reality is bigger than one universe
                </h3>

                <p className="mt-4 text-sm leading-7 text-foreground-secondary">
                  Stories involving Loki, Spider-Man,
                  Doctor Strange and Deadpool have
                  explored different versions of reality,
                  alternate timelines and the consequences
                  of crossing between them.
                </p>
              </div>

              <div className="rounded-2xl border border-accent-green/30 bg-gradient-to-br from-[#142116] to-background-secondary p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                  THE NEXT CHAPTER
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  The universes collide
                </h3>

                <p className="mt-4 text-sm leading-7 text-foreground-secondary">
                  Marvel&apos;s official premise for
                  Avengers: Doomsday describes heroes
                  from three distinct universes being
                  set on a deadly collision course against
                  an existential threat.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
<InteractiveTimeline />
<StoryConnections />
      {/* Story threads */}
      <section className="border-y border-border bg-background-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="FOUR IMPORTANT STORY THREADS"
            title="Different worlds. Connected stories."
            description="These are the major corners of Marvel storytelling that help explain the scale of the upcoming crossover."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {storyThreads.map((thread) => (
              <article
                key={thread.number}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
              >
                <div
                  className={`relative flex min-h-36 items-end overflow-hidden bg-gradient-to-br ${thread.accent} p-6`}
                >
                  <div className="absolute -right-8 -top-12 size-44 rounded-full border border-white/10" />
                  <div className="absolute -right-2 -top-6 size-32 rounded-full border border-white/10" />

                  <div className="relative flex w-full items-end justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.25em] text-accent-green">
                        {thread.universe}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {thread.title}
                      </h3>
                    </div>

                    <span className="text-4xl font-semibold text-white/15">
                      {thread.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-foreground-secondary">
                    {thread.description}
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                      WHY IT MATTERS
                    </p>

                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {thread.connection}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Doom */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 size-[450px] rounded-full bg-accent-green/10 blur-[130px]" />
        </div>

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-green">
                THE DOOM FACTOR
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                Meet Victor
                <span className="text-accent-green-light">
                  {" "}von Doom.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary">
                One of Marvel&apos;s most recognisable
                characters is stepping into the centre
                of the next Avengers story.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground-secondary">
                Robert Downey Jr. returns to the Marvel
                screen in a different role: Victor von Doom.
                This is not Tony Stark returning as Iron Man.
                Doom is a distinct character with his own
                identity and history in Marvel comics.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground-secondary">
                Marvel has revealed the broad premise of
                the threat, but the full details of Doom&apos;s
                plans and the film&apos;s story should not be
                treated as confirmed until officially
                revealed.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-accent-green/30 bg-gradient-to-br from-[#17271a] via-[#171b18] to-[#090a0d] p-8 sm:p-10">
                <div className="absolute -right-16 -top-16 size-64 rounded-full border border-accent-green/10" />
                <div className="absolute -right-4 -top-4 size-40 rounded-full border border-accent-green/10" />

                <div className="relative flex min-h-64 flex-col justify-end">
                  <p className="text-xs font-semibold tracking-[0.3em] text-accent-green">
                    MARVEL STUDIOS
                  </p>

                  <h3 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    DOOM
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-foreground-secondary">
                    VICTOR VON DOOM
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-accent-green/60 to-transparent" />

                  <p className="mt-5 text-xs leading-6 text-foreground-muted">
                    A new role. A different character.
                    An entirely different legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Confirmed facts */}
      <section className="border-y border-border bg-background-secondary py-20">
        <Container>
          <SectionHeading
            eyebrow="FACTS, NOT FAN THEORIES"
            title="What Marvel has actually confirmed."
            description="The guide will separate official information from interpretation and speculation."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {confirmedFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                  {fact.label}
                </p>

                <p className="mt-4 text-sm leading-7 text-foreground-secondary">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://movies.disney.com/avengers-doomsday"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex text-sm font-medium text-accent-green transition-colors hover:text-foreground"
          >
            View official Avengers: Doomsday details →
          </a>
        </Container>
      </section>


    </PageShell>
  );
}
