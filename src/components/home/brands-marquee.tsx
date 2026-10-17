"use client";

import Image from "next/image";
import { partnerBrands } from "@/lib/data/partner-brands";

// Every logo is scaled to fit this box (same as the old fixed h-8 w-32 +
// object-contain), but each item's own wrapper is sized to its *rendered*
// footprint instead of the full box — otherwise a logo narrower than 128px
// (most of them, once height-capped at 32px) sits centered with empty side
// padding baked into its own slot, and the flex `gap` reads as a different
// visual distance from one pair of logos to the next.
const MAX_WIDTH = 128;
const MAX_HEIGHT = 32;

export function BrandsMarquee() {
  const durationSec = partnerBrands.length * 3;
  const loopBrands = [...partnerBrands, ...partnerBrands];

  return (
    <div className="relative overflow-hidden marquee-mask">
      <div
        className="animate-marquee flex w-max items-center gap-7"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loopBrands.map((brand, i) => {
          const maxHeight = brand.displayHeight ?? MAX_HEIGHT;
          const scale = Math.min(MAX_WIDTH / brand.width, maxHeight / brand.height);
          const renderWidth = Math.round(brand.width * scale);
          const renderHeight = Math.round(brand.height * scale);
          return (
            <div
              key={`${brand.slug}-${i}`}
              className="relative shrink-0 opacity-75 transition-opacity duration-200 hover:opacity-100"
              style={{ width: renderWidth, height: renderHeight }}
              title={brand.name}
            >
              <Image
                src={`/images/brands/${brand.slug}.png`}
                alt={brand.name}
                width={renderWidth}
                height={renderHeight}
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
