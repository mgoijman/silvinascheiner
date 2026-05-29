"use client";

// If NEXT_PUBLIC_CALENDLY_URL is set, renders the inline Calendly widget.
// Otherwise falls back to OrientationForm so the page always has a CTA.
//
// TODO: For a full Calendly + MercadoPago flow (pay → book session), see:
//   https://developer.calendly.com/api-docs/d7d3ef3e9ed2b-create-webhook-subscription
//   1. User pays via MercadoPago
//   2. On payment confirmation, send a booking link with prefilled fields
//   3. Calendly webhook notifies your server on booking

import { useEffect, useRef } from "react";
import OrientationForm from "@/components/OrientationForm";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CALENDLY_URL || !containerRef.current) return;

    const script = document.createElement("script");
    script.src   = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      try { document.body.removeChild(script); } catch { /* already removed */ }
    };
  }, []);

  if (!CALENDLY_URL) {
    return <OrientationForm />;
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
