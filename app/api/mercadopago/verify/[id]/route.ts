import { NextRequest, NextResponse } from "next/server";

// Verifies a MercadoPago payment server-side before showing the download button.
// Called by /gracias/libro-digital page to confirm status before granting access.

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ status: "not_configured" }, { status: 200 });
  }

  try {
    const { MercadoPagoConfig, Payment } = await import("mercadopago");
    const client = new MercadoPagoConfig({ accessToken: token });
    const payment = new Payment(client);
    const result = await payment.get({ id: params.id });

    return NextResponse.json({
      status:       result.status,
      status_detail: result.status_detail,
      currency_id:  result.currency_id,
      transaction_amount: result.transaction_amount,
    });
  } catch (err) {
    console.error("[verify-payment] error:", err);
    return NextResponse.json({ status: "error", error: String(err) }, { status: 500 });
  }
}
