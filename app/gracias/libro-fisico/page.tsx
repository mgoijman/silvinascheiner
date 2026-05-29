import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Consulta recibida! Libro físico · Silvina Scheiner",
  description: "Silvina te escribe con el precio de envío a tu zona.",
};

export default function GraciasLibroFisico() {
  return (
    <ThankYouLayout
      label="Consulta recibida"
      labelColor="yellow"
      emoji="📦"
      title="¡Gracias!"
      titleScript="te escribimos pronto."
      subtitle="Silvina recibió tu consulta sobre el libro físico. Te escribe en breve con el precio de envío a tu zona y cómo coordinar la entrega."
      nextSteps={[
        {
          icon:        "📬",
          title:       "Mirá tu WhatsApp",
          description: "Silvina te escribe por WhatsApp con el precio de envío a tu ciudad. Suele responder dentro de las 24 horas hábiles.",
          color:       "var(--orange)",
        },
        {
          icon:        "🚚",
          title:       "Envíos a todo el mundo",
          description: "El libro físico llega a cualquier parte de Argentina y al exterior. El precio de envío varía según la zona.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Querés ir más rápido?",
          description: "No hace falta esperar. Podés escribirle directamente a Silvina por WhatsApp con tu ciudad y el país de destino.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        {
          label:    "ESCRIBIR A SILVINA",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [COTIZACIÓN ENVÍO]\n\nHola Silvina, quiero saber el precio de envío del libro físico a mi zona.")}`,
          variant:  "dark",
          external: true,
        },
        { label: "LEER CAPÍTULO 1 GRATIS", href: "/leer",     variant: "secondary" },
        { label: "VOLVER AL INICIO",        href: "/",         variant: "secondary" },
      ]}
      accentColor="var(--yellow)"
    />
  );
}
