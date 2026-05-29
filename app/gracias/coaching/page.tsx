import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Gracias por tu consulta de Coaching! · Silvina Scheiner",
  description: "Silvina confirma disponibilidad y te escribe en las próximas 48 horas.",
};

export default function GraciasCoaching() {
  return (
    <ThankYouLayout
      label="Consulta recibida"
      labelColor="yellow"
      emoji="🌱"
      title="¡Gracias!"
      titleScript="empezamos pronto."
      subtitle="Silvina recibió tu consulta sobre el Coaching 1:1. Te va a escribir en las próximas 48 horas para confirmar disponibilidad y los próximos pasos."
      nextSteps={[
        {
          icon:        "📬",
          title:       "Mirá tu WhatsApp y email",
          description: "Silvina confirma disponibilidad en las próximas 48 horas y te escribe para coordinar una primera sesión de orientación.",
          color:       "var(--orange)",
        },
        {
          icon:        "🗓️",
          title:       "Primera sesión de orientación",
          description: "La primera sesión sirve para conocerse, entender qué querés escribir y ver cómo trabajamos juntos. Sin compromiso.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Tenés más preguntas?",
          description: "No hace falta esperar. Podés escribirle a Silvina directamente por WhatsApp.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        {
          label:    "ESCRIBIR A SILVINA",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [COACHING 1:1]\n\nHola Silvina, me interesa el Coaching 1:1 y quiero saber más.")}`,
          variant:  "dark",
          external: true,
        },
        { label: "VER TODOS LOS TALLERES", href: "/aprender-a-escribir", variant: "secondary" },
        { label: "VOLVER AL INICIO",       href: "/",                    variant: "secondary" },
      ]}
      accentColor="var(--green-soft)"
    />
  );
}
