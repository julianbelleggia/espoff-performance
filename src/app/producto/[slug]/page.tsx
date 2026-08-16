import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { getBrandById } from "@/lib/data/brands";
import { getProductBySlug, products } from "@/lib/data/products";

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
  return { title: product ? `${product.name} | ESPOFF Performance` : "Producto" };
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

  const brand = getBrandById(product.brandId);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver al catálogo
        </Link>
      </div>

      <ProductDetail product={product} brandName={brand?.name} />

      <div className="pb-24" />
    </div>
  );
}
