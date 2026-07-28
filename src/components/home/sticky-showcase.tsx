import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Marcas originales",
    description:
      "Trabajamos directo con las marcas líderes del mundo del performance: Akrapovič, Milltek, HKS, Brabus y muchas más. Nada de réplicas.",
  },
  {
    title: "Asesoramiento real",
    description:
      "Te ayudamos a elegir la pieza correcta para tu modelo, sin vueltas: compatibilidad, terminación e instalación.",
  },
  {
    title: "Pasión por el auto",
    description:
      "Somos un equipo de entusiastas del tuning. Cada pieza que vendemos es una que nos gustaría tener en nuestro propio auto.",
  },
];

export function StickyShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
          <div className="h-[60vh] overflow-hidden rounded-lg lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/showcase-m240i-g42.jpg"
              alt="BMW M240i G42"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-12 py-16 lg:min-h-[170vh] lg:gap-20 lg:py-0">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Sobre ESPOFF
            </span>
            <h2 className="mt-4 font-heading text-3xl font-light uppercase leading-[1.05] tracking-wide sm:text-4xl">
              Cada pieza,
              <br />
              <span className="font-medium">pensada para tu auto</span>
            </h2>
          </div>

          {values.map((value) => (
            <div key={value.title} className="border-t border-border/50 pt-4">
              <h3 className="font-heading text-lg uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}

          <Button asChild size="lg" className="w-fit uppercase tracking-wide">
            <Link href="/catalogo">
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
