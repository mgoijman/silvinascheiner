"use client";

import type { LeadPayload } from "@/types/lead";

// Build UTM params from the current URL (client-side only)
function getUtmParams(): Pick<LeadPayload, "utm_source" | "utm_medium" | "utm_campaign"> {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? undefined,
    utm_medium: p.get("utm_medium") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
  };
}

// Build a normalized LeadPayload from raw form data
export function buildLead(raw: Omit<LeadPayload, "created_at">): LeadPayload {
  return {
    ...raw,
    ...getUtmParams(),
    source_page: typeof window !== "undefined" ? window.location.pathname : raw.source_page,
    created_at: new Date().toISOString(),
  };
}

// POST the payload to /api/lead — call from any form submit handler
export async function captureLead(payload: LeadPayload): Promise<void> {
  try {
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Fail silently — never block the user flow
    console.error("[captureLead] error:", err);
  }
}
