"use client";

import Link from "next/link";
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
        className="group absolute left-2 top-1/2 z-50 -translate-y-1/2"
        onMouseEnter={playLogoGlitch}
        onMouseLeave={resetLogoGlitch}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.svg"
          alt="Logo"
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

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-8 pl-16 font-nav sm:pl-20 md:flex">
          <Link
            href="/proyectos"
            className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:text-foreground"
          >
            Proyectos
          </Link>
          <Link
            href="/nosotros"
            className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:text-foreground"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>
      </div>

      <div className="absolute right-2 top-0 z-50 flex h-20 items-center gap-2 sm:h-24">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <nav
        className={cn(
          "border-t border-border/50 bg-background/95 backdrop-blur-sm md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          <Link
            href="/proyectos"
            className="py-2 text-sm text-foreground/80"
            onClick={closeMobileMenu}
          >
            Proyectos
          </Link>
          <Link
            href="/nosotros"
            className="py-2 text-sm text-foreground/80"
            onClick={closeMobileMenu}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="py-2 text-sm text-foreground/80"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
