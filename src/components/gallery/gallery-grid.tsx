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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] border-l border-white/[0.14]">
        {cars.map((car) => {
          const hasVideo = !!car.videos && car.videos.length > 0;
          const meta = hasVideo
            ? `${car.photos.length} fotos · ${car.videos!.length} ${car.videos!.length === 1 ? "video" : "videos"}`
            : `${car.photos.length} fotos`;

          return (
            <button
              key={car.slug}
              type="button"
              onClick={() => {
                setOpenSlug(car.slug);
                setPhotoIndex(0);
              }}
              className="group relative block border-b border-r border-white/[0.14] text-left text-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={car.photos[0]}
                  alt={car.name}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-[filter,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] [filter:grayscale(1)_contrast(1.12)_brightness(0.72)] group-hover:scale-[1.05] group-hover:[filter:grayscale(0)_contrast(1.05)_brightness(0.95)]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.1) 55%, transparent 100%)",
                  }}
                />
                {hasVideo && (
                  <span className="pointer-events-none absolute right-3.5 top-3.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/35 text-white">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 py-[18px]">
                <span className="flex min-w-0 flex-col gap-[7px]">
                  <span className="font-hero text-[17px] font-extrabold uppercase tracking-[-0.015em] text-white">
                    {car.name}
                  </span>
                  <span className="font-nav text-[10px] uppercase tracking-[0.18em] text-white/55">
                    {meta}
                  </span>
                </span>
                <span aria-hidden="true" className="font-nav text-[13px] text-primary">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {openCar &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div>
              <p className="font-hero text-sm font-bold uppercase tracking-wide text-white sm:text-base">
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
