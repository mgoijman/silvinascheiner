import { NextRequest, NextResponse } from "next/server";
import { createPreference } from "@/lib/mercadopago";

const PRODUCTS: Record<string, { title: string; unit_price: number }> = {
  libro_digital: {
    title:      "Distancias del corazón — Libro Digital",
    unit_price: 20000,  // ARS — update to real price
  },
};

export async function POST(req: NextRequest) {
  try {
    const { product, quantity = 1 } = await req.json() as {
      product: string;
      quantity?: number;
    };

    const productData = PRODUCTS[product];
    if (!productData) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 400 });
    }

    const preference = await createPreference({
      title:       productData.title,
      unit_price:  productData.unit_price,
      quantity,
      category_id: "digital_goods",
    });

    return NextResponse.json({ init_point: preference.init_point, preference_id: preference.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);

    // If token is not configured, return graceful fallback
    if (message.includes("not configured")) {
      return NextResponse.json({
        error:        "not_configured",
        fallback_url: `https://wa.me/5491159264582?text=${encodeURIComponent("🏷️ [COMPRA - LIBRO DIGITAL]\n\nHola Silvina, quiero comprar el libro digital de Distancias del corazón.")}`,
      });
    }

    console.error("[create-preference] error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
