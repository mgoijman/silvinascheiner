import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import { existsSync, statSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Tu primer capítulo · Silvina Scheiner",
  description: "Descargá el primer capítulo de Distancias del corazón.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

const PDF_PATH = "/downloads/capitulo-1-distancias-del-corazon.pdf";

function pdfExists(): boolean {
  try {
    const abs = path.join(process.cwd(), "public", "downloads", "capitulo-1-distancias-del-corazon.pdf");
    return existsSync(abs) && statSync(abs).size > 500;
  } catch {
    return false;
  }
}

export default function GraciasCapitulo1() {
  const hasRealPdf = pdfExists();

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background:   "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding:      "80px 24px 96px",
          textAlign:    "center",
          position:     "relative",
          overflow:     "visible",
        }}
      >
        <div style={{ position: "absolute", top: 32, left: 48, zIndex: 10 }}>
          <StickerBlob text={"¡Ya\nllegó!"} color="yellow" rotate={-12} size={96} />
        </div>
        <div style={{ position: "absolute", bottom: 32, right: 48, zIndex: 10 }}>
          <StickerBlob text={"Cap.\n1 🎉"} color="orange" rotate={10} size={88} />
        </div>

        <div
          style={{
            maxWidth:      640,
            margin:        "0 auto",
            display:       "flex",
            flexDirection: "column",
            gap:           24,
            alignItems:    "center",
          }}
        >
          <SectionLabel text="Capítulo 1 gratis" color="yellow" />

          <h1
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize:   "clamp(44px, 7vw, 80px)",
              lineHeight: 1.0,
              color:      "var(--cream)",
              margin:     0,
            }}
          >
            ¡Acá está!
            <br />
            <span className="script" style={{ color: "var(--yellow)", fontSize: "0.85em" }}>
              que lo disfrutes.
            </span>
          </h1>

          <p
            style={{
              fontFamily: body,
              fontSize:   18,
              lineHeight: 1.7,
              color:      "rgba(253,246,227,0.8)",
              margin:     0,
              maxWidth:   460,
            }}
          >
            El primer capítulo de <em>Distancias del corazón</em> te espera. Descargalo y empezá a leer ahora mismo.
          </p>

          {hasRealPdf ? (
            <a
              href={PDF_PATH}
              download="capitulo-1-distancias-del-corazon.pdf"
              className="btn-primary"
              style={{ marginTop: 8 }}
              onClick={undefined /* Analytics.downloadFirstChapter() fires client-side — see DownloadTracker */}
            >
              📖 DESCARGAR CAPÍTULO 1
            </a>
          ) : (
            <div
              style={{
                background:   "rgba(255,255,255,0.08)",
                border:       "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: "var(--radius)",
                padding:      "20px 28px",
                maxWidth:     420,
                textAlign:    "center",
              }}
            >
              <p style={{ fontFamily: body, fontSize: 16, color: "var(--yellow)", margin: "0 0 12px" }}>
                📬 El archivo se está preparando.
              </p>
              <p style={{ fontFamily: body, fontSize: 15, color: "rgba(253,246,227,0.75)", margin: "0 0 16px", lineHeight: 1.6 }}>
                Silvina te lo manda por WhatsApp en breve. También te llegará por email.
              </p>
              <a
                href={`https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [CAP. 1 GRATIS]\n\nHola Silvina, acabo de completar el formulario para recibir el capítulo 1. ¿Podés enviármelo?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ESCRIBIR A SILVINA
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── QUÉ SIGUE ─────────────────────────────────────────── */}
      <section
        style={{
          background:   "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding:      "80px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="¿Qué pasa ahora?" color="orange" />
            <h2
              style={{
                fontFamily:    display,
                fontWeight:    400,
                fontSize:      "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color:         "var(--ink)",
                margin:        0,
                lineHeight:    1.1,
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
                icon:  "📧",
                title: "Revisá tu email",
                body:  "También te mandamos el capítulo a tu casilla. Si no lo ves, revisá la carpeta de spam o correo no deseado.",
                color: "var(--orange)",
              },
              {
                icon:  "📖",
                title: "¿Te enganchó?",
                body:  "Si el primer capítulo te atrapó, podés conseguir el libro completo en formato digital o físico.",
                color: "var(--green-soft)",
              },
              {
                icon:  "💬",
                title: "¿Alguna pregunta?",
                body:  "Escribile a Silvina por WhatsApp o a hola@soysilvinascheiner.com.ar. Responde rápido.",
                color: "var(--offwhite)",
              },
            ].map(({ icon, title, body: stepBody, color }) => (
              <div
                key={title}
                style={{
                  background:   color,
                  border:       "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding:      "32px 28px",
                  display:      "flex",
                  flexDirection:"column",
                  gap:          12,
                  boxShadow:    "4px 4px 0 var(--ink)",
                }}
              >
                <span style={{ fontSize: 36, lineHeight: 1 }}>{icon}</span>
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize:   20,
                    color:      "var(--ink)",
                    margin:     0,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: body,
                    fontSize:   15,
                    color:      "var(--body)",
                    margin:     0,
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

      {/* ── SEGUÍ LEYENDO ─────────────────────────────────────── */}
      <section
        style={{
          background:   "var(--yellow)",
          borderTop:    "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding:      "64px 24px",
          textAlign:    "center",
        }}
      >
        <div
          style={{
            maxWidth:      600,
            margin:        "0 auto",
            display:       "flex",
            flexDirection: "column",
            gap:           20,
            alignItems:    "center",
          }}
        >
          <h2
            style={{
              fontFamily:    display,
              fontWeight:    400,
              fontSize:      "clamp(24px, 3.5vw, 40px)",
              letterSpacing: "-0.24px",
              color:         "var(--ink)",
              margin:        0,
            }}
          >
            ¿Querés{" "}
            <span className="script" style={{ color: "var(--orange-dark)" }}>
              leer más?
            </span>
          </h2>
          <p style={{ fontFamily: body, fontSize: 17, color: "var(--body)", margin: 0, lineHeight: 1.7 }}>
            Conseguí el libro completo o sumate a Hijos Golondrina, la comunidad de lectores y escritores.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/comprar" className="btn-dark">
              COMPRAR EL LIBRO
            </Link>
            <Link href="/leer#hijos-golondrina" className="btn-secondary">
              HIJOS GOLONDRINA
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
