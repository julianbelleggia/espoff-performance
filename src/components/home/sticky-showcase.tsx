"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

export function StickyShowcase() {
  const { ref: imgRef, style: imgStyle } = useReveal<HTMLDivElement>({
    y: 0,
    scale: 1.04,
    duration: 900,
  });

  return (
    <section className="relative">
      <div
        ref={imgRef}
        style={imgStyle}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
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
      </div>
    </section>
  );
}
