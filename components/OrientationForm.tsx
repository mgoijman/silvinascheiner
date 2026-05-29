"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buildLead, captureLead } from "@/lib/lead";
import { Analytics } from "@/lib/analytics";

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
  const router  = useRouter();
  const [nombre,   setNombre]   = useState("");
  const [email,    setEmail]    = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [contame,  setContame]  = useState("");
  const [loading,  setLoading]  = useState(false);
  const [errors,   setErrors]   = useState<{ nombre?: string; email?: string }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs: { nombre?: string; email?: string } = {};
    if (!nombre.trim()) errs.nombre = "El nombre es requerido";
    if (!email.trim())  errs.email  = "El email es requerido";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    const label = BUSQUEDA_LABELS[busqueda] ?? busqueda;

    // 1. Capture normalized lead
    const payload = buildLead({
      name:             nombre,
      email,
      whatsapp:         whatsapp || undefined,
      interest:         "orientation",
      product_or_service: label || undefined,
      form_type:        "orientation",
      message:          contame || undefined,
    });
    await captureLead(payload);
    Analytics.generateLead({ form_type: "orientation", interest: "orientation" });

    // 2. Open WhatsApp with pre-filled tagged message
    const lines: string[] = [
      "🏷️ [ORIENTACIÓN]",
      "",
      "Hola Silvina, completé el formulario de orientación 💬",
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      ...(whatsapp ? [`WhatsApp: ${whatsapp}`] : []),
      ...(busqueda ? [`Estoy buscando: ${label}`] : []),
      ...(contame  ? [`Contame más: ${contame}`]  : []),
    ];
    window.open(
      `https://wa.me/5491159264582?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );

    router.push("/gracias/orientacion");
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
            style={{
              ...inputStyle,
              backgroundImage:    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='white' strokeWidth='2' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat:   "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight:       40,
              appearance:         "none",
            } as React.CSSProperties}
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

        {errors.nombre && <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 12, color: "var(--yellow)", margin: "-8px 0 0" }}>{errors.nombre}</p>}
        {errors.email  && <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: 12, color: "var(--yellow)", margin: "-8px 0 0" }}>{errors.email}</p>}

        <button
          type="submit"
          className="btn-dark"
          style={{ width: "100%", marginTop: 4, opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
          disabled={loading}
        >
          {loading ? "ENVIANDO…" : "ENVIAME MI ORIENTACIÓN"}
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
