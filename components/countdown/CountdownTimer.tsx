"use client";

import { useEffect, useState } from "react";

type CountdownSnapshot = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownTimerProps = {
  releaseDate: string;
  regionName: string;
};

function calculateCountdown(targetTimestamp: number): CountdownSnapshot {
  const remaining = Math.max(0, Math.floor((targetTimestamp - Date.now()) / 1000));

  return {
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function CountdownTimer({ releaseDate, regionName }: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<CountdownSnapshot | null>(null);
  const [hasReleased, setHasReleased] = useState(false);

  useEffect(() => {
    const target = new Date(releaseDate).getTime();

    const update = () => {
      const released = target <= Date.now();
      setHasReleased(released);
      setCountdown(calculateCountdown(target));
    };

    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [releaseDate]);

  if (!countdown) {
    return (
      <div className="mx-auto grid max-w-4xl grid-cols-4 gap-2 sm:gap-6" aria-hidden="true">
        {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((label) => (
          <div key={label} className="border-t border-white/20 pt-4">
            <p className="font-mono text-4xl font-semibold tabular-nums text-white/50 sm:text-6xl lg:text-8xl">--</p>
            <p className="mt-2 text-[10px] font-semibold tracking-widest text-white/65 sm:text-xs">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (hasReleased) {
    return (
      <div className="py-8 text-center">
        <p className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">DOOMSDAY IS HERE.</p>
        <p className="mt-3 text-sm text-white/75">The scheduled release date in {regionName} has arrived.</p>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: String(countdown.days) },
    { label: "HOURS", value: pad(countdown.hours) },
    { label: "MINUTES", value: pad(countdown.minutes) },
    { label: "SECONDS", value: pad(countdown.seconds) },
  ];

  return (
    <div
      role="timer"
      aria-label={`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes and ${countdown.seconds} seconds remaining`}
      aria-live="off"
      className="mx-auto grid max-w-4xl grid-cols-4 gap-2 sm:gap-6"
    >
      {units.map((unit) => (
        <div key={unit.label} className="border-t border-white/20 pt-4 sm:pt-5">
          <p className="font-mono text-[clamp(2.2rem,8vw,6.8rem)] font-semibold leading-none tracking-[-0.06em] tabular-nums text-white [text-shadow:0_3px_22px_rgba(0,0,0,0.65)]">
            {unit.value}
          </p>
          <p className="mt-3 text-[9px] font-semibold tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.24em]">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
