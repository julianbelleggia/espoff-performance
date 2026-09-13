"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/lib/data/socials";

const instagramHref =
  socials.find((s) => s.name === "Instagram")?.href ?? "#";

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

  useEffect(() => {
    if (!cursorRef.current) return;
    const r = cursorRef.current.getBoundingClientRect();
    cursorHalfSize.current = { x: r.width / 2, y: r.height / 2 };
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    const cursor = cursorRef.current;
    if (!box || !cursor) return;
    const r = box.getBoundingClientRect();
    const x = Math.round(e.clientX - r.left - cursorHalfSize.current.x);
    const y = Math.round(e.clientY - r.top - cursorHalfSize.current.y);
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const show = useCallback((visible: boolean) => {
    if (cursorRef.current) cursorRef.current.style.opacity = visible ? "1" : "0";
  }, []);

  return (
    <section
      ref={boxRef}
      onMouseMove={onMove}
      onMouseEnter={() => show(true)}
      onMouseLeave={() => show(false)}
      className="relative bg-background md:cursor-none"
    >
      {/* Banda superior */}
      <div className="flex flex-col gap-[2px] md:flex-row">
        <Link
          href="/proyectos"
          className="group relative block h-[420px] overflow-hidden md:h-[660px] md:basis-[58%] md:shrink-0 md:grow-0"
        >
          <Image
            src="/images/gallery/g-hero-i8.jpg"
            alt="BMW i8"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className={IMG}
            priority
          />
        </Link>

        <div className="flex flex-col gap-[2px] md:flex-1">
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[240px] overflow-hidden md:h-auto md:flex-1"
          >
            <Image
              src="/images/gallery/g-m340i.jpg"
              alt="BMW M340i"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className={IMG}
            />
          </a>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[240px] overflow-hidden md:h-auto md:flex-1"
          >
            <Image
              src="/images/gallery/g-golf.jpg"
              alt="Volkswagen Golf GTI"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className={IMG}
            />
          </a>
        </div>

        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-[320px] overflow-hidden md:h-auto md:basis-[19%] md:shrink-0 md:grow-0"
        >
          <Image
            src="/images/gallery/g-raptor.jpg"
            alt="Volkswagen Amarok V6"
            fill
            sizes="(min-width: 768px) 19vw, 100vw"
            className={IMG}
          />
        </a>
      </div>

      {/* Banda inferior */}
      <div className="mt-[2px] flex flex-col gap-[2px] md:flex-row">
        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-[300px] overflow-hidden md:h-[340px] md:basis-[36%] md:shrink-0 md:grow-0"
        >
          <Image
            src="/images/gallery/g-a5.jpg"
            alt="Audi A5 S Line"
            fill
            sizes="(min-width: 768px) 36vw, 100vw"
            className={IMG}
          />
        </a>
        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-[300px] overflow-hidden md:h-auto md:flex-1"
        >
          <Image
            src="/images/gallery/g-m135i-2.jpg"
            alt="BMW M135i xDrive"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className={IMG}
          />
        </a>
        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-[300px] overflow-hidden md:h-auto md:basis-[24%] md:shrink-0 md:grow-0"
        >
          <Image
            src="/images/gallery/g-m240i.jpg"
            alt="BMW M240i"
            fill
            sizes="(min-width: 768px) 24vw, 100vw"
            className={IMG}
          />
        </a>
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
