import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ancla la raíz del workspace a esta carpeta: sin esto, Next.js "adivina"
  // la raíz al detectar otro lockfile en una carpeta superior (C:\Users\julia),
  // lo que puede resolver mal en el build de producción.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Requerido desde Next.js 16: las calidades permitidas para next/image.
    qualities: [75, 90],
  },
};

export default nextConfig;
