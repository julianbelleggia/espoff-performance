"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const MAX_TILT_DEG = 7;

export function WorkPhotosCarousel({
  photos,
}: {
  photos: { src: string; alt: string }[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateTilt = useCallback(() => {
    if (!api) return;
    const viewport = api.rootNode();
    const viewportRect = viewport.getBoundingClientRect();
    const centerX = viewportRect.left + viewportRect.width / 2;
    const halfWidth = viewportRect.width / 2 || 1;

    slideRefs.current.forEach((node) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const slideCenterX = rect.left + rect.width / 2;
      const offset = (slideCenterX - centerX) / halfWidth;
      const clamped = Math.max(-1, Math.min(1, offset));
      node.style.transform = `rotate(${-clamped * MAX_TILT_DEG}deg)`;
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateTilt();
    api.on("scroll", updateTilt);
    api.on("reInit", updateTilt);
    window.addEventListener("resize", updateTilt);
    return () => {
      api.off("scroll", updateTilt);
      api.off("reInit", updateTilt);
      window.removeEventListener("resize", updateTilt);
    };
  }, [api, updateTilt]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", dragFree: true, loop: true }}
      className="cursor-grab select-none px-6 active:cursor-grabbing sm:px-10 lg:px-[88px]"
    >
      <CarouselContent className="-ml-[22px] py-10">
        {photos.map((photo, i) => (
          <CarouselItem key={`${photo.src}-${i}`} className="basis-auto pl-[22px]">
            <div
              ref={(node) => {
                slideRefs.current[i] = node;
              }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)] will-change-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
