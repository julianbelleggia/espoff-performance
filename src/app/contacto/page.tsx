import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contacto | ESPOFF Performance",
};

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=541139541545&text=%C2%A1Hola%21%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Me%20comunico%20desde%20Esp%20Off%20Performance";
const INSTAGRAM_HREF = "https://www.instagram.com/espoff.performance/";
const EMAIL = "espoffperformance@gmail.com";

const channels = [
  {
    label: "WhatsApp",
    value: "+54 11 3954 1545 · respuesta en el día",
    href: WHATSAPP_HREF,
  },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    label: "Instagram",
    value: "@espoff.performance · DM abierto",
    href: INSTAGRAM_HREF,
  },
];

const facts = [
  { k: "Horario", v: "Lun a Vie 9—18" },
  { k: "Envíos", v: "Todo el país" },
  { k: "Asesoría", v: "Sin cargo" },
  { k: "Taller", v: "Buenos Aires" },
];

const tickerItems = Array.from({ length: 12 });

export default function ContactoPage() {
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
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\"/></filter><rect width=\"140\" height=\"140\" filter=\"url(%23n)\" opacity=\"0.5\"/></svg>')",
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
          <span className="text-white/85">Contacto</span>
        </nav>

        <div className="relative mt-11 @container">
          <h1 className="m-0 font-hero font-black uppercase leading-[0.82] tracking-[-0.05em] text-white">
            <span className="block overflow-hidden">
              <span
                className="block text-[min(21cqw,216px)]"
                style={{
                  animation: "clip-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.1s both",
                }}
              >
                Contac
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="flex items-baseline gap-[0.06em] text-[min(21cqw,216px)]"
                style={{
                  animation:
                    "clip-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.24s both",
                }}
              >
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.55)",
                  }}
                >
                  tate
                </span>
                <span className="text-primary">.</span>
              </span>
            </span>
          </h1>

          <div
            className="absolute -right-2 -top-3 hidden w-[min(30cqw,300px)] min-[1360px]:block"
            style={{
              animation: "plate 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s both",
            }}
          >
            <div className="relative overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/showcase-m240i-g42.jpg"
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
                Proyecto 240i
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
              Cada proyecto arranca con una conversación. Contanos qué buscás
              —compatibilidad, stock, tiempos de instalación— y te
              asesoramos con criterio antes de que gastes un peso.
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
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b border-white/[0.14] px-1.5 py-6 text-white transition-[padding-left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-[22px]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-primary transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                  />
                  <span className="flex min-w-0 flex-col gap-2">
                    <span className="font-hero text-[min(6cqw,34px)] font-extrabold uppercase tracking-[-0.03em] text-white">
                      {ch.label}
                    </span>
                    <span className="font-nav text-xs tracking-wide text-white/45">
                      {ch.value}
                    </span>
                  </span>
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border border-white/20 text-white/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-[17px] w-[17px]" strokeWidth={1.6} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            className="min-w-0"
            style={{ animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}
          >
            <div className="grid grid-cols-2 border-l border-t border-white/[0.14]">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-3 border-b border-r border-white/[0.14] px-[22px] py-[26px]"
                >
                  <span className="font-nav text-[9px] uppercase tracking-[0.26em] text-white/35">
                    {f.k}
                  </span>
                  <span className="font-hero text-[17px] font-bold uppercase tracking-[-0.01em] text-white">
                    {f.v}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-[26px] flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.24em] text-white/40">
              <span className="animate-breathe inline-block h-1.5 w-1.5 bg-primary" />
              Respondiendo consultas ahora
            </div>
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
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
              Escribinos ahora
              <span className="font-nav text-sm font-normal opacity-70">/</span>
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
