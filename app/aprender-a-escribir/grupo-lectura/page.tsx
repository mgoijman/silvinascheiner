import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Grupo de Lectura · Silvina Scheiner",
  description: "Un grupo de lectura guiado por Silvina. Presencial y online, sábados a la mañana. Con análisis, conversación y ejercicios de escritura inspirados en los libros.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function GrupoLecturaPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--orange)", borderBottom: "2px solid var(--ink)", padding: "80px 24px 88px", position: "relative", overflow: "visible" }}>
        <div style={{ position: "absolute", top: 28, right: 48, zIndex: 10 }}>
          <StickerBlob text={"Sábados\na la mañana"} color="yellow" rotate={10} size={100} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <SectionLabel text="Grupo de Lectura" color="yellow" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, color: "white", margin: 0 }}>
            Leer con otros{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--yellow)" }}>
              cambia el libro.
            </span>
          </h1>
          <WaveDivider />
          <p style={{ fontFamily: body, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.9)", margin: 0, maxWidth: 560 }}>
            Un grupo de lectura guiado por Silvina con análisis profundo, conversación y ejercicios de escritura inspirados en los libros que leemos juntos. Nos encontramos todos los sábados a la mañana, en persona y online.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName="Grupo de Lectura" buttonLabel="CONSULTAR DISPONIBILIDAD" buttonClassName="btn-dark" />
            <a href="#como-funciona" style={{ background: "transparent", border: "2px solid white", color: "white", padding: "12px 24px", borderRadius: "var(--radius)", fontFamily: display, fontWeight: 700, fontSize: 14, letterSpacing: "0.5px", cursor: "pointer", textDecoration: "none" }}>COMO FUNCIONA</a>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ───────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Que leemos" color="orange" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--ink)", margin: 0, lineHeight: 1.2 }}>
              Literatura que{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>dice algo.</span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 16, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
              Novela, crónica, memorias, relatos cortos. Silvina elige los textos con criterio, pensando en qué nos pueden enseñar como lectores y como escritores.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Literatura contemporánea en español",
                "Narrativa de no ficción y crónica",
                "Textos que inviten al debate",
                "A veces: un capítulo de Distancias del corazón",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 15, color: "var(--body)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange-dark)", fontWeight: 700, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Que pasa en cada sesión" color="yellow" />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Análisis y conversación guiada por Silvina",
                "Ejercicio de escritura inspirado en el texto",
                "Espacio para compartir tu lectura y tu escritura",
                "Técnicas del autor/a: cómo construyó este efecto",
                "Presentación del próximo libro a leer",
              ].map((text) => (
                <li key={text} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange-dark)", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MODALIDAD ─────────────────────────────────────────── */}
      <section id="como-funciona" style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Modalidad" color="orange" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Sábados a la mañana.{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>Presencial y online.</span>
            </h2>
          </div>

          <div className="formats-grid">
            {[
              { title: "Dia y horario", body: "Todos los sábados a la mañana. Presencial y online (Zoom) de forma simultánea.", color: "var(--green-soft)" },
              { title: "Duración", body: "Cada sesión dura entre 1,5 y 2 horas. Frecuencia semanal.", color: "var(--orange)" },
              { title: "Lugar", body: "Consultá la ubicación presencial por WhatsApp. La modalidad online está siempre disponible.", color: "var(--yellow)" },
            ].map(({ title, body: cardBody, color }) => (
              <div key={title} style={{ background: color, border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 10, boxShadow: "4px 4px 0 var(--ink)" }}>
                <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 18, color: "var(--ink)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>{cardBody}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "white", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "24px 28px", display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 16, color: "var(--ink)", margin: "0 0 6px" }}>Consultar ubicación presencial</p>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.55 }}>
                Para saber el lugar exacto del encuentro presencial, escribinos por WhatsApp y te respondemos con todos los detalles.
              </p>
            </div>
            <a
              href="https://wa.me/5491159264582?text=Hola%20Silvina%2C%20quiero%20saber%20la%20ubicaci%C3%B3n%20del%20Grupo%20de%20Lectura%20presencial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ whiteSpace: "nowrap" }}
            >
              CONSULTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionLabel text="Preguntas frecuentes" color="orange" />
          {[
            { q: "¿Tengo que ser escritora/o para participar?", a: "No. El grupo es para lectores y lectoras. Si también querés escribir, los ejercicios son opcionales." },
            { q: "¿Cuántas personas hay en el grupo?", a: "Grupos pequeños de hasta 8 personas, para que haya espacio para cada voz." },
            { q: "¿Tengo que leer el libro completo antes?", a: "Se aclara en cada convocatoria. A veces alcanza con leer una parte, otras veces el libro completo." },
            { q: "¿Puedo participar solo online?", a: "Sí. El encuentro presencial y el online ocurren de forma simultánea. Podés conectarte desde donde estés." },
            { q: "¿Puedo participar desde afuera de Argentina?", a: "Sí. La modalidad online permite participar desde cualquier lugar del mundo." },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: 24 }}>
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 17, color: "var(--ink)", margin: "0 0 10px" }}>{q}</p>
              <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0, lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--yellow)", margin: 0, lineHeight: 1.3 }}>
            Leer con otros es leer mejor.
          </p>
          <p style={{ fontFamily: body, fontSize: 16, color: "rgba(253,246,227,0.75)", margin: 0, lineHeight: 1.65 }}>
            Sábados a la mañana, presencial y online. Consultá disponibilidad y te avisamos del próximo grupo.
          </p>
          <EnrollmentModal tallerName="Grupo de Lectura" buttonLabel="CONSULTAR DISPONIBILIDAD" buttonClassName="btn-primary" />
        </div>
      </section>
    </>
  );
}
