"use client";

import { useMemo, useState } from "react";
import { FiltersSidebar } from "@/components/catalog/filters-sidebar";
import { SortSelect, type SortOption } from "@/components/catalog/sort-select";
import { ProductGrid } from "@/components/product/product-grid";
import { brands as allBrands } from "@/lib/data/brands";
import type { Product } from "@/lib/types";

export function CatalogView({
  products,
  activeCategorySlug,
}: {
  products: Product[];
  activeCategorySlug?: string;
}) {
  const [selectedBrandIds, setSelectedBrandIds] = useState<string[]>([]);
  const [modelQuery, setModelQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("destacados");

  const brandsInScope = useMemo(() => {
    const idsInScope = new Set(products.map((p) => p.brandId));
    return allBrands.filter((b) => idsInScope.has(b.id));
  }, [products]);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedBrandIds.length > 0) {
      result = result.filter((p) => selectedBrandIds.includes(p.brandId));
    }

    if (modelQuery.trim().length > 0) {
      const query = modelQuery.trim().toLowerCase();
      result = result.filter((p) =>
        p.compatibleWith.some((model) => model.toLowerCase().includes(query))
      );
    }

    const sorted = [...result];
    if (sort === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return sorted;
  }, [products, selectedBrandIds, modelQuery, sort]);

  const toggleBrand = (brandId: string) => {
    setSelectedBrandIds((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const resetFilters = () => {
    setSelectedBrandIds([]);
    setModelQuery("");
  };

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <FiltersSidebar
        activeCategorySlug={activeCategorySlug}
        brands={brandsInScope}
        selectedBrandIds={selectedBrandIds}
        onBrandToggle={toggleBrand}
        modelQuery={modelQuery}
        onModelQueryChange={setModelQuery}
        onReset={resetFilters}
      />

      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 && "s"}
          </p>
          <SortSelect value={sort} onChange={setSort} />
        </div>

        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
