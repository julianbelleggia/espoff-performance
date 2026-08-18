import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryCars } from "@/lib/data/gallery";

export const metadata = {
  title: "Proyectos | ESPOFF Performance",
};

export default function ProyectosPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 lg:pl-[88px] lg:pr-12">
        <div
          style={{ animation: "rise 1s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
        >
          <GalleryGrid cars={galleryCars} />
        </div>
      </div>
    </section>
  );
}
