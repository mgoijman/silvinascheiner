import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import TestimonialCard from "@/components/TestimonialCard";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "21 Consignas para Brillar · Silvina Scheiner",
  description:
    "21 días, 21 consignas por WhatsApp. Escribís a tu ritmo y al final recibís un feedback personalizado en video de Silvina.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body = "var(--font-body), Inter, sans-serif";
const script = "var(--font-script), 'Caveat', cursive";

const TALLER = "21 consignas para brillar";

const faqs = [
  {
    q: "¿Necesito tener experiencia previa en escritura?",
    a: "No. El taller está pensado para cualquier persona, con o sin experiencia. No hace falta saber escribir bien — alcanza con tener ganas de probar.",
  },
  {
    q: "¿Hay fechas fijas o empiezo cuando quiero?",
    a: "Empezás cuando querés. No hay horarios ni calendario fijo. Cuando te anotás, arranca el día 1 y recibís una consigna diaria por WhatsApp durante 21 días.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle cada vez?",
    a: "Lo que tengas disponible. Hay quien escribe 10 minutos, hay quien se entusiasma y escribe una hora. No hay extensión mínima ni máxima.",
  },
  {
    q: "¿En qué formato llegan las consignas?",
    a: "Por WhatsApp, una por día. Cada consigna es una propuesta de escritura concreta y accesible que podés responder cuando quieras durante ese día.",
  },
  {
    q: "¿Tengo que compartir lo que escribo?",
    a: "No. Lo que escribís es tuyo y es privado. Al día 21, Silvina te manda un video con su feedback personalizado — no es una corrección, es una mirada sobre tu proceso.",
  },
  {
    q: "¿Cómo me anoto?",
    a: "Por WhatsApp. Escribíme y arrancamos. Te cuento el precio actual y los próximos pasos.",
  },
];

export default function ConsignasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: -16, right: 0, zIndex: 10 }}>
            <StickerBlob text={"21\ndías"} color="yellow" rotate={10} size={100} />
          </div>

          <SectionLabel text="Escribir sola · a tu ritmo" color="orange" />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <h1
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.0,
                letterSpacing: "-0.3px",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              21 consignas
            </h1>
            <span
              style={{
                fontFamily: script,
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(36px, 5.5vw, 66px)",
                color: "var(--orange-dark)",
                lineHeight: 1.05,
                display: "block",
              }}
            >
              para brillar.
            </span>
          </div>

          <WaveDivider />

          <p
            style={{
              fontFamily: body,
              fontSize: 19,
              lineHeight: 1.75,
              color: "var(--body)",
              margin: 0,
              maxWidth: 600,
            }}
          >
            Una consigna por día llega a tu WhatsApp durante 21 días. Vos escribís a tu manera, con total libertad, sin horarios y sin presión. Al día 21, Silvina te manda un video con su feedback personalizado sobre tu escritura.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName={TALLER} />
            <a href="#como-funciona" className="btn-secondary">
              ¿CÓMO FUNCIONA?
            </a>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section
        id="como-funciona"
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
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
              Simple como{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                abrir el WhatsApp.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="paths-grid"
          >
            {[
              {
                n: "01",
                title: "Te anotás",
                body: "Me escribís por WhatsApp, acordamos el inicio y listo. No hay fechas fijas — empezás cuando querés.",
              },
              {
                n: "02",
                title: "Una consigna por día por WhatsApp",
                body: "Durante 21 días recibís una consigna diaria. Cada una es una invitación a explorar algo tuyo: un recuerdo, una idea, una escena. Escribís cuando querés.",
              },
              {
                n: "03",
                title: "Feedback en video al día 21",
                body: "Sin nota, sin corrección. Solo escribís. Al terminar, Silvina te manda un video con su feedback personalizado sobre tu proceso de escritura.",
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

      {/* ── QUÉ INCLUYE ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Qué incluye" color="yellow" />
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
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                necesitás.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="paths-grid"
          >
            {[
              {
                icon: "💬",
                title: "21 consignas por WhatsApp",
                body: "Una consigna por día, enviada directo a tu WhatsApp durante 21 días. Cada una con una propuesta de escritura concreta y accesible.",
                color: "var(--orange-soft)",
              },
              {
                icon: "🕐",
                title: "Libertad de ritmo",
                body: "Sin horarios fijos, sin deadlines, sin presión. Escribís cuando querés, cuanto querés. El proceso es completamente tuyo.",
                color: "var(--yellow)",
              },
              {
                icon: "🎥",
                title: "Feedback personalizado en video",
                body: "Al terminar los 21 días, Silvina te manda un video con su mirada sobre tu escritura. No es una corrección — es un feedback cálido y personalizado.",
                color: "var(--green-soft)",
              },
            ].map(({ icon, title, body: cardBody, color }) => (
              <div
                key={title}
                style={{
                  background: color,
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
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
                  {cardBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ─────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="two-col"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Para quién es" color="yellow" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.24px",
                color: "var(--cream)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Es para vos{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>
                si…
              </span>
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Querés empezar a escribir pero no sabés por dónde",
                "Tenés algo para contar y no encontrás la forma",
                "Necesitás un espacio tuyo, sin presión ni corrección",
                "Querés escribir a tu ritmo, sin sumarte a un grupo",
                "Nunca escribiste y querés probar cómo se siente",
                "Ya escribiste antes y querés retomar con consignas nuevas",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: body,
                    fontSize: 16,
                    color: "rgba(253,246,227,0.88)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: "var(--yellow)", flexShrink: 0, fontWeight: 700, marginTop: 1 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — testimonial */}
          <TestimonialCard
            quote="Las consignas de Silvina me sacaron del bloqueo. Empecé a escribir de nuevo, sin presión."
            name="Daniela S."
            role="21 consignas"
            avatarSrc="/images/testimonials/t2.png"
            color="yellow"
          />
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ──────────────────────────────── */}
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
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Todo lo que querés{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                saber.
              </span>
            </h2>
          </div>

          <div>
            {faqs.map(({ q, a }, i) => (
              <details
                key={q}
                style={{
                  borderTop: "2px solid var(--ink)",
                  borderBottom: i === faqs.length - 1 ? "2px solid var(--ink)" : "none",
                }}
              >
                <summary
                  style={{
                    padding: "22px 0",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
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
                  <span
                    style={{
                      fontFamily: display,
                      fontSize: 20,
                      color: "var(--orange)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: body,
                    fontSize: 15,
                    color: "var(--body)",
                    margin: 0,
                    lineHeight: 1.7,
                    paddingBottom: 24,
                  }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            position: "relative",
            border: "2px solid var(--cream)",
            borderRadius: "var(--radius-card)",
            padding: "64px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
            overflow: "visible",
          }}
        >
          <div style={{ position: "absolute", top: -24, left: -24, zIndex: 10 }}>
            <StickerBlob text="¡Dale!" color="yellow" rotate={-8} size={96} />
          </div>
          <div style={{ position: "absolute", bottom: -24, right: -24, zIndex: 10 }}>
            <StickerBlob text="Escribí" color="orange" rotate={8} size={96} />
          </div>

          <SectionLabel text="¿Arrancamos?" color="orange" />

          <h2
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.24px",
              color: "var(--cream)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Tu historia empieza con{" "}
            <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>
              una consigna.
            </span>
          </h2>

          <p
            style={{
              fontFamily: body,
              fontSize: 17,
              color: "rgba(253,246,227,0.8)",
              margin: 0,
              maxWidth: 440,
              lineHeight: 1.65,
            }}
          >
            No hace falta tener experiencia. Solo tener ganas de ver qué aparece cuando empezás a escribir.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <EnrollmentModal tallerName={TALLER} />
            <Link href="/aprender-a-escribir" className="btn-cream">
              VER TODOS LOS TALLERES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
