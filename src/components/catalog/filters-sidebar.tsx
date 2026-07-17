"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";
import type { Brand } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FiltersSidebar({
  activeCategorySlug,
  brands,
  selectedBrandIds,
  onBrandToggle,
  modelQuery,
  onModelQueryChange,
  onReset,
}: {
  activeCategorySlug?: string;
  brands: Brand[];
  selectedBrandIds: string[];
  onBrandToggle: (brandId: string) => void;
  modelQuery: string;
  onModelQueryChange: (value: string) => void;
  onReset: () => void;
}) {
  const hasActiveFilters = selectedBrandIds.length > 0 || modelQuery.length > 0;

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium uppercase tracking-wide">
          Filtros
        </h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            Limpiar
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["categoria", "marca", "modelo"]}>
        <AccordionItem value="categoria">
          <AccordionTrigger className="text-sm">Categoría</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/catalogo"
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground",
                    !activeCategorySlug && "font-medium text-foreground"
                  )}
                >
                  Todas
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/catalogo/${category.slug}`}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-foreground",
                      activeCategorySlug === category.slug &&
                        "font-medium text-foreground"
                    )}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="marca">
          <AccordionTrigger className="text-sm">Marca</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-3">
              {brands.map((brand) => (
                <li key={brand.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrandIds.includes(brand.id)}
                    onCheckedChange={() => onBrandToggle(brand.id)}
                  />
                  <label
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm text-foreground/80"
                  >
                    {brand.name}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="modelo">
          <AccordionTrigger className="text-sm">
            Modelo compatible
          </AccordionTrigger>
          <AccordionContent>
            <Input
              placeholder="Ej. BMW M3, RS3..."
              value={modelQuery}
              onChange={(e) => onModelQueryChange(e.target.value)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
