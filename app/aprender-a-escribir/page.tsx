import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";
import TestimonialCard from "@/components/TestimonialCard";
import OrientationForm from "@/components/OrientationForm";

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

            {/* H1 + subheading flush together — no gap between them */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <h1 style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 4vw, 48px)",
                lineHeight: 1.05,
                color: "var(--ink)",
                margin: 0,
              }}>
                ¿Tenés algo que querés escribir y no sabés{" "}
                <span style={{
                  background: "var(--orange)",
                  color: "var(--cream)",
                  padding: "0 6px",
                  display: "inline",
                  borderRadius: 0,
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}>por dónde empezar?</span>
              </h1>

              <span style={{
                fontFamily: "var(--font-script), 'Caveat', cursive",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(36px, 4vw, 48px)",
                color: "var(--orange-dark)",
                lineHeight: 1.1,
                display: "block",
              }}>
                Lo entiendo mejor de lo que pensás.
              </span>
            </div>

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

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "21 consignas para brillar", href: "/aprender-a-escribir/21-consignas" },
                  { label: "Mi historia es de novela", href: "/aprender-a-escribir/mi-historia-es-de-novela" },
                  { label: "Coaching 1:1 con Silvina", href: "/aprender-a-escribir/coaching-1-a-1" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: 15,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}>
                      <span style={{ opacity: 0.7, flexShrink: 0 }}>→</span>{label}
                    </Link>
                  </li>
                ))}
              </ul>
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

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Comunidad de Escritura Creativa gratis", href: "/aprender-a-escribir/comunidad" },
                  { label: "Grupo de Creatividad presencial y online", href: "/aprender-a-escribir/grupo-creatividad" },
                  { label: "Grupo de Lectura presencial y online", href: "/aprender-a-escribir/grupo-lectura" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: 15,
                      color: "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}>
                      <span style={{ color: "var(--green-dark)", flexShrink: 0 }}>→</span>{label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/aprender-a-escribir/comunidad" className="btn-dark" style={{ fontSize: 11 }}>VER OPCIONES GRUPALES</Link>
              </div>
            </article>
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
            <TestimonialCard
              quote="Llegué con miedo a no tener nada para decir y salí con un cuaderno lleno de escenas que no sabía que estaban en mí."
              name="Florencia M."
              role="Taller de autobiografía"
              avatarSrc="/images/testimonials/t1.png"
              color="yellow"
            />
            <TestimonialCard
              quote="Las consignas de Silvina me sacaron del bloqueo. Empecé a escribir de nuevo, sin presión."
              name="Daniela S."
              role="21 consignas"
              avatarSrc="/images/testimonials/t2.png"
              color="orange"
            />
            <TestimonialCard
              quote="El grupo de creatividad se volvió un espacio sagrado de mi semana. Escribir con otros me cambió la forma de leer mi vida."
              name="Inés V."
              role="Grupo de creatividad"
              avatarSrc="/images/testimonials/t3.png"
              color="green-soft"
            />
            <TestimonialCard
              quote="El 1:1 me ayudó a darle forma a un proyecto que tenía guardado hace años. Hoy es un libro en marcha."
              name="Paula G."
              role="Coaching 1:1"
              avatarSrc="/images/testimonials/t4.png"
              color="orange"
            />
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
          <OrientationForm />
        </div>
      </section>
    </>
  );
}
