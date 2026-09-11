// Dominio real del sitio en producción. Se puede pisar con la env var
// NEXT_PUBLIC_SITE_URL (ej. en Vercel) sin tocar código; este valor es
// sólo el fallback para desarrollo/build local.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://espoffperformance.com";
