"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";

const values = [
  {
    number: "01",
    title: "Marcas originales",
    description:
      "Trabajamos directo con las marcas líderes del mundo del performance: Akrapovič, Milltek, HKS, Brabus y muchas más. Nada de réplicas.",
    delay: 60,
  },
  {
    number: "02",
    title: "Asesoramiento real",
    description:
      "Te ayudamos a elegir la pieza correcta para tu modelo, sin vueltas: compatibilidad, terminación e instalación.",
    delay: 120,
  },
  {
    number: "03",
    title: "Pasión por el auto",
    description:
      "Somos un equipo de entusiastas del tuning. Cada pieza que vendemos es una que nos gustaría tener en nuestro propio auto.",
    delay: 180,
  },
];

function ValueRow({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  const { ref, style } = useReveal<HTMLDivElement>({ delay });

  return (
    <div ref={ref} style={style} className="grid grid-cols-[56px_1fr] gap-5">
      <span className="pt-0.5 font-heading text-[15px] font-light text-white/30">
        {number}
      </span>
      <div>
        <h3 className="font-hero text-[17px] font-medium uppercase tracking-[0.06em] text-white">
          {title}
        </h3>
        <p className="mt-2.5 max-w-[400px] text-[14.5px] leading-[1.65] text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
}

export function StickyShowcase() {
  const { ref: imgRef, style: imgStyle } = useReveal<HTMLDivElement>({
    y: 0,
    scale: 1.04,
    duration: 900,
  });
  const { ref: headRef, style: headStyle } = useReveal<HTMLDivElement>({});
  const { ref: ctaRef, style: ctaStyle } = useReveal<HTMLDivElement>({
    delay: 240,
  });

  return (
    <section className="relative">
      <div
        ref={imgRef}
        style={imgStyle}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery/showcase-m135i.jpg"
          alt="BMW M135i xDrive"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.35) 70%, rgba(0,0,0,.75) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
          <div className="flex max-w-[640px] flex-col justify-center gap-10 sm:gap-14">
            <div ref={headRef} style={headStyle}>
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-8 bg-primary" />
                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary">
                  Sobre ESPOFF
                </span>
              </div>
              <h2 className="font-hero text-3xl font-light uppercase leading-[1.08] tracking-wide text-white sm:text-[42px]">
                Cada pieza,
                <br />
                <span className="font-semibold">pensada para tu auto</span>
              </h2>
            </div>

            {values.map((value) => (
              <ValueRow
                key={value.number}
                number={value.number}
                title={value.title}
                description={value.description}
                delay={value.delay}
              />
            ))}

            <div ref={ctaRef} style={ctaStyle} className="pl-[76px]">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2.5 border-b border-white/25 pb-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
              >
                Ver catálogo <span className="text-primary">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
