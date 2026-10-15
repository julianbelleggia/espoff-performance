"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { interiorShots } from "@/lib/data/interior-shots";

const SLIDE_MS = 4000;

export function InteriorCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % interiorShots.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-background">
      {interiorShots.map((shot, i) => (
        <div
          key={shot.slug}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={shot.src}
            alt={`Interior — ${shot.carName}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 flex flex-col gap-1 sm:bottom-10 sm:left-10">
            {/* .toUpperCase() here (and literal caps below), not
                text-transform: uppercase — PT Serif Caption mis-renders the
                case-folded R and N; real capitals render correctly. */}
            <span className="font-hero text-sm tracking-wide text-white">
              {shot.carName.toUpperCase()}
            </span>
            <span className="font-hero text-xs tracking-wide text-white/60">
              TU INTERIOR TAMBIÉN SUMA.
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
