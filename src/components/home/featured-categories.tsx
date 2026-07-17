import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { ProductVisual } from "@/components/product/product-visual";

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Categorías
          </span>
          <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide sm:text-3xl">
            Encontrá tu pieza
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/catalogo/${category.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card/40 transition-colors hover:border-border"
          >
            <ProductVisual
              icon={category.icon}
              className="aspect-square w-full transition-transform duration-300 group-hover:scale-[1.03]"
              iconClassName="h-10 w-10"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
