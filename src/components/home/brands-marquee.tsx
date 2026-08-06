"use client";

import { partnerBrands } from "@/lib/data/partner-brands";

export function BrandsMarquee() {
  const durationSec = partnerBrands.length * 3;
  const loopBrands = [...partnerBrands, ...partnerBrands];

  return (
    <div className="relative overflow-hidden marquee-mask">
      <div
        className="animate-marquee flex w-max gap-10"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loopBrands.map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="flex h-14 w-28 shrink-0 items-center justify-center opacity-75 transition-opacity duration-200 hover:opacity-100"
            title={brand.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/brands/${brand.slug}.png`}
              alt={brand.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
