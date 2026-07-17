import type { Product } from "@/lib/types";

export const products: Product[] = [
  // Alerones
  {
    id: "prod-aleron-gt-vorsteiner",
    slug: "aleron-gt-fibra-carbono-vorsteiner",
    name: "Alerón GT Fibra de Carbono",
    brandId: "brand-vorsteiner",
    categoryId: "cat-alerones",
    compatibleWith: ["BMW M3 G80", "BMW M4 G82"],
    price: 189000,
    currency: "ARS",
    description:
      "Alerón estilo GT en fibra de carbono pre-preg, diseñado en túnel de viento para maximizar la carga aerodinámica trasera sin comprometer la estabilidad a alta velocidad.",
    specs: [
      { label: "Material", value: "Fibra de carbono 2x2 twill" },
      { label: "Acabado", value: "Clear coat UV" },
      { label: "Montaje", value: "Atornillado, sin perforar" },
      { label: "Peso", value: "3.4 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-aleron-ducktail-mode",
    slug: "aleron-ducktail-carbono-mode-carbon",
    name: "Alerón Ducktail Carbono",
    brandId: "brand-mode-carbon",
    categoryId: "cat-alerones",
    compatibleWith: ["Porsche 911 992"],
    price: 245000,
    currency: "ARS",
    description:
      "Réplica del icónico ducktail en fibra de carbono, inspirado en el 911 Carrera RS 2.7, con ajuste OEM+ y acabado en resina UV resistente.",
    specs: [
      { label: "Material", value: "Fibra de carbono forged" },
      { label: "Acabado", value: "Brillante" },
      { label: "Montaje", value: "Adhesivo estructural + soportes" },
      { label: "Peso", value: "2.1 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-aleron-swanneck-apex",
    slug: "aleron-swan-neck-track-apex",
    name: "Alerón Swan Neck Track",
    brandId: "brand-apex",
    categoryId: "cat-alerones",
    compatibleWith: ["Audi RS3 8Y", "Audi S3 8Y"],
    price: 156000,
    currency: "ARS",
    description:
      "Alerón de cuello de cisne (swan neck) que libera el flujo de aire superior del ala, aumentando la eficiencia aerodinámica en uso de pista.",
    specs: [
      { label: "Material", value: "Fibra de carbono" },
      { label: "Ajuste de ángulo", value: "3 posiciones" },
      { label: "Montaje", value: "Atornillado" },
      { label: "Peso", value: "2.8 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
  },

  // Volantes
  {
    id: "prod-volante-alcantara-apex",
    slug: "volante-alcantara-competicion-apex",
    name: "Volante Alcantara Competición",
    brandId: "brand-apex",
    categoryId: "cat-volantes",
    compatibleWith: ["Universal (adaptador requerido)"],
    price: 98000,
    currency: "ARS",
    description:
      "Volante deportivo forrado en Alcantara con costura de contraste y marca central en la posición 12, diseñado para máximo grip en uso intensivo.",
    specs: [
      { label: "Diámetro", value: "350 mm" },
      { label: "Material grip", value: "Alcantara" },
      { label: "Marca central", value: "Sí" },
      { label: "Peso", value: "1.1 kg" },
    ],
    material: "Alcantara",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-volante-flatbottom-vorsteiner",
    slug: "volante-carbono-flat-bottom-vorsteiner",
    name: "Volante Carbono Flat Bottom",
    brandId: "brand-vorsteiner",
    categoryId: "cat-volantes",
    compatibleWith: ["BMW M2 F87", "BMW M3 F80", "BMW M4 F82"],
    price: 142000,
    currency: "ARS",
    description:
      "Volante flat bottom con aro en fibra de carbono expuesta y sección inferior recortada para mayor espacio en ingreso/egreso y postura de manejo.",
    specs: [
      { label: "Diámetro", value: "345 mm" },
      { label: "Material aro", value: "Fibra de carbono" },
      { label: "Marca central", value: "Sí" },
      { label: "Peso", value: "1.3 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
  },
  {
    id: "prod-volante-banda-mode",
    slug: "volante-alcantara-banda-central-mode-carbon",
    name: "Volante Alcantara con Banda Central",
    brandId: "brand-mode-carbon",
    categoryId: "cat-volantes",
    compatibleWith: ["Universal (adaptador requerido)"],
    price: 112000,
    currency: "ARS",
    description:
      "Volante con banda central en fibra de carbono y cuerpo en Alcantara, referencia visual de la posición del volante en todo momento durante uso en pista.",
    specs: [
      { label: "Diámetro", value: "350 mm" },
      { label: "Material grip", value: "Alcantara" },
      { label: "Banda central", value: "Fibra de carbono" },
      { label: "Peso", value: "1.2 kg" },
    ],
    material: "Alcantara / Fibra de carbono",
    inStock: false,
  },

  // Lips
  {
    id: "prod-lip-delantero-vorsteiner",
    slug: "lip-delantero-carbono-vorsteiner",
    name: "Lip Delantero Carbono",
    brandId: "brand-vorsteiner",
    categoryId: "cat-lips",
    compatibleWith: ["BMW M3 G80", "BMW M4 G82"],
    price: 176000,
    currency: "ARS",
    description:
      "Lip delantero en fibra de carbono que se integra al paragolpes de fábrica, mejorando el splitter frontal y reduciendo el lift a alta velocidad.",
    specs: [
      { label: "Material", value: "Fibra de carbono" },
      { label: "Compatibilidad", value: "Paragolpes M Performance" },
      { label: "Montaje", value: "Clips OEM + soportes" },
      { label: "Peso", value: "2.5 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-lip-trasero-mode",
    slug: "lip-trasero-splitter-mode-carbon",
    name: "Lip Trasero Splitter",
    brandId: "brand-mode-carbon",
    categoryId: "cat-lips",
    compatibleWith: ["Audi RS6 C8", "Audi RS7 C8"],
    price: 198000,
    currency: "ARS",
    description:
      "Splitter trasero en fibra de carbono que enmarca el difusor y las salidas de escape, aportando un perfil más agresivo y funcional.",
    specs: [
      { label: "Material", value: "Fibra de carbono" },
      { label: "Montaje", value: "Adhesivo 3M VHB + soportes" },
      { label: "Peso", value: "2.0 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
  },
  {
    id: "prod-lip-delantero-apex",
    slug: "lip-delantero-performance-apex",
    name: "Lip Delantero Performance",
    brandId: "brand-apex",
    categoryId: "cat-lips",
    compatibleWith: ["Mercedes-AMG C63 W205"],
    price: 134000,
    currency: "ARS",
    description:
      "Lip delantero de perfil bajo que optimiza el flujo de aire hacia los radiadores y frenos, con acabado en ABS reforzado listo para pintar.",
    specs: [
      { label: "Material", value: "ABS reforzado" },
      { label: "Acabado", value: "Listo para pintar" },
      { label: "Montaje", value: "Tornillería incluida" },
      { label: "Peso", value: "1.8 kg" },
    ],
    material: "ABS reforzado",
    inStock: true,
  },

  // Difusores
  {
    id: "prod-difusor-vorsteiner",
    slug: "difusor-trasero-carbono-vorsteiner",
    name: "Difusor Trasero Carbono",
    brandId: "brand-vorsteiner",
    categoryId: "cat-difusores",
    compatibleWith: ["BMW M4 G82"],
    price: 210000,
    currency: "ARS",
    description:
      "Difusor trasero de 3 aletas en fibra de carbono que acelera la salida de aire desde el piso plano, reduciendo turbulencia detrás del auto.",
    specs: [
      { label: "Material", value: "Fibra de carbono" },
      { label: "Aletas", value: "3" },
      { label: "Montaje", value: "Atornillado al paragolpes" },
      { label: "Peso", value: "2.9 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-difusor-mode",
    slug: "difusor-trasero-track-mode-carbon",
    name: "Difusor Trasero Track",
    brandId: "brand-mode-carbon",
    categoryId: "cat-difusores",
    compatibleWith: ["Porsche 911 992"],
    price: 232000,
    currency: "ARS",
    description:
      "Difusor de uso en pista con canales profundos y aletas verticales reforzadas, pensado para autos con puesta a punto de suspensión baja.",
    specs: [
      { label: "Material", value: "Fibra de carbono" },
      { label: "Aletas", value: "5" },
      { label: "Montaje", value: "Soportes reforzados" },
      { label: "Peso", value: "3.6 kg" },
    ],
    material: "Fibra de carbono",
    inStock: true,
  },
  {
    id: "prod-difusor-apex",
    slug: "difusor-central-performance-apex",
    name: "Difusor Central Performance",
    brandId: "brand-apex",
    categoryId: "cat-difusores",
    compatibleWith: ["Audi RS3 8Y"],
    price: 121000,
    currency: "ARS",
    description:
      "Difusor central que reemplaza la pieza inferior trasera de fábrica, integrando las salidas de escape en un diseño más agresivo.",
    specs: [
      { label: "Material", value: "ABS reforzado" },
      { label: "Acabado", value: "Textura negro mate" },
      { label: "Montaje", value: "Clips OEM" },
      { label: "Peso", value: "1.6 kg" },
    ],
    material: "ABS reforzado",
    inStock: true,
  },

  // Escapes
  {
    id: "prod-escape-evolution-akrapovic",
    slug: "escape-evolution-line-titanio-akrapovic",
    name: "Escape Evolution Line Titanio",
    brandId: "brand-akrapovic",
    categoryId: "cat-escapes",
    compatibleWith: ["Porsche 911 992"],
    price: 890000,
    currency: "ARS",
    description:
      "Sistema de escape completo en titanio grado aeroespacial, hasta 40% más liviano que el sistema OEM, con sonido característico Akrapovič y puntas en carbono.",
    specs: [
      { label: "Material", value: "Titanio" },
      { label: "Puntas", value: "Fibra de carbono" },
      { label: "Reducción de peso", value: "-8.5 kg vs OEM" },
      { label: "Homologación", value: "ECE" },
    ],
    material: "Titanio",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-escape-slipon-akrapovic",
    slug: "escape-slip-on-line-carbono-akrapovic",
    name: "Escape Slip-On Line Carbono",
    brandId: "brand-akrapovic",
    categoryId: "cat-escapes",
    compatibleWith: ["BMW M3 G80", "BMW M4 G82"],
    price: 620000,
    currency: "ARS",
    description:
      "Slip-on de instalación directa sobre el sistema de fábrica, con silenciadores en fibra de carbono y notable ganancia de sonido y caudal.",
    specs: [
      { label: "Material", value: "Acero inoxidable / Carbono" },
      { label: "Instalación", value: "Slip-on (sin soldadura)" },
      { label: "Ganancia de potencia", value: "+6 HP" },
    ],
    material: "Acero inoxidable / Fibra de carbono",
    inStock: true,
  },
  {
    id: "prod-escape-catback-milltek",
    slug: "escape-catback-non-resonated-milltek",
    name: "Escape Cat-Back Non-Resonated",
    brandId: "brand-milltek",
    categoryId: "cat-escapes",
    compatibleWith: ["Audi RS3 8Y"],
    price: 540000,
    currency: "ARS",
    description:
      "Sistema cat-back non-resonated en acero inoxidable T304, con el característico crackle y pop de Milltek Sport en desaceleración.",
    specs: [
      { label: "Material", value: "Acero inoxidable T304" },
      { label: "Versión", value: "Non-resonated" },
      { label: "Puntas", value: "Cerámica negra 100 mm" },
    ],
    material: "Acero inoxidable",
    inStock: true,
    featured: true,
  },
  {
    id: "prod-escape-valvetronic-armytrix",
    slug: "escape-valvetronic-armytrix",
    name: "Escape Valvetronic",
    brandId: "brand-armytrix",
    categoryId: "cat-escapes",
    compatibleWith: ["Mercedes-AMG C63 W205"],
    price: 710000,
    currency: "ARS",
    description:
      "Sistema con válvulas electrónicas controlables desde app, permitiendo alternar entre modo silencioso y modo performance según la ocasión.",
    specs: [
      { label: "Material", value: "Acero inoxidable" },
      { label: "Control", value: "Válvulas electrónicas + app" },
      { label: "Modos de sonido", value: "4" },
    ],
    material: "Acero inoxidable",
    inStock: true,
  },
  {
    id: "prod-escape-raceline-akrapovic",
    slug: "escape-race-line-titanio-akrapovic",
    name: "Escape Race Line Titanio",
    brandId: "brand-akrapovic",
    categoryId: "cat-escapes",
    compatibleWith: ["Audi RS6 C8"],
    price: 950000,
    currency: "ARS",
    description:
      "Línea de competición sin homologación de calle, pensada para uso exclusivo en pista, con la máxima reducción de peso posible.",
    specs: [
      { label: "Material", value: "Titanio" },
      { label: "Uso", value: "Solo pista" },
      { label: "Reducción de peso", value: "-11 kg vs OEM" },
    ],
    material: "Titanio",
    inStock: false,
  },
  {
    id: "prod-escape-catback-golfr-milltek",
    slug: "escape-catback-resonated-golf-r-milltek",
    name: "Escape Cat-Back Resonated",
    brandId: "brand-milltek",
    categoryId: "cat-escapes",
    compatibleWith: ["Volkswagen Golf R Mk8"],
    price: 480000,
    currency: "ARS",
    description:
      "Versión resonated para un tono más contenido en uso diario, sin perder el carácter deportivo distintivo de Milltek Sport.",
    specs: [
      { label: "Material", value: "Acero inoxidable T304" },
      { label: "Versión", value: "Resonated" },
      { label: "Puntas", value: "Cerámica negra 90 mm" },
    ],
    material: "Acero inoxidable",
    inStock: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
