"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCar } from "@/lib/data/gallery";

type MediaItem = { type: "image" | "video"; src: string };

export function GalleryGrid({ cars }: { cars: GalleryCar[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openCar = cars.find((c) => c.slug === openSlug) ?? null;

  const media: MediaItem[] = useMemo(() => {
    if (!openCar) return [];
    return [
      ...openCar.photos.map((src) => ({ type: "image" as const, src })),
      ...(openCar.videos ?? []).map((src) => ({ type: "video" as const, src })),
    ];
  }, [openCar]);

  const close = () => setOpenSlug(null);
  const next = () => setPhotoIndex((i) => (i + 1) % media.length);
  const prev = () => setPhotoIndex((i) => (i - 1 + media.length) % media.length);

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
      <div className="grid grid-cols-1 gap-x-9 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <button
            key={car.slug}
            type="button"
            onClick={() => {
              setOpenSlug(car.slug);
              setPhotoIndex(0);
            }}
            className="group flex flex-col gap-[18px] text-left text-white"
          >
            <div className="relative overflow-hidden bg-[oklch(0.11_0.003_80)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={car.photos[0]}
                alt={car.name}
                loading="lazy"
                className="block aspect-[4/3] w-full object-cover [filter:saturate(0.95)_contrast(1.03)] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]" />
            </div>
            <div className="flex items-baseline border-b border-white/[0.09] pb-4">
              <span className="text-[15px] font-bold normal-case tracking-[0.01em] text-white/92">
                {car.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {openCar &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div>
              <p className="font-hero text-sm font-bold normal-case tracking-wide text-white sm:text-base">
                {openCar.name}
              </p>
              <p className="text-xs text-white/60">
                {photoIndex + 1} / {media.length}
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
            {media[photoIndex]?.type === "video" ? (
              <video
                key={media[photoIndex].src}
                src={media[photoIndex].src}
                controls
                autoPlay
                className="max-h-full max-w-full rounded object-contain"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={media[photoIndex]?.src}
                alt={`${openCar.name} ${photoIndex + 1}`}
                className="max-h-full max-w-full rounded object-contain"
              />
            )}

            {media.length > 1 && (
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
        </div>,
          document.body
        )}
    </>
  );
}
