export const catalogLinks = [
  { label: "Alerones", href: "/catalogo/alerones" },
  { label: "Volantes", href: "/catalogo/volantes" },
  {
    label: "Lips",
    children: [
      { label: "Delanteros", href: "/catalogo/lips?tipo=delantero" },
      { label: "Traseros", href: "/catalogo/lips?tipo=trasero" },
    ],
  },
  { label: "Difusores", href: "/catalogo/difusores" },
  { label: "Escapes", href: "/catalogo/escapes" },
  {
    label: "Servicios",
    children: [
      { label: "Tuning de Software", href: "/servicios/tuning-de-software" },
    ],
  },
] as const;
