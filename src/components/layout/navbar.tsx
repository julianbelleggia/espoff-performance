"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/cart-sheet";
import { CatalogDropdown } from "@/components/layout/catalog-dropdown";
import { catalogLinks } from "@/lib/data/catalog-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
    null
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setHidden(scrollingDown && currentScrollY > 120 && !mobileOpen);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileCatalogOpen(false);
    setMobileSubmenuOpen(null);
  };

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "sticky top-0 z-40 will-change-transform transition-[transform,background-color] duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
        isHovered || mobileOpen ? "bg-black" : "bg-transparent"
      )}
    >
      <Link
        href="/"
        aria-label="Inicio"
        className="absolute left-2 top-1/2 z-50 -translate-y-1/2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.svg"
          alt="Logo"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
      </Link>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-6 pl-16 sm:pl-20 md:flex">
          <CatalogDropdown />

          <Link
            href="/nosotros"
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>
      </div>

      <div className="absolute right-2 top-1/2 z-50 flex -translate-y-1/2 items-center gap-1">
        <CartSheet />
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
          <button
            type="button"
            onClick={() => setMobileCatalogOpen((v) => !v)}
            className="flex items-center justify-between py-2 text-left text-sm text-foreground/80"
          >
            Catálogo
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                mobileCatalogOpen && "rotate-180"
              )}
            />
          </button>

          {mobileCatalogOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-border/50 pl-3">
              {catalogLinks.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSubmenuOpen((v) =>
                          v === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between py-2 text-left text-sm text-foreground/80"
                    >
                      {item.label}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileSubmenuOpen === item.label && "rotate-90"
                        )}
                      />
                    </button>
                    {mobileSubmenuOpen === item.label && (
                      <div className="ml-3 flex flex-col gap-1 border-l border-border/50 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-sm text-foreground/70"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-sm text-foreground/80"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}

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
