import { TypewriterHeading } from "@/components/home/typewriter-heading";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center justify-center overflow-hidden bg-background sm:-mt-24">
      {/* fondo: video en loop */}
      <video
        className="absolute inset-0 h-full w-full [transform:translateZ(0)] object-cover"
        src="/videos/hero-night.mp4"
        poster="/videos/hero-night-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-hero-vignette" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-primary">
          
        </span>
        <TypewriterHeading />
        <p className="mt-6 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
                </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        Scroll
      </div>
    </section>
  );
}
