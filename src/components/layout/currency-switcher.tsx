"use client";

import { useCurrency, type CurrencyCode } from "@/hooks/use-currency";
import { cn } from "@/lib/utils";

const OPTIONS: CurrencyCode[] = ["ARS", "USD"];

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className="flex items-center rounded-full border border-border/60 bg-background/10 p-0.5 text-xs font-medium backdrop-blur-sm"
      role="group"
      aria-label="Seleccionar moneda"
    >
      {OPTIONS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code)}
          aria-pressed={currency === code}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            currency === code
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
