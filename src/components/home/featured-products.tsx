import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Destacados
          </span>
          <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide sm:text-3xl">
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
        {featured.map((product) => (
          <div
            key={product.id}
            className="w-[250px] shrink-0 [scroll-snap-align:start]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
