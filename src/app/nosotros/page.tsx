import type { Metadata } from "next";
import Image from "next/image";
import { StatsBlock } from "@/components/nosotros/stats-block";
import { VideoLoopFade } from "@/components/video-loop-fade";

export const metadata: Metadata = {
  title: "Nosotros | ESPOFF Performance",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="relative -mt-20 h-screen min-h-[520px] w-full overflow-hidden bg-black sm:-mt-24">
        <VideoLoopFade
          src="/videos/nosotros-hero.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.92) contrast(1.05) brightness(0.82)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.34) 34%, rgba(10,10,10,0.5) 68%, oklch(0.08 0 0) 100%)",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[26px] px-6 pb-[200px] pt-24 text-center">
            <h1 className="m-0 max-w-[15ch] text-balance font-hero text-[clamp(2.75rem,9.2vw,70px)] leading-[1.1] tracking-[-0.045em] text-white">
              <span className="block overflow-hidden py-[0.08em]">
                <span
                  className="block"
                  style={{
                    animation:
                      "clip-up 1.15s cubic-bezier(0.16,1,0.3,1) 0.2s both",
                  }}
                >
                  ¿QUIENES SOMOS?
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        {/* aspect-[16/9] matches each photo's own shape — object-cover never
            has to crop them, since the box is never a different shape than
            the image itself. Full-bleed width, same treatment as the hero
            sections (no side padding, no letterboxing). */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
          <Image
            src="/images/nosotros-ford-raptor.jpg"
            alt="Ford Ranger Raptor preparado por ESPOFF Performance"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover [filter:saturate(0.92)_contrast(1.05)_brightness(0.9)]"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.45) 35%, transparent 65%)",
            }}
          />
          <p className="absolute inset-x-0 bottom-0 max-w-[55ch] p-6 text-base font-light leading-[1.7] text-white/90 sm:p-10 sm:text-lg lg:max-w-[640px] lg:p-[88px]">
            Trabajamos con accesorios y piezas de performance (spoilers,
            volantes, lips, difusores y escapes), reprogramación de ECU, PPF
            y cualquier modificación que tengas en mente. Te acompañamos en
            todo el proyecto, desde la primera consulta hasta que te llevás
            el auto terminado.
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
          <Image
            src="/images/nosotros-bmw-m240i.jpg"
            alt="BMW M240i LCI preparado por ESPOFF Performance"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover [filter:saturate(0.92)_contrast(1.05)_brightness(0.9)]"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.45) 35%, transparent 65%)",
            }}
          />
          <StatsBlock />
        </div>
      </section>
    </>
  );
}
