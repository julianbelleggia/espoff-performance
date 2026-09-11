"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "apex-currency";

// Tipo de cambio de referencia (ARS por USD). Todos los precios se cargan en ARS;
// se actualiza manualmente hasta integrar una cotización en vivo.
const USD_ARS_RATE = 1350;

export type CurrencyCode = "ARS" | "USD";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  format: (priceArs: number) => string;
  rate: number;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("ARS");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ARS" || stored === "USD") {
      // Syncing from localStorage (browser-only, unavailable during SSR),
      // so this has to run post-mount rather than as an initializer.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = (next: CurrencyCode) => {
    setCurrencyState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const format = (priceArs: number) => {
    const amount = currency === "USD" ? priceArs / USD_ARS_RATE : priceArs;
    return new Intl.NumberFormat(currency === "USD" ? "en-US" : "es-AR", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "USD" ? 2 : 0,
    }).format(amount);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, format, rate: USD_ARS_RATE }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency debe usarse dentro de un CurrencyProvider");
  }
  return context;
}
