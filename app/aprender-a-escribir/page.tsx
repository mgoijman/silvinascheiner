import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import TapeHighlight from "@/components/TapeHighlight";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

const options = [
  {
    id: "01",
    stickerColor: "yellow" as const,
    stickerRotate: -10,
    bg: "var(--green-soft)",
    title: "Comunidad gratuita",
    subtitle: "El punto de partida sin compromiso",
    description:
      "Un espacio online para escribir con otras personas. Consignas semanales, lecturas, intercambio. Ideal si querés empezar a mover la escritura sin presión.",
    features: [
      "Acceso a consignas semanales",
      "Canal de la comunidad por WhatsApp",
      "Lecturas y recursos compartidos",
      "Sin costo, sin permanencia obligatoria",
    ],
    cta: "SUMARME GRATIS",
    href: "https://wa.me/5491100000000",
    textColor: "var(--ink)",
  },
  {
    id: "02",
    stickerColor: "orange" as const,
    stickerRotate: 12,
    bg: "var(--orange)",
    title: "21 consignas para escribir hoy",
    subtitle: "Un mes de escritura guiada",
    description:
      "Una guía con 21 consignas para escribir en 21 días. Llegás por email, a tu ritmo. Sin teoría, sin presión — solo escribir.",
    features: [
      "21 consignas para 21 días",
      "Entregadas por email",
      "Guía de acompañamiento incluida",
      "Podés hacerlas a tu tiempo",
    ],
    cta: "QUIERO LAS 21 CONSIGNAS",
    href: "https://wa.me/5491100000000",
    textColor: "white",
  },
  {
    id: "03",
    stickerColor: "yellow" as const,
    stickerRotate: -8,
    bg: "var(--yellow)",
    title: "Taller grupal",
    subtitle: "Encontrá tu voz con otros",
    description:
      "Talleres de escritura creativa en grupos pequeños. Presenciales y online. Ciclos de 4 a 8 semanas para crear, explorar y animarte.",
    features: [
      "Grupos reducidos (máx. 10 personas)",
      "Online y presencial en Buenos Aires",
      "Ciclos de 4 a 8 semanas",
      "Consignas, devoluciones y comunidad",
    ],
    cta: "VER TALLERES",
    href: "https://wa.me/5491100000000",
    textColor: "var(--ink)",
  },
  {
    id: "04",
    stickerColor: "green" as const,
    stickerRotate: 10,
    bg: "var(--green)",
    title: "Acompañamiento 1:1",
    subtitle: "Tu proyecto, con guía personal",
    description:
      "Para quienes tienen un proyecto claro — un libro, una historia, un texto — y necesitan compañía para avanzar. Trabajo personalizado y a tu medida.",
    features: [
      "Plan de trabajo personalizado",
      "Sesiones individuales online",
      "Lectura y devolución de textos",
      "Para proyectos de largo aliento",
    ],
    cta: "CONSULTAR 1:1",
    href: "https://wa.me/5491100000000",
    textColor: "white",
  },
];

export default function AprenderPage() {
  return (
    <>
      {/* ───────────────────────────────────────────────────────
          HERO
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Quiero aprender a escribir" color="yellow" />

            <h1
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.5vw, 58px)",
                lineHeight: 1.1,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              ¿Tenés algo que querés escribir y no sabés{" "}
              <TapeHighlight>por dónde empezar?</TapeHighlight>
              <br />
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                  fontSize: "0.95em",
                }}
              >
                Lo entiendo mejor de lo que pensás.
              </span>
            </h1>

            <WaveDivider />

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--body)",
                margin: 0,
                maxWidth: 520,
              }}
            >
              No todos llegan buscando lo mismo. Podés escribir a tu ritmo, recibir una guía más personal o sumarte a una comunidad, un grupo creativo o un grupo de lectura.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#opciones" className="btn-primary">
                VER TODAS LAS OPCIONES
              </a>
              <Link href="/sobre" className="btn-secondary">
                CONOCÉ A SILVINA
              </Link>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image
                  src="/images/silvina/silvina-medios.png"
                  alt="Silvina Scheiner en un taller de escritura"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </HeroImageFrame>

              <div style={{ position: "absolute", top: -20, left: -20, zIndex: 10 }}>
                <StickerBlob text="¡Vení!" color="yellow" rotate={-12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          INTRO QUOTE
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-script), 'Caveat', cursive",
              fontStyle: "italic",
              fontSize: "clamp(26px, 4vw, 40px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            "Escribir no requiere talento. Requiere ganas, un poco de escucha y un espacio que te dé permiso."
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 14,
              color: "var(--muted-ink)",
              marginTop: 16,
              fontWeight: 600,
            }}
          >
            — Silvina Scheiner
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          OPCIONES DE TRABAJO
      ─────────────────────────────────────────────────────── */}
      <section
        id="opciones"
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Opciones" color="orange" />
            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(30px, 4vw, 48px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Elegí lo que más{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                se parece a vos
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                color: "var(--body)",
                maxWidth: 520,
                margin: 0,
              }}
            >
              Hay distintos caminos según dónde estés y qué necesitás. Podés empezar por donde más sentido tenga.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="options-grid"
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                style={{
                  position: "relative",
                  background: opt.bg,
                  border: "2px solid var(--ink)",
                  borderRadius: "var(--radius)",
                  padding: "44px 32px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div style={{ position: "absolute", top: -20, left: 20, zIndex: 10 }}>
                  <StickerBlob
                    text={opt.id}
                    color={opt.stickerColor}
                    rotate={opt.stickerRotate}
                    size={80}
                  />
                </div>

                <div style={{ paddingTop: 24 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: opt.textColor === "white" ? "rgba(255,255,255,0.7)" : "var(--muted-ink)",
                      margin: "0 0 4px",
                    }}
                  >
                    {opt.subtitle}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: opt.textColor,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {opt.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    color: opt.textColor === "white" ? "rgba(255,255,255,0.9)" : "var(--body)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {opt.description}
                </p>

                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {opt.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: "var(--font-body), Inter, sans-serif",
                        fontSize: 14,
                        color: opt.textColor === "white" ? "rgba(255,255,255,0.9)" : "var(--body)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 2 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "auto" }}>
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark"
                  >
                    {opt.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          FAQ
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="two-col"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionLabel text="Preguntas" color="yellow" />
            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 4vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Lo que suelen{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                preguntar
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                q: "¿Necesito tener experiencia para escribir?",
                a: "No. En todos los espacios —talleres, guías y acompañamiento— el punto de partida es exactamente donde estás. No hace falta experiencia previa.",
              },
              {
                q: "¿Los talleres son presenciales u online?",
                a: "Hay opciones para los dos. Los talleres grupales se hacen tanto online como presencialmente en Buenos Aires. El acompañamiento 1:1 es siempre online.",
              },
              {
                q: "¿Cómo sé cuál opción me sirve más?",
                a: "Si no sabés por dónde empezar, la comunidad gratuita es el punto de partida ideal. Si ya tenés algo concreto en mente, el taller grupal o el 1:1 pueden ser más útiles.",
              },
              {
                q: "¿Puedo escribir sobre mi propia historia?",
                a: "Sí, y es algo que pasa mucho. Muchas personas llegan con una historia personal que quieren contar, ordenar o simplemente poner en palabras.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                    fontSize: 15,
                    fontWeight: 900,
                    color: "var(--ink)",
                    margin: "0 0 8px",
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    color: "var(--body)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
