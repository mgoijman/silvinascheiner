import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  color?: "yellow" | "orange" | "green-soft";
}

export default function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  color = "yellow",
}: TestimonialCardProps) {
  const colorMap = {
    yellow:       { background: "var(--yellow)",     textColor: "var(--ink)" },
    orange:       { background: "var(--orange)",      textColor: "white" },
    "green-soft": { background: "var(--green-soft)", textColor: "var(--ink)" },
  };

  const { background, textColor } = colorMap[color];

  return (
    <div
      style={{
        background,
        color: textColor,
        border: "2px solid var(--ink)",
        borderRadius: "var(--radius-card)",
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
      }}
    >
      {/* Big quote mark */}
      <span
        style={{
          fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
          fontSize: 56,
          lineHeight: 1,
          color: color === "orange" ? "rgba(255,255,255,0.4)" : "rgba(43,40,38,0.15)",
          position: "absolute",
          top: 12,
          left: 20,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        "
      </span>

      <p
        style={{
          fontFamily: "var(--font-body), Inter, sans-serif",
          fontSize: 16,
          lineHeight: 1.6,
          margin: 0,
          paddingTop: 24,
          fontStyle: "italic",
        }}
      >
        {quote}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid var(--ink)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src={avatarSrc}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 12,
              margin: 0,
              opacity: 0.7,
              lineHeight: 1.3,
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
