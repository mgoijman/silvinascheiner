import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Tu lugar está reservado! · Silvina Scheiner",
  description: "Silvina confirma fecha, precio y próximos pasos en breve.",
};

export default function GraciasTaller() {
  return (
    <ThankYouLayout
      label="Inscripción recibida"
      labelColor="yellow"
      emoji="✍️"
      title="¡Tu lugar está reservado!"
      titleScript="arrancamos pronto."
      subtitle="Silvina recibió tu inscripción. Te escribe en breve para confirmar la fecha de inicio, el precio y cómo sumarte."
      nextSteps={[
        {
          icon:        "📬",
          title:       "Esperá el mensaje de Silvina",
          description: "Silvina confirma disponibilidad y los próximos pasos por WhatsApp o email. Suele responder dentro de las 24 horas hábiles.",
          color:       "var(--orange)",
        },
        {
          icon:        "📅",
          title:       "Fecha y modalidad",
          description: "En el mensaje te contamos la fecha de inicio, la frecuencia y si el taller es online o presencial.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Tenés dudas?",
          description: "No hace falta esperar. Podés escribirle directamente a Silvina por WhatsApp.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        {
          label:    "ESCRIBIR A SILVINA",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [TALLER - CONSULTA]\n\nHola Silvina, acabo de inscribirme a un taller y quiero saber más.")}`,
          variant:  "dark",
          external: true,
        },
        { label: "VER TODOS LOS TALLERES", href: "/aprender-a-escribir", variant: "secondary" },
        { label: "VOLVER AL INICIO",       href: "/",                    variant: "secondary" },
      ]}
      accentColor="var(--yellow)"
    />
  );
}
