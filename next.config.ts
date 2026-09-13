import path from "path";
import type { NextConfig } from "next";

// Sitio 100% estático: sin API routes, sin forms, sin scripts de terceros,
// sin fetch externo. Esto permite una CSP estricta sin nonces (que forzarían
// render dinámico en todas las páginas). Sin nonces, Next necesita
// 'unsafe-inline' en script-src (así lo documenta Next.js): el HTML incluye
// scripts inline propios del framework (bootstrap de hidratación, payload
// RSC) que si no, el navegador bloquea — React nunca hidrata y se rompe
// toda interacción (clicks, loop del hero, etc). style-src también necesita
// 'unsafe-inline' porque varios componentes usan el atributo style={{...}}.
const isDev = process.env.NODE_ENV === "development";

// En desarrollo, Turbopack/webpack y React usan eval() para HMR y para
// reconstruir stack traces con más detalle. No se necesita en producción.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  media-src 'self';
  connect-src 'self'${isDev ? " ws:" : ""};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspHeader },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
