const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BASE = "C:/Users/juli/Desktop/archivos espoff";
const OUT_BASE = path.join(__dirname, "..", "public", "images", "galeria");

const cars = [
  { slug: "audi-a5-s-line", name: "Audi A5 S Line", dir: "Audi A5 S Line/FEED" },
  { slug: "audi-rsq8", name: "Audi RSQ8", dir: "Audi RSQ8/Fotos", sample: 10 },
  { slug: "bmw-m135i-xdrive", name: "BMW M135i XDrive", dir: "BMW M135i XDrive/Fotos", sample: 10 },
  { slug: "bmw-m240i-g42", name: "BMW M240i G42", dir: "BMW M240i G42/Publicación" },
  { slug: "bmw-m240i", name: "BMW M240i", dir: "BMW M240i/Fotos/FEED" },
  { slug: "bmw-m340i-xdrive", name: "BMW M340i XDrive", dir: "BMW M340i XDrive", sample: 10 },
  { slug: "bmw-i8", name: "BMW i8", dir: "BMW i8/Fotos/Publicación" },
  { slug: "ford-ranger-raptor", name: "Ford Ranger Raptor", dir: "Ford Ranger Raptor/Publicación" },
  { slug: "toyota-corolla", name: "Toyota Corolla", dir: "Toyota Corolla", sample: 10 },
  { slug: "volkswagen-amarok-v6", name: "Volkswagen Amarok V6", dir: "Volkswagen Amarok V6/Instagram" },
  { slug: "volkswagen-golf-gti", name: "Volkswagen Golf GTI Mk7.5", dir: "Volkswagen Golf GTI Mk7.5 (Frankkaster)/Fotos/FEED/POST" },
  { slug: "volkswagen-polo-gts", name: "Volkswagen Polo GTS", dir: "Volkswagen Polo GTS", sample: 10 },
  { slug: "volkswagen-scirocco", name: "Volkswagen Scirocco", dir: "Volkswagen Scirocco", sample: 10 },
  { slug: "bmw-220i", name: "BMW 220i", dir: "bmw 220i -20260716T224511Z-1-001/bmw 220i/fotos editadas", sample: 10 },
  { slug: "vw-up-pepper", name: "Volkswagen Up! Pepper", dir: "vw up pepper-20260716T224507Z-1-001/vw up pepper/fotos up", sample: 12 },
  { slug: "vento-gli", name: "Volkswagen Vento GLI", dir: "Vento GLI/Feed" },
];

function listImages(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => path.join(dir, name));
}

function evenSample(arr, n) {
  if (arr.length <= n) return arr;
  const step = arr.length / n;
  const picked = [];
  for (let i = 0; i < n; i++) {
    picked.push(arr[Math.floor(i * step)]);
  }
  return picked;
}

async function run() {
  const manifest = [];
  for (const car of cars) {
    const srcDir = path.join(BASE, car.dir);
    let files = listImages(srcDir);
    if (car.sample) files = evenSample(files, car.sample);
    const outDir = path.join(OUT_BASE, car.slug);
    fs.mkdirSync(outDir, { recursive: true });
    const photos = [];
    for (let i = 0; i < files.length; i++) {
      const outName = `${i + 1}.jpg`;
      const outPath = path.join(outDir, outName);
      await sharp(files[i])
        .resize({ width: 2000, withoutEnlargement: true })
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(outPath);
      photos.push(`/images/galeria/${car.slug}/${outName}`);
    }
    manifest.push({ slug: car.slug, name: car.name, photos });
    console.log(`${car.name}: ${photos.length} photos`);
  }
  fs.writeFileSync(
    path.join(__dirname, "gallery-manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("Done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
