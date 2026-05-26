import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Política de privacidad · Silvina Scheiner",
  description: "Política de privacidad y tratamiento de datos personales de Silvina Scheiner.",
};

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 40, borderBottom: "1px solid var(--line)" }}>
      <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 22, color: "var(--ink)", margin: 0 }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: body, fontSize: 16, color: "var(--body)", margin: 0, lineHeight: 1.75 }}>
      {children}
    </p>
  );
}

export default function PrivacidadPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--ink)", borderBottom: "2px solid var(--ink)", padding: "64px 24px 72px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          <SectionLabel text="Legal" color="yellow" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: "var(--cream)", margin: 0 }}>
            Política de{" "}
            <span className="script" style={{ color: "var(--yellow)" }}>privacidad.</span>
          </h1>
          <p style={{ fontFamily: body, fontSize: 15, color: "rgba(253,246,227,0.55)", margin: 0 }}>
            Última actualización: mayo de 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: "var(--cream)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>

          <Section title="1. Responsable del tratamiento">
            <P>
              La responsable del tratamiento de los datos personales recolectados a través de este sitio web es <strong>Silvina Scheiner</strong>, con domicilio en Argentina. Podés contactarla a través de <a href="mailto:hola@soysilvinascheiner.com.ar" style={{ color: "var(--orange-dark)" }}>hola@soysilvinascheiner.com.ar</a> o por WhatsApp para cualquier consulta relacionada con tus datos.
            </P>
          </Section>

          <Section title="2. Datos que recolectamos">
            <P>
              Recolectamos los datos que vos nos proporcionás directamente a través de los formularios del sitio: nombre, dirección de email, número de WhatsApp (cuando se indica), ciudad o país, y cualquier mensaje que nos enviés. También podemos recolectar datos relacionados con compras (nombre, email, información de pago) cuando adquirís algún producto.
            </P>
            <P>
              No recolectamos datos sensibles. No utilizamos cookies de seguimiento propias más allá de las estrictamente necesarias para el funcionamiento del sitio.
            </P>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <P>
              Los datos personales que nos proporcionás se utilizan exclusivamente para:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Enviar el producto digital adquirido (libro, capítulo gratuito u otro material)",
                "Coordinar el envío del libro físico cuando corresponda",
                "Responder consultas enviadas por formulario, email o WhatsApp",
                "Enviar información sobre talleres, novedades y actividades de Silvina Scheiner cuando lo hayas solicitado",
                "Gestionar la participación en la comunidad Hijos Golondrina",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
            <P>
              No utilizamos tus datos para publicidad de terceros ni los compartimos con empresas de marketing externas.
            </P>
          </Section>

          <Section title="4. Compartición de datos con terceros">
            <P>
              Tus datos pueden ser compartidos únicamente con los siguientes terceros, cuando sea necesario para cumplir con el servicio contratado:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "MercadoPago (procesador de pagos): recibe los datos necesarios para procesar transacciones. Su política de privacidad está disponible en mercadopago.com.ar.",
                "Correo Argentino o Andreani (envíos físicos): recibe nombre y domicilio de entrega cuando corresponde.",
                "Proveedores de email (para el envío de materiales digitales).",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
            <P>
              No vendemos, alquilamos ni cedemos tus datos a terceros con fines comerciales.
            </P>
          </Section>

          <Section title="5. Conservación de los datos">
            <P>
              Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron recolectados y para cumplir con obligaciones legales vigentes en Argentina. Si nos solicitás la eliminación de tus datos, los borraremos en un plazo de 30 días hábiles, salvo que exista una obligación legal de conservarlos.
            </P>
          </Section>

          <Section title="6. Tus derechos">
            <P>
              En cumplimiento de la Ley 25.326 de Protección de Datos Personales de la República Argentina, tenés derecho a:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Acceder a los datos personales que tenemos sobre vos",
                "Rectificar datos incorrectos o desactualizados",
                "Solicitar la eliminación de tus datos cuando ya no sean necesarios",
                "Oponerte al tratamiento de tus datos para determinadas finalidades",
                "Revocar el consentimiento dado en cualquier momento",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
            <P>
              Para ejercer cualquiera de estos derechos, escribíme a <a href="mailto:hola@soysilvinascheiner.com.ar" style={{ color: "var(--orange-dark)" }}>hola@soysilvinascheiner.com.ar</a> indicando tu nombre, el derecho que querés ejercer y, si corresponde, los datos sobre los que querés actuar.
            </P>
          </Section>

          <Section title="7. Seguridad">
            <P>
              Adoptamos medidas razonables para proteger tus datos personales contra acceso no autorizado, pérdida o divulgación. Sin embargo, ninguna transmisión por internet es 100% segura. Si detectás algún problema de seguridad, por favor avisanos de inmediato.
            </P>
          </Section>

          <Section title="8. Menores de edad">
            <P>
              Este sitio no está dirigido a menores de 13 años y no recolectamos datos de menores de forma intencional. Si sos padre, madre o tutor y creés que un menor nos proporcionó datos personales sin tu consentimiento, contactanos para eliminarlos.
            </P>
          </Section>

          <Section title="9. Cambios en esta política">
            <P>
              Podemos actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta misma página con la fecha de actualización. El uso continuado del sitio después de publicarse cambios implica la aceptación de la nueva política.
            </P>
          </Section>

          <Section title="10. Contacto">
            <P>
              Para cualquier consulta sobre esta política o el tratamiento de tus datos, podés escribirnos a <a href="mailto:hola@soysilvinascheiner.com.ar" style={{ color: "var(--orange-dark)" }}>hola@soysilvinascheiner.com.ar</a> o usar el <a href="/contacto" style={{ color: "var(--orange-dark)" }}>formulario de contacto</a>.
            </P>
            <P>
              La Agencia de Acceso a la Información Pública (AAIP) es el organismo de control en materia de protección de datos personales en Argentina. Podés presentar reclamaciones ante la AAIP si considerás que el tratamiento de tus datos no cumple con la normativa vigente.
            </P>
          </Section>

        </div>
      </section>
    </>
  );
}
