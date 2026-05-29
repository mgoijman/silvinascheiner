import { NextRequest, NextResponse } from "next/server";
import type { LeadPayload } from "@/types/lead";
import { getCRMAdapter } from "@/lib/crm";
import { getEmailAdapter } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const data: Partial<LeadPayload> = await req.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos" },
        { status: 400 }
      );
    }

    const payload: LeadPayload = {
      ...data,
      name:       data.name.trim(),
      email:      data.email.trim().toLowerCase(),
      created_at: data.created_at ?? new Date().toISOString(),
    };

    // 1. Forward to Google Sheets via existing webhook
    const webhook = process.env.SHEETS_WEBHOOK;
    if (webhook) {
      try {
        await fetch(webhook, {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fuente:    payload.form_type ?? payload.interest ?? "formulario",
            nombre:    payload.name,
            email:     payload.email,
            whatsapp:  payload.whatsapp ?? "",
            busqueda:  payload.product_or_service ?? payload.city ?? "",
            asunto:    payload.source_page ?? "",
            contame:   payload.message ?? "",
          }),
        });
      } catch (err) {
        console.error("[lead] Sheets webhook error:", err);
      }
    }

    // 2. CRM — fail silently
    try {
      await getCRMAdapter().createOrUpdateContact(payload);
    } catch (err) {
      console.error("[lead] CRM error:", err);
    }

    // 3. Email — fail silently
    try {
      const emailAdapter = getEmailAdapter();
      await Promise.all([
        emailAdapter.sendConfirmation(payload.email, payload),
        emailAdapter.sendAdminNotification(payload),
      ]);
    } catch (err) {
      console.error("[lead] Email error:", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
