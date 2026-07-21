"use client";

import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/product/product-visual";
import { useCart } from "@/hooks/use-cart";
import { getCategoryById } from "@/lib/data/categories";
import { getBrandById } from "@/lib/data/brands";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function CartItemRow({
  product,
  quantity,
  color,
  diameter,
  compact = false,
}: {
  product: Product;
  quantity: number;
  color?: string;
  diameter?: string;
  compact?: boolean;
}) {
  const { updateQuantity, removeItem } = useCart();
  const category = getCategoryById(product.categoryId);
  const brand = getBrandById(product.brandId);
  const variant = { color, diameter };
  const variantImage = color
    ? product.colors?.find((c) => c.name === color)?.image
    : undefined;

  return (
    <div className="flex gap-3 py-4">
      <Link
        href={`/producto/${product.slug}`}
        className={cn(
          "shrink-0 rounded-md",
          compact ? "h-16 w-16" : "h-24 w-24"
        )}
      >
        {variantImage ?? product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={variantImage ?? product.image}
            alt={product.name}
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <ProductVisual
            icon={category?.icon ?? "wing"}
            className="h-full w-full rounded-md"
            iconClassName={compact ? "h-6 w-6" : "h-8 w-8"}
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/producto/${product.slug}`}
              className="line-clamp-1 text-sm font-medium hover:text-primary"
            >
              {product.name}
            </Link>
            <p className="text-xs text-muted-foreground">{brand?.name}</p>
            {(color || diameter) && (
              <p className="text-xs text-muted-foreground">
                {[color, diameter && `Rodado ${diameter}"`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </div>
          <button
            onClick={() => removeItem(product.id, variant)}
            className="shrink-0 text-muted-foreground hover:text-foreground"
            aria-label="Quitar del carrito"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-md border border-border">
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-7 w-7"
              onClick={() => updateQuantity(product.id, quantity - 1, variant)}
              aria-label="Restar cantidad"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-5 text-center text-sm tabular-nums">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-7 w-7"
              onClick={() => updateQuantity(product.id, quantity + 1, variant)}
              aria-label="Sumar cantidad"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="font-mono text-sm">
            {product.priceOnRequest
              ? "Consultar"
              : formatPrice(product.price * quantity, product.currency)}
          </span>
        </div>
      </div>
    </div>
  );
}
