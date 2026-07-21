import Link from "next/link";
import { socials } from "@/lib/data/socials";

const links = [
  { label: "Mapa del sitio", href: "/catalogo" },
  { label: "Política de privacidad", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="relative flex min-h-[220px] flex-col md:min-h-[260px] md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-6 py-10 sm:px-10 md:py-12">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="ESPOFF Performance"
              className="h-14 w-14 shrink-0"
            />
            <p className="font-sans text-base font-extrabold uppercase tracking-[-0.01em]">
              ESPOFF Performance
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="max-w-md border-t border-white/15 pt-5">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} ESPOFF Performance. Todos los
            derechos reservados.
          </div>
        </div>

        <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-[45%] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/footer-gti.jpg"
            alt="Volkswagen Golf GTI con alerón de carbono ESPOFF"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
