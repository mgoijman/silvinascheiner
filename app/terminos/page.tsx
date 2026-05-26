import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Términos y condiciones · Silvina Scheiner",
  description: "Términos y condiciones de uso del sitio y de compra de productos de Silvina Scheiner.",
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

export default function TerminosPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--ink)", borderBottom: "2px solid var(--ink)", padding: "64px 24px 72px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          <SectionLabel text="Legal" color="yellow" />
          <h1 style={{ fontFamily: display, fontWeight: 400, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: "var(--cream)", margin: 0 }}>
            Términos y{" "}
            <span className="script" style={{ color: "var(--yellow)" }}>condiciones.</span>
          </h1>
          <p style={{ fontFamily: body, fontSize: 15, color: "rgba(253,246,227,0.55)", margin: 0 }}>
            Última actualización: mayo de 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: "var(--cream)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>

          <Section title="1. Aceptación de los términos">
            <P>
              Al acceder y utilizar el sitio web de Silvina Scheiner (en adelante &ldquo;el Sitio&rdquo;) y al adquirir cualquier producto o servicio ofrecido, aceptás los presentes Términos y Condiciones en su totalidad. Si no estás de acuerdo con alguna parte, te pedimos que no utilices el Sitio.
            </P>
          </Section>

          <Section title="2. Descripción de los productos y servicios">
            <P>
              El Sitio ofrece los siguientes productos y servicios:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Libro Distancias del corazón en formato digital (PDF) y físico impreso",
                "Talleres de escritura creativa, en modalidad presencial y virtual",
                "Acompañamiento individual de escritura",
                "Comunidad gratuita Hijos Golondrina",
                "Materiales gratuitos (primer capítulo, consignas de escritura)",
              ].map((item) => (
                <li key={item} style={{ fontFamily: body, fontSize: 16, color: "var(--body)", lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
            <P>
              Silvina Scheiner se reserva el derecho de modificar, suspender o discontinuar cualquier producto o servicio sin previo aviso.
            </P>
          </Section>

          <Section title="3. Precios y formas de pago">
            <P>
              Los precios publicados en el Sitio están expresados en pesos argentinos (ARS) y pueden modificarse sin previo aviso. El precio vigente al momento de confirmar la compra es el que aplica a esa transacción.
            </P>
            <P>
              Los pagos se procesan a través de <strong>MercadoPago</strong>, plataforma externa que acepta tarjetas de crédito y débito, transferencias bancarias y billeteras digitales. Silvina Scheiner no almacena datos de tarjetas ni información bancaria.
            </P>
          </Section>

          <Section title="4. Entrega de productos digitales">
            <P>
              Los productos digitales (libros en formato PDF) se entregan por email en el momento posterior al pago confirmado. La entrega se realiza a la dirección de correo electrónico informada al momento de la compra.
            </P>
            <P>
              Una vez entregado el producto digital, <strong>no se realizan devoluciones</strong> salvo casos de error técnico imputable a la vendedora. En ese caso, el problema se resuelve mediante reenvío del archivo u otro acuerdo entre las partes.
            </P>
          </Section>

          <Section title="5. Envíos del libro físico">
            <P>
              Los envíos del libro físico se realizan únicamente dentro de Argentina, a través de Correo Argentino o Andreani. El tiempo estimado de entrega es de 5 a 7 días hábiles desde el despacho. El costo de envío es adicional al precio del libro y se informa antes de confirmar el pedido.
            </P>
            <P>
              Silvina Scheiner no se responsabiliza por demoras causadas por el servicio de correo, huelgas, fuerza mayor o dirección incorrecta informada por el comprador.
            </P>
          </Section>

          <Section title="6. Devoluciones y cambios">
            <P>
              <strong>Productos digitales:</strong> no se aceptan devoluciones una vez entregado el archivo, por la naturaleza del producto. Si tuviste un problema técnico, escribíme para resolverlo.
            </P>
            <P>
              <strong>Libro físico:</strong> se aceptan cambios o devoluciones únicamente en caso de defecto de fabricación o daño evidente causado durante el transporte, notificado dentro de las 48 horas de recibido el paquete con foto del daño. No se aceptan devoluciones por cambio de opinión una vez enviado el pedido.
            </P>
            <P>
              <strong>Talleres y servicios:</strong> la política de cancelación de cada servicio se informa al momento de la inscripción. En general, se aceptan cancelaciones con reembolso parcial o total hasta 48 horas antes del inicio, según las condiciones informadas en cada caso.
            </P>
          </Section>

          <Section title="7. Propiedad intelectual">
            <P>
              Todo el contenido del Sitio —incluyendo textos, imágenes, diseño, logos y el libro <em>Distancias del corazón</em>— es propiedad de Silvina Scheiner o fue licenciado para su uso, y está protegido por las leyes argentinas e internacionales de propiedad intelectual.
            </P>
            <P>
              Queda prohibida la reproducción total o parcial del libro o de cualquier contenido del Sitio sin autorización escrita previa. La compra del formato digital autoriza únicamente el uso personal no comercial del comprador.
            </P>
          </Section>

          <Section title="8. Limitación de responsabilidad">
            <P>
              Silvina Scheiner no garantiza que el Sitio esté libre de errores o interrupciones. En ningún caso será responsable por daños indirectos, pérdidas de datos o perjuicios derivados del uso o la imposibilidad de uso del Sitio o de los productos adquiridos.
            </P>
            <P>
              La comunidad Hijos Golondrina es un espacio de acompañamiento comunitario. No constituye terapia psicológica, asesoramiento legal ni acompañamiento migratorio profesional.
            </P>
          </Section>

          <Section title="9. Modificaciones">
            <P>
              Silvina Scheiner puede modificar estos Términos y Condiciones en cualquier momento. Los cambios entran en vigor desde su publicación en el Sitio. El uso continuado del Sitio implica la aceptación de los términos vigentes.
            </P>
          </Section>

          <Section title="10. Ley aplicable y jurisdicción">
            <P>
              Estos Términos y Condiciones se rigen por la ley argentina. Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia a cualquier otro fuero que pudiere corresponder.
            </P>
          </Section>

          <Section title="11. Contacto">
            <P>
              Para cualquier consulta sobre estos términos, podés escribirnos a{" "}
              <a href="mailto:hola@soysilvinascheiner.com.ar" style={{ color: "var(--orange-dark)" }}>
                hola@soysilvinascheiner.com.ar
              </a>{" "}
              o usar el{" "}
              <a href="/contacto" style={{ color: "var(--orange-dark)" }}>
                formulario de contacto
              </a>.
            </P>
          </Section>

        </div>
      </section>
    </>
  );
}
