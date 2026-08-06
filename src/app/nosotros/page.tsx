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

const tickerItems = Array.from({ length: 12 });

export default function NosotrosPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.045) 0 1px, transparent 1px 12.5%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 0% 100%, rgba(255,255,255,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 12deg at 30% 70%, rgba(255,255,255,0.05) 0deg 2deg, transparent 2deg 5deg), repeating-linear-gradient(63deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 4px), repeating-linear-gradient(153deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 3px)",
          backgroundSize: "180px 180px, auto, auto",
        }}
      />

      <div
        className="pointer-events-none absolute left-[22px] top-1/2 hidden -translate-y-1/2 rotate-180 font-nav text-[10px] uppercase tracking-[0.42em] text-white/30 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Espoff Performance — Buenos Aires
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:pl-[88px] lg:pr-12">
        <nav
          aria-label="Ruta"
          className="flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.26em] text-white/40"
          style={{ animation: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <Link href="/" className="transition-colors hover:text-white">
            Inicio
          </Link>
          <span className="text-primary">—</span>
          <span className="text-white/85">Nosotros</span>
        </nav>

        <div className="relative mt-11 grid grid-cols-[minmax(0,1fr)_min(26cqw,280px)] items-start gap-10 @container">
          <h1 className="m-0 @container font-hero font-black uppercase leading-[0.84] tracking-[-0.045em] text-white">
            <span className="block overflow-hidden">
              <span
                className="block text-[min(20.5cqw,200px)]"
                style={{
                  animation: "clip-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.1s both",
                }}
              >
                Noso
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="flex items-baseline gap-[0.06em] text-[min(20.5cqw,200px)] tracking-[0.035em]"
                style={{
                  animation:
                    "clip-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.24s both",
                }}
              >
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.2px rgba(255,255,255,0.6)",
                  }}
                >
                  tros
                </span>
                <span className="text-primary">.</span>
              </span>
            </span>
          </h1>

          <div
            className="w-full"
            style={{
              animation: "plate 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s both",
            }}
          >
            <div className="relative overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/showcase-m135i.jpg"
                alt="Proyecto ESPOFF Performance"
                className="block aspect-[4/5] w-full object-cover"
                style={{ filter: "grayscale(1) contrast(1.15) brightness(0.78)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(200deg, rgba(200,32,32,0.28) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-0 left-0 bg-primary px-3 py-2 font-nav text-[9px] uppercase tracking-[0.22em] text-white">
                Proyecto M135i
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[76px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-x-[72px] gap-y-14">
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
            <div className="grid grid-cols-2 border-l border-t border-white/[0.14]">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/catalogo/${c.slug}`}
                  className="flex items-center border-b border-r border-white/[0.14] px-[18px] py-5 font-hero text-sm font-bold uppercase tracking-[0.01em] text-white/80 transition-colors hover:bg-primary/90 hover:text-white"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/catalogo"
                className="flex items-center border-b border-r border-white/[0.14] px-[18px] py-5 font-nav text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
              >
                Ver todo →
              </Link>
            </div>

            <div className="mt-[26px] flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.24em] text-white/40">
              <span className="animate-breathe inline-block h-1.5 w-1.5 bg-primary" />
              {partnerBrands.length} marcas partner · envíos a todo el país
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/catalogo"
        aria-label="Ver catálogo"
        className="relative mt-[88px] block overflow-hidden bg-primary py-[22px] text-white transition-colors hover:bg-primary/85"
      >
        <div
          className="animate-marquee flex w-max items-center gap-[34px]"
          style={{ animationDuration: "26s" }}
        >
          {[...tickerItems, ...tickerItems].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-[34px] whitespace-nowrap font-hero text-xl font-extrabold uppercase tracking-wide"
            >
              Ver catálogo
              <span className="font-nav text-sm font-normal opacity-70">/</span>
            </span>
          ))}
        </div>
      </Link>
    </section>
  );
}
