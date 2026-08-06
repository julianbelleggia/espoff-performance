"use client";

import { useEffect, useRef, useState } from "react";
import { useCurrency, type CurrencyCode } from "@/hooks/use-currency";
import { cn } from "@/lib/utils";

const OPTIONS: CurrencyCode[] = ["ARS", "USD"];
const SPRING_EASE = "cubic-bezier(0.34, 1.56, 0.64, 1)";

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      className={className}
    >
      <path
        d="M0.86543 0.373845C0.55918 0.680095 0.55918 1.17385 0.86543 1.4801L6.05918 6.67385C6.30293 6.9176 6.69668 6.9176 6.94043 6.67385L12.1342 1.4801C12.4404 1.17385 12.4404 0.680095 12.1342 0.373845C11.8279 0.067595 11.3342 0.067595 11.0279 0.373845L6.49668 4.89885L1.96543 0.367595C1.66543 0.0675955 1.16543 0.067595 0.86543 0.373845Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const select = (code: CurrencyCode) => {
    setCurrency(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative font-nav">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Seleccionar moneda"
        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-foreground/80 outline-none transition-colors hover:text-foreground"
      >
        {currency}
        <span
          className="inline-flex"
          style={{
            transition: `transform 0.4s ${SPRING_EASE}`,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Chevron />
        </span>
      </button>

      <div
        className="absolute right-0 top-full mt-4 w-28 overflow-hidden rounded-lg bg-[oklch(0.14_0_0)]"
        style={{
          maxHeight: open ? "120px" : "0px",
          boxShadow: open
            ? "0px 12px 24px rgba(0,0,0,0.45)"
            : "0px 4px 10px rgba(0,0,0,0.1)",
          transition: `max-height 0.5s ${SPRING_EASE}, box-shadow 0.4s ease`,
        }}
      >
        <div className="flex flex-col p-1">
          {OPTIONS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => select(code)}
              aria-pressed={currency === code}
              className={cn(
                "rounded-md px-3 py-2 text-left text-xs uppercase tracking-[0.08em] transition-colors hover:bg-white/10 hover:text-foreground",
                currency === code
                  ? "text-primary"
                  : "text-foreground/85"
              )}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
