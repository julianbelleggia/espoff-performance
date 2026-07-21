"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItemRow } from "@/components/cart/cart-item-row";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

export function CartSheet() {
  const { items, itemCount, subtotal } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Abrir carrito">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="uppercase tracking-wide">
            Tu carrito {itemCount > 0 && `(${itemCount})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">
              Todavía no agregaste productos.
            </p>
            <Button asChild variant="secondary" size="sm" className="mt-2">
              <Link href="/catalogo" onClick={() => setOpen(false)}>
                Ver catálogo
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-4">
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
                    compact
                  />
                );
              })}
            </div>
            <SheetFooter className="border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-mono text-base font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/carrito" onClick={() => setOpen(false)}>
                  Ver carrito
                </Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
