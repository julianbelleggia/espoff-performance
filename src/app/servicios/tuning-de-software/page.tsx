import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { socials } from "@/lib/data/socials";

export const metadata = {
  title: "Tuning de Software | ESPOFF Performance",
};

const highlights = [
  {
    title: "Mapeo a medida",
    description:
      "Ajustamos la ECU a tu configuración real: escape, admisión, combustible y objetivos de potencia.",
  },
  {
    title: "Plataformas reconocidas",
    description:
      "Trabajamos con herramientas de tuning de software como bootmod3, entre otras, según la marca y modelo.",
  },
  {
    title: "Seguimiento post-mapeo",
    description:
      "Revisamos logs y ajustamos el mapa si hace falta después de las primeras salidas.",
  },
];

export default function TuningDeSoftwarePage() {
  const whatsapp = socials.find((s) => s.name === "WhatsApp")!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Servicios</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Tuning de Software</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
        Servicios
      </span>
      <h1 className="mt-4 max-w-2xl font-heading text-4xl font-light uppercase leading-[1.05] tracking-wide sm:text-5xl">
        Tuning de
        <br />
        <span className="font-medium">software</span>
      </h1>
      <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
        Además de piezas, ofrecemos reprogramación de ECU para llevar la
        respuesta y la potencia de tu auto a otro nivel, en conjunto con tus
        mods de escape, admisión y demás accesorios.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="border-t border-border/50 pt-4">
            <h2 className="font-heading text-lg uppercase tracking-wide">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-border/50 pt-10">
        <p className="max-w-xl text-sm text-muted-foreground">
          El resultado depende del modelo, motor y configuración de cada
          auto. Contanos qué auto tenés y qué buscás para armarte una
          propuesta.
        </p>
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
