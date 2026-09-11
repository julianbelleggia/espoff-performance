import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo ESPOFF Performance recopila, usa y protege tus datos de contacto.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-24 sm:py-28">
      <h1 className="font-hero text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
        Política de privacidad
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
            1. Qué datos recopilamos
          </h2>
          <p>
            ESPOFF Performance no procesa pagos ni recopila datos financieros
            en el sitio. Cuando nos escribís por WhatsApp, email o el
            formulario de contacto, recibimos únicamente lo que vos nos
            compartís: nombre, número de contacto, email y los detalles de
            tu consulta (por ejemplo, el auto o producto por el que
            preguntás).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2. Para qué los usamos
          </h2>
          <p>
            Usamos esos datos exclusivamente para responder tu consulta,
            coordinar presupuestos, envíos e instalaciones, y darte
            seguimiento a un pedido en curso. No vendemos ni compartimos tu
            información de contacto con terceros para fines de marketing.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Datos guardados en tu navegador
          </h2>
          <p>
            El sitio guarda localmente en tu navegador (localStorage) el
            contenido de tu carrito y la moneda que elegiste para ver los
            precios (ARS o USD). Esta información queda solo en tu
            dispositivo, nunca se envía a nuestros servidores, y podés
            borrarla en cualquier momento limpiando los datos del sitio
            desde la configuración de tu navegador.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. Terceros
          </h2>
          <p>
            Cuando nos contactás por WhatsApp, esa conversación queda sujeta
            además a la política de privacidad de WhatsApp/Meta. No
            compartimos tus datos con otros terceros fuera de lo necesario
            para gestionar envíos de tu pedido (por ejemplo, la empresa de
            correo o transporte que elijas).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Tus derechos
          </h2>
          <p>
            Podés pedirnos en cualquier momento que te informemos, corrijamos
            o eliminemos los datos de contacto que tengamos guardados sobre
            vos, escribiéndonos a{" "}
            <a
              href="mailto:espoffperformance@gmail.com"
              className="underline underline-offset-2 hover:text-foreground"
            >
              espoffperformance@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
