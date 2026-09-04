"use client";

import { useEffect, useRef } from "react";

const MIN_THUMB_HEIGHT = 32;
const TRACK_INSET = 0;

export function ScrollIndicator() {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const trackHeight = track.clientHeight;

      if (scrollable <= 0) {
        thumb.style.opacity = "0";
        return;
      }
      thumb.style.opacity = "1";

      const thumbHeight = Math.min(
        trackHeight,
        Math.max(trackHeight * (window.innerHeight / doc.scrollHeight), MIN_THUMB_HEIGHT)
      );
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      const maxThumbTop = trackHeight - thumbHeight;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${maxThumbTop * progress}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);

    const scrollToPointer = (clientY: number) => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const trackRect = track.getBoundingClientRect();
      const thumbHeight = thumb.getBoundingClientRect().height;
      const maxThumbTop = trackRect.height - thumbHeight;
      const y = clientY - trackRect.top - thumbHeight / 2;
      const clamped = Math.min(Math.max(y, 0), maxThumbTop);
      const progress = maxThumbTop > 0 ? clamped / maxThumbTop : 0;
      window.scrollTo({ top: progress * scrollable });
    };

    const onThumbPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      thumb.setPointerCapture(e.pointerId);
      thumb.style.backgroundColor = "rgb(255 255 255 / 95%)";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      scrollToPointer(e.clientY);
    };
    const onPointerUp = (e: PointerEvent) => {
      draggingRef.current = false;
      thumb.style.backgroundColor = "";
      try {
        thumb.releasePointerCapture(e.pointerId);
      } catch {
        // pointer already released
      }
    };
    const onTrackPointerDown = (e: PointerEvent) => {
      if (e.target === thumb) return;
      scrollToPointer(e.clientY);
    };

    thumb.addEventListener("pointerdown", onThumbPointerDown);
    track.addEventListener("pointerdown", onTrackPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver.disconnect();
      thumb.removeEventListener("pointerdown", onThumbPointerDown);
      track.removeEventListener("pointerdown", onTrackPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="fixed right-0 top-0 z-[60] hidden h-screen w-3 cursor-pointer sm:block"
      style={{ paddingTop: TRACK_INSET, paddingBottom: TRACK_INSET }}
    >
      <div
        ref={thumbRef}
        className="ml-auto w-[4px] cursor-grab touch-none bg-white/70 transition-colors duration-150 hover:bg-white/90 active:cursor-grabbing"
      />
    </div>
  );
}
