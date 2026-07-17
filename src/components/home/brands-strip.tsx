import { partnerBrands } from "@/lib/data/partner-brands";

export function BrandsStrip() {
  const durationSec = partnerBrands.length * 3;
  const loopBrands = [...partnerBrands, ...partnerBrands];

  return (
    <section className="border-y border-border/50 bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Marcas con las que trabajamos
        </p>

        <div className="group relative overflow-hidden marquee-mask">
          <div
            className="animate-marquee flex w-max gap-12 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${durationSec}s` }}
          >
            {loopBrands.map((brand, i) => (
              <div
                key={`${brand.slug}-${i}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-white/95 p-4 opacity-80 transition-opacity duration-200 hover:opacity-100"
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
      </div>
    </section>
  );
}
