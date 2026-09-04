import { notFound } from "next/navigation";
import { CatalogGridMinimal } from "@/components/catalog/catalog-grid-minimal";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { CATALOG_ENABLED } from "@/lib/feature-flags";

export function generateStaticParams() {
  if (!CATALOG_ENABLED) return [];
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  return { title: category ? `${category.name} | ESPOFF Performance` : "Catálogo" };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!CATALOG_ENABLED || !category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <CatalogGridMinimal
        products={categoryProducts}
        activeCategorySlug={category.slug}
      />
    </div>
  );
}
