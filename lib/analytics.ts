// Client-safe analytics abstraction — wraps GA4 and Meta Pixel.
// Safe no-op when IDs are not configured or window is unavailable.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params ?? {});
  }

  // Dev console
  if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics]", name, params ?? {});
  }
}

// Named event helpers
export const Analytics = {
  generateLead: (params?: { form_type?: string; interest?: string }) =>
    trackEvent("generate_lead", params),

  downloadFirstChapter: () =>
    trackEvent("download_first_chapter"),

  beginCheckout: (params?: { product?: string; value?: number; currency?: string }) =>
    trackEvent("begin_checkout", { currency: "ARS", ...params }),

  purchase: (params?: { transaction_id?: string; value?: number; currency?: string }) =>
    trackEvent("purchase", { currency: "ARS", ...params }),

  requestQuote: (params?: { product?: string }) =>
    trackEvent("request_quote", params),

  workshopInterest: (params?: { workshop?: string }) =>
    trackEvent("workshop_interest", params),

  communityInterest: (params?: { community?: string }) =>
    trackEvent("community_interest", params),
};
