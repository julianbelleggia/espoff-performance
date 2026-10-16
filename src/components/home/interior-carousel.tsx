"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { interiorShots } from "@/lib/data/interior-shots";

const SLIDE_MS = 4000;
const FADE_MS = 1000;

export function InteriorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Montada por adelantado a opacity 0 un instante antes de activarse — un
  // elemento recién insertado en el DOM no tiene un valor previo de opacity
  // desde el cual transicionar, así que si pasara directo a 1 aparecería de
  // golpe en vez de hacer fade-in.
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  // Se mantiene montada un instante más mientras la diapositiva saliente
  // termina su fade a opacity 0 — fuera de esa ventana no hace falta tener
  // las otras ~30 imágenes en el DOM (ni que next/image las pida).
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const activeRef = useRef(activeIndex);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setPendingIndex((activeRef.current + 1) % interiorShots.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  // Un useEffect normal (a diferencia de uno "layout") ya corre después de
  // que el navegador pintó el commit anterior — con eso alcanza para que la
  // diapositiva entrante se haya pintado una vez a opacity 0 antes de que
  // este efecto la active, así el cambio a 1 es una transición real y no
  // un salto. (Usar requestAnimationFrame acá no hace falta y además Chrome
  // lo puede retrasar varios segundos si la pestaña pierde prioridad.)
  useEffect(() => {
    if (pendingIndex === null) return;
    setPrevIndex(activeRef.current);
    setActiveIndex(pendingIndex);
    setPendingIndex(null);
  }, [pendingIndex]);

  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), FADE_MS);
    return () => clearTimeout(t);
  }, [prevIndex]);

  const mounted = new Set(
    [activeIndex, prevIndex, pendingIndex].filter(
      (v): v is number => v !== null
    )
  );

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-background">
      {interiorShots.map((shot, i) => {
        if (!mounted.has(i)) return null;
        const isActive = i === activeIndex;
        return (
          <div
            key={shot.slug}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <Image
              src={shot.src}
              alt={`Interior — ${shot.carName}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1 sm:bottom-10 sm:left-10">
              {/* .toUpperCase() here (and literal caps below), not
                  text-transform: uppercase — PT Serif Caption mis-renders the
                  case-folded R and N; real capitals render correctly. */}
              <span className="font-hero text-sm tracking-wide text-white">
                {shot.carName.toUpperCase()}
              </span>
              <span className="font-hero text-lg leading-tight tracking-[-0.03em] text-white/60 sm:text-4xl md:text-5xl">
                LO DE ADENTRO TAMBIÉN IMPORTA.
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
