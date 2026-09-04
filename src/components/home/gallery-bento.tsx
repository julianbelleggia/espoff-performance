"use client";

import Link from "next/link";
import { socials } from "@/lib/data/socials";
import { useReveal } from "@/hooks/use-reveal";

const instagramHref =
  socials.find((s) => s.name === "Instagram")?.href ?? "#";

const galleryItems = [
  {
    src: "/images/gallery/g-m340i.jpg",
    alt: "BMW M340i",
    className: "col-start-1 row-start-1",
  },
  {
    src: "/images/gallery/g-m240i.jpg",
    alt: "BMW M240i",
    className: "col-start-3 row-start-1",
  },
  {
    src: "/images/gallery/g-golf.jpg",
    alt: "Volkswagen Golf GTI",
    className: "col-start-1 row-start-2",
  },
  {
    src: "/images/gallery/g-a5.jpg",
    alt: "Audi A5 S Line",
    className: "col-start-1 row-start-3",
  },
  {
    src: "/images/gallery/g-m135i.jpg",
    alt: "BMW M135i XDrive",
    className: "col-start-2 row-start-3",
  },
];

function RevealTile({
  delay,
  className,
  children,
}: {
  delay: number;
  className: string;
  children: React.ReactNode;
}) {
  const { ref, style } = useReveal<HTMLDivElement>({
    y: 40,
    scale: 0.96,
    delay,
    duration: 700,
  });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

export function GalleryBento() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[1fr_1.6fr_1fr] grid-rows-[240px_240px_240px] gap-3">
          {galleryItems.map((item, i) => (
            <RevealTile key={item.src} delay={i * 70} className={item.className}>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full overflow-hidden rounded"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </a>
            </RevealTile>
          ))}

          <RevealTile
            delay={galleryItems.length * 70}
            className="col-start-2 row-start-1 row-span-2"
          >
            <Link
              href="/proyectos"
              className="group relative block h-full w-full overflow-hidden rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/g-hero-i8.jpg"
                alt="BMW i8"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-6 flex justify-center">
                <span className="inline-flex h-10 shrink-0 items-center whitespace-nowrap border border-white/30 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  Ver Proyectos
                </span>
              </div>
            </Link>
          </RevealTile>

          <RevealTile
            delay={(galleryItems.length + 1) * 70}
            className="col-start-3 row-start-2 row-span-2"
          >
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full w-full overflow-hidden rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/g-raptor.jpg"
                alt="Volkswagen Amarok V6"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </a>
          </RevealTile>
        </div>
      </div>
    </section>
  );
}
