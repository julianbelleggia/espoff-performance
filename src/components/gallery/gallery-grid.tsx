"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCar } from "@/lib/data/gallery";

export function GalleryGrid({ cars }: { cars: GalleryCar[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openCar = cars.find((c) => c.slug === openSlug) ?? null;

  const close = () => setOpenSlug(null);
  const next = () =>
    openCar &&
    setPhotoIndex((i) => (i + 1) % openCar.photos.length);
  const prev = () =>
    openCar &&
    setPhotoIndex((i) => (i - 1 + openCar.photos.length) % openCar.photos.length);

  useEffect(() => {
    if (!openCar) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCar]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {cars.map((car) => (
          <button
            key={car.slug}
            type="button"
            onClick={() => {
              setOpenSlug(car.slug);
              setPhotoIndex(0);
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={car.photos[0]}
              alt={car.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-3 bottom-3">
              <p className="font-heading text-sm uppercase tracking-wide text-white sm:text-base">
                {car.name}
              </p>
              <p className="mt-0.5 text-xs text-white/70">
                {car.photos.length} fotos
              </p>
            </div>
          </button>
        ))}
      </div>

      {openCar && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div>
              <p className="font-heading text-sm uppercase tracking-wide text-white sm:text-base">
                {openCar.name}
              </p>
              <p className="text-xs text-white/60">
                {photoIndex + 1} / {openCar.photos.length}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={openCar.photos[photoIndex]}
              alt={`${openCar.name} ${photoIndex + 1}`}
              className="max-h-full max-w-full rounded object-contain"
            />

            {openCar.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto anterior"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:left-4"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Foto siguiente"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:right-4"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
