"use client";

import Link from "next/link";
import Image from "next/image";
import { socials } from "@/lib/data/socials";
import { useReveal } from "@/hooks/use-reveal";

const links = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Términos de uso", href: "/terminos-de-uso" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
];

export function Footer() {
  const { ref: contentRef, style: contentStyle } = useReveal<HTMLDivElement>({
    y: 48,
    duration: 900,
  });
  const { ref: imageRef, style: imageStyle } = useReveal<HTMLDivElement>({
    y: 0,
    scale: 1.15,
    delay: 100,
    duration: 1000,
  });

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="relative flex min-h-[220px] flex-col md:min-h-[260px] md:flex-row">
        <div
          ref={contentRef}
          style={contentStyle}
          className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-6 py-10 sm:px-10 md:py-12"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/logo-white.svg"
              alt="ESPOFF Performance"
              width={56}
              height={56}
              className="h-14 w-14 shrink-0"
            />
          </div>

          <div className="flex flex-col items-start gap-2 font-plex-mono">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.8px] font-light uppercase tracking-[-0.128px] text-white/85 transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="max-w-md border-t border-white/15 pt-5">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 font-plex-mono">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12.8px] font-light uppercase tracking-[-0.128px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="font-plex-mono text-[12.8px] font-light uppercase tracking-[-0.128px] text-white/40">
            © {new Date().getFullYear()} ESPOFF Performance. Todos los
            derechos reservados.
          </div>
        </div>

        <div
          ref={imageRef}
          style={imageStyle}
          className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-[45%] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
        >
          <Image
            src="/images/footer-gti.jpg"
            alt="Volkswagen Golf GTI con alerón de carbono ESPOFF"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
