import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";

export const metadata: Metadata = {
  title: "Comprar Distancias del corazón · Silvina Scheiner",
  description:
    "Conseguí Distancias del corazón de Silvina Scheiner en formato digital o físico. Entrega inmediata por email. Envíos a todo Argentina.",
};

const MP_DIGITAL =
  "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/00d0fb5a-d0ad-45a5-99f1-96240c4842d5/payment-option-form/?preference-id=62905811-14aaa4df-acef-4214-ade1-a21aa2e7bb57&router-request-id=01910df3-4de5-4d55-85e0-249f6a28dd7f&p=1aa1d6af20e5630580d9889e932a0af5";
const WA_FISICO =
  "https://wa.me/5491159264582?text=Hola%20Silvina%2C%20me%20interesa%20comprar%20el%20libro%20f%C3%ADsico%20de%20Distancias%20del%20coraz%C3%B3n.%20%C2%BFC%C3%BAl%20es%20el%20precio%20y%20c%C3%B3mo%20es%20el%20env%C3%ADo%3F";
const WA_AUDIO =
  "https://wa.me/5491159264582?text=Hola%20Silvina%2C%20me%20interesa%20el%20audiolibro%20de%20Distancias%20del%20coraz%C3%B3n.%20%C2%BFCu%C3%A1ndo%20va%20a%20estar%20disponible%3F";
const WA_DUDAS =
  "https://wa.me/5491159264582?text=Hola%20Silvina%2C%20tengo%20una%20consulta%20sobre%20la%20compra%20del%20libro%20Distancias%20del%20coraz%C3%B3n";

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

const faqs = [
  {
    q: "¿Cómo recibo el libro digital?",
    a: "Una vez que completás el pago, recibís un email con el archivo PDF para descargar. Llega en minutos a la casilla que usaste al comprar.",
  },
  {
    q: "¿El libro físico tiene envío gratis?",
    a: "El envío tiene un costo adicional según tu ubicación dentro de Argentina. Lo coordinamos por WhatsApp antes de confirmar el pedido.",
  },
  {
    q: "¿Puedo pagar con tarjeta de crédito?",
    a: "Sí. Los pagos digitales se procesan por MercadoPago, que acepta tarjetas, débito, transferencia y billeteras digitales.",
  },
  {
    q: "¿Puedo comprar desde el exterior?",
    a: "El formato digital se puede comprar desde cualquier parte del mundo. El libro físico tiene envíos solo dentro de Argentina.",
  },
  {
    q: "¿Puedo pedir factura o comprobante?",
    a: "Para factura o comprobante, escribíme por WhatsApp o a hola@soysilvinascheiner.com.ar y lo resolvemos.",
  },
  {
    q: "¿Qué pasa si no recibo el email con el PDF?",
    a: "Revisá la carpeta de spam. Si no apareció en 30 minutos, escribíme por WhatsApp o email y te lo reenvío en el momento.",
  },
];

export default function ComprarPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 80px",
        }}
      >
        <div
          style={{ maxWidth: 1100, margin: "0 auto" }}
          className="two-col"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Comprar el libro" color="orange" />
            <h1
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 1.0,
                letterSpacing: "-0.3px",
                color: "var(--cream)",
                margin: 0,
              }}
            >
              Distancias
              <br />
              <span className="script" style={{ color: "var(--yellow)", fontSize: "0.95em" }}>
                del corazón
              </span>
            </h1>
            <p
              style={{
                fontFamily: body,
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(253,246,227,0.8)",
                margin: 0,
                maxWidth: 460,
              }}
            >
              Una madre, una hija y 14.000 kilómetros. La historia que habla de lo
              que duele, de lo que une y de las palabras que a veces tardan años en
              encontrarse.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={MP_DIGITAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                COMPRAR DIGITAL — $20.000 ARS
              </a>
              <a href="#formatos" className="btn-cream">
                VER TODOS LOS FORMATOS
              </a>
            </div>
            <p
              style={{
                fontFamily: body,
                fontSize: 13,
                color: "rgba(253,246,227,0.45)",
                margin: 0,
              }}
            >
              Pago seguro con MercadoPago · Entrega inmediata · Argentina y el mundo
            </p>
          </div>

          {/* Right — book */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  borderRadius: "var(--radius-card)",
                  border: "2px solid rgba(253,246,227,0.2)",
                  overflow: "hidden",
                  boxShadow: "8px 8px 0 rgba(253,246,227,0.08)",
                }}
              >
                <Image
                  src="/images/book/book-mockup-1.png"
                  alt="Distancias del corazón — Silvina Scheiner"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  priority
                />
              </div>
              <div style={{ position: "absolute", top: -20, right: -20, zIndex: 10 }}>
                <StickerBlob text={"Leelo\nhoy"} color="yellow" rotate={10} size={108} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATOS ──────────────────────────────────────────── */}
      <section
        id="formatos"
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Formatos disponibles" color="orange" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Elegí cómo{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                querés leerlo.
              </span>
            </h2>
          </div>

          <div className="formats-grid">
            {/* ── Digital ── */}
            <div
              style={{
                position: "relative",
                background: "var(--orange)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "6px 6px 0 var(--ink)",
              }}
            >
              {/* Badge over image */}
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  left: 20,
                  zIndex: 10,
                  background: "var(--yellow)",
                  color: "var(--ink)",
                  border: "2px solid var(--ink)",
                  padding: "2px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontFamily: body,
                }}
              >
                Más elegido
              </span>
              <div style={{ position: "relative", height: 220, background: "rgba(0,0,0,0.12)", flexShrink: 0 }}>
                <Image
                  src="/images/book/book-digital.png"
                  alt="Distancias del corazón — formato digital PDF"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 16, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: display, fontSize: 24, color: "white", margin: "0 0 4px", fontWeight: 700 }}>
                    Digital
                  </p>
                  <p style={{ fontFamily: body, fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                    PDF · enviado por email
                  </p>
                </div>
                <p style={{ fontFamily: display, fontSize: 38, color: "white", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  $20.000{" "}
                  <span style={{ fontSize: 16, opacity: 0.7, fontWeight: 400, fontFamily: body }}>ARS</span>
                </p>
                <p style={{ fontFamily: body, fontSize: 15, color: "rgba(255,255,255,0.88)", margin: 0, lineHeight: 1.6 }}>
                  Recibís el libro completo en tu email al instante, desde cualquier parte del mundo.
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flexGrow: 1 }}>
                  {["Entrega inmediata por email", "PDF de alta calidad", "Compatible con cualquier dispositivo", "Sin costo de envío"].map((p) => (
                    <li key={p} style={{ fontFamily: body, fontSize: 14, color: "rgba(255,255,255,0.88)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--yellow)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={MP_DIGITAL} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ textAlign: "center" }}>
                  COMPRAR DIGITAL
                </a>
              </div>
            </div>

            {/* ── Físico ── */}
            <div
              style={{
                background: "white",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "4px 4px 0 var(--ink)",
              }}
            >
              <div style={{ position: "relative", height: 220, background: "rgba(0,0,0,0.08)", flexShrink: 0 }}>
                <Image
                  src="/images/book/book-fisico.png"
                  alt="Distancias del corazón — libro físico impreso"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 16, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: display, fontSize: 24, color: "var(--ink)", margin: "0 0 4px", fontWeight: 700 }}>
                    Físico
                  </p>
                  <p style={{ fontFamily: body, fontSize: 13, color: "var(--muted-ink)", margin: 0 }}>
                    Libro impreso · solo Argentina
                  </p>
                </div>
                <p style={{ fontFamily: display, fontSize: 28, color: "var(--ink)", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  Consultá precio
                </p>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                  El libro en papel, enviado a tu puerta. Envíos por Correo Argentino o Andreani a todo el país.
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flexGrow: 1 }}>
                  {["Envíos a todo Argentina", "5 a 7 días hábiles", "Costo de envío a convenir", "Empaque cuidado"].map((p) => (
                    <li key={p} style={{ fontFamily: body, fontSize: 14, color: "var(--body)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--green)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={WA_FISICO} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center" }}>
                  CONSULTAR POR WHATSAPP
                </a>
              </div>
            </div>

            {/* ── Audiolibro ── */}
            <div
              style={{
                background: "var(--green-soft)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "4px 4px 0 var(--ink)",
                opacity: 0.88,
              }}
            >
              <div style={{ position: "relative", height: 220, background: "rgba(0,0,0,0.08)", flexShrink: 0 }}>
                <Image
                  src="/images/book/book-audio.png"
                  alt="Distancias del corazón — audiolibro"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 16, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: display, fontSize: 24, color: "var(--ink)", margin: "0 0 4px", fontWeight: 700 }}>
                    Audiolibro
                  </p>
                  <p style={{ fontFamily: body, fontSize: 13, color: "var(--muted-ink)", margin: 0 }}>
                    Para escuchar donde estés
                  </p>
                </div>
                <p style={{ fontFamily: display, fontSize: 26, color: "var(--ink)", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  Próximamente
                </p>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                  El audiolibro está en producción. Dejá tu contacto y te avisamos cuando esté disponible.
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flexGrow: 1 }}>
                  {["En producción", "Anotate para saber primero", "Te avisamos por WhatsApp o email"].map((p) => (
                    <li key={p} style={{ fontFamily: body, fontSize: 14, color: "var(--body)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--green-dark)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={WA_AUDIO} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ textAlign: "center" }}>
                  AVISAME CUANDO ESTÉ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section
        style={{
          background: "var(--yellow)",
          borderTop: "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Cómo funciona" color="orange" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Tres pasos y{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                listo.
              </span>
            </h2>
          </div>
          <div className="formats-grid">
            {[
              {
                n: "01",
                title: "Elegís el formato",
                body: "Digital (PDF) para tener el libro en el momento, físico si preferís el papel, o dejá tu contacto para el audiolibro.",
              },
              {
                n: "02",
                title: "Completás el pago",
                body: "Digital: con tarjeta, débito o transferencia vía MercadoPago. Físico: coordinamos por WhatsApp y te mandamos el link de pago.",
              },
              {
                n: "03",
                title: "Recibís el libro",
                body: "Digital: el PDF llega a tu email en minutos. Físico: lo despachamos y te avisamos el tracking. Llega en 5 a 7 días hábiles.",
              },
            ].map(({ n, title, body: stepBody }) => (
              <div
                key={n}
                style={{
                  background: "white",
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "4px 4px 0 var(--ink)",
                }}
              >
                <span
                  style={{
                    fontFamily: display,
                    fontSize: 52,
                    fontWeight: 900,
                    color: "var(--orange)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: body,
                    fontSize: 15,
                    color: "var(--body)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {stepBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Preguntas frecuentes" color="green" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Todo lo que{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                necesitás saber.
              </span>
            </h2>
          </div>
          <div>
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                style={{
                  borderTop: "2px solid var(--ink)",
                  borderBottom: i === faqs.length - 1 ? "2px solid var(--ink)" : "none",
                  padding: "24px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    fontFamily: body,
                    fontSize: 15,
                    color: "var(--body)",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={WA_DUDAS} target="_blank" rel="noopener noreferrer" className="btn-primary">
              CONSULTAR POR WHATSAPP
            </a>
            <Link href="/contacto" className="btn-secondary">
              IR A CONTACTO
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA DARK ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <SectionLabel text="¿Dudas?" color="yellow" />
          <h2
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 46px)",
              letterSpacing: "-0.24px",
              color: "var(--cream)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Escribíme y{" "}
            <span className="script" style={{ color: "var(--yellow)" }}>
              lo resolvemos.
            </span>
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 17,
              color: "rgba(253,246,227,0.8)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Si tenés alguna duda sobre el pago, el envío o el formato, escribíme. Respondo rápido.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={WA_DUDAS} target="_blank" rel="noopener noreferrer" className="btn-primary">
              ESCRIBÍME POR WHATSAPP
            </a>
            <a href="mailto:hola@soysilvinascheiner.com.ar" className="btn-cream">
              MANDAR UN EMAIL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
