"use client";

const body = "var(--font-body), Inter, sans-serif";

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

interface Props {
  /** "pill" = full Instagram pill + LinkedIn circle (hero style)
   *  "text" = plain text links with icons (CTA footer style) */
  variant?: "pill" | "text";
}

export default function SocialLinks({ variant = "pill" }: Props) {
  if (variant === "text") {
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          href="https://www.instagram.com/soysilvinascheiner/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: body, fontSize: 13, color: "var(--ink)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}
        >
          <IconInstagram /> Instagram
        </a>
        <span style={{ color: "var(--muted-ink)", fontSize: 12 }}>·</span>
        <a
          href="https://www.linkedin.com/in/silvinascheiner/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: body, fontSize: 13, color: "var(--ink)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}
        >
          <IconLinkedIn /> LinkedIn
        </a>
      </div>
    );
  }

  // pill variant
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <a
        href="https://www.instagram.com/soysilvinascheiner/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          border: "2px solid var(--ink)",
          borderRadius: 100,
          background: "transparent",
          color: "var(--ink)",
          fontFamily: body,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          transition: "background 0.15s, color 0.15s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "var(--ink)";
          e.currentTarget.style.color = "var(--cream)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--ink)";
        }}
      >
        <IconInstagram />
        @soysilvinascheiner
      </a>

      <a
        href="https://www.linkedin.com/in/silvinascheiner/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Silvina Scheiner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          border: "2px solid var(--ink)",
          borderRadius: "50%",
          color: "var(--ink)",
          textDecoration: "none",
          transition: "background 0.15s, color 0.15s",
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "var(--ink)";
          e.currentTarget.style.color = "var(--cream)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--ink)";
        }}
      >
        <IconLinkedIn />
      </a>
    </div>
  );
}
