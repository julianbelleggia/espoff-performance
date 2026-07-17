"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/types";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 rounded-md border border-border">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Restar cantidad"
        >
          <Minus className="h-3.5 w-3.5" />
        </Button>
        <span className="w-6 text-center text-sm tabular-nums">
          {quantity}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Sumar cantidad"
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>

      <Button
        size="lg"
        className="flex-1 uppercase tracking-wide"
        disabled={!product.inStock}
        onClick={handleAdd}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" /> Agregado
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" />
            {product.inStock ? "Agregar al carrito" : "Sin stock"}
          </>
        )}
      </Button>
    </div>
  );
}
