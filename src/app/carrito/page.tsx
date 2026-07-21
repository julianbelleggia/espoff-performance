"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItemRow } from "@/components/cart/cart-item-row";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export default function CarritoPage() {
  const { items, subtotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
        <h1 className="mt-4 font-heading text-2xl uppercase tracking-wide">
          Tu carrito está vacío
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorá el catálogo y encontrá la pieza que tu auto necesita.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/catalogo">Ver catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-3xl uppercase tracking-wide">
          Tu carrito
        </h1>
        <Button variant="ghost" size="sm" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="divide-y divide-border lg:col-span-2">
          {items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;
            return (
              <CartItemRow
                key={`${item.productId}-${item.color ?? ""}-${item.diameter ?? ""}`}
                product={product}
                quantity={item.quantity}
                color={item.color}
                diameter={item.diameter}
              />
            );
          })}
        </div>

        <div className="h-fit rounded-lg border border-border bg-card/40 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide">
            Resumen
          </h2>
          <Separator className="my-4" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-mono">{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Envío</span>
            <span className="text-muted-foreground">A calcular</span>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between text-base font-medium">
            <span>Total</span>
            <span className="font-mono">{formatPrice(subtotal)}</span>
          </div>

          <Button size="lg" className="mt-6 w-full uppercase tracking-wide" disabled>
            Continuar compra
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            El checkout estará disponible próximamente.
          </p>
        </div>
      </div>
    </div>
  );
}
