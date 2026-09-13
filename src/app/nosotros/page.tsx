import type { Metadata } from "next";
import { VideoLoopFade } from "@/components/video-loop-fade";
import { WorkPhotosCarousel } from "@/components/nosotros/work-photos-carousel";

export const metadata: Metadata = {
  title: "Nosotros | ESPOFF Performance",
};

const workPhotos = [
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/audi-rsq8-0${i + 1}.jpg`,
    alt: `Audi RSQ8 preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/bmw-220i-0${i + 1}.jpg`,
    alt: `BMW 220i preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/bmw-m135i-0${i + 1}.jpg`,
    alt: `BMW M135i xDrive preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/bmw-m340i-0${i + 1}.jpg`,
    alt: `BMW M340i xDrive preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/toyota-corolla-0${i + 1}.jpg`,
    alt: `Toyota Corolla preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/vw-polo-gts-0${i + 1}.jpg`,
    alt: `Volkswagen Polo GTS preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/vw-scirocco-0${i + 1}.jpg`,
    alt: `Volkswagen Scirocco preparado por ESPOFF Performance`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/nosotros/vw-up-pepper-0${i + 1}.jpg`,
    alt: `Volkswagen up! Pepper preparado por ESPOFF Performance`,
  })),
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative -mt-20 h-[min(92vh,860px)] min-h-[520px] w-full overflow-hidden bg-black sm:-mt-24">
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
                  ¿Quienes somos?
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-[132px] text-center">
        <p
          className="mx-auto max-w-[60ch] text-lg font-light leading-[1.72] text-white/[0.62]"
          style={{ animation: "rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          Somos una tienda especializada en accesorios de alto rendimiento:
          spoilers, volantes, lips, difusores y escapes de las marcas más
          reconocidas del automovilismo. Trabajamos con dueños que no se
          conforman con lo de fábrica y acompañamos cada proyecto de
          principio a fin.
        </p>
      </section>

      <section className="pb-[132px]">
        <WorkPhotosCarousel photos={workPhotos} />
      </section>
    </>
  );
}
