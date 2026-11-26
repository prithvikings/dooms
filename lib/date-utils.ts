export type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getTimeRemaining(
  targetDate: string,
  currentTime: number = Date.now()
): TimeRemaining {
  const difference = Math.max(
    0,
    new Date(targetDate).getTime() - currentTime
  );

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
