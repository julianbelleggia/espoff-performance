"use client";

import { useEffect, useState } from "react";
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.src}
            alt={`Interior — ${shot.carName}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <span className="absolute bottom-6 left-6 font-hero text-sm uppercase tracking-wide text-white sm:bottom-10 sm:left-10">
            {shot.carName}
          </span>
        </div>
      ))}
    </section>
  );
}
