"use client";

import { useState } from "react";

const BUSQUEDA_LABELS: Record<string, string> = {
  empezar:  "Quiero empezar a escribir",
  historia: "Quiero escribir mi historia",
  grupo:    "Quiero un espacio grupal",
  proyecto: "Tengo un proyecto en mente",
  "no-se":  "No sé bien qué necesito",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "2px solid var(--ink)",
  background: "rgba(255,255,255,0.15)",
  color: "white",
  fontFamily: "var(--font-body), Inter, sans-serif",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), 'Inter', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.8)",
  display: "block",
  marginBottom: 6,
};

export default function OrientationForm() {
  const [nombre,   setNombre]   = useState("");
  const [email,    setEmail]    = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [contame,  setContame]  = useState("");
  const [sent,     setSent]     = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const label = BUSQUEDA_LABELS[busqueda] ?? busqueda;

    const lines: string[] = [
      "Hola Silvina, completé el formulario de orientación 💬",
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      ...(whatsapp ? [`WhatsApp: ${whatsapp}`] : []),
      ...(busqueda ? [`Estoy buscando: ${label}`] : []),
      ...(contame  ? [`Contame más: ${contame}`]  : []),
    ];

    const url = `https://wa.me/5491159264582?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div style={{
      background: "var(--orange)",
      border: "2px solid var(--ink)",
      borderRadius: "var(--radius-card)",
      padding: "36px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <h3 style={{
        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
        fontWeight: 700,
        fontSize: 22,
        color: "white",
        margin: 0,
      }}>Quiero orientación</h3>

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Nombre */}
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input
            type="text"
            required
            placeholder="Tu nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            required
            placeholder="hola@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label style={labelStyle}>WhatsApp (opcional)</label>
          <input
            type="tel"
            placeholder="+54 9 11 0000-0000"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Qué buscás */}
        <div>
          <label style={labelStyle}>¿Qué estás buscando?</label>
          <select
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            style={{ ...inputStyle, appearance: "none" }}
          >
            <option value="">Elegí una opción</option>
            <option value="empezar">Quiero empezar a escribir</option>
            <option value="historia">Quiero escribir mi historia</option>
            <option value="grupo">Quiero un espacio grupal</option>
            <option value="proyecto">Tengo un proyecto en mente</option>
            <option value="no-se">No sé bien qué necesito</option>
          </select>
        </div>

        {/* Contame más */}
        <div>
          <label style={labelStyle}>Contame más (opcional)</label>
          <textarea
            rows={3}
            placeholder="Lo que quieras compartir..."
            value={contame}
            onChange={e => setContame(e.target.value)}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <button
          type="submit"
          className="btn-dark"
          style={{ width: "100%", marginTop: 4 }}
          disabled={!nombre || !email}
        >
          {sent ? "¡LISTO! ABRÍ WHATSAPP PARA ENVIAR" : "ENVIAME MI ORIENTACIÓN"}
        </button>

        <p style={{
          fontFamily: "var(--font-body), Inter, sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.7)",
          margin: 0,
          textAlign: "center",
          lineHeight: 1.5,
        }}>
          Al hacer clic, se abre WhatsApp con tu consulta lista para mandar.
        </p>
      </form>
    </div>
  );
}
