export type PartnerBrand = {
  name: string;
  slug: string;
  category: string;
  /** Intrinsic pixel size of the source PNG — used to size each logo's box to
   * exactly match its rendered footprint (no object-contain letterboxing), so
   * the flex gap between items reads as the same visual spacing for every logo
   * regardless of its own aspect ratio. */
  width: number;
  height: number;
  /** Overrides the default 32px row height for this logo alone (e.g. a round
   * crest like HRE reads as tiny next to wordmarks at the same height). */
  displayHeight?: number;
};

// Agrupadas por categoría: escapes, bodykit/carbono, llantas, racing/interior,
// tuning de software, detailing y retailer de repuestos.
export const partnerBrands: PartnerBrand[] = [
  { name: "Akrapovič", slug: "akrapovic", category: "Escapes", width: 3198, height: 715 },
  { name: "Milltek Sport", slug: "milltek", category: "Escapes", width: 600, height: 150 },
  { name: "Scorpion Exhausts", slug: "scorpion-exhausts", category: "Escapes", width: 3799, height: 915 },
  { name: "Capristo", slug: "capristo", category: "Escapes", width: 4478, height: 969 },
  { name: "Supersprint", slug: "supersprint", category: "Escapes", width: 635, height: 96 },
  { name: "MagnaFlow", slug: "magnaflow", category: "Escapes", width: 3510, height: 311 },
  { name: "ArmyTrix", slug: "armytrix", category: "Escapes", width: 600, height: 114 },
  { name: "Borla", slug: "borla", category: "Escapes", width: 600, height: 205 },
  { name: "HKS", slug: "hks", category: "Escapes", width: 600, height: 214 },
  { name: "Remus", slug: "remus-2", category: "Escapes", width: 472, height: 179 },
  { name: "Valvetronic Designs", slug: "valvetronic", category: "Escapes", width: 1280, height: 312 },
  { name: "RamAir", slug: "ramair", category: "Admisión", width: 1168, height: 216 },
  { name: "Eventuri", slug: "eventuri", category: "Admisión", width: 398, height: 42 },
  { name: "3D Design", slug: "3ddesign", category: "Bodykit / Carbono", width: 360, height: 214 },
  { name: "AutoTecknic", slug: "autotecknic", category: "Bodykit / Carbono", width: 1858, height: 494 },
  { name: "ADRO", slug: "adro", category: "Bodykit / Carbono", width: 1617, height: 574 },
  { name: "Brabus", slug: "brabus", category: "Bodykit / Carbono", width: 1131, height: 184 },
  { name: "ABT", slug: "abt", category: "Bodykit / Carbono", width: 2000, height: 783 },
  { name: "Maxton Design", slug: "maxton-design", category: "Bodykit / Carbono", width: 1406, height: 263 },
  { name: "BMW M Performance", slug: "bmw-m-performance", category: "Bodykit / Carbono", width: 1600, height: 82 },
  { name: "Sterckenn", slug: "sterckenn", category: "Bodykit / Carbono", width: 426, height: 48 },
  { name: "TREVORA", slug: "trevora", category: "Bodykit / Carbono", width: 1600, height: 501 },
  { name: "Urban Automotive", slug: "urban-automotive", category: "Bodykit / Carbono", width: 493, height: 171 },
  { name: "Vorsteiner", slug: "vorsteiner", category: "Bodykit / Carbono", width: 1600, height: 804 },
  { name: "Zaero Design", slug: "zaero-design", category: "Bodykit / Carbono", width: 342, height: 102 },
  { name: "OZ Racing", slug: "oz-racing", category: "Llantas", width: 600, height: 186 },
  { name: "BBS", slug: "bbs", category: "Llantas", width: 5317, height: 1849 },
  { name: "Rotiform", slug: "rotiform", category: "Llantas", width: 1600, height: 495 },
  { name: "FORM Industries", slug: "form-industries", category: "Llantas", width: 1600, height: 389 },
  { name: "HRE Performance Wheels", slug: "hre-2", category: "Llantas", width: 474, height: 423, displayHeight: 46 },
  { name: "Michelin", slug: "michelin", category: "Neumáticos", width: 1600, height: 851 },
  { name: "Eibach", slug: "eibach", category: "Suspensión", width: 3000, height: 916 },
  { name: "H&R", slug: "hr", category: "Suspensión", width: 1600, height: 503 },
  { name: "Nitron", slug: "nitron", category: "Suspensión", width: 1600, height: 471 },
  { name: "Sparco", slug: "sparco", category: "Racing / Interior", width: 3140, height: 792 },
  { name: "Tillett", slug: "tillett", category: "Racing / Interior", width: 836, height: 155 },
  { name: "OHC Motors", slug: "ohc-motors-2", category: "Racing / Interior", width: 152, height: 78 },
  { name: "bootmod3", slug: "bootmod3", category: "Tuning de software", width: 1269, height: 172 },
  { name: "CarPro", slug: "carpro", category: "Detailing", width: 1334, height: 280 },
  { name: "ECS Tuning", slug: "ecs-tuning", category: "Repuestos", width: 471, height: 142 },
];
