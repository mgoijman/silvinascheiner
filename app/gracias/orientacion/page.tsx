import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Gracias por tu consulta! · Silvina Scheiner",
  description: "Silvina te escribe pronto con su recomendación personalizada.",
};

export default function GraciasOrientacion() {
  return (
    <ThankYouLayout
      label="Consulta recibida"
      labelColor="yellow"
      emoji="✍️"
      title="¡Gracias!"
      titleScript="ya te leemos."
      subtitle="Silvina va a leer lo que compartiste y te escribe en las próximas 24 horas con su recomendación personalizada."
      nextSteps={[
        {
          icon:        "📬",
          title:       "Revisá tu WhatsApp",
          description: "Silvina te va a escribir por WhatsApp con su recomendación. Guardá el número para no perder el mensaje.",
          color:       "var(--orange)",
        },
        {
          icon:        "📧",
          title:       "Y también tu email",
          description: "Si dejaste tu email, también te escribimos por ahí con información sobre la opción que más se adapta a vos.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "🕐",
          title:       "¿Cuánto tarda?",
          description: "Silvina responde personalmente. Puede tardar hasta 24 horas en días hábiles. Vale la espera 💛",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        { label: "VER TALLERES",     href: "/aprender-a-escribir", variant: "dark" },
        { label: "LEER EL LIBRO",    href: "/leer",                variant: "secondary" },
        { label: "VOLVER AL INICIO", href: "/",                    variant: "secondary" },
      ]}
      accentColor="var(--yellow)"
    />
  );
}
