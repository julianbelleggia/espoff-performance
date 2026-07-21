import type { Brand } from "@/lib/types";

export const brands: Brand[] = [
  { id: "brand-oz-racing", slug: "oz-racing", name: "OZ Racing", origin: "Italia" },
  { id: "brand-bbs", slug: "bbs", name: "BBS", origin: "Alemania" },
  { id: "brand-enkei", slug: "enkei", name: "ENKEI", origin: "Japón" },
  { id: "brand-akrapovic", slug: "akrapovic", name: "Akrapovič", origin: "Eslovenia" },
  { id: "brand-milltek", slug: "milltek", name: "Milltek Sport", origin: "Reino Unido" },
  { id: "brand-remus", slug: "remus", name: "Remus Systems", origin: "Austria" },
  { id: "brand-boost-logic", slug: "boost-logic", name: "Boost Logic", origin: "Estados Unidos" },
  { id: "brand-vorsteiner", slug: "vorsteiner", name: "Vorsteiner", origin: "Estados Unidos" },
  { id: "brand-mode-carbon", slug: "mode-carbon", name: "Mode Carbon", origin: "Reino Unido" },
  { id: "brand-apex", slug: "apex", name: "APEX Performance", origin: "Casa" },
  { id: "brand-ohc", slug: "ohc", name: "OHC", origin: "Reino Unido" },
  { id: "brand-form-industries", slug: "form-industries", name: "FORM Industries", origin: "Reino Unido" },
  { id: "brand-bmw-m-performance", slug: "bmw-m-performance", name: "BMW M Performance", origin: "Alemania" },
  { id: "brand-jqwerks", slug: "jqwerks", name: "JQWerks", origin: "Taiwán" },
  { id: "brand-3ddesign", slug: "3ddesign", name: "3DDesign", origin: "Alemania" },
  { id: "brand-zaero", slug: "zaero", name: "Zaero Design", origin: "Reino Unido" },
  { id: "brand-trevora", slug: "trevora", name: "TREVORA", origin: "Reino Unido" },
  { id: "brand-adro", slug: "adro", name: "Adro", origin: "Estados Unidos" },
  { id: "brand-ct-design", slug: "ct-design", name: "CT Design", origin: "Alemania" },
  { id: "brand-urban-automotive", slug: "urban-automotive", name: "Urban Automotive", origin: "Reino Unido" },
  { id: "brand-automotive-passion", slug: "automotive-passion", name: "Automotive Passion", origin: "Alemania" },
  { id: "brand-prior-design", slug: "prior-design", name: "Prior Design", origin: "Alemania" },
  { id: "brand-streethunter", slug: "streethunter", name: "StreetHunter Designs", origin: "Estados Unidos" },
  { id: "brand-acexxon", slug: "acexxon", name: "Acexxon Motorsports", origin: "Reino Unido" },
  { id: "brand-sterckenn", slug: "sterckenn", name: "Sterckenn", origin: "Países Bajos" },
  { id: "brand-alpha-n", slug: "alpha-n", name: "Alpha-N", origin: "Alemania" },
  { id: "brand-sq", slug: "sq", name: "SQ", origin: "Reino Unido" },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id);
}
