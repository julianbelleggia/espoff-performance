import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de uso",
  description:
    "Condiciones de uso del sitio web de ESPOFF Performance.",
};

export default function TerminosDeUsoPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-24 sm:py-28">
      <h1 className="font-hero text-3xl tracking-tight text-foreground sm:text-4xl">
        Términos de uso
      </h1>
      <p className="mt-3 text-sm text-foreground/50">
        Última actualización:{" "}
        {new Date().toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
        })}
      </p>

      <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-foreground/75">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1. Aceptación
          </h2>
          <p>
            Al navegar este sitio aceptás estos términos de uso. Si no
            estás de acuerdo con ellos, te pedimos que no lo utilices. Estos
            términos se complementan con el{" "}
            <a
              href="/aviso-legal"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Aviso legal
            </a>{" "}
            y la{" "}
            <a
              href="/politica-de-privacidad"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Política de privacidad
            </a>{" "}
            del sitio.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2. Naturaleza del sitio
          </h2>
          <p>
            El sitio es un portfolio informativo de ESPOFF Performance: no
            vende productos ni servicios en línea. Los productos y
            servicios que se muestran (spoilers, volantes, escapes, tuning
            de software, etc.) son ilustrativos de trabajos realizados o
            disponibles a pedido, y cualquier presupuesto, plazo o compra se
            coordina directamente por WhatsApp, email o redes sociales,
            fuera del sitio.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Uso permitido
          </h2>
          <p>
            Podés navegar el sitio y consultar su contenido para informarte
            sobre nuestros trabajos y contactarnos. No está permitido: (a)
            copiar, extraer o reutilizar de forma masiva (scraping) el
            contenido o las imágenes del sitio con fines comerciales
            propios; (b) intentar vulnerar la seguridad del sitio o acceder
            a partes no destinadas al público; (c) usar el sitio para fines
            ilícitos o que infrinjan derechos de terceros.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. Contenido e imágenes de vehículos
          </h2>
          <p>
            Las fotografías de vehículos y trabajos publicadas corresponden
            a preparaciones realizadas por ESPOFF Performance y se muestran
            con fines de portfolio. Las marcas de vehículos y de productos
            (BMW, Volkswagen, Akrapovic, Milltek, etc.) mencionadas o
            mostradas pertenecen a sus respectivos titulares; su mención es
            meramente descriptiva y no implica afiliación, patrocinio ni
            aprobación por parte de esas marcas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Disponibilidad y cambios
          </h2>
          <p>
            El sitio puede modificarse, actualizarse o dejar de estar
            disponible temporal o permanentemente sin aviso previo. Podemos
            actualizar estos términos cuando lo consideremos necesario; la
            fecha de última actualización figura al inicio de esta página.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6. Legislación aplicable
          </h2>
          <p>
            Estos términos se rigen por las leyes de la República
            Argentina, con jurisdicción de los tribunales ordinarios de la
            provincia de Buenos Aires, según se detalla en el{" "}
            <a
              href="/aviso-legal"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Aviso legal
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7. Contacto
          </h2>
          <p>
            Consultas sobre estos términos:{" "}
            <a
              href="mailto:julianbelleggia1@hotmail.com"
              className="underline underline-offset-2 hover:text-foreground"
            >
              julianbelleggia1@hotmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
