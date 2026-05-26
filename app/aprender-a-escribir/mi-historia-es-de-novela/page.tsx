import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import TestimonialCard from "@/components/TestimonialCard";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Mi Historia es de Novela · Silvina Scheiner",
  description:
    "Un taller de escritura biográfica en 4 encuentros online. Explorá tu historia personal y empezá a contarla con la guía de Silvina Scheiner.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body = "var(--font-body), Inter, sans-serif";
const script = "var(--font-script), 'Caveat', cursive";

const TALLER = "Mi historia es de novela";

const sesiones = [
  {
    n: "01",
    title: "Tu historia en escena",
    body: "Empezamos por ubicar el punto de partida. ¿De dónde venís? ¿Qué personajes aparecen en tu historia? Un primer encuentro para entrar en calor y ver qué emerge.",
  },
  {
    n: "02",
    title: "Las anécdotas que te forman",
    body: "Volvemos a escenas concretas: momentos que te marcaron, situaciones que guardás sin saber bien por qué. Trabajamos la memoria como materia narrativa.",
  },
  {
    n: "03",
    title: "El presente mirado desde lejos",
    body: "Miramos quién sos hoy desde la distancia. Qué de tu historia te llegó hasta acá, qué querés seguir contando y qué estás listo para dejar atrás.",
  },
  {
    n: "04",
    title: "Tu historia, tu voz",
    body: "Cierre y síntesis. Revisamos lo que escribiste, hablamos de cómo seguir y qué forma puede tomar tu historia si querés continuar escribiendo.",
  },
];

const faqs = [
  {
    q: "¿Necesito haber escrito antes?",
    a: "No. El taller está pensado para cualquier persona, con o sin experiencia previa. Lo único que necesitás es tener algo de historia para explorar — y eso lo tenemos todos.",
  },
  {
    q: "¿Las sesiones son grabadas?",
    a: "Consultame por WhatsApp para ver la disponibilidad actual. En algunos casos se puede grabar para que puedas revisarla después.",
  },
  {
    q: "¿Hay fechas próximas disponibles?",
    a: "Sí. Escribíme por WhatsApp y te cuento cuándo son los próximos encuentros y cómo reservar tu lugar.",
  },
  {
    q: "¿Puedo participar desde cualquier lugar del mundo?",
    a: "Sí. El taller es 100% online, por Zoom o Google Meet. Podés participar desde donde estés.",
  },
  {
    q: "¿El taller incluye corrección de textos?",
    a: "No es un taller de corrección sino de exploración. Trabajamos con consignas y reflexión guiada, no con una lógica de revisión académica.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El precio varía según el momento. Escribíme por WhatsApp y te paso el valor actual y la forma de pago.",
  },
];

export default function MiHistoriaPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--green-soft)",
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
            <StickerBlob text={"4\nencs."} color="orange" rotate={10} size={100} />
          </div>

          <SectionLabel text="Historia personal · taller online" color="green" />

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
              Mi historia
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
              es de novela.
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
              maxWidth: 620,
            }}
          >
            Un taller de escritura biográfica en 4 encuentros online. Para evocar recuerdos, ordenar momentos y descubrir qué historia aparece cuando empezás a contarla.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              background: "white",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-card)",
              padding: "20px 24px",
              maxWidth: 560,
            }}
          >
            {[
              { icon: "🗓", text: "4 encuentros de 1 hora" },
              { icon: "💻", text: "Online por Zoom o Meet" },
              { icon: "🌍", text: "Desde cualquier lugar" },
              { icon: "✏️", text: "Sin experiencia previa" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: body,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName={TALLER} />
            <a href="#sesiones" className="btn-secondary">
              VER LOS 4 ENCUENTROS
            </a>
          </div>
        </div>
      </section>

      {/* ── LOS 4 ENCUENTROS ──────────────────────────────────── */}
      <section
        id="sesiones"
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Los 4 encuentros" color="orange" />
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
              Cuatro sesiones para{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                empezar a contarla.
              </span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 17, color: "var(--body)", margin: 0 }}>
              Cada encuentro dura 1 hora. Online, desde donde estés.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="choice-grid"
          >
            {sesiones.map(({ n, title, body: sesBody }) => (
              <div
                key={n}
                style={{
                  background: "white",
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxShadow: "4px 4px 0 var(--ink)",
                }}
              >
                <span
                  style={{
                    fontFamily: display,
                    fontSize: 52,
                    fontWeight: 900,
                    color: "var(--green)",
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
                  {sesBody}
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
                "Tenés una historia que querés contar y no sabés cómo empezar",
                "Querés ordenar momentos de tu vida antes de que se pierdan",
                "Sentís que tu historia merece ser contada, pero no te lo creés del todo",
                "Necesitás un espacio guiado para explorar tu pasado sin presión",
                "Siempre quisiste escribir algo autobiográfico y nunca te animaste",
                "Querés descubrir cómo es tu voz cuando escribís lo que viviste",
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
            quote="Llegué con miedo a no tener nada para decir y salí con un cuaderno lleno de escenas que no sabía que estaban en mí."
            name="Florencia M."
            role="Taller de autobiografía"
            avatarSrc="/images/testimonials/t1.png"
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
                      color: "var(--green)",
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
            <StickerBlob text="Contá" color="green" rotate={8} size={96} />
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
            Tu historia espera{" "}
            <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>
              ser contada.
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
            Escribíme y te cuento los próximos encuentros disponibles, el precio y cómo reservar tu lugar.
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
