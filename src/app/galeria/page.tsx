import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryCars } from "@/lib/data/gallery";

export const metadata = {
  title: "Galería | ESPOFF Performance",
};

export default function GaleriaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Galería</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
        Proyectos en acción
      </span>
      <h1 className="mt-4 max-w-2xl font-heading text-4xl font-light uppercase leading-[1.05] tracking-wide sm:text-5xl">
        Galería
      </h1>
      <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
        Autos reales de clientes intervenidos por ESPOFF Performance. Tocá un
        auto para ver todas sus fotos.
      </p>

      <div className="mt-10">
        <GalleryGrid cars={galleryCars} />
      </div>
    </div>
  );
}
