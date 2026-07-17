import type { Brand } from "@/lib/types";

export const brands: Brand[] = [
  { id: "brand-akrapovic", slug: "akrapovic", name: "Akrapovič", origin: "Eslovenia" },
  { id: "brand-milltek", slug: "milltek", name: "Milltek Sport", origin: "Reino Unido" },
  { id: "brand-armytrix", slug: "armytrix", name: "Armytrix", origin: "Taiwán" },
  { id: "brand-vorsteiner", slug: "vorsteiner", name: "Vorsteiner", origin: "Estados Unidos" },
  { id: "brand-mode-carbon", slug: "mode-carbon", name: "Mode Carbon", origin: "Reino Unido" },
  { id: "brand-apex", slug: "apex", name: "APEX Performance", origin: "Casa" },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id);
}
