"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { getBrandById } from "@/lib/data/brands";
import { categories, getCategoryById } from "@/lib/data/categories";
import { ProductVisual } from "@/components/product/product-visual";
import { useCurrency } from "@/hooks/use-currency";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

type SortMode = "destacados" | "price-desc" | "price-asc";

const WHATSAPP_PHONE = "541139541545";

export function CatalogGridMinimal({
  products,
  activeCategorySlug,
}: {
  products: Product[];
  activeCategorySlug?: string;
}) {
  const [sort, setSort] = useState<SortMode>("destacados");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { format } = useCurrency();

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const filtered = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    const matched =
      trimmedQuery.length === 0
        ? products
        : products.filter((product) => {
            const brandName = getBrandById(product.brandId)?.name ?? "";
            return (
              product.name.toLowerCase().includes(trimmedQuery) ||
              brandName.toLowerCase().includes(trimmedQuery) ||
              product.compatibleWith.some((model) =>
                model.toLowerCase().includes(trimmedQuery)
              )
            );
          });

    const sorted = [...matched];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    return sorted;
  }, [products, sort, query]);

  const cycleSort = () => {
    setSort((s) =>
      s === "destacados"
        ? "price-desc"
        : s === "price-desc"
          ? "price-asc"
          : "destacados"
    );
  };

  const sortLabel =
    sort === "price-desc"
      ? "Precio ↓"
      : sort === "price-asc"
        ? "Precio ↑"
        : "Destacados";

  return (
    <div>
      <div className="mb-5 flex justify-end">
        {searchOpen ? (
          <div className="flex w-full max-w-xs items-center gap-2.5 border-b border-foreground/25 pb-1.5">
            <Search
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
              strokeWidth={1.4}
            />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && closeSearch()}
              placeholder="Buscar producto o marca"
              className="w-full bg-transparent font-mono text-xs uppercase tracking-[0.08em] text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Cerrar búsqueda"
              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.4} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={openSearch}
            aria-label="Buscar"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={1.4} />
            Buscar
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-7 border-b border-border/60 pb-4">
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Link
            href="/catalogo"
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
              !activeCategorySlug
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Todo
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogo/${category.slug}`}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                activeCategorySlug === category.slug
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-7 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>
            {filtered.length} pieza{filtered.length !== 1 && "s"}
          </span>
          <button
            type="button"
            onClick={cycleSort}
            className="transition-colors hover:text-foreground"
          >
            {sortLabel}
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
          <p className="text-sm text-muted-foreground">
            {query.trim()
              ? `No encontramos productos para "${query.trim()}".`
              : "No encontramos productos en esta categoría."}
          </p>
          {query.trim() && (
            <div className="flex flex-col items-center gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                ¿No encontrás el producto o el auto?
              </p>
              <a
                href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
                  `Hola! Busco "${query.trim()}" y no lo encontré en el catálogo. ¿Me pueden ayudar?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-foreground/25 px-8 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Contactanos
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => {
            const brand = getBrandById(product.brandId);
            const category = getCategoryById(product.categoryId);
            return (
              <Link
                key={product.id}
                href={`/producto/${product.slug}`}
                className="group flex flex-col gap-7"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-[7%] transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                      <ProductVisual
                        icon={category?.icon ?? "wing"}
                        className="h-full w-full bg-transparent"
                        iconClassName="h-16 w-16 text-black/20"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                    {brand?.name}
                  </span>
                  <span className="max-w-[32ch] text-[15px] font-light leading-snug">
                    {product.name}
                  </span>
                  <span className="mt-1 font-mono text-xs tracking-wide text-muted-foreground">
                    {product.priceOnRequest
                      ? "Consultar precio"
                      : format(product.price)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
