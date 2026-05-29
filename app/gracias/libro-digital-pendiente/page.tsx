import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "Pago en proceso · Silvina Scheiner",
  description: "Tu pago del libro digital está siendo procesado.",
};

export default function GraciasLibroDigitalPendiente() {
  return (
    <ThankYouLayout
      label="Pago en proceso"
      labelColor="orange"
      emoji="⏳"
      title="Casi listo."
      titleScript="te avisamos pronto."
      subtitle="Tu pago está siendo procesado por MercadoPago. Puede tardar unos minutos o unas horas según el método de pago elegido."
      nextSteps={[
        {
          icon:        "📧",
          title:       "Esperá el email de confirmación",
          description: "Cuando MercadoPago confirme el pago, te mandamos el PDF a tu casilla automáticamente.",
          color:       "var(--orange)",
        },
        {
          icon:        "🕐",
          title:       "¿Cuánto tarda?",
          description: "Los pagos con tarjeta suelen confirmarse en minutos. Los pagos en efectivo (Rapipago, Pago Fácil) pueden tardar hasta 72hs hábiles.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Tenés dudas?",
          description: "Si pasaron más de 2 días y no recibiste el libro, escribinos por WhatsApp o a hola@soysilvinascheiner.com.ar.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        {
          label:    "CONSULTAR POR WHATSAPP",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [PAGO PENDIENTE]\n\nHola Silvina, hice una compra del libro digital y el pago quedó pendiente. ¿Podés ayudarme?")}`,
          variant:  "dark",
          external: true,
        },
        { label: "VOLVER AL INICIO", href: "/", variant: "secondary" },
      ]}
      accentColor="var(--offwhite)"
    />
  );
}
