"use client";

import { useEffect, useState } from "react";

const LINE1 = "Diseñado";
const LINE2 = "para el rendimiento";
const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 2200;
const EMPTY_MS = 500;

export function TypewriterHeading() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const total = LINE1.length + LINE2.length;
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (count < total) {
        timeout = setTimeout(() => setCount((c) => c + 1), TYPE_MS);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
      }
    } else {
      if (count > 0) {
        timeout = setTimeout(() => setCount((c) => c - 1), DELETE_MS);
      } else {
        timeout = setTimeout(() => setPhase("typing"), EMPTY_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [count, phase]);

  const total = LINE1.length + LINE2.length;
  const line1Length = Math.min(count, LINE1.length);
  const line2Length = Math.max(0, count - LINE1.length);
  const line1Text = LINE1.slice(0, line1Length);
  const line2Text = LINE2.slice(0, line2Length);
  const showCursorLine2 = phase === "typing" && count === total;

  return (
    <h1 className="min-h-[2.2em] font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-white/65 sm:text-6xl md:text-7xl">
      {line1Text}
      <br />
      <span>
        {line2Text}
        {showCursorLine2 && (
          <span className="animate-blink text-foreground">.</span>
        )}
      </span>
    </h1>
  );
}
