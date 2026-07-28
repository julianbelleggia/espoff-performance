export type GalleryCar = {
  slug: string;
  name: string;
  photos: string[];
};

export const galleryCars: GalleryCar[] = [
  {
    slug: "audi-a5-s-line",
    name: "Audi A5 S Line",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/audi-a5-s-line/${i + 1}.jpg`),
  },
  {
    slug: "audi-rsq8",
    name: "Audi RSQ8",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/audi-rsq8/${i + 1}.jpg`),
  },
  {
    slug: "bmw-m135i-xdrive",
    name: "BMW M135i XDrive",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-m135i-xdrive/${i + 1}.jpg`),
  },
  {
    slug: "bmw-m240i-g42",
    name: "BMW M240i G42",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-m240i-g42/${i + 1}.jpg`),
  },
  {
    slug: "bmw-m240i",
    name: "BMW M240i",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-m240i/${i + 1}.jpg`),
  },
  {
    slug: "bmw-m340i-xdrive",
    name: "BMW M340i XDrive",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-m340i-xdrive/${i + 1}.jpg`),
  },
  {
    slug: "bmw-i8",
    name: "BMW i8",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-i8/${i + 1}.jpg`),
  },
  {
    slug: "ford-ranger-raptor",
    name: "Ford Ranger Raptor",
    photos: Array.from({ length: 13 }, (_, i) => `/images/galeria/ford-ranger-raptor/${i + 1}.jpg`),
  },
  {
    slug: "toyota-corolla",
    name: "Toyota Corolla",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/toyota-corolla/${i + 1}.jpg`),
  },
  {
    slug: "volkswagen-amarok-v6",
    name: "Volkswagen Amarok V6",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/volkswagen-amarok-v6/${i + 1}.jpg`),
  },
  {
    slug: "volkswagen-golf-gti",
    name: "Volkswagen Golf GTI Mk7.5",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/volkswagen-golf-gti/${i + 1}.jpg`),
  },
  {
    slug: "volkswagen-polo-gts",
    name: "Volkswagen Polo GTS",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/volkswagen-polo-gts/${i + 1}.jpg`),
  },
  {
    slug: "volkswagen-scirocco",
    name: "Volkswagen Scirocco",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/volkswagen-scirocco/${i + 1}.jpg`),
  },
  {
    slug: "bmw-220i",
    name: "BMW 220i",
    photos: Array.from({ length: 10 }, (_, i) => `/images/galeria/bmw-220i/${i + 1}.jpg`),
  },
  {
    slug: "vw-up-pepper",
    name: "Volkswagen Up! Pepper",
    photos: Array.from({ length: 12 }, (_, i) => `/images/galeria/vw-up-pepper/${i + 1}.jpg`),
  },
];
