"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent?: boolean;
};

const STATS: Stat[] = [
  { value: 40, prefix: "+", label: "autos preparados", accent: true },
  { value: 22, prefix: "+", label: "marcas trabajadas" },
  { value: 100, suffix: "%", label: "a medida" },
];

const ROW_STAGGER_MS = 160;
const COUNT_DURATION_MS = 1700;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function StatsBlock() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => STATS.map(() => 0));

  // Trigger once when the block enters the viewport — IntersectionObserver
  // instead of a scroll listener so this stays cheap on low-end mobiles.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Count-up runs independently per row so each one can carry its own
  // stagger delay without re-triggering the others.
  useEffect(() => {
    if (!started) return;

    const rafIds: number[] = [];

    STATS.forEach((stat, i) => {
      const delayMs = i * ROW_STAGGER_MS;
      let startTime: number | null = null;

      const tick = (now: number) => {
        if (startTime === null) startTime = now + delayMs;
        const elapsed = now - startTime;
        if (elapsed < 0) {
          rafIds[i] = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min(elapsed / COUNT_DURATION_MS, 1);
        const value = Math.round(stat.value * easeOutCubic(progress));

        setCounts((prev) => {
          if (prev[i] === value) return prev;
          const next = [...prev];
          next[i] = value;
          return next;
        });

        if (progress < 1) rafIds[i] = requestAnimationFrame(tick);
      };

      rafIds[i] = requestAnimationFrame(tick);
    });

    return () => rafIds.forEach((id) => cancelAnimationFrame(id));
  }, [started]);

  return (
    <div
      ref={rootRef}
      className="absolute inset-x-0 bottom-0 flex flex-col p-6 sm:max-w-[480px] sm:p-10 lg:max-w-[560px] lg:p-[88px]"
    >
      {STATS.map((stat, i) => {
        const delayMs = i * ROW_STAGGER_MS;
        return (
          <div key={stat.label}>
            <div className="flex items-end justify-between gap-4 pt-3 pb-3 sm:pt-4 sm:pb-4">
              {/* Overshoot easing on the number only (vs. the label's plain
                  ease-out) is the "despegue" micro-interaction: both fade/slide
                  in together but the number keeps moving a beat longer. */}
              <span
                className={`font-hero text-[clamp(2rem,7vw,3.5rem)] leading-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  stat.accent ? "text-primary" : "text-white"
                } ${started ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${delayMs}ms` }}
              >
                {stat.prefix}
                {counts[i]}
                {stat.suffix}
              </span>
              <span
                className={`pb-1 text-right text-[11px] uppercase leading-tight tracking-[0.1em] text-white/70 transition-all duration-500 ease-out sm:text-xs ${
                  started ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: `${delayMs + 120}ms` }}
              >
                {stat.label}
              </span>
            </div>
            <div
              className={`h-px bg-white/25 transition-[width] duration-700 ease-out ${
                started ? "w-full" : "w-0"
              }`}
              style={{ transitionDelay: `${delayMs + 60}ms` }}
            />
          </div>
        );
      })}
    </div>
  );
}
