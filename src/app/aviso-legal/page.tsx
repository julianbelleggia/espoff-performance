import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Identificación del titular del sitio, condiciones de uso y régimen de propiedad intelectual de ESPOFF Performance.",
};

export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-24 sm:py-28">
      <h1 className="font-hero text-3xl tracking-tight text-foreground sm:text-4xl">
        Aviso legal
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
            1. Titular del sitio
          </h2>
          <p>
            Este sitio web (
            <span className="text-foreground">espoffperformance.com</span>,
            en adelante &ldquo;el sitio&rdquo;) es operado bajo el nombre
            comercial{" "}
            <strong className="text-foreground">ESPOFF Performance</strong>.
            Contacto:{" "}
            <a
              href="mailto:julianbelleggia1@hotmail.com"
              className="underline underline-offset-2 hover:text-foreground"
            >
              julianbelleggia1@hotmail.com
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2. Objeto del sitio
          </h2>
          <p>
            El sitio tiene un fin informativo y de portfolio: presenta los
            trabajos de personalización y preparación de vehículos
            realizados por ESPOFF Performance y ofrece medios de contacto
            (WhatsApp, email, Instagram, Facebook, TikTok) para que los
            interesados puedan consultar. El sitio no procesa pagos, no
            comercializa productos en línea ni celebra contratos a través
            de sus páginas; cualquier presupuesto o trabajo se coordina y
            se acuerda fuera del sitio por los canales de contacto
            habilitados.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Propiedad intelectual y marcas de terceros
          </h2>
          <p>
            El nombre comercial ESPOFF Performance, su logo y el contenido
            propio del sitio (textos, fotografías de trabajos, diseño y
            código) son propiedad de su titular o se usan con autorización,
            y están protegidos por la normativa aplicable. No se permite su
            reproducción, distribución o uso comercial sin previa
            autorización por escrito.
          </p>
          <p>
            Todas las marcas comerciales, nombres de modelos, logotipos de
            vehículos o fabricantes de componentes exhibidos o mencionados
            en las fotos y descripciones pertenecen a sus respectivos
            titulares y se utilizan exclusivamente con fines descriptivos e
            ilustrativos para identificar los trabajos realizados, sin
            implicar relación comercial, patrocinio o respaldo oficial de
            dichas marcas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. Enlaces a terceros
          </h2>
          <p>
            El sitio enlaza a redes sociales y servicios de mensajería
            (WhatsApp, Instagram, Facebook, TikTok) operados por terceros.
            El uso de esos servicios se rige por sus propios términos y
            políticas de privacidad; ESPOFF Performance no es responsable
            del contenido, la disponibilidad ni las prácticas de esos
            terceros.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Limitación de responsabilidad
          </h2>
          <p>
            Se procura que la información publicada (descripciones de
            trabajos, especificaciones técnicas y proyectos) sea precisa,
            pero puede contener errores u omitir actualizaciones. ESPOFF
            Performance no garantiza la disponibilidad ininterrumpida del
            sitio y no se responsabiliza por decisiones tomadas a partir de
            la información publicada sin previa consulta y confirmación a
            través de los canales de contacto oficiales.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6. Legislación aplicable y jurisdicción
          </h2>
          <p>
            Este aviso legal se rige por las leyes de la República
            Argentina. Para cualquier controversia derivada del uso del
            sitio, las partes se someten a los tribunales ordinarios
            competentes de la provincia de Buenos Aires.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7. Modificaciones
          </h2>
          <p>
            Este aviso legal puede actualizarse para reflejar cambios en el
            sitio o en la normativa aplicable. La fecha de última
            actualización figurará siempre al inicio de esta página.
          </p>
        </div>
      </div>
    </section>
  );
}
