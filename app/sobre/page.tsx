import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import TapeHighlight from "@/components/TapeHighlight";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

const timeline = [
  {
    year: "2004",
    text: "Comienza su carrera como periodista cultural en medios argentinos.",
  },
  {
    year: "2010",
    text: "Empieza a dar talleres de escritura creativa en Buenos Aires.",
  },
  {
    year: "2018",
    text: "Publica sus primeros textos de no ficción. Construye su comunidad de lectores.",
  },
  {
    year: "2024",
    text: "Publica Distancias del corazón, su primera novela.",
  },
  {
    year: "Hoy",
    text: "Escribe, da talleres y acompaña proyectos de escritura desde Argentina, online y presencial.",
  },
];

export default function SobrePage() {
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
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Sobre Silvina" color="orange" />

            <h1
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.5vw, 60px)",
                lineHeight: 1.05,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Soy una amante de las{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Quintessential', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                historias
              </span>{" "}
              y de la gente que{" "}
              <TapeHighlight>las protagoniza</TapeHighlight>
              .
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
              Hace años trabajo con palabras: como periodista, escritora, docente y facilitadora de talleres. Escucho historias, las cuento y acompaño a otros a encontrar la propia.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/aprender-a-escribir" className="btn-primary">
                VER TALLERES
              </Link>
              <Link href="/leer" className="btn-secondary">
                CONOCER EL LIBRO
              </Link>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image
                  src="/images/silvina/silvina-1.png"
                  alt="Silvina Scheiner, escritora y docente"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </HeroImageFrame>
              <div style={{ position: "absolute", bottom: -20, right: -20, zIndex: 10 }}>
                <StickerBlob text={"Escri-\ntora"} color="orange" rotate={10} size={96} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          BIO EXTENDIDA
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Mi historia" color="yellow" />
            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              De las noticias a{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Quintessential', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                las historias
              </span>
            </h2>

            {[
              "Empecé siendo periodista. Cubría cultura, entrevistaba personas, escuchaba lo que la gente guardaba y después contaba en voz alta. Eso me enseñó que toda persona tiene algo para decir, si alguien se sienta a escucharla.",
              "Con el tiempo, empecé a dar talleres de escritura. No para enseñar gramática ni técnica — eso viene después. Primero para crear un espacio donde la escritura fuera posible. Donde alguien que nunca había escrito pudiera hacerlo.",
              "En esos talleres encontré lo que más me gusta hacer: acompañar el proceso de encontrar la propia voz. Porque cuando alguien escribe algo verdadero, algo que es genuinamente suyo, pasa algo que no tiene explicación fácil.",
              "Distancias del corazón nació de ahí también. De escuchar historias de personas separadas por la distancia, de reconocer en esas historias algo propio, y de escribirlo.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body), Inter, sans-serif",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "var(--body)",
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right — photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                position: "relative",
                borderRadius: "var(--radius)",
                border: "2px solid var(--ink)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/silvina/silvina-2.png"
                alt="Silvina Scheiner"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>

            <div
              style={{
                background: "var(--yellow)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius)",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-script), 'Quintessential', cursive",
                  fontStyle: "italic",
                  fontSize: 28,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                "Escribir no es solo contar lo que pasó. Es entender por qué importó."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          TIMELINE
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Recorrido" color="green" />
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
              Un camino de{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Quintessential', cursive",
                  fontStyle: "italic",
                  color: "var(--green-dark)",
                }}
              >
                palabras
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map(({ year, text }, i) => (
              <div
                key={year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 1fr",
                  gap: 24,
                  paddingBottom: i < timeline.length - 1 ? 32 : 0,
                  borderBottom: i < timeline.length - 1 ? "1px solid var(--line)" : "none",
                  marginBottom: i < timeline.length - 1 ? 32 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "var(--orange-dark)",
                    paddingTop: 2,
                  }}
                >
                  {year}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "var(--body)",
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          CTA
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--green-soft)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <SectionLabel text="¿Empezamos?" color="green" />
          <h2
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Si te resonó algo de lo que leíste,{" "}
            <span
              style={{
                fontFamily: "var(--font-script), 'Quintessential', cursive",
                fontStyle: "italic",
                color: "var(--green-dark)",
              }}
            >
              podemos trabajar juntos.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--body)",
              margin: 0,
            }}
          >
            Ya sea por el libro, por un taller o por el acompañamiento 1:1 — hay un punto de entrada para cada momento.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/empezar" className="btn-primary">
              EMPEZÁ HOY
            </Link>
            <Link href="/aprender-a-escribir" className="btn-dark">
              VER TALLERES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
