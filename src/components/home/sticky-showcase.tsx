"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

const HEADLINE = "El detalle hace la diferencia.";
// Letters over which each character fades in — a soft, overlapping wave
// instead of a hard per-letter cutoff.
const BAND = 8;

export function StickyShowcase() {
  const { ref: imgRef, style: imgStyle } = useReveal<HTMLDivElement>({
    y: 0,
    scale: 1.04,
    duration: 900,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalLetters = letterRefs.current.length;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.min(Math.max(-rect.top / scrollable, 0), 1)
          : 1;
      const cursor = progress * (totalLetters + BAND);

      letterRefs.current.forEach((el, i) => {
        if (!el) return;
        const local = Math.min(Math.max(cursor - i, 0), BAND) / BAND;
        el.style.opacity = String(local);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  let letterIndex = -1;
  const words = HEADLINE.split(" ");

  return (
    <section ref={sectionRef} className="relative h-[170vh]">
      {/* The sticky element itself never carries a transform — overflow-hidden
          on a transformed element doesn't clip its own box, only its
          children's, so the useReveal scale lives one level deeper. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div ref={imgRef} style={imgStyle} className="absolute inset-0">
          <Image
            src="/images/gallery/showcase-m135i.jpg"
            alt="BMW M135i xDrive"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.35) 70%, rgba(0,0,0,.75) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-16 sm:px-10 sm:pb-16">
            <h2 className="m-0 font-hero text-lg leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              {words.map((word, wi) => (
                <span key={wi}>
                  <span className="inline-block whitespace-nowrap">
                    {word.split("").map((ch, li) => {
                      letterIndex += 1;
                      const i = letterIndex;
                      return (
                        <span
                          key={li}
                          ref={(el) => {
                            letterRefs.current[i] = el;
                          }}
                          className="inline-block"
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                  {wi < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
