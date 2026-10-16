"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// Catálogo / carrito / moneda: ocultos temporalmente (ver AGENTS/CLAUDE — la
// página funciona por ahora como landing, no como tienda). Componentes y
// rutas se mantienen intactos para reactivar más adelante.
// import { CartSheet } from "@/components/cart/cart-sheet";
// import { CatalogDropdown } from "@/components/layout/catalog-dropdown";
// import { CurrencySwitcher } from "@/components/layout/currency-switcher";
// import { catalogLinks } from "@/lib/data/catalog-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const logoVideoRef = useRef<HTMLVideoElement>(null);
  const lastScrollYRef = useRef(0);

  const playLogoGlitch = () => {
    const video = logoVideoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const resetLogoGlitch = () => {
    const video = logoVideoRef.current;
    if (!video) return;
    video.pause();
    // Deja el video en su cuadro final (el glitch ya asentado), no en el
    // primero (en negro) — así el cross-fade de vuelta al logo estático
    // siempre sale desde el mismo estado "resuelto", sin importar en qué
    // punto del glitch estaba cuando se fue el cursor.
    if (video.duration) video.currentTime = Math.max(0, video.duration - 0.05);
  };

  useEffect(() => {
    // window.scrollY only exists client-side, so this can't be a useState
    // initializer (would break SSR) — it has to sync on mount instead.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHidden(window.scrollY > 0);
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const lastY = lastScrollYRef.current;
      if (mobileOpen || y <= 0) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "animate-fade-up sticky top-0 z-40 transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
        mobileOpen ? "bg-black" : "bg-transparent"
      )}
    >
      <Link
        href="/"
        aria-label="Inicio"
        className="group absolute left-2 top-0 z-50 flex h-20 items-center sm:left-4 sm:h-24"
        onMouseEnter={playLogoGlitch}
        onMouseLeave={resetLogoGlitch}
      >
        {/* Tamaño fijo compartido: la imagen y el video se superponen exacto
            dentro de esta caja en vez de centrarse cada uno por su cuenta
            (el video en position:absolute no participa del items-center del
            Link, así que sin esta caja queda unos px más arriba que el
            logo estático). */}
        <span className="relative block h-16 w-16 sm:h-20 sm:w-20">
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={80}
            height={80}
            preload
            className="h-full w-full opacity-100 transition-opacity duration-150 group-hover:opacity-0"
          />
          <video
            ref={logoVideoRef}
            src="/videos/logo-glitch.webm?v=3"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            // El arte del logo dentro del video ocupa más cuadro que en el
            // SVG estático (menos padding interno) y además está centrado
            // ~1.9% más a la derecha dentro de su propio cuadro — estos dos
            // factores lo compensan para que, asentado, calce con el logo fijo.
            className="pointer-events-none absolute inset-0 h-full w-full scale-[0.71] translate-x-[-1.94%] object-contain opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </span>
      </Link>

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-8 pl-16 font-plex-mono sm:pl-20 md:flex">
          {[
            { href: "/proyectos", label: "Proyectos" },
            { href: "/nosotros", label: "Nosotros" },
            { href: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block h-[1em] overflow-hidden text-[12.8px] font-light uppercase leading-none tracking-[-0.128px]"
            >
              {/* Two stacked copies of the label inside an overflow-hidden,
                  one-line-tall box: on hover the column slides up by half its
                  own height (one line), swapping the dim copy for the full-
                  opacity one underneath instead of just fading a color. */}
              <span className="flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.14,1,0.34,1)] group-hover:-translate-y-1/2">
                <span className="block text-foreground/80">{item.label}</span>
                <span aria-hidden="true" className="block text-foreground">
                  {item.label}
                </span>
              </span>
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border/50 bg-black md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col px-4 py-3 font-plex-mono">
          <Link
            href="/proyectos"
            className="block py-3 text-base font-light uppercase tracking-[-0.128px] text-foreground/80"
            onClick={closeMobileMenu}
          >
            Proyectos
          </Link>
          <Link
            href="/nosotros"
            className="block py-3 text-base font-light uppercase tracking-[-0.128px] text-foreground/80"
            onClick={closeMobileMenu}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block py-3 text-base font-light uppercase tracking-[-0.128px] text-foreground/80"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
