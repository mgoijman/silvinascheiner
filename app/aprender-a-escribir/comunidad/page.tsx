import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import EnrollmentModal from "@/components/EnrollmentModal";

export const metadata: Metadata = {
  title: "Comunidad de Escritura Creativa · Silvina Scheiner",
  description: "Una comunidad gratuita en Instagram donde Silvina comparte consignas de escritura. Escribís a tu ritmo, cuando quieras.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

export default function ComunidadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--green-soft)", borderBottom: "2px solid var(--ink)", padding: "80px 24px 88px", position: "relative", overflow: "visible" }}>
        <div style={{ position: "absolute", top: 28, right: 48, zIndex: 10 }}>
          <StickerBlob text="Gratis" color="yellow" rotate={8} size={92} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <SectionLabel text="Comunidad" color="orange" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, color: "var(--ink)", margin: 0 }}>
            Escribí a tu ritmo,{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>
              sin presión.
            </span>
          </h1>
          <WaveDivider />
          <p style={{ fontFamily: body, fontSize: 19, lineHeight: 1.7, color: "var(--body)", margin: 0, maxWidth: 560 }}>
            La Comunidad de Escritura Creativa es un espacio gratuito en Instagram donde Silvina comparte consignas de escritura. Las usás cuando quieras, sola/o, a tu propio ritmo. Sin horarios, sin compromisos.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <EnrollmentModal tallerName="Comunidad de Escritura Creativa" buttonLabel="QUIERO SUMARME" />
            <a href="#como-funciona" className="btn-secondary">CÓMO FUNCIONA</a>
          </div>
        </div>
      </section>

      {/* ── QUE ES ───────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Cómo funciona" color="yellow" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Silvina manda consignas.{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>Vos escribís.</span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 16, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
              La comunidad funciona en Instagram. Silvina publica consignas de escritura — disparadores, preguntas, imágenes — y cada persona las trabaja a su modo, en su tiempo, sin rendir cuentas a nadie.
            </p>
            <p style={{ fontFamily: body, fontSize: 16, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
              No hay encuentros grupales obligatorios. No hay tareas. Solo el hábito de escribir, sostenido con una consigna nueva cada semana.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Qué incluye" color="green" />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Consignas de escritura semanales en Instagram",
                "Disparadores pensados para desbloquear y avanzar",
                "Comunidad de personas que también están escribiendo",
                "Acceso gratuito, sin fecha de vencimiento",
                "Podés participar desde cualquier parte del mundo",
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

      {/* ── PARA QUIEN ES ─────────────────────────────────────── */}
      <section id="como-funciona" style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Para quien es" color="orange" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Para cualquiera que quiera{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>escribir más.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="choice-grid">
            {[
              { title: "No sabés por dónde empezar", body: "Las consignas son el punto de partida. No hace falta tener una idea previa ni experiencia." },
              { title: "Escribís solo/a y querés un punto de apoyo", body: "La comunidad te da un estímulo semanal para no dejar pasar otra semana sin escribir." },
              { title: "Tenés poco tiempo", body: "Las consignas están pensadas para que puedas trabajarlas en 15 minutos o en una tarde." },
              { title: "Buscás una opción gratuita", body: "La comunidad no tiene ningún costo. Es el primer paso para acercarte a la escritura con Silvina." },
            ].map(({ title, body: cardBody }) => (
              <div key={title} style={{ background: "white", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 16, color: "var(--ink)", margin: 0 }}>{title}</p>
                <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>{cardBody}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUERÉS MÁS? ──────────────────────────────────────── */}
      <section style={{ background: "var(--yellow)", borderBottom: "2px solid var(--ink)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionLabel text="Si querés un espacio grupal con Silvina" color="orange" />
          <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(24px, 3.5vw, 38px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
            La comunidad de Instagram es solo el comienzo.
          </h2>
          <p style={{ fontFamily: body, fontSize: 17, lineHeight: 1.7, color: "var(--body)", margin: 0, maxWidth: 580 }}>
            Si después de escribir con las consignas sentís que querés más — encuentros reales, feedback, escribir con otros y con la presencia de Silvina — el siguiente paso es el{" "}
            <strong>Grupo de Creatividad</strong>. Es presencial y online, con encuentros semanales y grupos pequeños.
          </p>
          <div>
            <Link href="/aprender-a-escribir/grupo-creatividad" className="btn-dark">
              VER GRUPO DE CREATIVIDAD
            </Link>
          </div>
        </div>
      </section>

      {/* ── PASOS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Cómo sumarte" color="yellow" />
            <h2 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
              Tres{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>pasos.</span>
            </h2>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n: "1", text: "Completás el formulario de abajo y nos llega tu consulta." },
              { n: "2", text: "Te avisamos el Instagram de la comunidad para que puedas seguirlo." },
              { n: "3", text: "Cada semana Silvina publica una consigna nueva. La usás cuando quieras." },
            ].map(({ n, text }) => (
              <li key={n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--orange)", border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: display, fontWeight: 700, fontSize: 16, color: "white", flexShrink: 0 }}>{n}</span>
                <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0, lineHeight: 1.65, paddingTop: 6 }}>{text}</p>
              </li>
            ))}
          </ol>
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
