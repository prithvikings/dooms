
"use client";

import { useEffect, useState } from "react";

type CountdownSnapshot = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isReleased: boolean;
};

type CountdownTimerProps = {
  releaseDate: string;
  regionName: string;
};

const TIME_UNITS = [
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
  { key: "seconds", label: "SECONDS" },
] as const;

function calculateCountdown(targetTimestamp: number): CountdownSnapshot {
  const remainingMilliseconds = targetTimestamp - Date.now();

  if (remainingMilliseconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isReleased: true,
    };
  }

  const totalSeconds = Math.floor(remainingMilliseconds / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isReleased: false,
  };
}

function padNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function CountdownTimer({
  releaseDate,
  regionName,
}: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<CountdownSnapshot | null>(null);
  const [hasInvalidDate, setHasInvalidDate] = useState(false);


  useEffect(() => {
    const targetTimestamp = new Date(releaseDate).getTime();
    let cleanupInterval: number | undefined;

    const frameId = window.requestAnimationFrame(() => {
      if (!Number.isFinite(targetTimestamp)) {
        setHasInvalidDate(true);
        setCountdown(null);
        return;
      }

      setHasInvalidDate(false);

      const updateCountdown = () => {
        setCountdown(calculateCountdown(targetTimestamp));
      };

      updateCountdown();

      cleanupInterval = window.setInterval(updateCountdown, 1000);
    });

    return () => {
      window.cancelAnimationFrame(frameId);

      if (cleanupInterval !== undefined) {
        window.clearInterval(cleanupInterval);
      }
    };
  }, [releaseDate]);


  return (
    <section
      id="countdown-timer"
      aria-label={`Countdown to Avengers: Doomsday for ${regionName}`}
      className="relative isolate overflow-hidden rounded-3xl border border-doom-red/25 bg-[#0d0e12] px-5 py-9 shadow-[0_20px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12"
    >
      {/* Cinematic background details */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-doom-red/15 blur-[100px]" />
        <div className="absolute -bottom-32 -right-20 size-72 rounded-full bg-doom-gold/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49.5%,rgba(255,255,255,0.018)_50%,transparent_50.5%)] bg-[length:100%_6px] opacity-30" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-doom-red/30 bg-doom-red/10 px-3 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-doom-red-light opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-doom-red-light" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-doom-red-light">
              {countdown?.isReleased ? "THE DAY HAS ARRIVED" : "TIME UNTIL DOOMSDAY"}
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The clock is ticking.
          </h2>

          <p className="mt-2 text-sm text-foreground-muted">
            Counting down to the release in {regionName}
          </p>
        </div>

        {/* Countdown state */}
        <div className="mt-9">
          {hasInvalidDate ? (
            <div
              role="alert"
              className="rounded-2xl border border-doom-red/30 bg-doom-red/5 px-5 py-8 text-center"
            >
              <p className="text-sm font-medium text-red-300">
                The release countdown is temporarily unavailable.
              </p>
            </div>
          ) : !countdown ? (
            <div
              aria-hidden="true"
              className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
              {TIME_UNITS.map((unit) => (
                <div
                  key={unit.key}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-6 text-center"
                >
                  <div className="font-mono text-4xl font-semibold tabular-nums text-foreground/40 sm:text-5xl">
                    --
                  </div>
                  <p className="mt-3 text-[10px] font-semibold tracking-[0.25em] text-foreground-muted">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>
          ) : countdown.isReleased ? (
            <div className="rounded-2xl border border-doom-gold/30 bg-doom-gold/5 px-5 py-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-doom-gold">
                The wait is over
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                DOOMSDAY IS HERE.
              </p>

              <p className="mt-4 text-sm text-foreground-secondary">
                Avengers: Doomsday has reached its scheduled release date in{" "}
                {regionName}.
              </p>
            </div>
          ) : (
            <div
              role="timer"
              aria-label={`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes and ${countdown.seconds} seconds remaining`}
              aria-live="off"
              className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
              {TIME_UNITS.map((unit) => {
                const value = countdown[unit.key];

                return (
                  <div
                    key={unit.key}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-6 text-center transition-colors duration-300 hover:border-doom-red/40 hover:bg-doom-red/[0.06] sm:py-8"
                  >
                    <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-doom-red/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="font-mono text-5xl font-semibold leading-none tracking-tight tabular-nums text-foreground sm:text-6xl lg:text-7xl">
                      {unit.key === "days" ? value : padNumber(value)}
                    </div>

                    <p className="mt-4 text-[10px] font-bold tracking-[0.28em] text-foreground-muted sm:text-xs">
                      {unit.label}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer detail */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-doom-red/40" />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground-muted">
            The multiverse awaits
          </p>
          <span className="h-px w-8 bg-doom-red/40" />
        </div>
      </div>
    </section>
  );
}
