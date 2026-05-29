import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Anotado! Lista de espera del audiolibro · Silvina Scheiner",
  description: "Te avisamos en cuanto el audiolibro de Distancias del corazón esté disponible.",
};

export default function GraciasAudiolibro() {
  return (
    <ThankYouLayout
      label="¡Anotado!"
      labelColor="yellow"
      emoji="🎧"
      title="Estás en la lista."
      titleScript="te avisamos pronto."
      subtitle="Cuando el audiolibro de Distancias del corazón esté listo, sos de las primeras personas en enterarte."
      nextSteps={[
        {
          icon:        "📧",
          title:       "Te avisamos por email",
          description: "Cuando el audiolibro esté disponible, te mandamos un email con el link de compra antes de que lo anunciemos al público en general.",
          color:       "var(--orange)",
        },
        {
          icon:        "🎧",
          title:       "¿Qué es el audiolibro?",
          description: "Distancias del corazón leído por la autora. Una experiencia completamente distinta a leer el libro.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "📖",
          title:       "Mientras tanto…",
          description: "¿Ya leíste el libro en formato digital o físico? El texto te espera ahora mismo.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        { label: "COMPRAR EL LIBRO",  href: "/comprar", variant: "dark" },
        { label: "LEER CAPÍTULO 1",   href: "/leer",    variant: "secondary" },
        { label: "VOLVER AL INICIO",  href: "/",         variant: "secondary" },
      ]}
      accentColor="var(--offwhite)"
    />
  );
}
