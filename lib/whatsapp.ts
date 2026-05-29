export const WA_NUMBER = "5491159264582";

export function waLink(tag: string, lines: string[]): string {
  const body = [`🏷️ [${tag}]`, "", ...lines].join("\n");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
}

export const WA_TEMPLATES = {
  libroFisico: (name: string, city?: string) =>
    waLink("COMPRA - LIBRO FÍSICO", [
      `Hola Silvina, me interesa comprar el libro físico de Distancias del corazón.`,
      ``,
      `Nombre: ${name}`,
      ...(city ? [`Ciudad: ${city}`] : []),
    ]),

  audiolibro: (name: string) =>
    waLink("INTERÉS - AUDIOLIBRO", [
      `Hola Silvina, me interesa el audiolibro de Distancias del corazón.`,
      ``,
      `Nombre: ${name}`,
    ]),

  tallerDisponibilidad: (name: string, taller: string) =>
    waLink("TALLER - CONSULTA", [
      `Hola Silvina, quiero anotarme al taller "${taller}" 🙋`,
      ``,
      `Nombre: ${name}`,
    ]),

  comunidadSignup: (name: string) =>
    waLink("HIJOS GOLONDRINA", [
      `Hola Silvina, quiero sumarme a Hijos Golondrina 💛`,
      ``,
      `Nombre: ${name}`,
    ]),

  grupoCreatividad: (name: string) =>
    waLink("GRUPO CREATIVIDAD", [
      `Hola Silvina, me interesa el Grupo de Creatividad.`,
      ``,
      `Nombre: ${name}`,
    ]),

  grupoLectura: (name: string) =>
    waLink("GRUPO LECTURA", [
      `Hola Silvina, me interesa el Grupo de Lectura.`,
      ``,
      `Nombre: ${name}`,
    ]),

  coachingInquiry: (name: string) =>
    waLink("COACHING 1:1", [
      `Hola Silvina, me interesa el Coaching 1:1.`,
      ``,
      `Nombre: ${name}`,
    ]),

  audiobookWaitlist: (name: string) =>
    waLink("INTERÉS - AUDIOLIBRO", [
      `Hola Silvina, quiero anotarme a la lista de espera del audiolibro.`,
      ``,
      `Nombre: ${name}`,
    ]),

  capituloFollowup: (name: string) =>
    waLink("CAP. 1 GRATIS", [
      `Hola Silvina, quiero recibir el primer capítulo de Distancias del corazón.`,
      ``,
      `Nombre: ${name}`,
    ]),

  cotizacionEnvio: (name: string, city: string, country?: string) =>
    waLink("COTIZACIÓN ENVÍO", [
      `Hola Silvina, quiero saber el precio de envío del libro físico.`,
      ``,
      `Nombre: ${name}`,
      `Ciudad: ${city}`,
      ...(country ? [`País: ${country}`] : []),
    ]),
};

// TODO: Future adapter interface for Twilio / WATI / WhatsApp Cloud API
// interface WhatsAppAdapter {
//   sendTemplate(to: string, template: string, params: string[]): Promise<void>
// }
