const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BASE = "C:/Users/juli/Desktop/archivos espoff";
const OUT_DIR = path.join(__dirname, "..", "public", "images", "interior");

const shots = [
  { slug: "audi-a5-s-line-1", name: "Audi A5 S Line", file: "Audi A5 S Line/Fotos/Audi-A5_68.jpg" },
  { slug: "audi-a5-s-line-2", name: "Audi A5 S Line", file: "Audi A5 S Line/Fotos/Audi-A5_65.jpg" },
  { slug: "audi-a5-s-line-3", name: "Audi A5 S Line", file: "Audi A5 S Line/Fotos/Audi-A5_66.jpg" },
  { slug: "audi-a5-s-line-4", name: "Audi A5 S Line", file: "Audi A5 S Line/Fotos/Audi-A5_67.jpg" },

  { slug: "bmw-i8-1", name: "BMW i8", file: "BMW i8/Fotos/BMW-i8_42.jpg" },
  { slug: "bmw-i8-2", name: "BMW i8", file: "BMW i8/Fotos/BMW-i8_26.jpg" },
  { slug: "bmw-i8-3", name: "BMW i8", file: "BMW i8/Fotos/BMW-i8_31.jpg" },
  { slug: "bmw-i8-4", name: "BMW i8", file: "BMW i8/Fotos/BMW-i8_64.jpg" },

  { slug: "bmw-m240i-g42-1", name: "BMW M240i G42", file: "BMW M240i G42/Publicación/4.jpg" },
  { slug: "bmw-m240i-g42-2", name: "BMW M240i G42", file: "BMW M240i G42/Publicación/6.jpg" },
  { slug: "bmw-m240i-g42-3", name: "BMW M240i G42", file: "BMW M240i G42/Publicación/3.jpg" },
  { slug: "bmw-m240i-g42-4", name: "BMW M240i G42", file: "BMW M240i G42/Publicación/5.jpg" },
  { slug: "bmw-m240i-g42-5", name: "BMW M240i G42", file: "BMW M240i G42/Publicación/7.jpg" },

  { slug: "bmw-m240i-1", name: "BMW M240i", file: "BMW M240i/Fotos/BMW-M240i_51.jpg" },
  { slug: "bmw-m240i-2", name: "BMW M240i", file: "BMW M240i/Fotos/BMW-M240i_53.jpg" },
  { slug: "bmw-m240i-3", name: "BMW M240i", file: "BMW M240i/Fotos/BMW-M240i_57.jpg" },

  { slug: "bmw-m340i-xdrive-1", name: "BMW M340i XDrive", file: "BMW M340i XDrive/BMW-M340i_69.jpg" },
  { slug: "bmw-m340i-xdrive-2", name: "BMW M340i XDrive", file: "BMW M340i XDrive/BMW-M340i_70.jpg" },
  { slug: "bmw-m340i-xdrive-3", name: "BMW M340i XDrive", file: "BMW M340i XDrive/BMW-M340i_71.jpg" },

  { slug: "ford-ranger-raptor-1", name: "Ford Ranger Raptor", file: "Ford Ranger Raptor/Publicación/6.jpg" },
  { slug: "ford-ranger-raptor-2", name: "Ford Ranger Raptor", file: "Ford Ranger Raptor/Publicación/5.jpg" },

  { slug: "toyota-corolla-1", name: "Toyota Corolla", file: "Toyota Corolla/Toyota-Corolla_52.jpg" },
  { slug: "toyota-corolla-2", name: "Toyota Corolla", file: "Toyota Corolla/Toyota-Corolla_50.jpg" },

  { slug: "volkswagen-amarok-v6-1", name: "Volkswagen Amarok V6", file: "Volkswagen Amarok V6/Fotos/VW-Amarok_31.jpg" },
  { slug: "volkswagen-amarok-v6-2", name: "Volkswagen Amarok V6", file: "Volkswagen Amarok V6/Fotos/VW-Amarok_27.jpg" },
  { slug: "volkswagen-amarok-v6-3", name: "Volkswagen Amarok V6", file: "Volkswagen Amarok V6/Fotos/VW-Amarok_36.jpg" },
  { slug: "volkswagen-amarok-v6-4", name: "Volkswagen Amarok V6", file: "Volkswagen Amarok V6/Fotos/VW-Amarok_39.jpg" },

  { slug: "volkswagen-golf-gti-1", name: "Volkswagen Golf GTI Mk7.5", file: "Volkswagen Golf GTI Mk7.5 (Frankkaster)/Fotos/VW-GOLFGTI_67.jpg" },
  { slug: "volkswagen-golf-gti-2", name: "Volkswagen Golf GTI Mk7.5", file: "Volkswagen Golf GTI Mk7.5 (Frankkaster)/Fotos/VW-GOLFGTI_76.jpg" },
  { slug: "volkswagen-golf-gti-3", name: "Volkswagen Golf GTI Mk7.5", file: "Volkswagen Golf GTI Mk7.5 (Frankkaster)/Fotos/VW-GOLFGTI_80.jpg" },

  { slug: "volkswagen-scirocco-1", name: "Volkswagen Scirocco", file: "Volkswagen Scirocco/VW-Scirocco_36.jpg" },
  { slug: "volkswagen-scirocco-2", name: "Volkswagen Scirocco", file: "Volkswagen Scirocco/VW-Scirocco_40.jpg" },
  { slug: "volkswagen-scirocco-3", name: "Volkswagen Scirocco", file: "Volkswagen Scirocco/VW-Scirocco_48.jpg" },

  { slug: "vw-up-pepper-1", name: "Volkswagen Up! Pepper", file: "vw up pepper-20260716T224507Z-1-001/vw up pepper/fotos up/_DSC8281.jpg" },

  { slug: "vento-gli-1", name: "Volkswagen Vento GLI", file: "Vento GLI/Vento-GLI_02.jpg" },
  { slug: "vento-gli-2", name: "Volkswagen Vento GLI", file: "Vento GLI/Vento-GLI_06.jpg" },
];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const shot of shots) {
    const src = path.join(BASE, shot.file);
    const out = path.join(OUT_DIR, `${shot.slug}.jpg`);
    await sharp(src)
      .resize({ width: 2400, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(out);
    console.log(shot.slug, "->", out);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
