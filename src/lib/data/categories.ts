import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-alerones",
    slug: "alerones",
    name: "Alerones",
    description: "Alerones traseros en fibra de carbono y ABS para máxima carga aerodinámica.",
    icon: "wing",
  },
  {
    id: "cat-volantes",
    slug: "volantes",
    name: "Volantes",
    description: "Volantes deportivos con grip premium y respuesta directa.",
    icon: "wheel",
  },
  {
    id: "cat-lips",
    slug: "lips",
    name: "Lips delanteros y traseros",
    description: "Splitters y lips que definen la silueta y mejoran el flujo de aire.",
    icon: "lip",
  },
  {
    id: "cat-difusores",
    slug: "difusores",
    name: "Difusores",
    description: "Difusores traseros para optimizar la salida de aire y reducir turbulencia.",
    icon: "diffuser",
  },
  {
    id: "cat-escapes",
    slug: "escapes",
    name: "Escapes",
    description: "Sistemas de escape performance de las marcas más reconocidas del mundo.",
    icon: "exhaust",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
