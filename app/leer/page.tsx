"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

export default function LeerPage() {
  const [formData, setFormData] = useState({ nombre: "", email: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid var(--ink)",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontFamily: "var(--font-body), Inter, sans-serif",
    fontSize: 15,
    outline: "none",
  };

  return (
    <>
      {/* ───────────────────────────────────────────────────────
          HERO — LEER
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
            <SectionLabel text="Quiero leer" color="orange" />

            <h1
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 1.05,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Distancias
              <br />
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                  fontSize: "0.95em",
                }}
              >
                del corazón
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
              Una madre, una hija y 14.000 kilómetros. Un libro sobre el amor, la distancia y esas conversaciones que a veces tardan años en encontrar sus palabras.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#primer-capitulo" className="btn-primary">
                DESCARGAR PRIMER CAPÍTULO
              </a>
              <a
                href="https://www.mercadopago.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                COMPRAR EL LIBRO
              </a>
            </div>

            <a
              href="#hijos-golondrina"
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "var(--ink)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              CONOCER HIJOS GOLONDRINA →
            </a>
          </div>

          {/* Right */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image
                  src="/images/book/book-mockup-1.png"
                  alt="Distancias del corazón — libro de Silvina Scheiner"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  priority
                />
              </HeroImageFrame>

              <div style={{ position: "absolute", top: -20, left: -20, zIndex: 10 }}>
                <StickerBlob text={"Cap. 1\ngratis"} color="yellow" rotate={-10} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          SOBRE EL LIBRO
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--orange-soft)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 64,
            alignItems: "start",
          }}
          className="two-col"
        >
          {/* Book mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 360,
                aspectRatio: "3/4",
                position: "relative",
                borderRadius: "var(--radius)",
                border: "2px solid var(--ink)",
                overflow: "hidden",
                boxShadow: "8px 8px 0 var(--ink)",
              }}
            >
              <Image
                src="/images/book/book-mockup-1.png"
                alt="Portada Distancias del corazón"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="El libro" color="orange" />

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
              Una historia sobre la{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                distancia
              </span>{" "}
              y el amor
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--body)",
                margin: 0,
              }}
            >
              <em>Distancias del corazón</em> es una novela que nace de una pregunta simple: ¿qué pasa cuando querés mucho a alguien y vivís muy lejos? No solo en kilómetros. También en el tiempo, en las conversaciones que no llegaron a ocurrir, en los momentos que no se pudieron compartir.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--body)",
                margin: 0,
              }}
            >
              Es la historia de una madre y una hija separadas por 14.000 kilómetros. Y de todo lo que tiene que pasar para que dos personas que se quieren mucho, por fin, se encuentren con palabras.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#primer-capitulo" className="btn-primary">
                LEER EL PRIMER CAPÍTULO GRATIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          PRIMER CAPÍTULO — FORM
      ─────────────────────────────────────────────────────── */}
      <section
        id="primer-capitulo"
        style={{
          background: "var(--cream)",
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
            gap: 56,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Left — text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Primer paso" color="orange" />

            <h2
              style={{
                fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 46px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Leé antes de{" "}
              <span
                style={{
                  fontFamily: "var(--font-script), 'Caveat', cursive",
                  fontStyle: "italic",
                  color: "var(--orange-dark)",
                }}
              >
                decidir.
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
              Si el tema te toca, empezá por el primer capítulo. Te llega por email para que puedas leerlo con calma, desde donde estés.
            </p>

            {/* Photo */}
            <div
              style={{
                width: "100%",
                maxWidth: 380,
                aspectRatio: "4/3",
                position: "relative",
                borderRadius: "var(--radius)",
                border: "2px solid var(--ink)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/silvina/silvina-cta.png"
                alt="Silvina Scheiner con Distancias del corazón"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Right — form card */}
          <div
            style={{
              background: "var(--orange)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius)",
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 16, paddingTop: 16 }}>
                <div style={{ fontSize: 48 }}>📖</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "white",
                    margin: 0,
                  }}
                >
                  ¡Ya está en camino!
                </h3>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "rgba(255,255,255,0.9)", fontSize: 16, margin: 0, lineHeight: 1.6 }}>
                  Revisá tu bandeja de entrada — el primer capítulo de <em>Distancias del corazón</em> llegará en los próximos minutos.
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                    fontWeight: 700,
                    fontSize: 26,
                    color: "white",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Recibí el primer capítulo gratis
                </h3>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "rgba(255,255,255,0.9)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                  Dejame tu email y te lo mando para que puedas conocer la voz del libro sin compromiso.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.8)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.8)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hola@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.8)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      WhatsApp (opcional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 9 11 0000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <button type="submit" className="btn-dark" style={{ marginTop: 4, width: "100%" }}>
                    ENVIAR EL PRIMER CAPÍTULO
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          HIJOS GOLONDRINA
      ─────────────────────────────────────────────────────── */}
      <section
        id="hijos-golondrina"
        style={{
          background: "var(--yellow)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <SectionLabel text="Comunidad" color="green" />
          <h2
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 46px)",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            ¿El tema te{" "}
            <span
              style={{
                fontFamily: "var(--font-script), 'Caveat', cursive",
                fontStyle: "italic",
                color: "var(--orange-dark)",
              }}
            >
              toca de cerca?
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--body)",
              margin: 0,
            }}
          >
            <strong>Hijos Golondrina</strong> es una comunidad para personas que viven o vivieron la distancia familiar. Un espacio para nombrar lo que a veces no tiene palabras.
          </p>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            SUMARTE A HIJOS GOLONDRINA
          </a>
        </div>
      </section>
    </>
  );
}
