import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Comunidad de Escritura Creativa · Silvina Scheiner",
  description: "Un espacio para escribir sin presión, acompañada/o, a tu ritmo. Online, gratuito.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function ComunidadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--green-soft)", borderBottom: "2px solid var(--ink)", padding: "80px 24px 88px", position: "relative", overflow: "visible" }}>
        <div style={{ position: "absolute", top: 28, right: 48, zIndex: 10 }}>
          <StickerBlob text={"Gratis\n💛"} color="yellow" rotate={8} size={92} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <SectionLabel text="Comunidad" color="orange" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, color: "var(--ink)", margin: 0 }}>
            Un espacio para{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>
              escribir sin presión.
            </span>
          </h1>
          <WaveDivider />
          <p style={{ fontFamily: body, fontSize: 19, lineHeight: 1.7, color: "var(--body)", margin: 0, maxWidth: 560 }}>
            La Comunidad de Escritura Creativa de Silvina es un lugar para escribir acompañada/o, a tu ritmo, sin juicio. No hace falta tener experiencia ni talento previo.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName="Comunidad de Escritura Creativa" buttonLabel="QUIERO SUMARME" />
            <a href="#como-funciona" className="btn-secondary">¿CÓMO FUNCIONA?</a>
          </div>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES? ───────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="¿Para quién es?" color="yellow" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Para cualquiera que quiera{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>escribir más.</span>
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "No sabés por dónde empezar",
                "Escribís solo/a y querés un espacio de escucha",
                "Tenés una historia pero no sabés cómo contarla",
                "Querés escribir con más constancia",
                "Necesitás un espacio seguro, sin presión",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange-dark)", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="¿Qué incluye?" color="green" />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "✍️", text: "Consignas de escritura semanales o quincenales" },
                { icon: "💬", text: "Espacio de escucha y feedback sin juicio" },
                { icon: "👥", text: "Encuentros online en grupo (frecuencia a confirmar)" },
                { icon: "📱", text: "Grupo de WhatsApp con la comunidad" },
                { icon: "🎯", text: "Acompañamiento de Silvina en cada encuentro" },
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

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section id="como-funciona" style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Modalidad" color="orange" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Online.{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>A tu ritmo.</span>
            </h2>
          </div>

          <div className="formats-grid">
            {[
              { icon: "🌐", title: "Online", body: "Todo por Zoom y WhatsApp. Podés participar desde cualquier lugar del mundo.", color: "var(--green-soft)" },
              { icon: "📅", title: "Frecuencia", body: "Encuentros semanales o quincenales. Frecuencia exacta a confirmar según el grupo.", color: "var(--orange)" },
              { icon: "💰", title: "Precio", body: "La comunidad es gratuita. Los encuentros grupales tienen un valor simbólico accesible a confirmar.", color: "var(--yellow)" },
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

      {/* ── QUÉ PASA CUANDO TE SUMÁS ──────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="¿Qué pasa cuando te sumás?" color="yellow" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Los primeros{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>pasos.</span>
            </h2>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n: "1", text: "Completás el formulario de arriba y nos llega tu consulta." },
              { n: "2", text: "Silvina te escribe por WhatsApp para darte la bienvenida y sumarte al grupo." },
              { n: "3", text: "Recibís las primeras consignas y empezás a escribir cuando quieras." },
              { n: "4", text: "Te avisamos sobre los próximos encuentros grupales para que puedas participar si querés." },
            ].map(({ n, text }) => (
              <li key={n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--orange)", border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: display, fontWeight: 700, fontSize: 16, color: "white", flexShrink: 0 }}>{n}</span>
                <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0, lineHeight: 1.65, paddingTop: 6 }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionLabel text="Preguntas frecuentes" color="orange" />
          {[
            { q: "¿Hace falta tener experiencia para entrar?", a: "No. La comunidad está pensada para cualquier persona con ganas de escribir, sin importar el nivel o la experiencia." },
            { q: "¿Es realmente gratis?", a: "La comunidad de WhatsApp y las consignas son gratuitas. Los encuentros grupales pueden tener un valor simbólico accesible — te avisamos antes." },
            { q: "¿Puedo participar desde el exterior?", a: "Sí. Todo es online. Tenemos participantes de Argentina, España, México y otros países." },
            { q: "¿Cuánto tiempo lleva por semana?", a: "Lo que vos quieras. Las consignas están diseñadas para que puedas hacer en 20 minutos o en una tarde entera, a tu ritmo." },
            { q: "¿Puedo salir cuando quiera?", a: "Sí. No hay compromiso de permanencia. Salís cuando quieras, sin complicaciones." },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: 24 }}>
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 17, color: "var(--ink)", margin: "0 0 10px" }}>{q}</p>
              <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0, lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--yellow)", margin: 0, lineHeight: 1.3 }}>
            No hace falta tener todo claro para empezar.
          </p>
          <p style={{ fontFamily: body, fontSize: 16, color: "rgba(253,246,227,0.75)", margin: 0, lineHeight: 1.65 }}>
            Empezás cuando querés. Escribís lo que podés. Y en el camino encontrás tu voz.
          </p>
          <EnrollmentModal tallerName="Comunidad de Escritura Creativa" buttonLabel="QUIERO SUMARME GRATIS" buttonClassName="btn-primary" />
        </div>
      </section>
    </>
  );
}
