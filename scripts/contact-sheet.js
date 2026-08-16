const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BASE = "C:/Users/juli/Desktop/archivos espoff";
const OUT_DIR = path.join(__dirname, "..", "..", "contact-sheets");

const cars = [
  { slug: "audi-a5-s-line", dir: "Audi A5 S Line/Fotos" },
  { slug: "audi-rsq8", dir: "Audi RSQ8/Fotos" },
  { slug: "bmw-m135i-xdrive", dir: "BMW M135i XDrive/Fotos" },
  { slug: "bmw-m240i-g42", dir: "BMW M240i G42/Publicación" },
  { slug: "bmw-m240i", dir: "BMW M240i/Fotos" },
  { slug: "bmw-m340i-xdrive", dir: "BMW M340i XDrive" },
  { slug: "bmw-i8", dir: "BMW i8/Fotos" },
  { slug: "ford-ranger-raptor", dir: "Ford Ranger Raptor/Publicación" },
  { slug: "toyota-corolla", dir: "Toyota Corolla" },
  { slug: "volkswagen-amarok-v6", dir: "Volkswagen Amarok V6/Fotos" },
  { slug: "volkswagen-golf-gti", dir: "Volkswagen Golf GTI Mk7.5 (Frankkaster)/Fotos" },
  { slug: "volkswagen-polo-gts", dir: "Volkswagen Polo GTS" },
  { slug: "volkswagen-scirocco", dir: "Volkswagen Scirocco" },
  { slug: "bmw-220i", dir: "bmw 220i -20260716T224511Z-1-001/bmw 220i/fotos editadas" },
  { slug: "vw-up-pepper", dir: "vw up pepper-20260716T224507Z-1-001/vw up pepper/fotos up" },
];

function listImages(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
    .map((e) => path.join(dir, e.name))
    .sort();
}

function evenSample(arr, n) {
  if (arr.length <= n) return arr;
  const step = arr.length / n;
  return Array.from({ length: n }, (_, i) => arr[Math.floor(i * step)]);
}

const TILE = 220;
const COLS = 6;

async function buildSheet(car) {
  const srcDir = path.join(BASE, car.dir);
  const files = evenSample(listImages(srcDir), 24);
  const rows = Math.ceil(files.length / COLS);

  const tiles = await Promise.all(
    files.map(async (f, i) => {
      const buf = await sharp(f)
        .resize(TILE, TILE, { fit: "cover" })
        .jpeg({ quality: 65 })
        .toBuffer();
      return {
        input: buf,
        left: (i % COLS) * TILE,
        top: Math.floor(i / COLS) * TILE,
      };
    })
  );

  const canvas = sharp({
    create: {
      width: COLS * TILE,
      height: rows * TILE,
      channels: 3,
      background: "#111",
    },
  }).composite(tiles);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, `${car.slug}.jpg`);
  await canvas.jpeg({ quality: 70 }).toFile(outPath);
  console.log(car.slug, files.length, "->", outPath);
}

(async () => {
  for (const car of cars) {
    await buildSheet(car).catch((e) => console.error(car.slug, e.message));
  }
})();
