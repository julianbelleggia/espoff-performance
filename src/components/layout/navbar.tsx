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
    video.currentTime = 0;
  };

  useEffect(() => {
    // window.scrollY only exists client-side, so this can't be a useState
    // initializer (would break SSR) — it has to sync on mount instead.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHidden(window.scrollY > 0);

    const handleScroll = () => {
      setHidden(window.scrollY > 0 && !mobileOpen);
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
        <Image
          src="/logo-white.svg"
          alt="Logo"
          width={80}
          height={80}
          preload
          className="h-16 w-16 opacity-100 transition-opacity duration-150 group-hover:opacity-0 sm:h-20 sm:w-20"
        />
        <video
          ref={logoVideoRef}
          src="/videos/logo-glitch.webm?v=3"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-16 w-16 object-contain opacity-0 transition-opacity duration-150 group-hover:opacity-100 sm:h-20 sm:w-20"
        />
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
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <nav
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
