import { RollingHeading } from "@/components/home/rolling-heading";
import { BrandsMarquee } from "@/components/home/brands-marquee";
import { VideoLoopFade } from "@/components/video-loop-fade";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen flex-col overflow-hidden bg-background sm:-mt-24">
      <div className="animate-stage-reveal absolute inset-0 overflow-hidden">
        {/* fondo: video en loop */}
        <VideoLoopFade
          src="/videos/hero-night.mp4"
          poster="/videos/hero-night-poster.jpg"
          className="absolute inset-0 h-full w-full [transform:translateZ(0)] object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, oklch(0.08 0 0 / 45%) 0%, oklch(0.08 0 0 / 10%) 30%, oklch(0.08 0 0 / 25%) 68%, oklch(0.08 0 0 / 92%) 100%)",
          }}
        />
      </div>

      <div className="relative flex flex-1 items-center px-5 pt-24 sm:px-10">
        <RollingHeading />
      </div>

      <div className="animate-fade-up-cue relative flex items-end justify-between gap-10 px-5 pb-7 sm:px-10">
        <div className="flex shrink-0 items-center gap-2.5 pb-5 font-nav text-[11px] uppercase tracking-[0.18em] text-white/75">
          <span className="animate-scroll-bounce inline-block">↓</span>
          Scrolleá para explorar
        </div>

        <div className="min-w-0 flex-1 sm:max-w-[900px]">
          <BrandsMarquee />
        </div>
      </div>
    </section>
  );
}
