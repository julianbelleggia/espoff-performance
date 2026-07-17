import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  title: "Contacto | ESPOFF Performance",
};

export default function ContactoPage() {
  const whatsapp = socials.find((s) => s.name === "WhatsApp")!;
  const otherSocials = socials.filter((s) => s.name !== "WhatsApp");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contacto</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
        Contacto
      </span>
      <h1 className="mt-4 max-w-2xl font-heading text-4xl font-light uppercase leading-[1.05] tracking-wide sm:text-5xl">
        Hablemos de tu
        <br />
        <span className="font-medium">próximo proyecto</span>
      </h1>
      <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
        ¿Tenés dudas sobre compatibilidad, stock o instalación? Escribinos y
        te respondemos a la brevedad.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-2xl">
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-lg border border-border/60 bg-card/40 p-6 transition-colors hover:border-foreground"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground">
            {whatsapp.icon}
          </div>
          <div className="mt-6">
            <p className="font-heading text-lg uppercase tracking-wide">
              WhatsApp
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              La forma más rápida de consultarnos
            </p>
          </div>
          <ArrowUpRight className="mt-4 h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
        </a>

        <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-card/40 p-6">
          <div>
            <p className="font-heading text-lg uppercase tracking-wide">
              Redes sociales
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Seguinos para ver instalaciones y novedades
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            {otherSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/catalogo"
          className="text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
