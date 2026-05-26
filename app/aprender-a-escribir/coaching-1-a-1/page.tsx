import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import TestimonialCard from "@/components/TestimonialCard";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Coaching 1:1 con Silvina Scheiner",
  description:
    "Acompañamiento individual para tu proyecto de escritura. Sesiones semanales, virtuales o presenciales. Para quienes quieren escribir un libro y necesitan guía y estructura.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body = "var(--font-body), Inter, sans-serif";
const script = "var(--font-script), 'Caveat', cursive";

const TALLER = "Coaching 1:1 con Silvina";

const faqs = [
  {
    q: "¿Cuántas sesiones necesito?",
    a: "Depende de tu proyecto. Un punto de partida habitual son 4 sesiones de 1 hora, pero el proceso se adapta a lo que necesitás: puede ser más corto para revisar un texto o más largo para desarrollar un libro desde cero.",
  },
  {
    q: "¿Cómo son las sesiones?",
    a: "Son conversaciones de trabajo. Revisamos lo que escribiste, identificamos obstáculos, definimos próximos pasos y trabajamos los aspectos que necesiten más atención según tu proyecto.",
  },
  {
    q: "¿Se puede hacer de forma presencial?",
    a: "Sí. Las sesiones virtuales se hacen por Zoom o Meet. Las sesiones presenciales son en Buenos Aires y tienen un costo 15% mayor.",
  },
  {
    q: "¿Qué tipo de proyectos trabajamos?",
    a: "Cualquier proyecto de escritura personal: una novela, una autobiografía, un libro de no ficción, un proyecto de escritura creativa. También acompañamos procesos de bloqueo o reescritura.",
  },
  {
    q: "¿Cuándo empezamos?",
    a: "Me contactás, hablamos de tu proyecto en una primera conversación gratuita de orientación, y definimos juntas el plan de trabajo, la cantidad de sesiones y el precio.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El precio varía según la cantidad de sesiones y el tipo de proceso. Me contactás por WhatsApp y lo armamos a medida.",
  },
];

export default function CoachingPage() {
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
            <StickerBlob text={"1:1\ncon vos"} color="yellow" rotate={10} size={100} />
          </div>

          <SectionLabel text="Acompañamiento individual" color="orange" />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <h1
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.0,
                letterSpacing: "-0.3px",
                color: "var(--cream)",
                margin: 0,
              }}
            >
              Coaching 1:1
            </h1>
            <span
              style={{
                fontFamily: script,
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(36px, 5.5vw, 66px)",
                color: "var(--yellow)",
                lineHeight: 1.05,
                display: "block",
              }}
            >
              con Silvina.
            </span>
          </div>

          <WaveDivider />

          <p
            style={{
              fontFamily: body,
              fontSize: 19,
              lineHeight: 1.75,
              color: "rgba(253,246,227,0.85)",
              margin: 0,
              maxWidth: 600,
            }}
          >
            Para quienes tienen un proyecto de escritura y necesitan estructura, guía y alguien que los ayude a avanzar. Sesiones individuales, semanales, a tu ritmo.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName={TALLER} buttonLabel="CONSULTAR MI PROYECTO" />
            <a href="#como-funciona" className="btn-cream">
              ¿CÓMO FUNCIONA?
            </a>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ─────────────────────────────────────── */}
      <section
        style={{
          background: "var(--yellow)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <SectionLabel text="¿Te suena conocido?" color="orange" />
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
            Querés escribir tu libro pero no sabés{" "}
            <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
              por dónde empezar.
            </span>
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 18,
              color: "var(--body)",
              margin: 0,
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            O empezaste y te trabaste a la mitad. O terminaste algo pero no sabés si tiene sentido. El coaching 1:1 es para proyectos que necesitan una guía concreta y un acompañamiento real.
          </p>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section
        id="como-funciona"
        style={{
          background: "var(--cream)",
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
              Un proceso a{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                tu medida.
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
                title: "Primera conversación",
                body: "Me contás tu proyecto — qué querés escribir, dónde estás, qué te traba. Es gratuita y sin compromiso. A partir de ahí definimos juntas qué tiene sentido.",
              },
              {
                n: "02",
                title: "Plan de trabajo",
                body: "Armamos un plan a medida: número de sesiones, frecuencia, foco de cada encuentro y precio. Todo queda claro antes de empezar.",
              },
              {
                n: "03",
                title: "Sesiones semanales",
                body: "Una hora por semana, por Zoom o en persona (Buenos Aires). Revisamos, avanzamos, desbloqueamos. Al terminar cada sesión, sabés cuál es el próximo paso.",
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

      {/* ── QUÉ TRABAJAMOS ────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Qué trabajamos" color="yellow" />
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
              Cada proyecto necesita{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                algo diferente.
              </span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 17, color: "var(--body)", margin: 0, maxWidth: 560 }}>
              El coaching se adapta a donde estás vos y a lo que necesita tu proyecto. Estos son algunos de los temas que trabajamos:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
            className="choice-grid"
          >
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                ),
                title: "Propósito y voz autoral",
                body: "Identificar qué querés decir, para quién escribís y qué voz le da coherencia a tu proyecto.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                ),
                title: "Estructura y organización",
                body: "Definir el mapa del libro: capítulos, orden, ritmo narrativo, transiciones. Que el proyecto tenga un esqueleto claro.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                ),
                title: "Generación de contenido",
                body: "Desbloquear la escritura cuando no sale. Consignas, técnicas y conversación para que las ideas tomen forma.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Temas centrales y audiencia",
                body: "Clarificar de qué trata realmente tu libro y a quién le habla. Un paso clave para que el proyecto sea coherente y publicable.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                ),
                title: "Opciones de publicación",
                body: "Explorar los caminos posibles: editorial tradicional, autopublicación, KDP de Amazon. Con información concreta para decidir.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.18-4.36"/>
                  </svg>
                ),
                title: "Revisión y reescritura",
                body: "Revisar lo que ya escribiste con ojos frescos y dirección clara. Para cuando algo no termina de funcionar y no sabés qué cambiar.",
              },
            ].map(({ icon, title, body: cardBody }) => (
              <div
                key={title}
                style={{
                  background: "white",
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding: "24px 28px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  boxShadow: "3px 3px 0 var(--ink)",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
                <div>
                  <h3
                    style={{
                      fontFamily: display,
                      fontWeight: 700,
                      fontSize: 17,
                      color: "var(--ink)",
                      margin: "0 0 8px",
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: body,
                      fontSize: 14,
                      color: "var(--body)",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {cardBody}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES (dark) ──────────────────────────────── */}
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
            <SectionLabel text="Es para vos si…" color="yellow" />
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
              Tenés algo que{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>
                querés escribir.
              </span>
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Querés escribir un libro pero no sabés cómo estructurarlo",
                "Empezaste y te trabaste a la mitad del proceso",
                "Terminaste algo pero no sabés si funciona o cómo mejorarlo",
                "Tenés muchas ideas pero no podés organizarlas",
                "Necesitás alguien que te ayude a avanzar semana a semana",
                "Querés explorar opciones de publicación con orientación real",
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
            quote="El 1:1 me ayudó a darle forma a un proyecto que tenía guardado hace años. Hoy es un libro en marcha."
            name="Paula G."
            role="Coaching 1:1"
            avatarSrc="/images/testimonials/t4.png"
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
            <StickerBlob text="¡Vamos!" color="yellow" rotate={-8} size={96} />
          </div>
          <div style={{ position: "absolute", bottom: -24, right: -24, zIndex: 10 }}>
            <StickerBlob text="Tu libro" color="orange" rotate={8} size={96} />
          </div>

          <SectionLabel text="¿Empezamos?" color="orange" />

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
            Tu proyecto merece{" "}
            <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>
              un plan real.
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
            La primera conversación es gratis. Me contás tu proyecto y vemos juntas si el coaching es lo que necesitás.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <EnrollmentModal tallerName={TALLER} buttonLabel="CONSULTAR MI PROYECTO" />
            <Link href="/aprender-a-escribir" className="btn-cream">
              VER TODOS LOS TALLERES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
