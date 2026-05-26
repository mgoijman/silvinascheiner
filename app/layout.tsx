import type { Metadata } from "next";
import { Archivo, Inter, Quintessential } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const archivoBlack = Archivo({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const quintessential = Quintessential({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silvina Scheiner — Escribir es encontrarte",
  description:
    "Escritora, periodista y docente de escritura creativa. Acompaño procesos de escritura desde Argentina, online y presencial.",
  openGraph: {
    title: "Silvina Scheiner — Escribir es encontrarte",
    description:
      "Escritora, periodista y docente de escritura creativa. Libros, talleres y acompañamiento desde Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${archivoBlack.variable} ${inter.variable} ${quintessential.variable}`}
    >
      <body style={{ background: "var(--cream)", color: "var(--body)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
