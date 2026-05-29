import type { Metadata } from "next";
import ThankYouLayout from "@/components/ThankYouLayout";

export const metadata: Metadata = {
  title: "¡Libro digital confirmado! · Silvina Scheiner",
  description: "Tu compra del libro digital de Distancias del corazón fue confirmada.",
};

interface Props {
  searchParams: { payment_id?: string; status?: string };
}

export default async function GraciasLibroDigital({ searchParams }: Props) {
  const paymentId = searchParams.payment_id;
  let paymentStatus: string | null = null;

  // Verify payment server-side before showing download
  if (paymentId && process.env.MERCADOPAGO_ACCESS_TOKEN) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/mercadopago/verify/${paymentId}`, {
        cache: "no-store",
      });
      const data = await res.json() as { status?: string };
      paymentStatus = data.status ?? null;
    } catch {
      // Proceed with friendly message
    }
  }

  const isApproved = paymentStatus === "approved" || searchParams.status === "approved";

  return (
    <ThankYouLayout
      label="Compra confirmada"
      labelColor="yellow"
      title="¡Gracias!"
      titleScript="ya tenés el libro."
      subtitle={
        isApproved
          ? "Tu pago fue confirmado. Abajo encontrás el enlace de descarga. También te mandamos todo por email."
          : "Recibimos tu pedido. En los próximos minutos te mandamos el PDF a tu email."
      }
      nextSteps={[
        {
          icon:        "📥",
          title:       isApproved ? "Descargá tu libro" : "Revisá tu email",
          description: isApproved
            ? "Hacé clic en el botón de arriba para descargar el PDF de Distancias del corazón."
            : "El PDF llega a tu casilla en los próximos minutos. Si no lo ves, revisá spam.",
          color: "var(--orange)",
        },
        {
          icon:        "📖",
          title:       "¿Cómo leerlo?",
          description: "Podés abrirlo en cualquier lector de PDF: tu celular, computadora, o una app como Kindle o GoodReader.",
          color:       "var(--green-soft)",
        },
        {
          icon:        "💬",
          title:       "¿Algún problema?",
          description: "Escribile a Silvina por WhatsApp o a hola@soysilvinascheiner.com.ar. Responde rápido.",
          color:       "var(--offwhite)",
        },
      ]}
      ctas={[
        { label: "HIJOS GOLONDRINA", href: "/leer#hijos-golondrina", variant: "dark" },
        { label: "VER TALLERES",     href: "/aprender-a-escribir",   variant: "secondary" },
        { label: "VOLVER AL INICIO", href: "/",                       variant: "secondary" },
      ]}
      stickerLeft={"¡Lo\nlográs!"}
      stickerRight={"¡Dale!"}
    />
  );
}
