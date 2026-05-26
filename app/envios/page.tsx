import Link from "next/link";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Envíos y devoluciones · Silvina Scheiner",
  description:
    "Información sobre entrega del libro digital y envíos del libro físico a todo Argentina. Política de devoluciones.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        borderTop: "1px solid var(--line)",
        padding: "14px 0",
        flexWrap: "wrap",
      }}
    >
      <p style={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: "var(--ink)", margin: 0, minWidth: 180, flexShrink: 0 }}>
        {label}
      </p>
      <p style={{ fontFamily: body, fontSize: 14, color: "var(--body)", margin: 0, lineHeight: 1.6 }}>
        {value}
      </p>
    </div>
  );
}

export default function EnviosPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding: "64px 24px 72px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          <SectionLabel text="Envíos y devoluciones" color="green" />
          <h1
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--cream)",
              margin: 0,
            }}
          >
            Cómo llega{" "}
            <span className="script" style={{ color: "var(--yellow)" }}>
              tu libro.
            </span>
          </h1>
          <p style={{ fontFamily: body, fontSize: 17, lineHeight: 1.7, color: "rgba(253,246,227,0.8)", margin: 0 }}>
            Todo lo que necesitás saber sobre la entrega del libro digital y los envíos del ejemplar físico dentro de Argentina.
          </p>
        </div>
      </section>

      {/* ── DIGITAL ───────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 36, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Formato digital" color="orange" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Entrega inmediata
            </h2>
          </div>

          <div
            style={{
              background: "var(--orange-soft)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-card)",
              padding: "32px",
              marginBottom: 32,
            }}
          >
            <InfoRow label="Formato"           value="PDF de alta calidad" />
            <InfoRow label="Entrega"           value="Por email, en minutos después del pago" />
            <InfoRow label="Costo de entrega"  value="Sin costo — incluido en el precio" />
            <InfoRow label="Disponibilidad"    value="Internacional — disponible desde cualquier país" />
            <InfoRow label="Compatibilidad"    value="Computadora, tablet, smartphone, Kindle y cualquier lector de PDF" />
            <InfoRow label="Reenvío"           value="Si no recibís el email en 30 minutos, escribíme y te lo reenvío" />
          </div>

          <div
            style={{
              background: "var(--yellow)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-md)",
              padding: "16px 20px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
            <p style={{ fontFamily: body, fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.6 }}>
              <strong>¿No llegó el email?</strong> Revisá la carpeta de correo no deseado o spam. Si no está ahí, escribíme por{" "}
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", fontWeight: 700 }}>WhatsApp</a> o a{" "}
              <a href="mailto:hola@soysilvinascheiner.com.ar" style={{ color: "var(--ink)", fontWeight: 700 }}>hola@soysilvinascheiner.com.ar</a> y te lo reenvío en el momento.
            </p>
          </div>
        </div>
      </section>

      {/* ── FÍSICO ────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--offwhite)",
          borderBottom: "2px solid var(--ink)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 36, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Libro físico" color="orange" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Envíos a todo Argentina
            </h2>
          </div>

          <div
            style={{
              background: "white",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-card)",
              padding: "32px",
              marginBottom: 32,
            }}
          >
            <InfoRow label="Zona de envío"       value="Argentina (CABA, GBA e interior del país)" />
            <InfoRow label="Transportistas"      value="Correo Argentino o Andreani (según ubicación)" />
            <InfoRow label="Tiempo estimado"     value="5 a 7 días hábiles desde el despacho" />
            <InfoRow label="Costo de envío"      value="A convenir según la zona — lo coordinamos por WhatsApp antes de confirmar" />
            <InfoRow label="Número de seguimiento" value="Te enviamos el tracking en cuanto despachamos el paquete" />
            <InfoRow label="Empaque"             value="Empaque cuidado para que el libro llegue en perfectas condiciones" />
            <InfoRow label="Envíos internacionales" value="No disponibles por el momento. Solo formato digital para el exterior." />
          </div>

          <div
            style={{
              background: "var(--green-soft)",
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius-md)",
              padding: "16px 20px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 20, flexShrink: 0 }}>📦</span>
            <p style={{ fontFamily: body, fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.6 }}>
              Para comprar el libro físico, <a href="https://wa.me/5491100000000?text=Hola%20Silvina%2C%20me%20interesa%20el%20libro%20f%C3%ADsico" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", fontWeight: 700 }}>escribíme por WhatsApp</a>. Coordinamos el precio total con envío y te mandamos el link de pago.
            </p>
          </div>
        </div>
      </section>

      {/* ── DEVOLUCIONES ──────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 36, display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionLabel text="Devoluciones" color="yellow" />
            <h2
              style={{
                fontFamily: display,
                fontWeight: 400,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Política de devoluciones
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Digital */}
            <div
              style={{
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "28px",
                background: "var(--orange-soft)",
              }}
            >
              <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 18, color: "var(--ink)", margin: "0 0 12px" }}>
                Formato digital
              </h3>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: 0, lineHeight: 1.7 }}>
                Por la naturaleza del producto digital (el archivo se envía de forma inmediata), <strong>no se realizan devoluciones</strong> una vez entregado el PDF. Si tuviste un problema técnico o no recibiste el archivo, escribíme y lo resolvemos.
              </p>
            </div>

            {/* Físico */}
            <div
              style={{
                border: "2px solid var(--ink)",
                borderRadius: "var(--radius-card)",
                padding: "28px",
                background: "var(--green-soft)",
              }}
            >
              <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 18, color: "var(--ink)", margin: "0 0 12px" }}>
                Libro físico
              </h3>
              <p style={{ fontFamily: body, fontSize: 15, color: "var(--body)", margin: "0 0 12px", lineHeight: 1.7 }}>
                Si el libro llegó con daños evidentes causados por el transporte o un defecto de impresión, <strong>lo reemplazamos sin costo</strong>. Para eso necesitamos:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  "Foto del daño dentro de las 48 horas de recibido",
                  "Número de pedido o comprobante de compra",
                  "Contacto por WhatsApp o email",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: body, fontSize: 14, color: "var(--body)", lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: body, fontSize: 14, color: "var(--muted-ink)", margin: "12px 0 0", lineHeight: 1.6 }}>
                No se aceptan devoluciones por cambio de decisión una vez enviado el pedido.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary">IR A CONTACTO</Link>
            <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
