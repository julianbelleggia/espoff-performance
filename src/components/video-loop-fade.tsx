"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

const FADE_SECONDS = 0.9;

export function VideoLoopFade({
  src,
  poster,
  className,
  style,
  loopOutSeconds,
}: {
  src: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
  /** Restart the loop this many seconds in, instead of waiting for the clip's natural end. */
  loopOutSeconds?: number;
}) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  // Read via ref inside the rAF loop below so changing this prop doesn't
  // force the whole effect (video listeners, playback state) to restart.
  const loopOutRef = useRef(loopOutSeconds);
  useEffect(() => {
    loopOutRef.current = loopOutSeconds;
  }, [loopOutSeconds]);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    [a, b].forEach((v) => {
      v.loop = false;
      v.muted = true;
      v.playsInline = true;
    });

    let active = a;
    let idle = b;
    a.style.opacity = "1";
    b.style.opacity = "0";

    let offscreen = false;

    const start = () => {
      if (!offscreen) active.play().catch(() => {});
    };
    start();
    a.addEventListener("canplay", start);
    document.addEventListener("pointerdown", start, { once: true });

    let swapping = false;
    let swapTimeout: ReturnType<typeof setTimeout>;
    const swap = () => {
      if (swapping || offscreen) return;
      swapping = true;
      const next = idle;
      const cur = active;
      next.currentTime = 0;
      next.play().catch(() => {});
      next.style.transition = `opacity ${FADE_SECONDS}s linear`;
      cur.style.transition = `opacity ${FADE_SECONDS}s linear`;
      next.style.opacity = "1";
      cur.style.opacity = "0";
      active = next;
      idle = cur;
      swapTimeout = setTimeout(() => {
        cur.pause();
        cur.currentTime = 0;
        swapping = false;
      }, FADE_SECONDS * 1000);
    };

    let raf: number;
    const tick = () => {
      if (!offscreen) {
        const v = active;
        const d = loopOutRef.current ?? v.duration;
        if (d && d - v.currentTime <= FADE_SECONDS) swap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pausa la reproducción cuando el video sale del viewport (scroll) para
    // no seguir decodificando frames que no se ven.
    const observer = new IntersectionObserver(
      ([entry]) => {
        offscreen = !entry.isIntersecting;
        if (offscreen) {
          active.pause();
        } else {
          active.play().catch(() => {});
        }
      },
      { threshold: 0 }
    );
    observer.observe(a);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(swapTimeout);
      a.removeEventListener("canplay", start);
      document.removeEventListener("pointerdown", start);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <video
        ref={videoARef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        className={className}
        style={style}
      />
      <video
        ref={videoBRef}
        src={src}
        muted
        playsInline
        className={cn(className, "opacity-0")}
        style={style}
      />
    </>
  );
}
