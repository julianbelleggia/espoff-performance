import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CatalogView } from "@/components/catalog/catalog-view";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  return { title: category ? `${category.name} | Apex Performance` : "Catálogo" };
}

export default async function CategoriaPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { categoria } = await params;
  const { tipo } = await searchParams;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    notFound();
  }

  let categoryProducts = getProductsByCategory(category.id);

  const tipoLabel =
    tipo === "delantero" ? "Delanteros" : tipo === "trasero" ? "Traseros" : null;

  if (tipoLabel) {
    categoryProducts = categoryProducts.filter((product) =>
      product.name.toLowerCase().includes(tipo!.toLowerCase())
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalogo">Catálogo</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {tipoLabel ? (
              <BreadcrumbLink href={`/catalogo/${category.slug}`}>
                {category.name}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {tipoLabel && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{tipoLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mb-2 font-heading text-3xl uppercase tracking-wide">
        {tipoLabel ? `Lips ${tipoLabel}` : category.name}
      </h1>
      <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
        {category.description}
      </p>

      <CatalogView products={categoryProducts} activeCategorySlug={category.slug} />
    </div>
  );
}
