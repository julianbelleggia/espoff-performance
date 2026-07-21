"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "@/lib/types";
import { products } from "@/lib/data/products";

const STORAGE_KEY = "apex-cart";

type CartVariant = { color?: string; diameter?: string };

type CartContextValue = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number, variant?: CartVariant) => void;
  removeItem: (productId: string, variant?: CartVariant) => void;
  updateQuantity: (productId: string, quantity: number, variant?: CartVariant) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

function sameVariant(item: CartItem, variant?: CartVariant) {
  return item.color === variant?.color && item.diameter === variant?.diameter;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        // ignore corrupted storage
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (productId: string, quantity = 1, variant?: CartVariant) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === productId && sameVariant(item, variant)
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === productId && sameVariant(item, variant)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        { productId, quantity, color: variant?.color, diameter: variant?.diameter },
      ];
    });
  };

  const removeItem = (productId: string, variant?: CartVariant) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && sameVariant(item, variant))
      )
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
    variant?: CartVariant
  ) => {
    if (quantity <= 0) {
      removeItem(productId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && sameVariant(item, variant)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? sum + product.price * item.quantity : sum;
      }, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}
