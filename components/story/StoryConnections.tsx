
import { getMovieById } from "@/data/movies";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const storyPaths = [
  {
    number: "01",
    eyebrow: "THE MCU · THE AVENGERS",
    title: "The Avengers legacy",
    description:
      "Follow the original team through its defining conflict and into the next generation of Avengers.",
    connection:
      "This path connects the original Avengers era to the teams and leadership emerging after Endgame.",
    accent: "from-[#24452a] to-[#17191f]",
    movies: [
      {
        id: "the-avengers",
        note: "The original team comes together. This is the foundation of the Avengers legacy.",
      },
      {
        id: "avengers-infinity-war",
        note: "The team faces its biggest threat and the consequences reshape the MCU.",
      },
      {
        id: "avengers-endgame",
        note: "The Infinity Saga reaches its conclusion and leaves the world changed.",
      },
      {
        id: "captain-america-brave-new-world",
        note: "Sam Wilson's role as Captain America develops the next chapter of the Avengers story.",
      },
      {
        id: "thunderbolts",
        note: "Introduces the team known as the New Avengers.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "TVA · ALTERNATE REALITIES",
    title: "The multiverse connection",
    description:
      "Understand branching timelines, alternate realities and the characters who have crossed between them.",
    connection:
      "These stories establish the multiverse concepts and cross-reality encounters relevant to the wider crossover.",
    accent: "from-[#27364d] to-[#17191f]",
    movies: [
      {
        id: "loki-season-1",
        note: "Introduces the TVA and explores what happens when timelines branch.",
      },
      {
        id: "loki-season-2",
        note: "Continues Loki's story and expands the consequences of the branching timelines.",
      },
      {
        id: "spider-man-no-way-home",
        note: "Brings characters from other realities into Peter Parker's world.",
      },
      {
        id: "doctor-strange-multiverse-of-madness",
        note: "Explores alternate universes and introduces the concept of incursions.",
      },
      {
        id: "deadpool-and-wolverine",
        note: "Connects Deadpool, the Fox mutant universe and the TVA.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "A NEW UNIVERSE · MARVEL'S FIRST FAMILY",
    title: "The Fantastic Four",
    description:
      "Meet Reed Richards, Sue Storm, Johnny Storm and Ben Grimm in their own reality.",
    connection:
      "The Fantastic Four: First Steps introduces this family and their distinct universe. It is an important introduction, not a complete crossover explanation.",
    accent: "from-[#35452b] to-[#17191f]",
    movies: [
      {
        id: "the-fantastic-four-first-steps",
        note: "Introduces Marvel's First Family and establishes the reality they come from.",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "FOX · MUTANT LEGACY",
    title: "The X-Men legacy",
    description:
      "Explore the original Fox mutant films and the later stories that revisit their characters and universe.",
    connection:
      "This path gives context to the returning mutant characters and the Fox universe's connection to later multiverse stories.",
    accent: "from-[#304537] to-[#17191f]",
    movies: [
      {
        id: "x-men",
        note: "Introduces Professor X, Magneto and the original Fox X-Men universe.",
      },
      {
        id: "x2-x-men-united",
        note: "Continues the original team's story and develops its central conflict.",
      },
      {
        id: "x-men-the-last-stand",
        note: "Completes the original trilogy's central story.",
      },
      {
        id: "x-men-days-of-future-past",
        note: "Connects different generations of mutants through a timeline-changing story.",
      },
      {
        id: "deadpool-and-wolverine",
        note: "Returns to the Fox mutant universe and brings its characters into a TVA-driven story.",
      },
    ],
  },
];

export function StoryConnections() {
  return (
    <section
      id="story-connections"
      className="border-y border-border bg-background-secondary py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="FOLLOW THE CONNECTIONS"
          title="Four paths into the bigger story."
          description="Explore the key teams, universes and storylines behind the upcoming crossover. Each path is curated for context, not presented as a mandatory watch order."
        />

        <div className="mt-12 space-y-8">
          {storyPaths.map((path) => (
            <article
              key={path.number}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${path.accent} p-6 sm:p-8`}
              >
                <div className="absolute -right-10 -top-16 size-48 rounded-full border border-white/10" />
                <div className="absolute -right-2 -top-8 size-32 rounded-full border border-white/10" />

                <div className="relative">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-accent-green">
                    {path.eyebrow}
                  </p>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {path.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                        {path.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-4xl font-semibold text-white/15 sm:text-5xl">
                      {path.number}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <div className="mb-6 border-l-2 border-accent-green/60 pl-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                    THE CONNECTION
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-foreground-secondary">
                    {path.connection}
                  </p>
                </div>

                <div className="space-y-3">
                  {path.movies.map((step, index) => {
                    const movie = getMovieById(step.id);

                    if (!movie) return null;

                    return (
                      <a
                        key={step.id}
                        href={`/story#timeline-${movie.id}`}
                        className="group flex flex-col gap-3 rounded-xl border border-border bg-background-secondary p-4 transition-colors hover:border-accent-green/40 sm:flex-row sm:items-center sm:gap-5"
                      >
                        <div className="flex shrink-0 items-center gap-3 sm:w-12 sm:flex-col sm:items-start sm:gap-1">
                          <span className="text-xs font-semibold tabular-nums text-accent-green">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] text-foreground-muted">
                            {movie.year}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent-green">
                            {movie.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-foreground-secondary">
                            {step.note}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end">
                          <Badge variant={movie.importance}>
                            {movie.importance}
                          </Badge>
                          <span className="text-xs text-foreground-muted">
                            {movie.universe}
                          </span>
                        </div>

                        <span
                          className="hidden text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-green sm:block"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-foreground-muted">
          These paths are editorial recommendations based on the guide&apos;s
          selected titles. They do not imply that every listed character
          or storyline has a confirmed role in Avengers: Doomsday.
        </p>
      </Container>
    </section>
  );
}
