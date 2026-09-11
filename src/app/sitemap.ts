import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { CATALOG_ENABLED } from "@/lib/feature-flags";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...(CATALOG_ENABLED
      ? [
          {
            url: `${SITE_URL}/catalogo`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.9,
          },
        ]
      : []),
    {
      url: `${SITE_URL}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/proyectos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/servicios/tuning-de-software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  if (!CATALOG_ENABLED) {
    // Catálogo, categorías y fichas de producto están detrás del feature
    // flag (el sitio funciona hoy como landing) — no tiene sentido
    // ofrecerle a Google links que hoy devuelven 404.
    return staticRoutes;
  }

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE_URL}/catalogo/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/producto/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
