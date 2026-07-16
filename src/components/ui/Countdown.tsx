"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

type CountdownOptions = {
  showSeconds?: boolean;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    expired: diff <= 0,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function useCountdown(targetIso: string, options: CountdownOptions = {}) {
  const { showSeconds = true } = options;
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(targetIso);
    const update = () => setTime(getTimeLeft(target));
    update();

    const id = setInterval(update, showSeconds ? 1000 : 60_000);
    return () => clearInterval(id);
  }, [showSeconds, targetIso]);

  return time;
}

export function CountdownChips({
  target,
  showSeconds = true,
}: {
  target: string;
  showSeconds?: boolean;
}) {
  const time = useCountdown(target, { showSeconds });
  if (!time || time.expired) return null;

  const units: Array<[number, string]> = [
    [time.days, "dias"],
    [time.hours, "hs"],
    [time.minutes, "min"],
  ];

  if (showSeconds) units.push([time.seconds, "seg"]);

  return (
    <div className="countdown-row" role="timer" aria-live="off">
      {units.map(([value, label]) => (
        <div className="countdown-chip" key={label}>
          <strong>{pad(value)}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function CountdownInline({
  target,
  showSeconds = false,
}: {
  target: string;
  showSeconds?: boolean;
}) {
  const time = useCountdown(target, { showSeconds });
  if (!time || time.expired) return null;

  return (
    <span className="countdown-inline" role="timer" aria-live="off">
      {time.days}d {pad(time.hours)}h {pad(time.minutes)}m
      {showSeconds ? ` ${pad(time.seconds)}s` : ""}
    </span>
  );
}
