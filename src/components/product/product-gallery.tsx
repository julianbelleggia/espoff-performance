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
}: {
  icon: CategoryIcon;
  categoryName?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

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
