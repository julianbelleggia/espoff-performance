"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "destacados" | "price-asc" | "price-desc";

export function SortSelect({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="destacados">Destacados</SelectItem>
        <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
        <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
      </SelectContent>
    </Select>
  );
}
