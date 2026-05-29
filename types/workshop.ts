export interface Workshop {
  id: string;
  title: string;
  slug: string;
  description: string;
  modality: "online" | "presencial" | "ambas";
  duration: string;          // e.g. "4 encuentros de 2hs"
  frequency: string;         // e.g. "Semanal"
  location?: string;         // if presencial
  capacity?: number;
  price?: number;            // ARS, null = "A consultar"
  payment_type: "mercadopago" | "whatsapp" | "calendly";
  registration_type: "instant" | "interest" | "discovery_call";
  status: "open" | "full" | "coming_soon" | "on_request";
  cta_label: string;
}
