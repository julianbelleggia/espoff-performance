"use client";

import { useState } from "react";
import { Check, MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product/product-gallery";
import { useCart } from "@/hooks/use-cart";
import { cn, formatPrice } from "@/lib/utils";
import type { CategoryIcon, Product } from "@/lib/types";

const WHATSAPP_PHONE = "541139541545";

export function WheelPurchasePanel({
  product,
  categoryIcon,
  categoryName,
  brandName,
}: {
  product: Product;
  categoryIcon: CategoryIcon;
  categoryName?: string;
  brandName?: string;
}) {
  const colors = product.colors ?? [];
  const diameters = product.diameters ?? [];
  const [colorIndex, setColorIndex] = useState(0);
  const [diameter, setDiameter] = useState(diameters[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const selectedColor = colors[colorIndex];

  const fullProductName = product.name.startsWith(brandName ?? "")
    ? product.name
    : [brandName, product.name].filter(Boolean).join(" ");

  const waMessage = encodeURIComponent(
    `Hola! Quiero consultar precio y disponibilidad de la llanta ${fullProductName}` +
      (selectedColor ? ` en color ${selectedColor.name}` : "") +
      (diameter ? ` y diámetro ${diameter}"` : "") +
      "."
  );

  const handleAdd = () => {
    addItem(product.id, quantity, {
      color: selectedColor?.name,
      diameter,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <ProductGallery
        key={selectedColor?.name}
        icon={categoryIcon}
        categoryName={categoryName}
        image={selectedColor?.image}
        images={selectedColor?.images}
        imageAlt={`${product.name} ${selectedColor?.name ?? ""}`}
      />

      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {brandName}
        </span>
        <h1 className="mt-1 font-heading text-2xl uppercase tracking-wide sm:text-3xl">
          {product.name}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          {product.priceOnRequest ? (
            <span className="font-mono text-lg font-medium text-muted-foreground">
              Consultar precio
            </span>
          ) : (
            <span className="font-mono text-2xl font-medium">
              {formatPrice(product.price, product.currency)}
            </span>
          )}
          {product.inStock ? (
            <Badge variant="secondary">A pedido</Badge>
          ) : (
            <Badge variant="secondary" className="text-muted-foreground">
              Sin stock
            </Badge>
          )}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          {product.description}
        </p>

        {colors.length > 0 && (
          <div className="mt-6">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Color: <span className="text-foreground">{selectedColor?.name}</span>
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setColorIndex(index)}
                  title={color.name}
                  aria-label={color.name}
                  className={cn(
                    "h-9 w-9 overflow-hidden rounded-full border-2 transition-colors",
                    index === colorIndex
                      ? "border-primary"
                      : "border-border/60 hover:border-border"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={color.image}
                    alt={color.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {diameters.length > 0 && (
          <div className="mt-5">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Diámetro
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {diameters.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiameter(d)}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                    d === diameter
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                  )}
                >
                  {d}&quot;
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center gap-3">
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

          {product.priceOnRequest ? (
            <Button size="lg" className="flex-1 uppercase tracking-wide" asChild>
              <a
                href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
            </Button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
