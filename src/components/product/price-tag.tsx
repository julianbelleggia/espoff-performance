"use client";

import { useCurrency } from "@/hooks/use-currency";

export function PriceTag({
  price,
  className,
}: {
  price: number;
  className?: string;
}) {
  const { format } = useCurrency();
  return <span className={className}>{format(price)}</span>;
}
