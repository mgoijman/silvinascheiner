import { NextRequest, NextResponse } from "next/server";

// MercadoPago calls this endpoint on every payment status change.
// IMPORTANT: Always return 200 — MP retries if it gets any other status.
//
// Setup in your MP dashboard:
//   Notifications URL: https://yourdomain.com/api/mercadopago/webhook
//   Topics: payment
//
// To verify the X-Signature header, see:
//   https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { type?: string; data?: { id?: string } };

    if (body.type === "payment" && body.data?.id) {
      const paymentId = body.data.id;

      // TODO: fetch payment details server-side and verify status
      // const { MercadoPagoConfig, Payment } = await import("mercadopago");
      // const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN! });
      // const payment = new Payment(client);
      // const result = await payment.get({ id: paymentId });
      // if (result.status === "approved") { /* mark as fulfilled in DB/Sheets */ }

      console.log("[mp-webhook] payment event received, id:", paymentId);
    }
  } catch (err) {
    // Log but always return 200 so MP doesn't keep retrying
    console.error("[mp-webhook] error:", err);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
