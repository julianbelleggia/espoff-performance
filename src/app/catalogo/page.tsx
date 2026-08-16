import { CatalogGridMinimal } from "@/components/catalog/catalog-grid-minimal";
import { products } from "@/lib/data/products";

export const metadata = {
  title: "Catálogo | ESPOFF Performance",
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <CatalogGridMinimal products={products} />
    </div>
  );
}
