import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProductVisual } from "@/components/product/product-visual";
import { getBrandById } from "@/lib/data/brands";
import { getCategoryById } from "@/lib/data/categories";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const brand = getBrandById(product.brandId);
  const category = getCategoryById(product.categoryId);

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card/40 transition-colors hover:border-border"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-card">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <ProductVisual
            icon={category?.icon ?? "wing"}
            label={category?.name}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        {!product.inStock && (
          <Badge
            variant="secondary"
            className="absolute left-2 top-2 bg-background/80 text-muted-foreground"
          >
            Sin stock
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          {brand?.name}
        </span>
        <h3 className="line-clamp-1 text-sm font-medium">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-sm font-medium">
            {product.priceOnRequest
              ? "Consultar precio"
              : formatPrice(product.price, product.currency)}
          </span>
        </div>
      </div>
    </Link>
  );
}
