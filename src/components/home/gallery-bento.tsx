import { socials } from "@/lib/data/socials";

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

export function GalleryBento() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[1fr_1.6fr_1fr] grid-rows-[240px_240px_240px] gap-3">
          {galleryItems.map((item) => (
            <a
              key={item.src}
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded ${item.className}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </a>
          ))}

          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-start-2 row-start-1 row-span-2 block overflow-hidden rounded"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/g-hero-i8.jpg"
              alt="BMW i8"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
                  Proyectos en Acción
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  Descubrí cómo llevamos autos al siguiente nivel con
                  estética y rendimiento a medida.
                </p>
              </div>
              <span className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded bg-white px-5 text-xs font-semibold uppercase tracking-wide text-black">
                Ver Galería
              </span>
            </div>
          </a>

          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-start-3 row-start-2 row-span-2 block overflow-hidden rounded"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/g-raptor.jpg"
              alt="Volkswagen Amarok V6"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
