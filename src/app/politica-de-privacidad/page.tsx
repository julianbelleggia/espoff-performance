import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo ESPOFF Performance recopila, usa y protege tus datos de contacto.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-24 sm:py-28">
      <h1 className="font-hero text-3xl tracking-tight text-foreground sm:text-4xl">
        POLÍTICA DE PRIVACIDAD
      </h1>
      <p className="mt-3 text-sm text-foreground/50">
        Última actualización: {new Date().toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
        })}
      </p>

      <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-foreground/75">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable de los datos que se mencionan en esta política
            es ESPOFF Performance, con domicilio en la provincia de Buenos
            Aires, Argentina. Contacto:{" "}
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
            2. Qué datos recopilamos
          </h2>
          <p>
            El sitio es un portfolio informativo: no tiene formularios
            propios ni procesa pagos ni recopila datos financieros. No
            recopilamos ningún dato tuyo por el solo hecho de navegar el
            sitio. Los únicos datos que recibimos son los que vos decidís
            compartirnos voluntariamente al escribirnos por WhatsApp, email
            o Instagram/Facebook/TikTok: por ejemplo tu nombre, número de
            contacto, email y los detalles de tu consulta (el auto o
            producto por el que preguntás).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Para qué los usamos
          </h2>
          <p>
            Usamos esos datos exclusivamente para responder tu consulta y
            coordinar un eventual presupuesto o trabajo. No vendemos ni
            compartimos tu información de contacto con terceros para fines
            de marketing.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. Cookies y almacenamiento local
          </h2>
          <p>
            El sitio no utiliza cookies propias ni de terceros, ni
            herramientas de analítica o publicidad (Google Analytics, Meta
            Pixel u otras). El código del sitio incluye funciones de
            carrito de compras y selección de moneda pensadas para una
            futura tienda en línea, que hoy están desactivadas y no son
            accesibles desde la navegación; mientras estén desactivadas, no
            se guarda información en el almacenamiento local (localStorage)
            de tu navegador por este motivo. Si en el futuro se reactiva la
            tienda, esta política se actualizará para detallar esa función
            antes de habilitarla.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Terceros
          </h2>
          <p>
            Cuando nos contactás por WhatsApp, Instagram, Facebook o
            TikTok, esa conversación queda sujeta además a la política de
            privacidad de la plataforma correspondiente (Meta, TikTok),
            ajena a ESPOFF Performance. No compartimos tus datos de
            contacto con ningún otro tercero.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6. Conservación de los datos
          </h2>
          <p>
            Conservamos los datos de tu consulta solo mientras sea necesario
            para responderte y, en su caso, coordinar el trabajo solicitado,
            o hasta que nos pidas su eliminación.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7. Tus derechos
          </h2>
          <p>
            De acuerdo con la Ley 25.326 de Protección de Datos Personales
            de la República Argentina, podés ejercer en cualquier momento
            tus derechos de acceso, rectificación, actualización y
            supresión de los datos de contacto que tengamos guardados sobre
            vos, escribiéndonos a{" "}
            <a
              href="mailto:julianbelleggia1@hotmail.com"
              className="underline underline-offset-2 hover:text-foreground"
            >
              julianbelleggia1@hotmail.com
            </a>
            . La Agencia de Acceso a la Información Pública, en su carácter
            de Órgano de Control de la Ley 25.326, es la autoridad ante la
            cual también podés presentar reclamos o denuncias.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            8. Cambios a esta política
          </h2>
          <p>
            Podemos actualizar esta política para reflejar cambios en el
            sitio o en la normativa aplicable. La fecha de última
            actualización figura al inicio de esta página.
          </p>
        </div>
      </div>
    </section>
  );
}
