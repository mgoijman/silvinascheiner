"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";
import WaveDivider from "@/components/WaveDivider";
import HeroImageFrame from "@/components/HeroImageFrame";

const WA_FISICO = `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [COMPRA - LIBRO FÍSICO]\n\nHola Silvina, me interesa comprar el libro físico de Distancias del corazón. ¿Cuál es el precio y cómo es el envío?")}`;
const WA_AUDIO  = `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [INTERÉS - AUDIOLIBRO]\n\nHola Silvina, me interesa el audiolibro de Distancias del corazón. ¿Cuándo va a estar disponible?")}`;


const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), 'Inter', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  display: "block",
  marginBottom: 6,
};

const whiteInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "2px solid var(--ink)",
  background: "var(--cream)",
  color: "var(--ink)",
  fontFamily: "var(--font-body), Inter, sans-serif",
  fontSize: 15,
  outline: "none",
};

function ThemeTag({ text }: { text: string }) {
  return (
    <span style={{
      display: "inline-block",
      background: "var(--cream)",
      border: "2px solid var(--ink)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 14px",
      fontFamily: "var(--font-body), 'Inter', sans-serif",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink)",
    }}>{text}</span>
  );
}

export default function LeerPage() {
  const [cap1Form, setCap1Form] = useState({ nombre: "", email: "", whatsapp: "" });
  const [cap1Sent, setCap1Sent] = useState(false);
  const [hijosForm, setHijosForm] = useState({ nombre: "", email: "", whatsapp: "", ciudad: "", mensaje: "" });
  const [hijosSent, setHijosSent] = useState(false);

  function handleCap1Submit(e: React.FormEvent) {
    e.preventDefault();
    if (!cap1Form.nombre || !cap1Form.email) return;

    fetch("/api/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fuente: "Cap. 1 Gratis", nombre: cap1Form.nombre, email: cap1Form.email, whatsapp: cap1Form.whatsapp }),
    }).catch(() => {});

    const lines = [
      "🏷️ [CAP. 1 GRATIS]",
      "",
      "Hola Silvina, quiero recibir el primer capítulo de Distancias del corazón.",
      "",
      `Nombre: ${cap1Form.nombre}`,
      `Email: ${cap1Form.email}`,
      ...(cap1Form.whatsapp ? [`WhatsApp: ${cap1Form.whatsapp}`] : []),
    ];
    window.open(`https://wa.me/5491159264582?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setCap1Sent(true);
  }

  function handleHijosSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hijosForm.nombre || !hijosForm.email) return;

    fetch("/api/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fuente: "Hijos Golondrina", nombre: hijosForm.nombre, email: hijosForm.email, whatsapp: hijosForm.whatsapp, busqueda: hijosForm.ciudad, contame: hijosForm.mensaje }),
    }).catch(() => {});

    const lines = [
      "🏷️ [HIJOS GOLONDRINA]",
      "",
      "Hola Silvina, quiero sumarme a la comunidad Hijos Golondrina.",
      "",
      `Nombre: ${hijosForm.nombre}`,
      `Email: ${hijosForm.email}`,
      `WhatsApp: ${hijosForm.whatsapp}`,
      ...(hijosForm.ciudad  ? [`Ciudad/País: ${hijosForm.ciudad}`]     : []),
      ...(hijosForm.mensaje ? [`Me acerca: ${hijosForm.mensaje}`]      : []),
    ];
    window.open(`https://wa.me/5491159264582?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setHijosSent(true);
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Quiero leer" color="orange" />
            <h1 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.3px", color: "var(--ink)", margin: 0 }}>
              Distancias<br />
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)", fontSize: "0.95em" }}>del corazón</span>
            </h1>
            <WaveDivider />
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 18, lineHeight: 1.7, color: "var(--body)", margin: 0, maxWidth: 500 }}>
              Una madre, una hija y 14.000 kilómetros. Un libro sobre el amor, la distancia y esas conversaciones que a veces tardan años en encontrar sus palabras.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#primer-capitulo" className="btn-primary">DESCARGAR PRIMER CAPÍTULO</a>
              <Link href="/comprar" className="btn-secondary">COMPRAR EL LIBRO</Link>
            </div>
            <a href="#hijos-golondrina" style={{ fontFamily: "var(--font-body), 'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none" }}>
              CONOCER HIJOS GOLONDRINA →
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <HeroImageFrame>
                <Image src="/images/book/book-fisico.png" alt="Distancias del corazón — libro de Silvina Scheiner" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
              </HeroImageFrame>
              <div style={{ position: "absolute", top: -20, left: -20, zIndex: 10 }}>
                <StickerBlob text={"Cap. 1\ngratis"} color="yellow" rotate={-10} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK HOOK ────────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", borderBottom: "2px solid var(--ink)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.24px", color: "var(--cream)", margin: 0, lineHeight: 1.1 }}>
            Si extrañar pesa,{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--yellow)" }}>acá vas a encontrar palabras.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(253,246,227,0.8)", margin: 0, maxWidth: 640 }}>
            <em>Distancias del corazón</em> nació de un viaje, de una hija viviendo lejos y de una charla pendiente. Es para madres, padres, hijas, hijos y lectores que conocen de cerca el amor a la distancia.
          </p>
          <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(253,246,227,0.8)", margin: 0, maxWidth: 640 }}>
            Podés empezar por el primer capítulo gratis. Si la historia te toca, después podés comprar el libro o sumarte a Hijos Golondrina, la comunidad gratuita vinculada a este universo.
          </p>
        </div>
      </section>

      {/* ── PRIMER CAPÍTULO — FORM ───────────────────────────── */}
      <section id="primer-capitulo" style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Primer paso" color="orange" />
            <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 46px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>
              Leé antes de{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>decidir.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
              Si el tema te toca, empezá por el primer capítulo. Te llega por email para que puedas leerlo con calma, desde donde estés.
            </p>
            <div style={{ width: "100%", maxWidth: 380, aspectRatio: "4/3", position: "relative", borderRadius: "var(--radius-card)", border: "2px solid var(--ink)", overflow: "hidden" }}>
              <Image src="/images/silvina/silvina-cta.png" alt="Silvina Scheiner con Distancias del corazón" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>

          <div style={{ background: "var(--orange)", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "36px", display: "flex", flexDirection: "column", gap: 16, boxShadow: "6px 6px 0 var(--ink)" }}>
            {cap1Sent ? (
              <div style={{ textAlign: "center", padding: "24px 0", display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", fontSize: 36, color: "white", margin: 0 }}>¡WhatsApp abierto!</p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "rgba(255,255,255,0.9)", fontSize: 16, margin: 0, lineHeight: 1.6 }}>
                  Revisá que el mensaje esté completo y apretá <strong>Enviar</strong>. Silvina te manda el capítulo enseguida.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 700, fontSize: 24, color: "white", margin: 0, lineHeight: 1.2 }}>
                  Recibí el primer capítulo gratis
                </h3>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "rgba(255,255,255,0.9)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                  Dejame tu email y te lo mando para que puedas conocer la voz del libro sin compromiso.
                </p>
                <form onSubmit={handleCap1Submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(["Nombre", "Email", "WhatsApp"] as const).map(f => (
                    <div key={f}>
                      <label style={{ ...labelStyle, color: "rgba(255,255,255,0.8)" }}>{f}{f === "WhatsApp" ? " (opcional)" : " *"}</label>
                      <input
                        type={f === "Email" ? "email" : f === "WhatsApp" ? "tel" : "text"}
                        required={f !== "WhatsApp"}
                        placeholder={f === "Email" ? "hola@email.com" : f === "WhatsApp" ? "+54 9 11 0000-0000" : `Tu ${f.toLowerCase()}`}
                        value={cap1Form[f.toLowerCase() as keyof typeof cap1Form]}
                        onChange={e => setCap1Form({ ...cap1Form, [f.toLowerCase()]: e.target.value })}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid var(--ink)", background: "rgba(255,255,255,0.15)", color: "white", fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 15, outline: "none" }}
                      />
                    </div>
                  ))}
                  <button type="submit" className="btn-dark" style={{ marginTop: 4, width: "100%" }}>ENVIAR EL PRIMER CAPÍTULO</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── ¿DE QUÉ SE TRATA? ───────────────────────────────── */}
      <section style={{ background: "var(--offwhite)", borderBottom: "2px solid var(--ink)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionLabel text="¿De qué se trata?" color="yellow" />
            <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>
              Un viaje al{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>otro lado del mundo.</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {["Vínculos a distancia", "Familia", "Migración", "Historias reales"].map(tag => <ThemeTag key={tag} text={tag} />)}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "var(--body)", margin: 0 }}>
              La historia sigue a una madre que viaja al otro lado del mundo para reencontrarse con su hija y, también, con su propia voz. En ese viaje aparecen el duelo migratorio, las culpas, el amor, la distancia y la posibilidad de volver a tender puentes.
            </p>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "var(--body)", margin: 0 }}>
              Puede resonarte si tenés un familiar lejos, si emigraste, si estás pensando en irte o si alguna vez sentiste que hablar de lo que duele era difícil.
            </p>
            <a href="#primer-capitulo" className="btn-primary" style={{ alignSelf: "flex-start" }}>LEER EL PRIMER CAPÍTULO GRATIS</a>
          </div>
        </div>
      </section>

      {/* ── COMPRAR EL LIBRO ─────────────────────────────────── */}
      <section id="comprar" style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Comprar el libro" color="orange" />
            <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 46px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>
              Elegí el formato que{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>más te guste.</span>
            </h2>
          </div>

          <div className="formats-grid">
            {/* ── Digital ── */}
            <div style={{ position: "relative", background: "var(--orange)", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "6px 6px 0 var(--ink)" }}>
              <span style={{ position: "absolute", top: 12, left: 12, zIndex: 2, background: "var(--yellow)", color: "var(--ink)", border: "2px solid var(--ink)", padding: "2px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", fontFamily: "var(--font-body), Inter, sans-serif" }}>
                Más elegido
              </span>
              <div style={{ position: "relative", height: 220, background: "rgba(0,0,0,0.12)", flexShrink: 0 }}>
                <Image src="/images/book/book-digital.png" alt="Distancias del corazón — formato digital" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 14, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 22, color: "white", margin: "0 0 4px", fontWeight: 700 }}>Digital</p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>PDF · enviado por email</p>
                </div>
                <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 34, color: "white", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  $20.000{" "}
                  <span style={{ fontSize: 14, opacity: 0.7, fontWeight: 400, fontFamily: "var(--font-body), Inter, sans-serif" }}>ARS</span>
                </p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.6 }}>
                  Recibís el libro completo en tu email al instante, desde cualquier parte del mundo.
                </p>
                <Link href="/comprar" className="btn-dark" style={{ textAlign: "center", marginTop: "auto" }}>
                  COMPRAR DIGITAL
                </Link>
              </div>
            </div>

            {/* ── Físico ── */}
            <div style={{ background: "white", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "4px 4px 0 var(--ink)" }}>
              <div style={{ position: "relative", height: 220, background: "var(--offwhite)", flexShrink: 0 }}>
                <Image src="/images/book/book-fisico.png" alt="Distancias del corazón — ejemplar físico" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 14, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 22, color: "var(--ink)", margin: "0 0 4px", fontWeight: 700 }}>Físico</p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 13, color: "var(--muted-ink)", margin: 0 }}>Libro impreso · solo Argentina</p>
                </div>
                <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 26, color: "var(--ink)", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  Consultá precio
                </p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 14, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                  El libro en papel, enviado a tu puerta. Envíos por Correo Argentino o Andreani a todo el país.
                </p>
                <a href={WA_FISICO} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center", marginTop: "auto" }}>
                  CONSULTAR POR WHATSAPP
                </a>
              </div>
            </div>

            {/* ── Audiolibro ── */}
            <div style={{ background: "var(--green-soft)", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "4px 4px 0 var(--ink)" }}>
              <div style={{ position: "relative", height: 220, background: "var(--green-soft)", flexShrink: 0 }}>
                <Image src="/images/book/book-audio.png" alt="Audiolibro — próximamente" fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 14, flexGrow: 1 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 22, color: "var(--ink)", margin: "0 0 4px", fontWeight: 700 }}>Audiolibro</p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 13, color: "var(--muted-ink)", margin: 0 }}>Para escuchar donde estés</p>
                </div>
                <p style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontSize: 24, color: "var(--ink)", margin: 0, fontWeight: 700, lineHeight: 1 }}>
                  Próximamente
                </p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 14, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                  El audiolibro está en producción. Dejá tu contacto y te avisamos cuando esté disponible.
                </p>
                <a href={WA_AUDIO} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ textAlign: "center", marginTop: "auto" }}>
                  AVISAME CUANDO ESTÉ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIJOS GOLONDRINA ─────────────────────────────────── */}
      <section id="hijos-golondrina" style={{ background: "var(--green-soft)", borderBottom: "2px solid var(--ink)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col">
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel text="Hijos Golondrina" color="green" />
            <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 46px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>
              Una comunidad para quienes{" "}
              <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>aman a la distancia</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "var(--body)", margin: 0 }}>
              Hijos Golondrina es un espacio gratuito para madres, padres y familias atravesadas por la migración, la distancia o la sensación de extrañar a alguien que vive lejos.
            </p>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, lineHeight: 1.75, color: "var(--body)", margin: 0 }}>
              Podés participar mucho, poco o simplemente leer. No hay obligación de escribir ni de contar nada que no quieras contar.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Comunidad gratuita", "Familias", "Migración", "Distancia"].map(tag => (
                <span key={tag} style={{ display: "inline-block", background: "var(--green)", color: "white", border: "2px solid var(--ink)", borderRadius: "var(--radius-pill)", padding: "4px 12px", fontFamily: "var(--font-body), 'Inter', sans-serif", fontSize: 12, fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 13, color: "var(--muted-ink)", margin: 0, lineHeight: 1.6 }}>
              <em>Importante: no es terapia, asistencia psicológica ni asesoramiento migratorio.</em>
            </p>
          </div>

          {/* Right — form */}
          <div style={{ background: "white", border: "2px solid var(--ink)", borderRadius: "var(--radius-card)", padding: "36px", display: "flex", flexDirection: "column", gap: 16, boxShadow: "6px 6px 0 var(--ink)" }}>
            {hijosSent ? (
              <div style={{ textAlign: "center", padding: "24px 0", display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", fontSize: 36, color: "var(--green-dark)", margin: 0 }}>¡WhatsApp abierto!</p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "var(--body)", fontSize: 16, margin: 0, lineHeight: 1.6 }}>
                  Revisá que el mensaje esté completo y apretá <strong>Enviar</strong>. Silvina te escribe pronto con toda la info.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 700, fontSize: 22, color: "var(--ink)", margin: 0, lineHeight: 1.2 }}>
                  Quiero sumarme a Hijos Golondrina
                </h3>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", color: "var(--body)", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                  Dejame tus datos y te mando la información por WhatsApp.
                </p>
                <form onSubmit={handleHijosSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { key: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre", required: true },
                    { key: "email", label: "Email", type: "email", placeholder: "hola@email.com", required: true },
                    { key: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+54 9 11 0000-0000", required: true },
                    { key: "ciudad", label: "Ciudad o país", type: "text", placeholder: "Buenos Aires, España...", required: false },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ ...labelStyle, color: "var(--muted-ink)" }}>{f.label}{f.required ? " *" : " (opcional)"}</label>
                      <input type={f.type} required={f.required} placeholder={f.placeholder}
                        value={hijosForm[f.key as keyof typeof hijosForm]}
                        onChange={e => setHijosForm({ ...hijosForm, [f.key]: e.target.value })}
                        style={whiteInputStyle} />
                    </div>
                  ))}
                  <div>
                    <label style={{ ...labelStyle, color: "var(--muted-ink)" }}>¿Qué te acerca a este espacio?</label>
                    <textarea rows={3} placeholder="Contame lo que quieras..." value={hijosForm.mensaje}
                      onChange={e => setHijosForm({ ...hijosForm, mensaje: e.target.value })}
                      style={{ ...whiteInputStyle, resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 4 }}>QUIERO SUMARME</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── CROSS-SELL CTA ───────────────────────────────────── */}
      <section style={{ background: "var(--cream)", borderBottom: "2px solid var(--ink)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display), 'Archivo Black', sans-serif", fontWeight: 400, fontSize: "clamp(24px, 3.5vw, 38px)", letterSpacing: "-0.24px", color: "var(--ink)", margin: 0, lineHeight: 1.2 }}>
            ¿Querés escribir{" "}
            <span style={{ fontFamily: "var(--font-script), 'Caveat', cursive", fontStyle: "italic", color: "var(--orange-dark)" }}>algo propio también?</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 17, color: "var(--body)", margin: 0, lineHeight: 1.7 }}>
            Conocé los talleres y acompañamientos para empezar tu propia historia.
          </p>
          <Link href="/aprender-a-escribir" className="btn-primary">VER TALLERES</Link>
        </div>
      </section>
    </>
  );
}
