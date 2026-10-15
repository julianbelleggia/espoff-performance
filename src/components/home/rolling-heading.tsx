"use client";

import { useEffect, useState } from "react";

// Written in literal caps rather than styled with text-transform: uppercase —
// PT Serif Caption mis-renders the case-folded R and N (they overshoot the
// cap line) when the browser does the uppercasing; typed capitals render
// correctly.
const WORDS = ["ESTÉTICA", "CALIDAD", "RENDIMIENTO"];
const HOLD_MS = 1800;
const SLIDE_MS = 800;
const INTRO_MS = 1500;
const REWIND_MS = SLIDE_MS * Math.max(1, WORDS.length - 1) * 0.55;

export function RollingHeading() {
  const [index, setIndex] = useState(0);
  const [rewinding, setRewinding] = useState(false);

  useEffect(() => {
    let current = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const step = () => {
      const next = (current + 1) % WORDS.length;
      const willRewind = next === 0;
      current = next;
      setIndex(next);
      setRewinding(willRewind);
      timeout = setTimeout(step, (willRewind ? REWIND_MS : SLIDE_MS) + HOLD_MS);
    };

    timeout = setTimeout(step, INTRO_MS + HOLD_MS);
    return () => clearTimeout(timeout);
  }, []);

  const transition = `transform ${rewinding ? REWIND_MS : SLIDE_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`;

  return (
    <h1 className="m-0 w-full font-hero text-[40px] leading-[1.02] tracking-[-0.04em] text-white sm:text-[80px] md:text-[80px] lg:text-[80px]">
      <span className="animate-word-in-left block h-[1.02em] overflow-hidden">
        <span
          className="block"
          style={{ transform: `translateY(-${index * 1.02}em)`, transition }}
        >
          {WORDS.map((word, i) => (
            <span key={word} className="block h-[1.02em] whitespace-nowrap">
              {word}
              {i === WORDS.length - 1 && (
                <span className="animate-blink">.</span>
              )}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
