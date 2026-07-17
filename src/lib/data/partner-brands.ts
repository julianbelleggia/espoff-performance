export type PartnerBrand = {
  name: string;
  slug: string;
  category: string;
};

// Agrupadas por categoría: escapes, bodykit/carbono, llantas, racing/interior,
// tuning de software, detailing y retailer de repuestos.
export const partnerBrands: PartnerBrand[] = [
  { name: "Akrapovič", slug: "akrapovic", category: "Escapes" },
  { name: "Milltek Sport", slug: "milltek", category: "Escapes" },
  { name: "Scorpion Exhausts", slug: "scorpion-exhausts", category: "Escapes" },
  { name: "Capristo", slug: "capristo", category: "Escapes" },
  { name: "Supersprint", slug: "supersprint", category: "Escapes" },
  { name: "MagnaFlow", slug: "magnaflow", category: "Escapes" },
  { name: "ArmyTrix", slug: "armytrix", category: "Escapes" },
  { name: "Borla", slug: "borla", category: "Escapes" },
  { name: "HKS", slug: "hks", category: "Escapes" },
  { name: "Eventuri", slug: "eventuri", category: "Admisión" },
  { name: "AutoTecknic", slug: "autotecknic", category: "Bodykit / Carbono" },
  { name: "ADRO", slug: "adro", category: "Bodykit / Carbono" },
  { name: "Brabus", slug: "brabus", category: "Bodykit / Carbono" },
  { name: "ABT", slug: "abt", category: "Bodykit / Carbono" },
  { name: "Maxton Design", slug: "maxton-design", category: "Bodykit / Carbono" },
  { name: "OZ Racing", slug: "oz-racing", category: "Llantas" },
  { name: "BBS", slug: "bbs", category: "Llantas" },
  { name: "Eibach", slug: "eibach", category: "Suspensión" },
  { name: "Sparco", slug: "sparco", category: "Racing / Interior" },
  { name: "bootmod3", slug: "bootmod3", category: "Tuning de software" },
  { name: "CarPro", slug: "carpro", category: "Detailing" },
  { name: "ECS Tuning", slug: "ecs-tuning", category: "Repuestos" },
];
