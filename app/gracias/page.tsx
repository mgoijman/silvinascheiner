import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";

export const metadata: Metadata = {
  title: "¡Gracias por tu compra! · Silvina Scheiner",
  description: "Tu pedido de Distancias del corazón fue confirmado.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function GraciasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px 96px",
          textAlign: "center",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Stickers */}
        <div style={{ position: "absolute", top: 32, left: 48, zIndex: 10 }}>
          <StickerBlob text={"¡Lo\nlográs!"} color="green" rotate={-12} size={96} />
        </div>
        <div style={{ position: "absolute", bottom: 32, right: 48, zIndex: 10 }}>
          <StickerBlob text={"¡Dale!" } color="orange" rotate={10} size={88} />
        </div>

        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          <SectionLabel text="Compra confirmada" color="yellow" />

          <h1
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 1.0,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            ¡Gracias!
            <br />
            <span className="script" style={{ color: "var(--yellow)", fontSize: "0.85em" }}>
              que lo disfrutes.
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
            Tu pedido de <em>Distancias del corazón</em> fue confirmado. En los próximos minutos te mandamos toda la información a tu email.
          </p>
        </div>
      </section>

      {/* ── QUÉ SIGUE ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="¿Qué pasa ahora?" color="orange" />
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
              Los próximos{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                pasos.
              </span>
            </h2>
          </div>

          <div className="formats-grid">
            {[
              {
                icon: "📧",
                title: "Revisá tu email",
                body: "Si compraste el formato digital, el PDF llega a tu casilla en los próximos minutos. Si no lo ves, revisá la carpeta de spam.",
                color: "var(--orange)",
              },
              {
                icon: "📦",
                title: "Si compraste físico",
                body: "Te vamos a contactar por WhatsApp o email para confirmar el domicilio y coordinar el envío. Llega en 5 a 7 días hábiles.",
                color: "var(--green-soft)",
              },
              {
                icon: "💬",
                title: "¿Algún problema?",
                body: "Escribíme directamente por WhatsApp o a hola@soysilvinascheiner.com.ar. Respondo rápido y lo resolvemos.",
                color: "var(--offwhite)",
              },
            ].map(({ icon, title, body: stepBody, color }) => (
              <div
                key={title}
                style={{
                  background: color,
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "4px 4px 0 var(--ink)",
                }}
              >
                <span style={{ fontSize: 36, lineHeight: 1 }}>{icon}</span>
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

      {/* ── MIENTRAS ESPERÁS ──────────────────────────────────── */}
      <section
        style={{
          background: "var(--yellow)",
          borderTop: "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
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
          <h2
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(24px, 3.5vw, 40px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Mientras tanto,{" "}
            <span className="script" style={{ color: "var(--orange-dark)" }}>
              seguí explorando.
            </span>
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 17,
              color: "var(--body)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Hay un universo detrás del libro: una comunidad, talleres de escritura y más. Dale un vistazo.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/leer#hijos-golondrina" className="btn-dark">
              HIJOS GOLONDRINA
            </Link>
            <Link href="/aprender-a-escribir" className="btn-secondary">
              VER TALLERES
            </Link>
            <Link href="/" className="btn-secondary">
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
