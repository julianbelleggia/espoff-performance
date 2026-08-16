import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { partnerBrands } from "@/lib/data/partner-brands";

export const metadata = {
  title: "Nosotros | ESPOFF Performance",
};

const values = [
  {
    title: "Marcas originales",
    description:
      "Directo con las marcas líderes del performance: Akrapovič, Milltek, HKS, Brabus y muchas más. Nada de réplicas.",
  },
  {
    title: "Asesoramiento real",
    description:
      "Te ayudamos a elegir la pieza correcta para tu modelo: compatibilidad, terminación e instalación.",
  },
  {
    title: "Pasión por el auto",
    description:
      "Somos entusiastas del tuning. Cada pieza que vendemos es una que nos gustaría tener en nuestro propio auto.",
  },
];

export default function NosotrosPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:pl-[88px] lg:pr-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-x-[72px] gap-y-14">
          <div
            className="min-w-0 @container"
            style={{ animation: "rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            <p className="m-0 max-w-[42ch] text-lg font-light leading-[1.72] text-white/60">
              Tienda especializada en accesorios de alto rendimiento:
              spoilers, volantes, lips, difusores y escapes de las marcas
              más reconocidas del automovilismo. Trabajamos con dueños que
              no se conforman con lo de fábrica.
            </p>

            <div
              className="mt-[52px] flex flex-col"
              style={{
                animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.6s both",
              }}
            >
              <div
                className="h-px origin-left bg-white/[0.14]"
                style={{
                  animation:
                    "hair 0.9s cubic-bezier(0.16,1,0.3,1) 0.66s both",
                }}
              />
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col gap-2.5 border-b border-white/[0.14] px-1.5 py-6"
                >
                  <span className="font-hero text-[min(6cqw,34px)] font-extrabold uppercase tracking-[-0.03em] text-white">
                    {v.title}
                  </span>
                  <span className="text-[15px] font-light leading-[1.7] text-white/55">
                    {v.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="min-w-0"
            style={{ animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}
          >
            <p className="m-0 mb-5 font-nav text-[9px] uppercase tracking-[0.26em] text-white/35">
              Qué trabajamos
            </p>
            <div className="flex flex-col">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/catalogo/${c.slug}`}
                  className="group flex items-center justify-between gap-4 border-t border-white/[0.08] py-[17px] pl-0.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white/78 transition-[padding-left,color] duration-300 hover:pl-3 hover:text-white"
                >
                  {c.name}
                  <span className="font-nav text-[11px] text-primary/70 transition-colors group-hover:text-primary">
                    →
                  </span>
                </Link>
              ))}
              <Link
                href="/catalogo"
                className="flex items-center justify-between gap-4 border-t border-b border-white/[0.08] py-[17px] font-nav text-[11px] uppercase tracking-[0.2em] text-primary/75 transition-colors hover:text-primary"
              >
                Ver todo <span>→</span>
              </Link>
            </div>

            <div className="mt-[26px] flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.24em] text-white/40">
              <span className="animate-breathe inline-block h-1.5 w-1.5 bg-primary" />
              {partnerBrands.length} marcas partner · envíos a todo el país
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
