import Image from "next/image";
import { socials } from "@/lib/data/socials";

export const metadata = {
  title: "Contacto | ESPOFF Performance",
};

const EMAIL = "espoffperformance@gmail.com";

const whatsapp = socials.find((s) => s.name === "WhatsApp")!;
const instagram = socials.find((s) => s.name === "Instagram")!;

const socialLinks = [
  { label: "WhatsApp", href: whatsapp.href },
  { label: "Instagram", href: instagram.href },
];

export default function ContactoPage() {
  return (
    <section className="relative -mt-20 h-screen min-h-[640px] w-full overflow-hidden bg-black sm:-mt-24">
      <Image
        src="/images/contacto-hero.jpg"
        alt="BMW M240i preparado por ESPOFF Performance"
        fill
        // La sección es mucho más angosta que alta en celular (aspect
        // ratio de retrato) mientras la foto es panorámica (16:9), así que
        // object-cover la recorta mucho más de lo que "100vw" sugiere: el
        // ancho realmente visible en pantalla es varias veces el ancho del
        // viewport. Sin este ajuste, el navegador pide una imagen
        // demasiado chica para ese recorte y se ve borrosa.
        sizes="(max-width: 768px) 300vw, 100vw"
        quality={90}
        priority
        className="object-cover scale-110"
        style={{
          filter: "saturate(0.92) contrast(1.05) brightness(0.82) blur(6px)",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 text-center">
        <h1 className="m-0 max-w-[15ch] text-balance font-hero text-[clamp(2.25rem,8vw,70px)] leading-[1.1] tracking-[-0.045em] text-white">
          <span className="block overflow-hidden py-[0.08em]">
            <span
              className="block"
              style={{
                animation:
                  "clip-up 1.15s cubic-bezier(0.16,1,0.3,1) 0.2s both",
              }}
            >
              ¿QUERES ARMAR
            </span>
            <span
              className="block"
              style={{
                animation:
                  "clip-up 1.15s cubic-bezier(0.16,1,0.3,1) 0.34s both",
              }}
            >
              TU AUTO?
            </span>
          </span>
        </h1>

        <div
          className="flex flex-col items-center gap-5"
          style={{ animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          <div className="h-[2px] w-16 bg-white/30" />
          <a
            href={`mailto:${EMAIL}`}
            className="group relative block h-[1em] overflow-hidden font-satoshi text-[13px] uppercase leading-none tracking-[0.18em] sm:text-base"
          >
            <span className="flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.14,1,0.34,1)] group-hover:-translate-y-1/2">
              <span className="block text-white/90">{EMAIL}</span>
              <span aria-hidden="true" className="block text-white">
                {EMAIL}
              </span>
            </span>
          </a>
          <div className="h-[2px] w-16 bg-white/30" />
        </div>

        <div
          className="flex items-center gap-8"
          style={{ animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.65s both" }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[1em] overflow-hidden font-satoshi text-[13px] uppercase leading-none tracking-[0.26em] sm:text-base"
            >
              {/* Same flip-reveal mechanic as the navbar links: two stacked
                  copies in a one-line-tall box, sliding up on hover instead
                  of changing to the accent color. */}
              <span className="flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.14,1,0.34,1)] group-hover:-translate-y-1/2">
                <span className="block text-white/80">{s.label}</span>
                <span aria-hidden="true" className="block text-white">
                  {s.label}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
