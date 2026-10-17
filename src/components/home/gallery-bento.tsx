"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const IMG =
  "object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105";

/** Galería full-bleed: dos bandas de borde a borde con 2px de separación. */
export function GalleryBento() {
  const boxRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  // Cached so the fixed-size badge can be centered with a single whole-pixel
  // translate — a percentage-based centering transform resolves to a
  // fractional offset, which forces sub-pixel text rendering and blurs it.
  const cursorHalfSize = useRef({ x: 0, y: 0 });
  // Última posición real del mouse en viewport — el scroll no dispara
  // mousemove, así que sin esto no hay forma de recalcular el cursor cuando
  // el contenido se mueve debajo de un mouse quieto.
  const lastClientRef = useRef<{ x: number; y: number } | null>(null);

  const onEnter = useCallback(() => {
    if (!cursorRef.current) return;
    const r = cursorRef.current.getBoundingClientRect();
    cursorHalfSize.current = { x: r.width / 2, y: r.height / 2 };
  }, []);

  const updateCursor = useCallback(() => {
    const box = boxRef.current;
    const cursor = cursorRef.current;
    const last = lastClientRef.current;
    if (!box || !cursor || !last) return;
    const r = box.getBoundingClientRect();
    const inside =
      last.x >= r.left && last.x <= r.right && last.y >= r.top && last.y <= r.bottom;
    cursor.style.opacity = inside ? "1" : "0";
    if (!inside) return;
    const x = Math.round(last.x - r.left - cursorHalfSize.current.x);
    const y = Math.round(last.y - r.top - cursorHalfSize.current.y);
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      lastClientRef.current = { x: e.clientX, y: e.clientY };
      updateCursor();
    },
    [updateCursor]
  );

  const show = useCallback((visible: boolean) => {
    if (cursorRef.current) cursorRef.current.style.opacity = visible ? "1" : "0";
  }, []);

  // Mantiene el cursor custom pegado al mouse real mientras se scrollea sin
  // moverlo (la galería se desplaza debajo de un mouse quieto): sin esto el
  // badge queda flotando en una posición vieja, o visible fuera de la
  // sección, hasta el próximo mousemove.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        updateCursor();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateCursor]);

  return (
    <section
      ref={boxRef}
      onMouseMove={onMove}
      onMouseEnter={(e) => {
        lastClientRef.current = { x: e.clientX, y: e.clientY };
        onEnter();
        show(true);
      }}
      onMouseLeave={() => {
        lastClientRef.current = null;
        show(false);
      }}
      className="relative bg-background md:cursor-none"
    >
      {/* Banda superior */}
      <div className="flex flex-col gap-[2px] md:flex-row">
        <Link
          href="/proyectos"
          className="group relative block h-[420px] overflow-hidden md:h-[660px] md:basis-[58%] md:shrink-0 md:grow-0 md:cursor-none"
        >
          <Image
            src="/images/gallery/g-hero-i8.jpg"
            alt="BMW i8"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className={IMG}
          />
        </Link>

        <div className="flex flex-col gap-[2px] md:flex-1">
          <Link
            href="/proyectos"
            className="group relative block h-[240px] overflow-hidden md:h-auto md:flex-1 md:cursor-none"
          >
            <Image
              src="/images/gallery/g-m340i.jpg"
              alt="BMW M340i"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className={IMG}
            />
          </Link>
          <Link
            href="/proyectos"
            className="group relative block h-[240px] overflow-hidden md:h-auto md:flex-1 md:cursor-none"
          >
            <Image
              src="/images/gallery/g-golf.jpg"
              alt="Volkswagen Golf GTI"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className={IMG}
            />
          </Link>
        </div>

        <Link
          href="/proyectos"
          className="group relative block h-[320px] overflow-hidden md:h-auto md:basis-[19%] md:shrink-0 md:grow-0 md:cursor-none"
        >
          <Image
            src="/images/gallery/g-raptor.jpg"
            alt="Volkswagen Amarok V6"
            fill
            sizes="(min-width: 768px) 19vw, 100vw"
            className={IMG}
          />
        </Link>
      </div>

      {/* Banda inferior */}
      <div className="mt-[2px] flex flex-col gap-[2px] md:flex-row">
        <Link
          href="/proyectos"
          className="group relative block h-[300px] overflow-hidden md:h-[340px] md:basis-[36%] md:shrink-0 md:grow-0 md:cursor-none"
        >
          <Image
            src="/images/gallery/g-a5.jpg"
            alt="Audi A5 S Line"
            fill
            sizes="(min-width: 768px) 36vw, 100vw"
            className={IMG}
          />
        </Link>
        <Link
          href="/proyectos"
          className="group relative block h-[300px] overflow-hidden md:h-auto md:flex-1 md:cursor-none"
        >
          <Image
            src="/images/gallery/g-m135i-2.jpg"
            alt="BMW M135i xDrive"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className={IMG}
          />
        </Link>
        <Link
          href="/proyectos"
          className="group relative block h-[300px] overflow-hidden md:h-auto md:basis-[24%] md:shrink-0 md:grow-0 md:cursor-none"
        >
          <Image
            src="/images/gallery/g-m240i.jpg"
            alt="BMW M240i"
            fill
            sizes="(min-width: 768px) 24vw, 100vw"
            className={IMG}
          />
        </Link>
      </div>

      {/* Cursor custom */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden opacity-0 transition-opacity duration-[260ms] ease-out will-change-transform md:block"
      >
        <span className="inline-flex h-12 items-center whitespace-nowrap border border-white/55 bg-black/35 px-[26px] font-plex-mono text-[11px] font-light uppercase tracking-[0.24em] text-white backdrop-blur-[6px]">
          Ver proyectos →
        </span>
      </div>
    </section>
  );
}
