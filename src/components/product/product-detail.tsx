"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PriceTag } from "@/components/product/price-tag";
import { ProductVisual } from "@/components/product/product-visual";
import { getCategoryById } from "@/lib/data/categories";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

const WHATSAPP_PHONE = "541139541545";

export function ProductDetail({
  product,
  brandName,
}: {
  product: Product;
  brandName?: string;
}) {
  const colors = product.colors ?? [];
  const diameters = product.diameters ?? [];
  const hasColors = colors.length > 0;

  const [colorIndex, setColorIndex] = useState(0);
  const [diameter, setDiameter] = useState(diameters[0] ?? "");
  const [imageIndex, setImageIndex] = useState(0);

  const selectedColor = colors[colorIndex];

  const images = hasColors
    ? selectedColor?.images && selectedColor.images.length > 0
      ? selectedColor.images
      : selectedColor?.image
        ? [selectedColor.image]
        : []
    : product.images && product.images.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const safeImageIndex = imageIndex < images.length ? imageIndex : 0;
  const hero = images[safeImageIndex];
  const category = getCategoryById(product.categoryId);

  const selectColor = (index: number) => {
    setColorIndex(index);
    setImageIndex(0);
  };

  const fullProductName = product.name.startsWith(brandName ?? "")
    ? product.name
    : [brandName, product.name].filter(Boolean).join(" ");

  const waMessage = encodeURIComponent(
    `Hola! Quiero pedir un presupuesto de ${fullProductName}` +
      (selectedColor ? ` en color ${selectedColor.name}` : "") +
      (diameter ? ` y diámetro ${diameter}"` : "") +
      "."
  );

  return (
    <>
      <section className="mt-9">
        <div className="relative bg-white">
          {hero ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hero}
              alt={product.name}
              className="block h-[74vh] min-h-[520px] w-full object-contain p-[5vh_6vw]"
            />
          ) : (
            <div className="flex h-[74vh] min-h-[520px] w-full items-center justify-center bg-neutral-100">
              <ProductVisual
                icon={category?.icon ?? "wing"}
                className="h-full w-full bg-transparent"
                iconClassName="h-28 w-28 text-black/20"
              />
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() =>
                  setImageIndex((i) => (i - 1 + images.length) % images.length)
                }
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-black/15 bg-white/80 text-black transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Foto siguiente"
                onClick={() => setImageIndex((i) => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-black/15 bg-white/80 text-black transition-colors hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 bg-white pb-6 pt-2">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setImageIndex(index)}
                aria-label={`Ver foto ${index + 1}`}
                className={cn(
                  "h-14 w-14 overflow-hidden border transition-colors",
                  index === safeImageIndex
                    ? "border-primary"
                    : "border-black/15 hover:border-black/30"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-[820px] px-4 pt-16 text-center sm:px-6 lg:px-8">
        {brandName && (
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {brandName}
          </span>
        )}
        <h1 className="mt-6 text-3xl font-light leading-tight tracking-tight text-balance sm:text-4xl md:text-[44px]">
          {product.name}
        </h1>

        {product.priceOnRequest ? (
          <span className="mt-6 block font-mono text-sm tracking-wide text-muted-foreground">
            Consultar precio
          </span>
        ) : (
          <PriceTag
            price={product.price}
            className="mt-6 block font-mono text-base tracking-wide text-muted-foreground"
          />
        )}

        {hasColors && (
          <div className="mt-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Color — <span className="text-foreground">{selectedColor?.name}</span>
            </span>
            <div className="mt-3 flex flex-wrap justify-center gap-2.5">
              {colors.map((color, index) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => selectColor(index)}
                  title={color.name}
                  aria-label={color.name}
                  className={cn(
                    "h-9 w-9 overflow-hidden rounded-full border-2 transition-colors",
                    index === colorIndex
                      ? "border-primary"
                      : "border-foreground/20 hover:border-foreground/40"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={color.image}
                    alt={color.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {diameters.length > 0 && (
          <div className="mt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Diámetro
            </span>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {diameters.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDiameter(d)}
                  className={cn(
                    "border px-3.5 py-1.5 font-mono text-xs tracking-wide transition-colors",
                    d === diameter
                      ? "border-primary text-primary"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  )}
                >
                  {d}&quot;
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <a
            href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[280px] items-center justify-center border border-foreground/25 px-10 py-[19px] text-[11px] uppercase tracking-[0.24em] transition-colors duration-500 hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Pedir presupuesto
          </a>
        </div>

        <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Respuesta en el día — Envíos a todo el país
        </span>
      </section>
    </>
  );
}
