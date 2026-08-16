import Link from "next/link";

export function PageHero({
  currentLabel,
  title,
  subtitle,
  plateSrc,
  plateAlt,
}: {
  currentLabel: string;
  title: string;
  subtitle: string;
  plateSrc: string;
  plateAlt: string;
}) {
  return (
    <>
      <nav
        aria-label="Ruta"
        className="flex items-center gap-3 font-nav text-[10px] uppercase tracking-[0.26em] text-white/40"
        style={{ animation: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <Link href="/" className="transition-colors hover:text-white">
          Inicio
        </Link>
        <span className="text-primary">—</span>
        <span className="text-white/85">{currentLabel}</span>
      </nav>

      <div className="relative mt-11 grid grid-cols-1 items-end gap-10 sm:grid-cols-[minmax(0,1fr)_300px]">
        <h1 className="m-0 font-hero font-black uppercase leading-[1.02] tracking-[-0.04em] text-white">
          <span className="block overflow-hidden">
            <span
              className="block text-[min(15vw,130px)]"
              style={{
                animation: "clip-up 1.15s cubic-bezier(0.16,1,0.3,1) 0.1s both",
              }}
            >
              {title}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="mt-1.5 block font-serif text-2xl font-light normal-case italic tracking-normal text-primary/80 sm:text-[34px]"
              style={{
                animation:
                  "clip-up 1.15s cubic-bezier(0.16,1,0.3,1) 0.26s both",
              }}
            >
              {subtitle}
            </span>
          </span>
        </h1>

        <div
          className="w-full"
          style={{
            animation: "plate 1.2s cubic-bezier(0.16,1,0.3,1) 0.42s both",
          }}
        >
          <div className="relative overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={plateSrc}
              alt={plateAlt}
              className="block aspect-[3/4] w-full object-cover"
              style={{ filter: "saturate(0.92) contrast(1.04)" }}
            />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(214,193,155,0.28)]" />
          </div>
        </div>
      </div>

      <div
        className="mt-16 h-px origin-left bg-gradient-to-r from-primary/45 via-white/[0.08] to-transparent"
        style={{ animation: "hair 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
      />
    </>
  );
}
