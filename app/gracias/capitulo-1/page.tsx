import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";

export const metadata: Metadata = {
  title: "Tu primer capítulo · Silvina Scheiner",
  description: "Descargá el primer capítulo de Distancias del corazón — PDF y audiolibro.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function GraciasCapitulo1() {
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
              maxWidth:   480,
            }}
          >
            El primer capítulo de <em>Distancias del corazón</em> está listo. Elegí cómo querés disfrutarlo — leerlo o escucharlo.
          </p>
        </div>
      </section>

      {/* ── DOWNLOAD BUTTONS ──────────────────────────────────── */}
      <section
        style={{
          background:   "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding:      "72px 24px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}>
          <SectionLabel text="Tus archivos" color="orange" />
          <h2
            style={{
              fontFamily:    display,
              fontWeight:    400,
              fontSize:      "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.24px",
              color:         "var(--ink)",
              margin:        0,
              lineHeight:    1.1,
            }}
          >
            Dos formas de{" "}
            <span className="script" style={{ color: "var(--orange-dark)" }}>
              empezar.
            </span>
          </h2>
          <p style={{ fontFamily: body, fontSize: 17, color: "var(--body)", margin: 0, lineHeight: 1.65, maxWidth: 480 }}>
            Podés leerlo en PDF o escuchar el audiolibro narrado por una narradora profesional. Los dos son gratis, los dos son tuyos.
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 24,
              width:               "100%",
              marginTop:           8,
            }}
            className="two-col"
          >
            {/* PDF */}
            <div
              style={{
                background:    "var(--orange)",
                border:        "2px solid var(--ink)",
                borderRadius:  "var(--radius-card)",
                padding:       "36px 28px",
                display:       "flex",
                flexDirection: "column",
                gap:           16,
                alignItems:    "center",
                textAlign:     "center",
                boxShadow:     "6px 6px 0 var(--ink)",
              }}
            >
              <span style={{ fontSize: 52 }}>📖</span>
              <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 22, color: "white", margin: 0, lineHeight: 1.15 }}>
                Leerlo
              </h3>
              <p style={{ fontFamily: body, fontSize: 15, color: "rgba(255,255,255,0.88)", margin: 0, lineHeight: 1.6 }}>
                Descargá el PDF. Lo podés abrir en el celular, la compu o cualquier lector de libros.
              </p>
              <a
                href="/downloads/Distancias-del-corazon-Cap-1.pdf"
                download="Distancias-del-corazon-Cap-1.pdf"
                className="btn-dark"
                style={{ marginTop: 4, width: "100%", textAlign: "center" }}
              >
                DESCARGAR PDF
              </a>
            </div>

            {/* Audio */}
            <div
              style={{
                background:    "var(--yellow)",
                border:        "2px solid var(--ink)",
                borderRadius:  "var(--radius-card)",
                padding:       "36px 28px",
                display:       "flex",
                flexDirection: "column",
                gap:           16,
                alignItems:    "center",
                textAlign:     "center",
                boxShadow:     "6px 6px 0 var(--ink)",
              }}
            >
              <span style={{ fontSize: 52 }}>🎧</span>
              <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 22, color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
                Escucharlo
              </h3>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                Audiolibro narrado por una narradora profesional. Descargalo o reproducilo directo.
              </p>
              <a
                href="/downloads/Distancias_Primer-Capitulo.mp4"
                download="Distancias-del-corazon-Cap-1-Audio.mp4"
                className="btn-dark"
                style={{ marginTop: 4, width: "100%", textAlign: "center" }}
              >
                DESCARGAR AUDIO
              </a>
            </div>
          </div>

          <p style={{ fontFamily: body, fontSize: 13, color: "var(--muted-ink)", margin: "8px 0 0", lineHeight: 1.5 }}>
            💡 También te mandamos estos links por email. Si no los ves, revisá la carpeta de spam.
          </p>
        </div>
      </section>

      {/* ── QUÉ SIGUE ─────────────────────────────────────────── */}
      <section
        style={{
          background:   "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding:      "64px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, display: "flex", flexDirection: "column", gap: 10 }}>
            <SectionLabel text="¿Qué sigue?" color="yellow" />
            <h2
              style={{
                fontFamily:    display,
                fontWeight:    400,
                fontSize:      "clamp(24px, 3.5vw, 40px)",
                letterSpacing: "-0.24px",
                color:         "var(--ink)",
                margin:        0,
                lineHeight:    1.1,
              }}
            >
              Si te{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                enganchó…
              </span>
            </h2>
          </div>

          <div className="formats-grid">
            {[
              {
                icon:  "📚",
                title: "Conseguí el libro completo",
                body:  "El libro sigue. Compraló en digital — entrega inmediata — o físico con envío a todo el mundo.",
                color: "var(--orange)",
              },
              {
                icon:  "💛",
                title: "Sumate a Hijos Golondrina",
                body:  "La comunidad de lectores y escritores de Silvina. Consignas, encuentros y un espacio sin presión.",
                color: "var(--green-soft)",
              },
              {
                icon:  "💬",
                title: "¿Alguna pregunta?",
                body:  "Escribile a Silvina a hola@soysilvinascheiner.com.ar o por WhatsApp. Responde rápido.",
                color: "var(--offwhite)",
                border: true,
              },
            ].map(({ icon, title, body: stepBody, color }) => (
              <div
                key={title}
                style={{
                  background:    color,
                  border:        "2px solid var(--ink)",
                  borderRadius:  "var(--radius-card)",
                  padding:       "32px 28px",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           12,
                  boxShadow:     "4px 4px 0 var(--ink)",
                }}
              >
                <span style={{ fontSize: 36, lineHeight: 1 }}>{icon}</span>
                <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 20, color: "var(--ink)", margin: 0 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.65 }}>
                  {stepBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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
            maxWidth:      580,
            margin:        "0 auto",
            display:       "flex",
            flexDirection: "column",
            gap:           20,
            alignItems:    "center",
          }}
        >
          <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0 }}>
            ¿Querés{" "}
            <span className="script" style={{ color: "var(--orange-dark)" }}>leer más?</span>
          </h2>
          <p style={{ fontFamily: body, fontSize: 17, color: "var(--body)", margin: 0, lineHeight: 1.7 }}>
            Conseguí el libro completo o sumate a Hijos Golondrina.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/comprar" className="btn-dark">COMPRAR EL LIBRO</Link>
            <Link href="/leer#hijos-golondrina" className="btn-secondary">HIJOS GOLONDRINA</Link>
            <Link href="/" className="btn-secondary">VOLVER AL INICIO</Link>
          </div>
        </div>
      </section>
    </>
  );
}
