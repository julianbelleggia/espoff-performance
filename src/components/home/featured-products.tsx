"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";
import { useReveal } from "@/hooks/use-reveal";
import type { Product } from "@/lib/types";

function RevealCard({ delay, product }: { delay: number; product: Product }) {
  const { ref, style } = useReveal<HTMLDivElement>({ y: 36, delay, duration: 700 });

  return (
    <div
      ref={ref}
      style={style}
      className="w-[250px] shrink-0 [scroll-snap-align:start]"
    >
      <ProductCard product={product} />
    </div>
  );
}

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const { ref: headRef, style: headStyle } = useReveal<HTMLDivElement>({
    y: 16,
    duration: 600,
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div
        ref={headRef}
        style={headStyle}
        className="mb-10 flex items-end justify-between"
      >
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Destacados
          </span>
          <h2 className="mt-2 font-hero text-2xl uppercase tracking-wide sm:text-3xl">
            Lo más elegido
          </h2>
        </div>
        <Link
          href="/catalogo"
          className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:flex"
        >
          Ver todo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="scrollbar-none flex gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_proximity]">
        {featured.map((product, i) => (
          <RevealCard key={product.id} delay={i * 90} product={product} />
        ))}
      </div>
    </section>
  );
}
