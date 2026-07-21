"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProductVisual } from "@/components/product/product-visual";
import { cn } from "@/lib/utils";
import type { CategoryIcon } from "@/lib/types";

const VIEWS = ["Vista general", "Detalle de montaje", "Acabado y material"];

export function ProductGallery({
  icon,
  categoryName,
  image,
  images,
  imageAlt,
}: {
  icon: CategoryIcon;
  categoryName?: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const gallery = images && images.length > 0 ? images : image ? [image] : [];

  if (gallery.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={gallery[0]}
          alt={imageAlt ?? categoryName ?? "Producto"}
          className="aspect-square w-full object-cover"
        />
      </div>
    );
  }

  if (gallery.length > 1) {
    return (
      <div>
        <Carousel
          setApi={(carouselApi) => {
            setApi(carouselApi);
            carouselApi?.on("select", () =>
              setSelected(carouselApi.selectedScrollSnap())
            );
          }}
        >
          <CarouselContent>
            {gallery.map((src, index) => (
              <CarouselItem key={src}>
                <div className="overflow-hidden rounded-lg bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${imageAlt ?? categoryName ?? "Producto"} — foto ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {gallery.map((src, index) => (
            <button
              key={src}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "overflow-hidden rounded-md border transition-colors",
                selected === index
                  ? "border-primary"
                  : "border-border/60 hover:border-border"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Carousel
        setApi={(carouselApi) => {
          setApi(carouselApi);
          carouselApi?.on("select", () =>
            setSelected(carouselApi.selectedScrollSnap())
          );
        }}
      >
        <CarouselContent>
          {VIEWS.map((view, index) => (
            <CarouselItem key={view}>
              <ProductVisual
                icon={icon}
                label={`${categoryName ?? ""} — ${view}`}
                className="aspect-square w-full rounded-lg"
                iconClassName={index === 1 ? "h-24 w-24" : "h-28 w-28"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {VIEWS.map((view, index) => (
          <button
            key={view}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "overflow-hidden rounded-md border transition-colors",
              selected === index
                ? "border-primary"
                : "border-border/60 hover:border-border"
            )}
          >
            <ProductVisual
              icon={icon}
              className="aspect-square w-full"
              iconClassName="h-8 w-8"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
