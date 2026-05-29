import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "Error en el pago · Silvina Scheiner",
  description: "Hubo un problema con tu pago. Podés volver a intentarlo.",
};

export default function GraciasLibroDigitalFallo() {
  return (
    <ThankYouLayout
      label="Problema con el pago"
      labelColor="orange"
      emoji="😕"
      title="Algo salió mal."
      titleScript="no te preocupes."
      subtitle="No se realizó ningún cobro. Podés volver a intentarlo o escribirnos por WhatsApp y lo resolvemos juntos."
      nextSteps={[
        {
          icon:        "🔄",
          title:       "Volvé a intentarlo",
          description: "A veces pasa por un error temporal del banco o de MercadoPago. Volvé a la página de compra y reintentá.",
          color:       "var(--orange)",
        },
        {
          icon:        "💳",
          title:       "Probá otro método de pago",
          description: "MercadoPago acepta múltiples tarjetas y efectivo. Si una opción falla, probá con otra.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Seguís teniendo problemas?",
          description: "Escribinos por WhatsApp y lo resolvemos. También podemos coordinar otro método de pago.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        { label: "VOLVER A COMPRAR",       href: "/comprar",    variant: "dark" },
        {
          label:    "ESCRIBIR A SILVINA",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [ERROR DE PAGO]\n\nHola Silvina, tuve un problema al pagar el libro digital. ¿Podés ayudarme?")}`,
          variant:  "secondary",
          external: true,
        },
      ]}
      accentColor="var(--offwhite)"
    />
  );
}
