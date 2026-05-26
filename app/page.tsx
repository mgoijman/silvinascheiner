import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import TapeHighlight from "@/components/TapeHighlight";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";
import TestimonialCard from "@/components/TestimonialCard";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────────────────────────────────────
          SECTION 1 — HERO
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="hero-grid"
        >
          {/* Left col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Silvina Scheiner · Escritora" color="green" />

            <h1 className="mt-6 font-display font-bold text-5xl leading-[0.95] text-[var(--ink)] md:text-7xl">
              Hay historias<br />
              que <span className="tape tape-orange">piden</span> ser<br />
              <span
                className="script text-[var(--orange-dark)] normal-case"
                style={{ fontSize: "1.15em" }}
              >
                dichas.
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
                maxWidth: 500,
              }}
            >
              A veces aparecen como un recuerdo, una distancia, un libro que querés leer o una idea que pide forma. Si algo de eso te está pasando, podés empezar por donde más sentido tenga hoy.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/empezar" className="btn-primary">
                EMPEZÁ HOY
              </Link>
              <Link href="/sobre" className="btn-secondary">
                CONOCÉ A SILVINA
              </Link>
            </div>
          </div>

          {/* Right col — image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image
                  src="/images/silvina/silvina-autora.png"
                  alt="Silvina Scheiner, escritora"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </HeroImageFrame>

              {/* Sticker top-left */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: -20,
                  zIndex: 10,
                }}
              >
                <StickerBlob text={"Escribí\nhoy"} color="yellow" rotate={-12} />
              </div>

              {/* Sticker bottom-right */}
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  zIndex: 10,
                }}
              >
                <StickerBlob text="Encontrate" color="green" rotate={8} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 2 — QUOTE BANNER
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--yellow)",
          borderTop: "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 3.5vw, 36px)",
              lineHeight: 1.25,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Podés llegar por un libro o por las ganas de escribir.<br />
            El punto de partida cambia, pero la búsqueda suele ser la misma:<br />
            <span
              className="script normal-case"
              style={{ fontSize: "1.15em", color: "var(--orange-dark)" }}
            >
              encontrar palabras propias.
            </span>
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 3 — PRESS LOGOS
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--muted-ink)",
              margin: 0,
            }}
          >
            Recomendado en
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              opacity: 0.7,
            }}
          >
            {[
              { src: "/images/media/lanacion.svg", alt: "La Nación" },
              { src: "/images/media/tn.svg",       alt: "TN" },
              { src: "/images/media/infobae.svg",  alt: "Infobae" },
              { src: "/images/media/ohlala.svg",   alt: "Ohlalá" },
              { src: "/images/media/parati.svg",   alt: "Para Ti" },
            ].map(({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={alt}
                src={src}
                alt={alt}
                style={{ height: 28, width: "auto", objectFit: "contain", maxWidth: 130 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 4 — DOS CAMINOS
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Dos caminos" color="orange" />
            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              ¿Qué querés hacer{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                hoy?
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                color: "var(--body)",
                margin: 0,
                maxWidth: 520,
              }}
            >
              Elegí el camino que más se parece a lo que necesitás ahora.
            </p>
          </div>

          <div className="paths-grid">
            {/* Card 1 — Leer */}
            <div
              style={{
                position: "relative",
                background: "var(--orange)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "40px 32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ position: "absolute", top: -20, left: 20, zIndex: 10 }}>
                <StickerBlob text="01" color="yellow" rotate={-8} size={88} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "white",
                  margin: 0,
                  lineHeight: 1.2,
                  paddingTop: 36,
                }}
              >
                Sumergite en Distancias del corazón
              </h3>
              <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.65 }}>
                Si llegaste por Distancias del corazón, podés descargar el primer capítulo gratis, conocer más del universo de Hijos Golondrina o comprar el libro físico o digital.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Descargar el primer capítulo gratis",
                  "Comprar el libro físico o digital",
                  "Sumarte a Hijos Golondrina si el tema te toca de cerca",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: 15,
                      color: "white",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 2 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/leer" className="btn-dark">
                  QUIERO LEER
                </Link>
              </div>
            </div>

            {/* Card 2 — Escribir */}
            <div
              style={{
                position: "relative",
                background: "var(--green-soft)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "40px 32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ position: "absolute", top: -20, right: 20, zIndex: 10 }}>
                <StickerBlob text="02" color="orange" rotate={12} size={88} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.2,
                  paddingTop: 36,
                }}
              >
                Encontrá tu voz y empezá a escribir
              </h3>
              <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.65 }}>
                Si querés empezar a escribir, destrabarte, ordenar una historia o participar de un espacio creativo, podés elegir entre opciones gratuitas, talleres, grupos y acompañamiento personal.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Empezar con una comunidad gratuita",
                  "Hacer 21 consignas para escribir hoy",
                  "Sumarte a grupos o trabajar 1:1 con Silvina",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: 15,
                      color: "var(--ink)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 2, color: "var(--green-dark)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/aprender-a-escribir" className="btn-dark">
                  QUIERO APRENDER A ESCRIBIR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 5 — ABOUT SILVINA
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* ¡Hola! sticker — Fix 3 */}
        <div style={{ position: "absolute", top: 40, right: 48, zIndex: 10 }}>
          <StickerBlob text="¡Hola!" color="yellow" rotate={12} size={100} />
        </div>

        <div
          style={{ maxWidth: 1100, margin: "0 auto" }}
          className="about-grid"
        >
          {/* Left — photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 400,
                aspectRatio: "3/4",
                borderRadius: "var(--radius)",
                border: "2px solid var(--cream)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/silvina/silvina-lectores.png"
                alt="Silvina Scheiner en un taller de escritura"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Right — text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Sobre Silvina" color="yellow" />

            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--cream)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Escribir es{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--yellow)",
                }}
              >
                encontrarte.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(253, 246, 227, 0.85)",
                margin: 0,
              }}
            >
              Soy Silvina Scheiner. Escribo, enseño y acompaño procesos de escritura. Trabajo con personas que quieren contar una historia, recuperar una memoria, ordenar un proyecto o simplemente volver a tener un espacio propio para escribir.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(253, 246, 227, 0.85)",
                margin: 0,
              }}
            >
              En mis talleres no hace falta venir con experiencia ni con una gran idea. Alcanza con tener ganas de probar, recordar, imaginar o mirar la propia vida desde otro lugar.
            </p>

            <div>
              <Link href="/sobre" className="btn-cream">
                CONOCÉ MI HISTORIA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 6 — TESTIMONIALS
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Voces" color="yellow" />
            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Lo que cuentan quienes ya{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                pasaron por acá
              </span>
            </h2>
          </div>

          <div className="testimonials-grid">
            <TestimonialCard
              quote="Silvina tiene una forma de escuchar que te hace sentir que lo que escribís importa. Llegué sin saber bien qué quería y terminé con un proyecto entre manos."
              name="Marcela R."
              role="Taller presencial"
              avatarSrc="/images/testimonials/t1.png"
              color="yellow"
            />
            <TestimonialCard
              quote="Llegué sin saber si podía escribir y terminé encontrando escenas de mi vida que tenía olvidadas. Fue mucho más que un taller."
              name="Lucía P."
              role="Grupo de creatividad"
              avatarSrc="/images/testimonials/t2.png"
              color="orange"
            />
            <TestimonialCard
              quote="El libro me llegó en un momento muy particular. Sentí que alguien estaba nombrando lo que me pasaba. Lo leí de un tirón."
              name="Carolina V."
              role="Lectora"
              avatarSrc="/images/testimonials/t3.png"
              color="green-soft"
            />
            <TestimonialCard
              quote="El acompañamiento 1:1 me ayudó a ordenar mi proyecto y a volver posible algo que parecía demasiado grande. Gracias, Silvina."
              name="Andrés T."
              role="Coaching individual"
              avatarSrc="/images/testimonials/t4.png"
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SECTION 7 — CTA DARK
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
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
            {/* Stickers */}
            <div style={{ position: "absolute", top: -24, left: -24, zIndex: 10 }}>
              <StickerBlob text="¡Dale!" color="yellow" rotate={-8} size={96} />
            </div>
            <div style={{ position: "absolute", bottom: -24, right: -24, zIndex: 10 }}>
              <StickerBlob text="Empezá" color="green" rotate={8} size={96} />
            </div>

            <SectionLabel text="Empezá" color="orange" />

            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 56px)",
                letterSpacing: "-0.24px",
                color: "var(--cream)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              ¿Por dónde querés{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--yellow)",
                }}
              >
                empezar?
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 18,
                color: "rgba(253,246,227,0.85)",
                margin: 0,
                maxWidth: 480,
                lineHeight: 1.65,
              }}
            >
              El primer paso no tiene que ser perfecto. Solo tiene que ser posible.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/empezar" className="btn-primary">
                EMPEZÁ HOY
              </Link>
              <Link href="/leer" className="btn-cream">
                QUIERO LEER
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
