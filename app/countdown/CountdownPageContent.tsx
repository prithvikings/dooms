
"use client";

import { useEffect, useState } from "react";

import { RELEASE_DATES } from "@/data/config/release-dates";
import {
  readReleaseRegion,
  saveReleaseRegion,
} from "@/lib/countdown-storage";

import { CountdownTimer } from "@/components/countdown/CountdownTimer";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatReleaseDate(releaseDate: string, timezone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(releaseDate));
}

function formatReleaseTime(releaseDate: string, timezone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(releaseDate));
}

export function CountdownPageContent() {
  const [selectedRegionId, setSelectedRegionId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setSelectedRegionId(readReleaseRegion());
      setIsLoaded(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const selectedRegion = RELEASE_DATES.find(
    (region) => region.id === selectedRegionId
  );

  function handleRegionChange(regionId: string) {
    setSelectedRegionId(regionId);

    const saved = saveReleaseRegion(regionId);
    setSaveError(!saved);
  }

  return (
    <>
      {/* Hero and cinematic countdown */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-doom-red/20 blur-[140px]" />
          <div className="absolute -bottom-40 left-0 size-[350px] rounded-full bg-doom-gold/5 blur-[120px]" />
        </div>

        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="neutral">THE FINAL COUNTDOWN</Badge>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-doom-gold">
              THE MULTIVERSE WILL NEVER BE THE SAME
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              DOOMSDAY
              <span className="mt-2 block text-doom-red-light">
                IS COMING.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-foreground-secondary sm:text-lg">
              One date. One collision of worlds. Get ready for the next
              chapter of the Marvel Cinematic Universe.
            </p>
          </div>

          {isLoaded && selectedRegion && (
            <div className="mx-auto mt-16 max-w-5xl">
              <CountdownTimer
                releaseDate={selectedRegion.releaseDate}
                regionName={selectedRegion.name}
              />
            </div>
          )}
        </Container>
      </section>

      {/* Release region selection */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="YOUR RELEASE DATE"
            title="Choose your region"
            description="Avengers: Doomsday has different listed release dates for different regions. Select yours to see the countdown in the correct local timezone."
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {RELEASE_DATES.map((region) => {
              const active = selectedRegionId === region.id;

              return (
                <button
                  key={region.id}
                  type="button"
                  disabled={!isLoaded}
                  aria-pressed={active}
                  onClick={() => handleRegionChange(region.id)}
                  className={[
                    "rounded-2xl border p-6 text-left transition-all duration-300",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    active
                      ? "border-doom-gold/70 bg-doom-gold/5 shadow-[0_0_35px_rgba(196,154,88,0.08)]"
                      : "border-border bg-surface hover:border-border-strong",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-base font-semibold text-foreground">
                      {region.name}
                    </span>

                    <span className="text-xs font-semibold tracking-wider text-foreground-muted">
                      {region.countryCode}
                    </span>
                  </div>

                  <p className="mt-5 text-sm text-foreground-secondary">
                    {formatReleaseDate(region.releaseDate, region.timezone)}
                  </p>

                  <p className="mt-2 text-lg font-semibold text-doom-gold">
                    {formatReleaseTime(region.releaseDate, region.timezone)}
                  </p>

                  <p className="mt-2 text-xs text-foreground-muted">
                    {region.timezone}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <span
                      className={[
                        "text-xs font-semibold",
                        active ? "text-doom-gold" : "text-foreground-muted",
                      ].join(" ")}
                    >
                      {active ? "SELECTED ✓" : "SELECT REGION →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {saveError && (
            <p
              role="status"
              className="mx-auto mt-4 max-w-3xl text-center text-xs text-red-300"
            >
              Your selection is active, but could not be saved on this device.
            </p>
          )}

          {/* Selected region summary */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background-secondary p-6 text-center sm:p-9">
            {!isLoaded || !selectedRegion ? (
              <p className="text-sm text-foreground-muted">
                Loading your release region...
              </p>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground-muted">
                  YOUR COUNTDOWN IS SET FOR
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  {selectedRegion.name}
                </h2>

                <p className="mt-3 text-sm text-foreground-secondary">
                  {formatReleaseDate(
                    selectedRegion.releaseDate,
                    selectedRegion.timezone
                  )}
                </p>

                <p className="mt-2 text-sm font-medium text-doom-gold">
                  {formatReleaseTime(
                    selectedRegion.releaseDate,
                    selectedRegion.timezone
                  )}
                </p>

                <p className="mt-6 text-xs text-foreground-muted">
                  Your region preference is saved automatically on this device.
                </p>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
