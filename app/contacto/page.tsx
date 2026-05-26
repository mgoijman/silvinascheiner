"use client";

import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

const labelStyle: React.CSSProperties = {
  fontFamily: body,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  display: "block",
  marginBottom: 6,
  color: "var(--muted-ink)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "2px solid var(--ink)",
  background: "var(--cream)",
  color: "var(--ink)",
  fontFamily: body,
  fontSize: 15,
  outline: "none",
};

const WA = "https://wa.me/5491159264582?text=Hola%20Silvina%2C%20quer%C3%ADa%20consultarte%20algo";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.nombre && form.email && form.mensaje) setSent(true);
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div style={{ position: "absolute", top: 40, right: 64, zIndex: 10 }}>
          <StickerBlob text={"¡Hola!"} color="yellow" rotate={8} size={96} />
        </div>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionLabel text="Contacto" color="orange" />
          <h1
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(40px, 5.5vw, 64px)",
              lineHeight: 1.05,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            ¿Tenés alguna{" "}
            <span className="script" style={{ color: "var(--yellow)" }}>
              pregunta?
            </span>
          </h1>
          <p
            style={{
              fontFamily: body,
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(253,246,227,0.8)",
              margin: 0,
              maxWidth: 480,
            }}
          >
            Escribíme por WhatsApp para una respuesta rápida, o usá el formulario y te contesto en el día.
          </p>
        </div>
      </section>

      {/* ── CANALES DE CONTACTO ───────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="formats-grid">
            {/* WhatsApp */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--green-soft)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "4px 4px 0 var(--ink)",
                textDecoration: "none",
                transition: "transform 0.15s",
              }}
            >
              <span style={{ fontSize: 36, lineHeight: 1 }}>💬</span>
              <h2
                style={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                WhatsApp
              </h2>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                La forma más rápida. Respondé en el momento, sin formularios.
              </p>
              <p
                style={{
                  fontFamily: body,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--green-dark)",
                  margin: 0,
                }}
              >
                ESCRIBÍR POR WHATSAPP →
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@soysilvinascheiner.com.ar"
              style={{
                background: "var(--orange-soft)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "4px 4px 0 var(--ink)",
                textDecoration: "none",
                transition: "transform 0.15s",
              }}
            >
              <span style={{ fontSize: 36, lineHeight: 1 }}>✉️</span>
              <h2
                style={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Email
              </h2>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                Para consultas más detalladas. Respondo en el mismo día.
              </p>
              <p
                style={{
                  fontFamily: body,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--orange-dark)",
                  margin: 0,
                }}
              >
                hola@soysilvinascheiner.com.ar →
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/soysilvinascheiner"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--offwhite)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "4px 4px 0 var(--ink)",
                textDecoration: "none",
                transition: "transform 0.15s",
              }}
            >
              <span style={{ fontSize: 36, lineHeight: 1 }}>📸</span>
              <h2
                style={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Instagram
              </h2>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
                Seguíme para ver novedades, consignas y reflexiones sobre escritura.
              </p>
              <p
                style={{
                  fontFamily: body,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                @soysilvinascheiner →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          padding: "80px 24px",
        }}
      >
        <div
          style={{ maxWidth: 1100, margin: "0 auto" }}
          className="two-col"
        >
          {/* Left — info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionLabel text="Formulario" color="green" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.24px",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              O escribíme{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                acá.
              </span>
            </h2>
            <p style={{ fontFamily: body, fontSize: 17, lineHeight: 1.7, color: "var(--body)", margin: 0 }}>
              Completá el formulario y te respondo en el día. Para temas urgentes, el WhatsApp es más rápido.
            </p>
            <div
              style={{
                background: "var(--cream)",
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 16, color: "var(--ink)", margin: 0 }}>
                Tiempo de respuesta
              </p>
              {[
                { canal: "WhatsApp", tiempo: "En el momento (si estoy disponible)" },
                { canal: "Email / Formulario", tiempo: "El mismo día hábil" },
                { canal: "Instagram DM", tiempo: "1 a 2 días" },
              ].map(({ canal, tiempo }) => (
                <div key={canal} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--green)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <div>
                    <p style={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: "var(--ink)", margin: "0 0 2px" }}>{canal}</p>
                    <p style={{ fontFamily: body, fontSize: 13, color: "var(--body)", margin: 0 }}>{tiempo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "white",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-card)",
              padding: "36px",
              boxShadow: "6px 6px 0 var(--ink)",
            }}
          >
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 48 }}>🎉</span>
                <p
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: 28,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  ¡Mensaje enviado!
                </p>
                <p style={{ fontFamily: body, color: "var(--body)", fontSize: 16, margin: 0, lineHeight: 1.6 }}>
                  Te respondo a <strong>{form.email}</strong> lo antes posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  Mandame un mensaje
                </h3>

                <div>
                  <label style={labelStyle}>Nombre *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="hola@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Asunto</label>
                  <select
                    value={form.asunto}
                    onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                    style={{ ...inputStyle, appearance: "auto" }}
                  >
                    <option value="">Seleccioná un tema...</option>
                    <option value="compra">Compra del libro</option>
                    <option value="talleres">Talleres y grupos de escritura</option>
                    <option value="hijos-golondrina">Hijos Golondrina</option>
                    <option value="envio">Envío y entrega</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Mensaje *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Contame en qué te puedo ayudar..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 4 }}>
                  ENVIAR MENSAJE
                </button>

                <p style={{ fontFamily: body, fontSize: 12, color: "var(--muted-ink)", margin: 0, textAlign: "center" }}>
                  Tus datos no se comparten con terceros. Ver{" "}
                  <a href="/privacidad" style={{ color: "var(--ink)" }}>política de privacidad</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
