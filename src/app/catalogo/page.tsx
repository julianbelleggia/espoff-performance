import { notFound } from "next/navigation";
import { CatalogGridMinimal } from "@/components/catalog/catalog-grid-minimal";
import { products } from "@/lib/data/products";
import { CATALOG_ENABLED } from "@/lib/feature-flags";

export const metadata = {
  title: "Catálogo | ESPOFF Performance",
};

export default function CatalogoPage() {
  if (!CATALOG_ENABLED) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <CatalogGridMinimal products={products} />
    </div>
  );
}
