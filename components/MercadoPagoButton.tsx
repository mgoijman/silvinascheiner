"use client";

import { useState } from "react";
import { Analytics } from "@/lib/analytics";

interface MercadoPagoButtonProps {
  product: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function MercadoPagoButton({
  product,
  label = "COMPRAR CON MERCADOPAGO",
  className = "btn-primary",
  style,
}: MercadoPagoButtonProps) {
  const [loading,  setLoading]  = useState(false);
  const [fallback, setFallback] = useState<string | null>(null);
  const [error,    setError]    = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    setFallback(null);

    try {
      Analytics.beginCheckout({ product });

      const res  = await fetch("/api/mercadopago/create-preference", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ product, quantity: 1 }),
      });
      const data = await res.json() as {
        init_point?:  string;
        error?:       string;
        fallback_url?: string;
      };

      if (data.init_point) {
        window.location.href = data.init_point;
        return;
      }

      if (data.error === "not_configured" && data.fallback_url) {
        setFallback(data.fallback_url);
        return;
      }

      setError("Hubo un problema al procesar el pago. Intentá de nuevo.");
    } catch {
      setError("Hubo un problema al conectarse. Revisá tu conexión e intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  if (fallback) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
        <p
          style={{
            fontFamily: "var(--font-body), Inter, sans-serif",
            fontSize:   14,
            color:      "var(--body)",
            margin:     0,
            lineHeight: 1.5,
          }}
        >
          El pago online no está disponible en este momento.
        </p>
        <a
          href={fallback}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={style}
        >
          COMPRAR POR WHATSAPP
        </a>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
      <button
        onClick={handleClick}
        disabled={loading}
        className={className}
        style={{
          ...style,
          opacity: loading ? 0.7 : 1,
          cursor:  loading ? "wait" : "pointer",
        }}
      >
        {loading ? "PROCESANDO…" : label}
      </button>

      {error && (
        <p
          style={{
            fontFamily: "var(--font-body), Inter, sans-serif",
            fontSize:   13,
            color:      "var(--orange-dark)",
            margin:     0,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
