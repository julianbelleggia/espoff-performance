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

export default function ContactoPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:pl-[88px] lg:pr-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-x-[72px] gap-y-14">
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
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border border-white/20 text-white/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
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
            <p className="m-0 mb-5 font-nav text-[9px] uppercase tracking-[0.26em] text-white/35">
              Datos útiles
            </p>
            <div className="grid grid-cols-2 gap-x-9">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-3 border-t border-white/[0.14] py-[26px]"
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

            <div className="mt-11 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/g-m340i.jpg"
                alt="Taller ESPOFF Performance"
                className="block aspect-[16/10] w-full object-cover"
                style={{ filter: "saturate(0.9) contrast(1.03) brightness(0.9)" }}
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]" />
            </div>

            <div className="mt-[26px] flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.24em] text-white/40">
              <span className="animate-breathe inline-block h-1.5 w-1.5 bg-primary" />
              Respondiendo consultas ahora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
