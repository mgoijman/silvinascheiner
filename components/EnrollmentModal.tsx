"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  /** Name of the workshop — used in the WA message header */
  tallerName: string;
  /** Button label (default: "QUIERO ANOTARME") */
  buttonLabel?: string;
  /** Tailwind-free class for the trigger button */
  buttonClassName?: string;
  /** Extra inline styles on the trigger button */
  buttonStyle?: React.CSSProperties;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "2px solid var(--ink)",
  background: "white",
  color: "var(--ink)",
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
  color: "var(--ink)",
  display: "block",
  marginBottom: 6,
};

export default function EnrollmentModal({
  tallerName,
  buttonLabel = "QUIERO ANOTARME",
  buttonClassName = "btn-primary",
  buttonStyle,
}: Props) {
  const [open,     setOpen]     = useState(false);
  const [nombre,   setNombre]   = useState("");
  const [email,    setEmail]    = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [contame,  setContame]  = useState("");
  const [sent,     setSent]     = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleOpen() {
    setOpen(true);
    setSent(false);
  }

  function handleClose() {
    setOpen(false);
    // Reset form after close animation
    setTimeout(() => {
      setNombre(""); setEmail(""); setWhatsapp(""); setContame(""); setSent(false);
    }, 200);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines: string[] = [
      `Hola Silvina, quiero anotarme al taller "${tallerName}" 🙋`,
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      ...(whatsapp ? [`WhatsApp: ${whatsapp}`] : []),
      ...(contame  ? [`Comentario: ${contame}`] : []),
    ];

    const url = `https://wa.me/5491159264582?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        className={buttonClassName}
        style={buttonStyle}
        onClick={handleOpen}
      >
        {buttonLabel}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enrollment-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(43,40,38,0.72)",
            backdropFilter: "blur(3px)",
          }}
          onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div
            ref={dialogRef}
            style={{
              background: "var(--cream)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-card)",
              boxShadow: "8px 8px 0 var(--ink)",
              padding: "36px",
              width: "100%",
              maxWidth: 460,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close × */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1,
                padding: "4px 8px",
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <p style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "var(--orange-dark)",
                margin: 0,
              }}>
                {tallerName}
              </p>
              <h2
                id="enrollment-title"
                style={{
                  fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Dejame tus datos
              </h2>
              <p style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 14,
                color: "var(--body)",
                margin: 0,
                lineHeight: 1.6,
              }}>
                Silvina te va a responder a la brevedad con el precio y los próximos pasos.
              </p>
            </div>

            {sent ? (
              /* Success state */
              <div style={{
                background: "var(--green-soft)",
                border: "2px solid var(--ink)",
                borderRadius: 12,
                padding: "24px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}>
                <span style={{ fontSize: 32 }}>✓</span>
                <p style={{
                  fontFamily: "var(--font-body), Inter, sans-serif",
                  fontSize: 15,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  <strong>¡WhatsApp abierto!</strong> Revisá que el mensaje esté completo y apretá Enviar. Silvina te responde pronto.
                </p>
                <button type="button" className="btn-dark" onClick={handleClose}>
                  CERRAR
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={labelStyle} htmlFor="enroll-nombre">Nombre *</label>
                  <input
                    id="enroll-nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="enroll-email">Email *</label>
                  <input
                    id="enroll-email"
                    type="email"
                    required
                    placeholder="hola@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="enroll-wa">WhatsApp (opcional)</label>
                  <input
                    id="enroll-wa"
                    type="tel"
                    placeholder="+54 9 11 0000-0000"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="enroll-contame">¿Algo que quieras contarme? (opcional)</label>
                  <textarea
                    id="enroll-contame"
                    rows={2}
                    placeholder="Lo que quieras..."
                    value={contame}
                    onChange={e => setContame(e.target.value)}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", marginTop: 4 }}
                  disabled={!nombre || !email}
                >
                  ENVIAR POR WHATSAPP
                </button>

                <p style={{
                  fontFamily: "var(--font-body), Inter, sans-serif",
                  fontSize: 12,
                  color: "var(--body)",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: 1.5,
                }}>
                  Se va a abrir WhatsApp con tu mensaje listo para enviar.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
