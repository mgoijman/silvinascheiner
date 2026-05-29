import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Grupo de Creatividad · Silvina Scheiner",
  description: "Escribí acompañada/o en un grupo pequeño con feedback, lectura compartida y ejercicios guiados por Silvina.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function GrupoCreatividadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--yellow)", borderBottom: "2px solid var(--ink)", padding: "80px 24px 88px", position: "relative", overflow: "visible" }}>
        <div style={{ position: "absolute", top: 28, left: 48, zIndex: 10 }}>
          <StickerBlob text={"Grupo\npequeño"} color="orange" rotate={-8} size={92} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", paddingLeft: 80 }} className="hero-pad">
          <SectionLabel text="Grupo de Creatividad" color="orange" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, color: "var(--ink)", margin: 0 }}>
            Escribí{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>
              acompañada/o.
            </span>
          </h1>
          <WaveDivider />
          <p style={{ fontFamily: body, fontSize: 19, lineHeight: 1.7, color: "var(--body)", margin: 0, maxWidth: 560 }}>
            Un grupo pequeño de escritura creativa con feedback real, lectura compartida y ejercicios guiados por Silvina. Para escritores que quieren avanzar con la energía del grupo.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName="Grupo de Creatividad" buttonLabel="CONSULTAR DISPONIBILIDAD" />
            <a href="#que-pasa" className="btn-secondary">¿QUÉ PASA EN CADA ENCUENTRO?</a>
          </div>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES? ───────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="¿Para quién es?" color="yellow" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--ink)", margin: 0, lineHeight: 1.2 }}>
              Para escritores que quieren crecer{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>juntos.</span>
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Ya escribís pero querés feedback real sobre tu texto",
                "Te cuesta mantener la constancia sola/o",
                "Querés aprender de los textos de otros",
                "Buscás un espacio de intercambio genuino",
                "Tenés un proyecto en mente y querés avanzar",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange-dark)", fontWeight: 700, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="¿Qué incluye?" color="orange" />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "✍️", text: "Ejercicios de escritura guiados en cada encuentro" },
                { icon: "🔊", text: "Lectura en voz alta y retroalimentación del grupo" },
                { icon: "💡", text: "Técnicas narrativas y recursos específicos" },
                { icon: "👁️", text: "Feedback constructivo de Silvina y del grupo" },
                { icon: "📝", text: "Consignas para trabajar entre encuentros" },
              ].map(({ icon, text }) => (
                <li key={text} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MODALIDAD ─────────────────────────────────────────── */}
      <section id="que-pasa" style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Modalidad" color="orange" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Online y/o presencial.{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>Grupos pequeños.</span>
            </h2>
          </div>

          <div className="formats-grid">
            {[
              { icon: "🌐", title: "Modalidad", body: "Online (Zoom) y/o presencial en Buenos Aires. A confirmar según el grupo.", color: "var(--green-soft)" },
              { icon: "📅", title: "Duración", body: "A confirmar. Encuentros de 1,5 a 2 horas, frecuencia semanal.", color: "var(--orange)" },
              { icon: "💰", title: "Precio", body: "Consultá disponibilidad. Silvina te manda toda la info por WhatsApp.", color: "var(--yellow)" },
            ].map(({ icon, title, body: cardBody, color }) => (
              <div key={title} style={{ background: color, border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 10, boxShadow: "4px 4px 0 var(--ink)" }}>
                <span style={{ fontSize: 32 }}>{icon}</span>
                <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 18, color: "var(--ink)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>{cardBody}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionLabel text="Preguntas frecuentes" color="orange" />
          {[
            { q: "¿Cuántas personas hay en el grupo?", a: "Los grupos son pequeños (6 a 8 personas máximo) para que haya lugar para cada texto." },
            { q: "¿Necesito traer algo ya escrito?", a: "No es necesario. Los ejercicios se hacen en el encuentro. Si tenés un proyecto, también podemos trabajar con eso." },
            { q: "¿Cuántos encuentros son?", a: "A confirmar. Consultá disponibilidad y te mandamos toda la información." },
            { q: "¿El grupo es online o presencial?", a: "Puede ser online (Zoom) o presencial en Buenos Aires, según la disponibilidad del grupo que se forme." },
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
            Escribir en grupo cambia todo.
          </p>
          <p style={{ fontFamily: body, fontSize: 16, color: "rgba(253,246,227,0.75)", margin: 0, lineHeight: 1.65 }}>
            Consultá disponibilidad y te contamos cómo sumarte al próximo grupo.
          </p>
          <EnrollmentModal tallerName="Grupo de Creatividad" buttonLabel="CONSULTAR DISPONIBILIDAD" buttonClassName="btn-primary" />
        </div>
      </section>
    </>
  );
}
