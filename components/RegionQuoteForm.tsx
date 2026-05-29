"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buildLead, captureLead } from "@/lib/lead";
import { Analytics } from "@/lib/analytics";

const inputStyle: React.CSSProperties = {
  width:        "100%",
  padding:      "12px 16px",
  fontFamily:   "var(--font-body), Inter, sans-serif",
  fontSize:     15,
  border:       "2px solid var(--ink)",
  borderRadius: "var(--radius)",
  background:   "white",
  color:        "var(--ink)",
  boxSizing:    "border-box",
  outline:      "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily:    "var(--font-body), Inter, sans-serif",
  fontSize:      13,
  fontWeight:    600,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  color:         "var(--ink)",
  marginBottom:  4,
};

export default function RegionQuoteForm() {
  const router  = useRouter();
  const [form, setForm] = useState({
    nombre:    "",
    email:     "",
    whatsapp:  "",
    pais:      "",
    provincia: "",
    ciudad:    "",
    formato:   "fisico",
    mensaje:   "",
  });
  const [errors,   setErrors]   = useState<Record<string, string>>({});
  const [loading,  setLoading]  = useState(false);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nombre.trim())  e.nombre = "El nombre es requerido";
    if (!form.email.trim())   e.email  = "El email es requerido";
    if (!form.ciudad.trim())  e.ciudad = "La ciudad es requerida para calcular el envío";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      const interest = form.formato === "fisico" ? "book_physical" : form.formato === "digital" ? "book_digital" : "audiobook";

      const payload = buildLead({
        name:             form.nombre,
        email:            form.email,
        whatsapp:         form.whatsapp || undefined,
        interest,
        product_or_service: `Libro ${form.formato}`,
        form_type:        "quote",
        message:          form.mensaje || undefined,
        country:          form.pais    || undefined,
        province:         form.provincia || undefined,
        city:             form.ciudad,
      });

      await captureLead(payload);
      Analytics.requestQuote({ product: `libro_${form.formato}` });

      router.push("/gracias/libro-fisico");
    } catch {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-grid-2">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Nombre *</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(ev) => set("nombre", ev.target.value)}
            style={{ ...inputStyle, borderColor: errors.nombre ? "var(--orange-dark)" : "var(--ink)" }}
          />
          {errors.nombre && <span style={{ fontSize: 12, color: "var(--orange-dark)" }}>{errors.nombre}</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={(ev) => set("email", ev.target.value)}
            style={{ ...inputStyle, borderColor: errors.email ? "var(--orange-dark)" : "var(--ink)" }}
          />
          {errors.email && <span style={{ fontSize: 12, color: "var(--orange-dark)" }}>{errors.email}</span>}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={labelStyle}>WhatsApp (opcional)</label>
        <input
          type="tel"
          placeholder="+54 9 11 ..."
          value={form.whatsapp}
          onChange={(ev) => set("whatsapp", ev.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="form-grid-3">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>País</label>
          <input
            type="text"
            placeholder="Argentina"
            value={form.pais}
            onChange={(ev) => set("pais", ev.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Provincia / Estado</label>
          <input
            type="text"
            placeholder="Buenos Aires"
            value={form.provincia}
            onChange={(ev) => set("provincia", ev.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Ciudad *</label>
          <input
            type="text"
            placeholder="Tu ciudad"
            value={form.ciudad}
            onChange={(ev) => set("ciudad", ev.target.value)}
            style={{ ...inputStyle, borderColor: errors.ciudad ? "var(--orange-dark)" : "var(--ink)" }}
          />
          {errors.ciudad && <span style={{ fontSize: 12, color: "var(--orange-dark)" }}>{errors.ciudad}</span>}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={labelStyle}>¿Qué formato te interesa?</label>
        <select
          value={form.formato}
          onChange={(ev) => set("formato", ev.target.value)}
          style={{
            ...inputStyle,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231a1a1a' strokeWidth='2' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat:   "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight:       40,
            appearance:         "none",
          } as React.CSSProperties}
        >
          <option value="fisico">Libro físico</option>
          <option value="digital">Libro digital (PDF)</option>
          <option value="audiolibro">Audiolibro (lista de espera)</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={labelStyle}>Mensaje (opcional)</label>
        <textarea
          placeholder="¿Alguna consulta adicional? (cantidad de libros, fecha de entrega, etc.)"
          value={form.mensaje}
          onChange={(ev) => set("mensaje", ev.target.value)}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-dark"
        style={{ alignSelf: "flex-start", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
      >
        {loading ? "ENVIANDO…" : "CONSULTAR PRECIO DE ENVÍO"}
      </button>
    </form>
  );
}
