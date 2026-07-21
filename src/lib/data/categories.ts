import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-alerones",
    slug: "spoilers",
    name: "Spoilers",
    description: "Spoilers traseros en fibra de carbono y ABS para máxima carga aerodinámica.",
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
    name: "Lips",
    description: "Splitters y lips delanteros que definen la silueta y mejoran el flujo de aire.",
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
  {
    id: "cat-colas-escape",
    slug: "colas-de-escape",
    name: "Colas de Escape",
    description: "Puntas y colas de escape genuinas y aftermarket para el terminado final de tu sistema.",
    icon: "tip",
  },
  {
    id: "cat-body-kits",
    slug: "body-kits",
    name: "Body Kits",
    description: "Kits de carrocería completos en fibra de carbono para una transformación total del exterior.",
    icon: "bodykit",
  },
  {
    id: "cat-insignias",
    slug: "insignias",
    name: "Insignias",
    description: "Insignias y emblemas genuinos para personalizar el exterior e interior de tu auto.",
    icon: "badge",
  },
  {
    id: "cat-cubre-espejos",
    slug: "cubre-espejos",
    name: "Cubre Espejos",
    description: "Cubre espejos en fibra de carbono y ABS para un terminado deportivo en el exterior.",
    icon: "mirror",
  },
  {
    id: "cat-llantas",
    slug: "llantas",
    name: "Llantas",
    description: "Llantas de aleación OZ Racing en fundición y forja, disponibles en múltiples colores y diámetros.",
    icon: "rim",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
