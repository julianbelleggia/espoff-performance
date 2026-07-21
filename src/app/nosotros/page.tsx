import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";

export const metadata = {
  title: "Nosotros | ESPOFF Performance",
};

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

export default function NosotrosPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Nosotros</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Sobre ESPOFF
        </span>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-light uppercase leading-[1.05] tracking-wide sm:text-5xl">
          Llevamos autos a
          <br />
          <span className="font-medium">otra categoría</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
          ESPOFF Performance es una tienda especializada en accesorios de alto
          rendimiento: spoilers, volantes, lips, difusores y escapes de las
          marcas más reconocidas del mundo del automovilismo y el tuning.
          Trabajamos con dueños de autos que no se conforman con lo de
          fábrica y buscan aerodinámica, sonido y actitud, sin comprometer la
          calidad.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="border-t border-border/50 pt-4">
              <h2 className="font-heading text-lg uppercase tracking-wide">
                {value.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border/50 pt-10">
          <h2 className="font-heading text-xl uppercase tracking-wide">
            Qué trabajamos
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/catalogo/${category.slug}`}
                className="rounded-full border border-border/60 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="uppercase tracking-wide">
            <Link href="/catalogo">
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="uppercase tracking-wide"
          >
            <Link href="/contacto">Hablar con nosotros</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
