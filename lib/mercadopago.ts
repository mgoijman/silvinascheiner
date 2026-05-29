// Server-side only — do NOT import this in client components.
// Uses the official mercadopago npm SDK.

export interface MPItem {
  title: string;
  unit_price: number;
  quantity: number;
  category_id: "digital_goods" | "other";
}

export interface MPPreference {
  id: string;
  init_point: string;
}

export async function createPreference(item: MPItem): Promise<MPPreference> {
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!token) {
    throw new Error("MERCADOPAGO_ACCESS_TOKEN is not configured");
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soysilvinascheiner.com.ar";

  const { MercadoPagoConfig, Preference } = await import("mercadopago");

  const client = new MercadoPagoConfig({ accessToken: token });
  const preference = new Preference(client);

  const result = await preference.create({
    body: {
      items: [
        {
          id:          item.title.toLowerCase().replace(/\s+/g, "_"),
          title:       item.title,
          unit_price:  item.unit_price,
          quantity:    item.quantity,
          category_id: item.category_id,
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `${siteUrl}/gracias/libro-digital`,
        pending: `${siteUrl}/gracias/libro-digital-pendiente`,
        failure: `${siteUrl}/gracias/libro-digital-fallo`,
      },
      auto_return: "approved",
    },
  });

  if (!result.id || !result.init_point) {
    throw new Error("MercadoPago returned an invalid preference");
  }

  return { id: result.id, init_point: result.init_point };
}
