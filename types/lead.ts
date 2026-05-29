export interface LeadPayload {
  name: string;
  email: string;
  whatsapp?: string;
  interest?: string;           // reader | book_buyer | first_chapter | audiobook | community | coaching | workshop | orientation
  product_or_service?: string; // "21 consignas" | "Coaching 1:1" | etc.
  source_page?: string;        // e.g. "/leer"
  form_type?: string;          // enrollment | orientation | contact | cap1 | community | quote | audiobook
  message?: string;
  region?: string;
  country?: string;
  province?: string;
  city?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: string;          // ISO string
}
