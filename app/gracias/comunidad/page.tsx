import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Bienvenida/o a Hijos Golondrina! · Silvina Scheiner",
  description: "Ya sos parte de la comunidad de lectores y escritores de Silvina Scheiner.",
};

export default function GraciasComunidad() {
  return (
    <ThankYouLayout
      label="¡Bienvenida/o!"
      labelColor="yellow"
      emoji="💛"
      title="Ya sos parte"
      titleScript="de Hijos Golondrina."
      subtitle="Silvina te va a agregar al grupo y te mandará las primeras consignas. Este es un espacio de escritura sin presión, a tu ritmo."
      nextSteps={[
        {
          icon:        "📱",
          title:       "Te sumamos al grupo",
          description: "Silvina o alguien del equipo te agrega al grupo de WhatsApp de Hijos Golondrina en breve. Guardá el número para no perder la invitación.",
          color:       "var(--orange)",
        },
        {
          icon:        "✍️",
          title:       "Las primeras consignas",
          description: "Cuando estés adentro, vas a recibir las primeras consignas de escritura. No hace falta tener experiencia ni talento — solo ganas.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Alguna pregunta?",
          description: "Podés escribirle a Silvina directamente. Es un espacio personal y sin apuro.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        {
          label:    "ESCRIBIR A SILVINA",
          href:     `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [HIJOS GOLONDRINA]\n\nHola Silvina, acabo de anotarme a Hijos Golondrina. ¡Muchas gracias!")}`,
          variant:  "dark",
          external: true,
        },
        { label: "LEER EL LIBRO",    href: "/leer",     variant: "secondary" },
        { label: "VOLVER AL INICIO", href: "/",          variant: "secondary" },
      ]}
      accentColor="var(--yellow)"
      stickerLeft={"¡Bienven\nida/o!"}
      stickerRight={"💛"}
    />
  );
}
