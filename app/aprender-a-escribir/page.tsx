import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

/* ─── Badge chip (inline service category label) ─── */
function Badge({ text, color = "muted" }: { text: string; color?: "muted" | "green" | "orange" }) {
  const styles: Record<string, React.CSSProperties> = {
    muted:  { background: "var(--offwhite)", color: "var(--muted-ink)", border: "1px solid var(--line)" },
    green:  { background: "var(--green-soft)", color: "var(--green-dark)", border: "1px solid var(--green)" },
    orange: { background: "var(--orange-soft)", color: "var(--orange-dark)", border: "1px solid var(--orange)" },
  };
  return (
    <span style={{
      ...styles[color],
      display: "inline-block",
      borderRadius: "var(--radius-pill)",
      padding: "3px 10px",
      fontFamily: "var(--font-body), 'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "lowercase",
    }}>
      {text}
    </span>
  );
}

/* ─── Service card ─── */
function ServiceCard({
  badge,
  badgeColor = "muted",
  title,
  description,
  cta = "QUIERO INFO →",
  href = "https://wa.me/5491100000000",
  ctaVariant = "link",
}: {
  badge: string;
  badgeColor?: "muted" | "green" | "orange";
  title: string;
  description: string;
  cta?: string;
  href?: string;
  ctaVariant?: "link" | "btn";
}) {
  return (
    <article style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      borderRadius: "var(--radius-card)",
      border: "2px solid var(--ink)",
      background: "white",
      padding: "28px",
      boxShadow: "6px 6px 0 var(--ink)",
      height: "100%",
    }}>
      <Badge text={badge} color={badgeColor} />
      <h3 style={{
        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--ink)",
        margin: 0,
        lineHeight: 1.25,
      }}>{title}</h3>
      <p style={{
        fontFamily: "var(--font-body), Inter, sans-serif",
        fontSize: 15,
        color: "var(--body)",
        margin: 0,
        lineHeight: 1.65,
        flexGrow: 1,
      }}>{description}</p>
      <div style={{ marginTop: 4 }}>
        {ctaVariant === "btn" ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 11 }}>
            {cta}
          </a>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "var(--font-body), 'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--orange-dark)",
            textDecoration: "none",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}>{cta}</a>
        )}
      </div>
    </article>
  );
}

export default function AprenderPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "72px 24px 80px",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 64,
          alignItems: "center",
        }} className="two-col">

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Quiero aprender a escribir" color="yellow" />

            <h1 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.3px",
              color: "var(--ink)",
              margin: 0,
            }}>
              ¿Tenés algo que querés escribir y no sabés por dónde empezar?
            </h1>

            <span style={{
              fontFamily: "var(--font-script), 'Caveat', cursive",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 63px)",
              color: "var(--orange-dark)",
              lineHeight: 1.2,
            }}>
              Lo entiendo mejor de lo que pensás.
            </span>

            <WaveDivider />

            <p style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--body)",
              margin: 0,
              maxWidth: 520,
            }}>
              No todos llegan buscando lo mismo. Podés escribir a tu ritmo, recibir una guía más personal o sumarte a una comunidad, un grupo creativo o un grupo de lectura.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#formas" className="btn-primary">ELEGIR CAMINO</a>
              <a href="#orientacion" className="btn-secondary">NO SÉ CUÁL ELEGIR</a>
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

      {/* ── DOS FORMAS DE EMPEZAR ──────────────────────────── */}
      <section id="formas" style={{
        background: "var(--offwhite)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}>Dos formas de empezar</h2>
            <p style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 17,
              color: "var(--body)",
              margin: 0,
            }}>Elegí la forma que más se parece a lo que necesitás.</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }} className="choice-grid">

            {/* Card 1 — Sola */}
            <article style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              borderRadius: "var(--radius-card)",
              border: "2px solid var(--ink)",
              background: "var(--orange)",
              color: "white",
              padding: "48px 36px 36px",
              boxShadow: "6px 6px 0 var(--ink)",
            }}>
              <div style={{ position: "absolute", top: -20, right: 20, zIndex: 10 }}>
                <StickerBlob text="01" color="yellow" rotate={-8} size={72} />
              </div>

              <div>
                <h3 style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  color: "white",
                  margin: 0,
                  lineHeight: 1.15,
                }}>Quiero escribir<br />sola</h3>
              </div>

              <p style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 16,
                color: "rgba(255,255,255,0.9)",
                margin: 0,
                lineHeight: 1.65,
              }}>
                Para escribir a tu ritmo, trabajar una historia personal o recibir una guía enfocada en tu propio proceso.
              </p>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["21 consignas para brillar", "Autobiografía o Mi historia es de novela", "Coaching 1:1 con Silvina"].map(item => (
                  <li key={item} style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}>
                    <span style={{ opacity: 0.7 }}>→</span> {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <a href="#sola" className="btn-dark" style={{ fontSize: 11 }}>VER OPCIONES</a>
              </div>
            </article>

            {/* Card 2 — Acompañada */}
            <article style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              borderRadius: "var(--radius-card)",
              border: "2px solid var(--ink)",
              background: "var(--green-soft)",
              color: "var(--ink)",
              padding: "48px 36px 36px",
              boxShadow: "6px 6px 0 var(--ink)",
            }}>
              <div style={{ position: "absolute", top: -20, right: 20, zIndex: 10 }}>
                <StickerBlob text="02" color="orange" rotate={8} size={72} />
              </div>

              <div>
                <h3 style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.15,
                }}>Quiero escribir<br />acompañada</h3>
              </div>

              <p style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 16,
                color: "var(--body)",
                margin: 0,
                lineHeight: 1.65,
              }}>
                Para escribir con otras personas, recibir consignas, participar de encuentros y sostener una práctica compartida.
              </p>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Comunidad de Escritura Creativa gratis", "Grupo de Creatividad presencial y online", "Grupo de Lectura presencial y online"].map(item => (
                  <li key={item} style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}>
                    <span style={{ color: "var(--green-dark)" }}>→</span> {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <a href="#acompanada" className="btn-dark" style={{ fontSize: 11 }}>VER OPCIONES</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── ESCRIBIR SOLA ──────────────────────────────────── */}
      <section id="sola" style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel text="Escribir sola" color="orange" />
            <h2 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: "16px 0 8px",
              lineHeight: 1.1,
            }}>A tu ritmo, con tu voz.</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }} className="paths-grid">
            <ServiceCard
              badge="baja fricción"
              title="21 consignas para brillar"
              description="Una experiencia para escribir a tu manera, con libertad y sin horarios. Ideal si querés empezar sin sumarte a un grupo."
              cta="QUIERO INFO →"
            />
            <ServiceCard
              badge="historia personal"
              title="Autobiografía o Mi historia es de novela"
              description="Un taller para ordenar momentos de tu vida, evocar anécdotas y descubrir qué historia aparece cuando empezás a contarla."
              cta="QUIERO INFO →"
            />
            <ServiceCard
              badge="acompañamiento individual"
              title="Coaching 1:1 con Silvina"
              description="Para trabajar un libro, una idea o un texto que necesita estructura, tono, revisión o un plan posible con acompañamiento individual."
              cta="QUIERO INFO →"
            />
          </div>
        </div>
      </section>

      {/* ── ESCRIBIR ACOMPAÑADA ────────────────────────────── */}
      <section id="acompanada" style={{
        background: "var(--green-soft)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel text="Escribir acompañada" color="green" />
            <h2 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: "16px 0 8px",
              lineHeight: 1.1,
            }}>Escribir y leer con otros.</h2>
            <p style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 17,
              color: "var(--body)",
              margin: 0,
              maxWidth: 560,
            }}>
              Si te hace bien la práctica compartida, podés empezar gratis desde Instagram o sumarte a un grupo creativo o de lectura.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }} className="paths-grid">
            <ServiceCard
              badge="gratis"
              badgeColor="green"
              title="Comunidad de Escritura Creativa"
              description="Una comunidad gratuita en Instagram para recibir consignas, ideas, lecturas y novedades. Ideal si querés acercarte sin anotarte todavía a un taller."
              cta="SUMARME GRATIS →"
              href="https://instagram.com/soysilvinascheiner"
            />
            <ServiceCard
              badge="presencial y online"
              badgeColor="green"
              title="Grupo de Creatividad"
              description="Un espacio para escribir con otros, jugar con ideas, activar la imaginación y sostener una práctica creativa."
              cta="QUIERO INFO →"
            />
            <ServiceCard
              badge="presencial y online"
              badgeColor="green"
              title="Grupo de Lectura"
              description="Un espacio para leer en compañía, conversar sobre libros y descubrir nuevas formas de mirar las historias."
              cta="QUIERO INFO →"
            />
          </div>
        </div>
      </section>

      {/* ── VOCES ──────────────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Voces" color="yellow" />
            <h2 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}>Lo que cuentan quienes ya escribieron con Silvina</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }} className="testimonials-grid">
            {[
              { quote: "Llegué con miedo a no tener nada para decir y salí con un cuaderno lleno de escenas que no sabía que estaban en mí.", name: "Florencia M.", program: "Taller de autobiografía" },
              { quote: "Las consignas de Silvina me sacaron del bloqueo. Empecé a escribir de nuevo, sin presión.", name: "Daniela S.", program: "21 consignas" },
              { quote: "El grupo de creatividad se volvió un espacio sagrado de mi semana. Escribir con otros me cambió la forma de leer mi vida.", name: "Inés V.", program: "Grupo de creatividad" },
              { quote: "El 1:1 me ayudó a darle forma a un proyecto que tenía guardado hace años. Hoy es un libro en marcha.", name: "Paula G.", program: "Coaching 1:1" },
            ].map(({ quote, name, program }) => (
              <div key={name} style={{
                background: "var(--offwhite)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}>
                <p style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.5,
                }}>"{quote}"</p>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: 0,
                  }}>{name}</p>
                  <p style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 13,
                    color: "var(--muted-ink)",
                    margin: 0,
                  }}>{program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIENTACIÓN ────────────────────────────────────── */}
      <section id="orientacion" style={{
        background: "var(--offwhite)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }} className="two-col">

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Orientación" color="orange" />
            <h2 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.24px",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.15,
            }}>
              Si no sabés cuál elegir,{" "}
              <span style={{
                fontFamily: "var(--font-script), 'Caveat', cursive",
                fontStyle: "italic",
                color: "var(--orange-dark)",
              }}>lo vemos juntas.</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 17,
              color: "var(--body)",
              margin: 0,
              lineHeight: 1.7,
            }}>
              Contame qué estás buscando y te respondo con la propuesta que más se parece a tu momento.
            </p>
          </div>

          {/* Right — form */}
          <div style={{
            background: "var(--orange)",
            border: "2px solid var(--ink)",
            borderRadius: "var(--radius-card)",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            <h3 style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "white",
              margin: 0,
            }}>Quiero orientación</h3>

            {(["Nombre", "Email", "WhatsApp"] as const).map(field => (
              <div key={field}>
                <label style={{
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                  display: "block",
                  marginBottom: 6,
                }}>{field}{field !== "WhatsApp" ? " *" : " (opcional)"}</label>
                <input
                  type={field === "Email" ? "email" : field === "WhatsApp" ? "tel" : "text"}
                  placeholder={field === "Email" ? "hola@email.com" : field === "WhatsApp" ? "+54 9 11 0000-0000" : `Tu ${field.toLowerCase()}`}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "2px solid var(--ink)",
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    outline: "none",
                  }}
                />
              </div>
            ))}

            <div>
              <label style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                display: "block",
                marginBottom: 6,
              }}>¿Qué estás buscando?</label>
              <select style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 10,
                border: "2px solid var(--ink)",
                background: "rgba(255,255,255,0.15)",
                color: "white",
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 15,
                outline: "none",
              }}>
                <option value="">Elegí una opción</option>
                <option value="empezar">Quiero empezar a escribir</option>
                <option value="historia">Quiero escribir mi historia</option>
                <option value="grupo">Quiero un espacio grupal</option>
                <option value="proyecto">Tengo un proyecto en mente</option>
                <option value="no-se">No sé bien qué necesito</option>
              </select>
            </div>

            <div>
              <label style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                display: "block",
                marginBottom: 6,
              }}>Contame más (opcional)</label>
              <textarea
                rows={3}
                placeholder="Lo que quieras compartir..."
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: 10,
                  border: "2px solid var(--ink)",
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  fontFamily: "var(--font-body), Inter, sans-serif",
                  fontSize: 15,
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <button type="submit" className="btn-dark" style={{ width: "100%", marginTop: 4 }}>
              ENVIAME MI ORIENTACIÓN
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
