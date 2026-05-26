import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import TapeHighlight from "@/components/TapeHighlight";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

export const metadata: Metadata = {
  title: "Sobre Silvina · Silvina Scheiner",
  description:
    "Periodista, escritora y facilitadora de talleres de escritura. Conocé su historia, su recorrido en medios y su primera novela.",
};

const YOUTUBE_ID  = "VqZgddoe_HI";
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;
const YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";
const script  = "var(--font-script), 'Caveat', cursive";

// ── Press coverage of her book ───────────────────────────────────
const bookPress = [
  {
    outlet: "Infobae",
    logo: "/images/media/infobae.svg",
    headline: "Su hija emigró, no se vieron por tres años y lo cuenta en un libro",
    date: "22 febrero 2025",
    href: "https://www.infobae.com/cultura/2025/02/22/su-hija-emigro-no-se-vieron-por-tres-anos-y-lo-cuenta-en-un-libro-te-preguntas-cada-manana-que-haces-lejos/",
  },
  {
    outlet: "Para Ti",
    logo: "/images/media/parati.svg",
    headline: "Cómo acortar la distancia cuando un hijo emigra al exterior: la palabra de una mamá que lo vivió",
    date: "",
    href: "https://www.parati.com.ar/lifestyle/como-acortar-la-distancia-cuando-un-hijo-emigra-al-exterior-la-palabra-de-una-mama-que-lo-vivio/",
  },
];


const timeline = [
  {
    year: "2002",
    text: "Funda su consultora de escritura corporativa. Comienza a colaborar con medios como Télam, Clarín, La Nación e Infobae.",
  },
  {
    year: "2004",
    text: "Empieza a dar clases en la Universidad de Palermo y la Universidad de Belgrano. La docencia se vuelve parte central de su trabajo.",
  },
  {
    year: "2012",
    text: "Se capacita en guion y storytelling. Incorpora la narrativa al diseño de sus talleres.",
  },
  {
    year: "2013",
    text: "Crea su primer taller literario en Facebook. Lo que empezó como experimento se convierte en comunidad.",
  },
  {
    year: "2020",
    text: "Nace Expressate durante la pandemia — un espacio para escribir, escapar de la rutina y encontrar la propia voz.",
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
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "72px 24px 80px",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }} className="two-col">

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Sobre Silvina" color="orange" />

            <h1 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--ink)",
              margin: 0,
            }}>
              Soy una amante de las{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                historias
              </span>{" "}
              y de la gente que{" "}
              <TapeHighlight>las protagoniza</TapeHighlight>.
            </h1>

            <WaveDivider />

            <p style={{
              fontFamily: body,
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--body)",
              margin: 0,
              maxWidth: 500,
            }}>
              Periodista, escritora, docente universitaria y facilitadora de talleres. Hace más de veinte años trabajo con palabras: las escucho, las cuento y acompaño a otros a encontrar las propias.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/aprender-a-escribir" className="btn-primary">VER TALLERES</Link>
              <Link href="/leer" className="btn-secondary">CONOCER EL LIBRO</Link>
            </div>

          </div>

          {/* Right */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image
                  src="/images/silvina/silvina-hero-sobre.png"
                  alt="Silvina Scheiner, escritora y docente"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
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

      {/* ── RECOMENDADO EN ───────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}>
          <p style={{
            fontFamily: display,
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--muted-ink)",
            margin: 0,
          }}>
            Recomendado en
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            opacity: 0.7,
          }}>
            {[
              { src: "/images/media/lanacion.svg", alt: "La Nación" },
              { src: "/images/media/tn.svg",       alt: "TN" },
              { src: "/images/media/infobae.svg",  alt: "Infobae" },
              { src: "/images/media/ohlala.svg",   alt: "Ohlalá" },
              { src: "/images/media/parati.svg",   alt: "Para Ti" },
            ].map(({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={alt} src={src} alt={alt}
                style={{ height: 28, width: "auto", objectFit: "contain", maxWidth: 130 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO EXTENDIDA ────────────────────────────────────── */}
      <section style={{
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

          {/* Left — text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Mi historia" color="yellow" />
            <h2 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}>
              De las noticias a{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                las historias
              </span>
            </h2>

            {[
              "Empecé siendo periodista. Télam, Clarín, La Nación, Infobae — cubrí cultura, entrevistaba personas, escuchaba lo que la gente guardaba y lo contaba. Eso me enseñó que toda persona tiene algo para decir, si alguien se sienta a escucharla.",
              "Desde 2004 doy clases en la Universidad de Palermo y la Universidad de Belgrano. Formarme en guion y storytelling me cambió la forma de pensar la narrativa — y de diseñar los talleres.",
              "En 2013 creé mi primer taller literario en Facebook casi como experimento. Se llenó. Se llenó de nuevo. En 2020, en plena pandemia, fundé Expressate: un espacio donde la escritura fuera posible para cualquier persona, con o sin experiencia.",
              "En esos talleres encontré lo que más me gusta hacer: acompañar el proceso de encontrar la propia voz. Porque cuando alguien escribe algo verdadero, algo genuinamente suyo, pasa algo que no tiene explicación fácil.",
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: body, fontSize: 17, lineHeight: 1.75, color: "var(--body)", margin: 0 }}>{p}</p>
            ))}

            <div style={{
              background: "var(--yellow)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius)",
              padding: "24px 28px",
              marginTop: 8,
            }}>
              <p style={{ fontFamily: script, fontStyle: "italic", fontSize: 26, color: "var(--ink)", margin: 0, lineHeight: 1.3 }}>
                &ldquo;Escribir no es solo contar lo que pasó. Es entender por qué importó.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{
              width: "100%",
              aspectRatio: "4/3",
              position: "relative",
              borderRadius: "var(--radius)",
              border: "2px solid var(--ink)",
              overflow: "hidden",
            }}>
              <Image
                src="/images/silvina/silvina-conocer-main.png"
                alt="Silvina Scheiner"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "var(--radius)", border: "2px solid var(--ink)", overflow: "hidden" }}>
                <Image src="/images/silvina/ss-image-medios.png" alt="Silvina Scheiner en los medios" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "var(--radius)", border: "2px solid var(--ink)", overflow: "hidden" }}>
                <Image src="/images/silvina/prensa-1.png" alt="Silvina Scheiner en prensa" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EN TV ────────────────────────────────────────────── */}
      <section style={{
        background: "var(--ink)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, display: "flex", flexDirection: "column", gap: 12, alignItems: "center", textAlign: "center" }}>
            <SectionLabel text="En TV" color="yellow" />
            <h2 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "white",
              margin: 0,
              lineHeight: 1.1,
            }}>
              La entrevistaron en{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--yellow)" }}>televisión</span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 16, color: "rgba(255,255,255,0.75)", margin: 0, maxWidth: 540 }}>
              Habló sobre Distancias del corazón, la migración y lo que significa acompañar a alguien a encontrar su historia.
            </p>
          </div>

          {/* YouTube facade */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "var(--radius-card)",
              border: "2px solid rgba(255,255,255,0.2)",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={YOUTUBE_THUMB}
              alt="Silvina Scheiner en televisión"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.28)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: 80, height: 80, background: "white", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--ink)">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "absolute", bottom: 16, left: 16,
              background: "rgba(0,0,0,0.6)", borderRadius: 6, padding: "6px 12px",
            }}>
              <p style={{ fontFamily: body, fontSize: 13, color: "white", margin: 0, fontWeight: 600 }}>
                Ver en YouTube →
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ── FOTOS EN ACCIÓN ──────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, display: "flex", flexDirection: "column", gap: 10 }}>
            <SectionLabel text="En acción" color="orange" />
            <h2 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Veinte años de{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>palabras</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="paths-grid">
            {[
              { src: "/images/silvina/taller-presencial.png", alt: "Silvina Scheiner en taller presencial", caption: "Talleres presenciales · Buenos Aires" },
              { src: "/images/silvina/prensa-2.png", alt: "Silvina Scheiner en los medios",            caption: "En los medios" },
              { src: "/images/silvina/prensa-3.jpeg",alt: "Presentación de Distancias del corazón",   caption: "Presentación de Distancias del corazón" },
            ].map(({ src, alt, caption }) => (
              <div key={caption} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "var(--radius)", border: "2px solid var(--ink)", overflow: "hidden" }}>
                  <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <p style={{ fontFamily: body, fontSize: 13, color: "var(--muted-ink)", margin: 0, textAlign: "center" }}>{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EN LOS MEDIOS — LIBRO ────────────────────────────── */}
      <section style={{
        background: "var(--offwhite)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div>
            <div style={{ marginBottom: 36, display: "flex", flexDirection: "column", gap: 12 }}>
              <SectionLabel text="Prensa" color="yellow" />
              <h2 style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}>
                Hablaron de{" "}
                <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                  Distancias del corazón
                </span>
              </h2>
              <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0 }}>
                Su novela fue cubierta por los principales medios argentinos.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="choice-grid">
              {bookPress.map(({ outlet, logo, headline, date, href }) => (
                <a
                  key={outlet}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    background: "white",
                    border: "2px solid var(--ink)",
                    borderRadius: "var(--radius-card)",
                    padding: "28px 24px",
                    boxShadow: "4px 4px 0 var(--ink)",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo} alt={outlet}
                    style={{ height: 22, width: "auto", objectFit: "contain", objectPosition: "left", maxWidth: 120, opacity: 0.85 }} />
                  <p style={{ fontFamily: display, fontSize: 17, fontWeight: 700, color: "var(--ink)", margin: 0, lineHeight: 1.35, flex: 1 }}>
                    {headline}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {date && <span style={{ fontFamily: body, fontSize: 12, color: "var(--muted-ink)" }}>{date}</span>}
                    <span style={{ fontFamily: body, fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", color: "var(--orange-dark)" }}>
                      Ver nota →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED ───────────────────────────────────── */}
      <section style={{
        background: "var(--offwhite)",
        borderBottom: "2px solid var(--ink)",
        padding: "80px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 36,
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Instagram icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="var(--orange-dark)" stroke="none"/>
                </svg>
                <span style={{
                  fontFamily: body,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--orange-dark)",
                }}>
                  Instagram
                </span>
              </div>
              <h2 style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}>
                <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--orange-dark)" }}>
                  @soysilvinascheiner
                </span>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/soysilvinascheiner/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: 12, whiteSpace: "nowrap" }}
            >
              SEGUIR EN INSTAGRAM →
            </a>
          </div>

          {/* 3×2 photo grid — placeholders to replace with real posts */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }} className="paths-grid">
            {[
              "Foto de taller o escritura",
              "Cita o frase literaria",
              "Detrás de escena del libro",
              "Foto con lectoras / alumnas",
              "Foto personal o reflexión",
              "Novedad o próximo taller",
            ].map((caption, i) => (
              <a
                key={i}
                href="https://www.instagram.com/soysilvinascheiner/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  aspectRatio: "1/1",
                  borderRadius: "var(--radius)",
                  border: "2px solid var(--ink)",
                  overflow: "hidden",
                  background: i % 3 === 0
                    ? "var(--orange)"
                    : i % 3 === 1
                    ? "var(--green-soft)"
                    : "var(--yellow)",
                  textDecoration: "none",
                }}
              >
                {/* Placeholder content */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: 16,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(43,40,38,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p style={{
                    fontFamily: body,
                    fontSize: 11,
                    color: "rgba(43,40,38,0.45)",
                    margin: 0,
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}>
                    {caption}
                  </p>
                </div>

                {/* Hover overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(43,40,38,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }} />
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a
              href="https://www.instagram.com/soysilvinascheiner/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: body,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--orange-dark)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Ver más en Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section style={{
        background: "var(--cream)",
        borderBottom: "2px solid var(--ink)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Recorrido" color="green" />
            <h2 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 40px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Un camino de{" "}
              <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--green-dark)" }}>palabras</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map(({ year, text }, i) => (
              <div key={year} style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: 24,
                paddingBottom: i < timeline.length - 1 ? 32 : 0,
                borderBottom: i < timeline.length - 1 ? "1px solid var(--line)" : "none",
                marginBottom: i < timeline.length - 1 ? 32 : 0,
              }}>
                <div style={{ fontFamily: display, fontWeight: 900, fontSize: 18, color: "var(--orange-dark)", paddingTop: 2 }}>
                  {year}
                </div>
                <p style={{ fontFamily: body, fontSize: 16, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{
        background: "var(--green-soft)",
        borderBottom: "2px solid var(--ink)",
        padding: "72px 24px",
        textAlign: "center",
      }}>
        <div style={{
          maxWidth: 640, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 20, alignItems: "center",
        }}>
          <SectionLabel text="¿Empezamos?" color="green" />
          <h2 style={{
            fontFamily: display,
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "var(--ink)",
            margin: 0,
            lineHeight: 1.1,
          }}>
            Si te resonó algo de lo que leíste,{" "}
            <span style={{ fontFamily: script, fontStyle: "italic", color: "var(--green-dark)" }}>
              podemos trabajar juntos.
            </span>
          </h2>
          <p style={{ fontFamily: body, fontSize: 17, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
            Ya sea por el libro, por un taller o por el acompañamiento 1:1 — hay un punto de entrada para cada momento.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/empezar" className="btn-primary">EMPEZÁ HOY</Link>
            <Link href="/aprender-a-escribir" className="btn-dark">VER TALLERES</Link>
          </div>
        </div>
      </section>
    </>
  );
}
