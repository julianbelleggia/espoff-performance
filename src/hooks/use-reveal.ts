"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealOptions = {
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  y = 32,
  scale = 1,
  delay = 0,
  duration = 800,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed
      ? "translateY(0) scale(1)"
      : `translateY(${y}px) scale(${scale})`,
    transition: `opacity ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
  };

  return { ref, style };
}
