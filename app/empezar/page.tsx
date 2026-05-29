import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";

export default function EmpezarPage() {
  return (
    <>
      {/* ───────────────────────────────────────────────────────
          HERO
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <SectionLabel text="Empezá ya" color="orange" />

          <h1
            style={{
              fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              color: "var(--ink)",
              margin: 0,
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
          </h1>

          <WaveDivider />

          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 19,
              lineHeight: 1.7,
              color: "var(--body)",
              margin: 0,
              maxWidth: 520,
            }}
          >
            No hace falta tener todo claro. Elegí lo que más se parece a este momento y arrancamos por ahí.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          DOS OPCIONES
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 100px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
          className="choice-grid"
        >
          {/* Card 1 — Leer */}
          <div
            style={{
              position: "relative",
              background: "var(--orange)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius)",
              padding: "52px 36px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: "6px 6px 0 var(--ink)",
            }}
          >
            <div style={{ position: "absolute", top: -24, left: 24, zIndex: 10 }}>
              <StickerBlob text={"Opción\n1"} color="yellow" rotate={-8} size={96} />
            </div>

            <div style={{ paddingTop: 28 }}>
              <p
                style={{
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                  margin: "0 0 6px",
                }}
              >
                Para los que llegan por el libro
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "white",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Quiero leer
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                margin: 0,
              }}
            >
              Descargá el primer capítulo gratis, comprá el libro físico o digital o sumate a Hijos Golondrina.
            </p>

            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Cap. 1 gratis — llegá por email",
                "Libro físico o digital",
                "Comunidad Hijos Golondrina",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: 15,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    flexShrink: 0,
                  }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/leer"
              className="btn-dark"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              IR A LEER
            </Link>
          </div>

          {/* Card 2 — Escribir */}
          <div
            style={{
              position: "relative",
              background: "var(--green-soft)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius)",
              padding: "52px 36px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: "6px 6px 0 var(--ink)",
            }}
          >
            <div style={{ position: "absolute", top: -24, right: 24, zIndex: 10 }}>
              <StickerBlob text={"Opción\n2"} color="orange" rotate={8} size={96} />
            </div>

            <div style={{ paddingTop: 28 }}>
              <p
                style={{
                  fontFamily: "var(--font-body), 'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--muted-ink)",
                  margin: "0 0 6px",
                }}
              >
                Para los que quieren escribir
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Quiero aprender a escribir
              </h2>
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
              Comunidad gratuita, guías de consignas, talleres grupales o acompañamiento 1:1. Hay una opción para donde estés.
            </p>

            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Comunidad de Escritura Creativa gratis", href: "/aprender-a-escribir/comunidad" },
                { label: "Grupo de Creatividad presencial y online", href: "/aprender-a-escribir/grupo-creatividad" },
                { label: "Grupo de Lectura presencial y online", href: "/aprender-a-escribir/grupo-lectura" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: 15,
                      color: "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: "2px solid var(--green-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: "var(--green-dark)",
                      flexShrink: 0,
                    }}>→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/aprender-a-escribir"
              className="btn-dark"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              IR A ESCRIBIR
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────
          REASSURANCE
      ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 580, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-script), 'Caveat', cursive",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--yellow)",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            No hace falta tener todo claro para empezar.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 16,
              color: "rgba(253,246,227,0.75)",
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            El primer paso no tiene que ser perfecto. Solo tiene que ser posible. Y si en algún momento tenés dudas, escribinos por WhatsApp.
          </p>
          <a
            href="https://wa.me/5491159264582"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: 8 }}
          >
            ESCRIBINOS POR WHATSAPP
          </a>
        </div>
      </section>
    </>
  );
}
