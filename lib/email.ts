// Email adapter abstraction — fail silently, never block user flow.
// Configure by setting EMAIL_PROVIDER env var: resend | sendgrid
// Leave unset for no-op.

import type { LeadPayload } from "@/types/lead";
import type { EmailAdapter } from "@/types/integrations";

const FROM   = process.env.FROM_EMAIL   ?? "hola@soysilvinascheiner.com.ar";
const ADMIN  = process.env.ADMIN_NOTIFICATION_EMAIL ?? FROM;
const SITE   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soysilvinascheiner.com.ar";
const DOWNLOAD_URL = `${SITE}/downloads/capitulo-1-distancias-del-corazon.pdf`;

// ── Templates ────────────────────────────────────────────────────────────────

function subjectFor(lead: LeadPayload): string {
  const map: Record<string, string> = {
    first_chapter:    "Tu primer capítulo de Distancias del corazón 📖",
    book_digital:     "Tu compra de Distancias del corazón",
    book_physical:    "Recibimos tu consulta sobre el libro físico",
    audiobook:        "Lista de espera — Audiolibro Distancias del corazón",
    community:        "¡Bienvenida/o a Hijos Golondrina! 💛",
    creativity_group: "Grupo de Creatividad — próximos pasos",
    reading_group:    "Grupo de Lectura — próximos pasos",
    coaching:         "Coaching 1:1 con Silvina — te contactamos pronto",
    workshop:         "Tu lugar en el taller está reservado",
    orientation:      "Silvina te escribe pronto con su recomendación",
  };
  return map[lead.interest ?? ""] ?? "Recibimos tu consulta — Silvina Scheiner";
}

function bodyFor(lead: LeadPayload): string {
  const name = lead.name.split(" ")[0];

  if (lead.interest === "first_chapter") {
    return `Hola ${name},\n\nAcá tenés el primer capítulo de Distancias del corazón:\n\n${DOWNLOAD_URL}\n\nEspero que lo disfrutes mucho.\n\n— Silvina`;
  }

  if (lead.interest === "community") {
    return `Hola ${name},\n\n¡Bienvenida/o a Hijos Golondrina! 💛\n\nEn breve te sumamos al grupo y te mandamos las primeras consignas.\n\nSi tenés alguna duda, respondé este mail o escribime por WhatsApp.\n\n— Silvina`;
  }

  if (lead.interest === "coaching") {
    return `Hola ${name},\n\nGracias por tu interés en el Coaching 1:1.\n\nSilvina va a confirmar disponibilidad en las próximas 48 horas y te escribirá para coordinar una sesión de orientación.\n\n— Equipo Silvina Scheiner`;
  }

  if (lead.interest === "workshop" || lead.interest === "creativity_group" || lead.interest === "reading_group") {
    const ws = lead.product_or_service ? `"${lead.product_or_service}"` : "el taller";
    return `Hola ${name},\n\nRecibimos tu inscripción a ${ws}.\n\nSilvina confirma fecha, precio y próximos pasos en breve.\n\n— Equipo Silvina Scheiner`;
  }

  if (lead.interest === "orientation") {
    return `Hola ${name},\n\nGracias por compartir lo que buscás.\n\nSilvina va a leer tu respuesta y te escribe en las próximas 24 horas con su recomendación personalizada.\n\n— Equipo Silvina Scheiner`;
  }

  if (lead.interest === "book_physical") {
    return `Hola ${name},\n\nRecibimos tu consulta sobre el libro físico.\n\nSilvina te escribe pronto con el precio de envío a tu zona.\n\n— Equipo Silvina Scheiner`;
  }

  return `Hola ${name},\n\nGracias por escribirnos. Silvina o alguien del equipo te responde pronto.\n\n— Equipo Silvina Scheiner`;
}

function adminBody(lead: LeadPayload): string {
  return [
    `Nuevo lead — ${lead.form_type ?? "formulario"}`,
    ``,
    `Nombre:   ${lead.name}`,
    `Email:    ${lead.email}`,
    `WhatsApp: ${lead.whatsapp ?? "—"}`,
    `Interés:  ${lead.interest ?? "—"}`,
    `Servicio: ${lead.product_or_service ?? "—"}`,
    `Página:   ${lead.source_page ?? "—"}`,
    `Mensaje:  ${lead.message ?? "—"}`,
    `Ciudad:   ${lead.city ?? "—"}`,
    `País:     ${lead.country ?? "—"}`,
    ``,
    `UTM: source=${lead.utm_source ?? "—"} medium=${lead.utm_medium ?? "—"} campaign=${lead.utm_campaign ?? "—"}`,
    `Fecha:    ${lead.created_at}`,
  ].join("\n");
}

// ── Resend adapter ───────────────────────────────────────────────────────────
class ResendAdapter implements EmailAdapter {
  private key: string;
  constructor(key: string) { this.key = key; }

  private async send(to: string, subject: string, text: string) {
    const { Resend } = await import("resend");
    const resend = new Resend(this.key);
    await resend.emails.send({ from: FROM, to, subject, text });
  }

  async sendConfirmation(to: string, lead: LeadPayload): Promise<void> {
    await this.send(to, subjectFor(lead), bodyFor(lead));
  }

  async sendAdminNotification(lead: LeadPayload): Promise<void> {
    await this.send(ADMIN, `[LEAD] ${lead.name} — ${lead.interest ?? "consulta"}`, adminBody(lead));
  }
}

// ── SendGrid adapter (stub) ──────────────────────────────────────────────────
class SendGridAdapter implements EmailAdapter {
  // TODO: implement with @sendgrid/mail package
  async sendConfirmation(to: string): Promise<void> {
    console.debug("[SendGrid stub] sendConfirmation — install @sendgrid/mail to activate. to:", to);
  }
  async sendAdminNotification(lead: LeadPayload): Promise<void> {
    console.debug("[SendGrid stub] sendAdminNotification for:", lead.email);
  }
}

// ── No-op adapter ────────────────────────────────────────────────────────────
class NoopEmailAdapter implements EmailAdapter {
  async sendConfirmation(to: string, lead: LeadPayload): Promise<void> {
    console.debug("[Email noop] confirmation skipped for:", to, lead.interest ?? "");
  }
  async sendAdminNotification(lead: LeadPayload): Promise<void> {
    console.debug("[Email noop] admin notification skipped for:", lead.email);
  }
}

// ── Factory ──────────────────────────────────────────────────────────────────
export function getEmailAdapter(): EmailAdapter {
  const provider = process.env.EMAIL_PROVIDER ?? "";

  if (provider === "resend") {
    const key = process.env.RESEND_API_KEY;
    if (key) return new ResendAdapter(key);
  }

  if (provider === "sendgrid") {
    return new SendGridAdapter();
  }

  return new NoopEmailAdapter();
}
