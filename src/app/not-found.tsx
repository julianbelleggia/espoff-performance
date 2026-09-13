import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-nav text-xs uppercase tracking-[0.2em] text-foreground/40">
        Error 404
      </p>
      <h1 className="font-hero text-4xl tracking-tight text-foreground sm:text-6xl">
        Esta página no existe
      </h1>
      <p className="max-w-md text-sm text-foreground/60">
        El link puede estar roto o el producto ya no está disponible. Volvé
        al inicio o mirá el catálogo completo.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ir al inicio
        </Link>
        <Link
          href="/catalogo"
          className="inline-flex h-11 items-center rounded-md border border-foreground/20 px-6 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
