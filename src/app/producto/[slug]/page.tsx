import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductSpecs } from "@/components/product/product-specs";
import { AddToCart } from "@/components/product/add-to-cart";
import { WheelPurchasePanel } from "@/components/product/wheel-purchase-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { getCategoryById } from "@/lib/data/categories";
import { getBrandById } from "@/lib/data/brands";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} | Apex Performance` : "Producto" };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);
  const brand = getBrandById(product.brandId);
  const related = getRelatedProducts(product);

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
          {category && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/catalogo/${category.slug}`}>
                  {category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {product.colors && product.colors.length > 0 ? (
        <>
          <WheelPurchasePanel
            product={product}
            categoryIcon={category?.icon ?? "rim"}
            categoryName={category?.name}
            brandName={brand?.name}
          />
          <div className="mt-10 border-t border-border pt-8">
            <ProductSpecs product={product} />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductGallery
            icon={category?.icon ?? "wing"}
            categoryName={category?.name}
            image={product.image}
            images={product.images}
            imageAlt={product.name}
          />

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {brand?.name}
            </span>
            <h1 className="mt-1 font-heading text-2xl uppercase tracking-wide sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono text-2xl font-medium">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.inStock ? (
                <Badge variant="secondary">En stock</Badge>
              ) : (
                <Badge variant="secondary" className="text-muted-foreground">
                  Sin stock
                </Badge>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <ProductSpecs product={product} />
            </div>
          </div>
        </div>
      )}

      <RelatedProducts products={related} />
    </div>
  );
}
