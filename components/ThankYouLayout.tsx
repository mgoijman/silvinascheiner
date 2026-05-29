import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StickerBlob from "@/components/StickerBlob";

interface NextStep {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "dark" | "secondary";
  external?: boolean;
}

interface ThankYouLayoutProps {
  label?: string;
  labelColor?: "orange" | "yellow" | "green";
  emoji?: string;
  title: string;
  titleScript?: string;    // italic script part appended after title
  subtitle: string;
  nextSteps?: NextStep[];
  nextStepsLabel?: string;
  ctas?: CTA[];
  accentColor?: string;    // CSS color for the reassurance band bg
  stickerLeft?: string;
  stickerRight?: string;
}

const display = "var(--font-display), 'Archivo Black', sans-serif";
const body    = "var(--font-body), Inter, sans-serif";

const STEP_COLORS = ["var(--orange)", "var(--green-soft)", "var(--offwhite)"];

export default function ThankYouLayout({
  label = "¡Listo!",
  labelColor = "yellow",
  emoji,
  title,
  titleScript,
  subtitle,
  nextSteps,
  nextStepsLabel = "¿Qué pasa ahora?",
  ctas = [],
  accentColor = "var(--yellow)",
  stickerLeft,
  stickerRight,
}: ThankYouLayoutProps) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background:   "var(--ink)",
          borderBottom: "2px solid var(--ink)",
          padding:      "80px 24px 96px",
          textAlign:    "center",
          position:     "relative",
          overflow:     "visible",
        }}
      >
        {stickerLeft && (
          <div style={{ position: "absolute", top: 32, left: 48, zIndex: 10 }}>
            <StickerBlob text={stickerLeft} color="green" rotate={-12} size={96} />
          </div>
        )}
        {stickerRight && (
          <div style={{ position: "absolute", bottom: 32, right: 48, zIndex: 10 }}>
            <StickerBlob text={stickerRight} color="orange" rotate={10} size={88} />
          </div>
        )}

        <div
          style={{
            maxWidth:       640,
            margin:         "0 auto",
            display:        "flex",
            flexDirection:  "column",
            gap:            24,
            alignItems:     "center",
          }}
        >
          <SectionLabel text={label} color={labelColor} />

          {emoji && (
            <span style={{ fontSize: 64, lineHeight: 1 }}>{emoji}</span>
          )}

          <h1
            style={{
              fontFamily: display,
              fontWeight: 400,
              fontSize:   "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              color:      "var(--cream)",
              margin:     0,
            }}
          >
            {title}
            {titleScript && (
              <>
                <br />
                <span
                  className="script"
                  style={{ color: "var(--yellow)", fontSize: "0.85em" }}
                >
                  {titleScript}
                </span>
              </>
            )}
          </h1>

          <p
            style={{
              fontFamily: body,
              fontSize:   18,
              lineHeight: 1.7,
              color:      "rgba(253,246,227,0.8)",
              margin:     0,
              maxWidth:   460,
            }}
          >
            {subtitle}
          </p>

          {ctas.filter((c) => c.variant === "primary").map((cta) =>
            cta.external ? (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: 8 }}
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className="btn-primary"
                style={{ marginTop: 8 }}
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </section>

      {/* ── NEXT STEPS ────────────────────────────────────────── */}
      {nextSteps && nextSteps.length > 0 && (
        <section
          style={{
            background:   "var(--cream)",
            borderBottom: "2px solid var(--ink)",
            padding:      "80px 24px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 12 }}>
              <SectionLabel text={nextStepsLabel} color="orange" />
              <h2
                style={{
                  fontFamily:    display,
                  fontWeight:    400,
                  fontSize:      "clamp(28px, 4vw, 46px)",
                  letterSpacing: "-0.24px",
                  color:         "var(--ink)",
                  margin:        0,
                  lineHeight:    1.1,
                }}
              >
                Los próximos{" "}
                <span className="script" style={{ color: "var(--orange-dark)" }}>
                  pasos.
                </span>
              </h2>
            </div>

            <div className="formats-grid">
              {nextSteps.map(({ icon, title: stepTitle, description, color }, i) => (
                <div
                  key={stepTitle}
                  style={{
                    background:   color ?? STEP_COLORS[i % STEP_COLORS.length],
                    border:       "2px solid var(--ink)",
                    borderRadius: "var(--radius-card)",
                    padding:      "32px 28px",
                    display:      "flex",
                    flexDirection:"column",
                    gap:          12,
                    boxShadow:    "4px 4px 0 var(--ink)",
                  }}
                >
                  <span style={{ fontSize: 36, lineHeight: 1 }}>{icon}</span>
                  <h3
                    style={{
                      fontFamily: display,
                      fontWeight: 700,
                      fontSize:   20,
                      color:      "var(--ink)",
                      margin:     0,
                      lineHeight: 1.2,
                    }}
                  >
                    {stepTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: body,
                      fontSize:   15,
                      color:      "var(--body)",
                      margin:     0,
                      lineHeight: 1.65,
                    }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECONDARY CTAs ────────────────────────────────────── */}
      {ctas.filter((c) => c.variant !== "primary").length > 0 && (
        <section
          style={{
            background:   accentColor,
            borderTop:    "2px solid var(--ink)",
            borderBottom: "2px solid var(--ink)",
            padding:      "64px 24px",
            textAlign:    "center",
          }}
        >
          <div
            style={{
              maxWidth:      640,
              margin:        "0 auto",
              display:       "flex",
              flexDirection: "column",
              gap:           20,
              alignItems:    "center",
            }}
          >
            <h2
              style={{
                fontFamily:    display,
                fontWeight:    400,
                fontSize:      "clamp(24px, 3.5vw, 40px)",
                letterSpacing: "-0.24px",
                color:         "var(--ink)",
                margin:        0,
                lineHeight:    1.2,
              }}
            >
              Mientras tanto,{" "}
              <span className="script" style={{ color: "var(--orange-dark)" }}>
                seguí explorando.
              </span>
            </h2>
            <div
              style={{
                display:        "flex",
                gap:            12,
                flexWrap:       "wrap",
                justifyContent: "center",
              }}
            >
              {ctas.filter((c) => c.variant !== "primary").map((cta) =>
                cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cta.variant === "dark" ? "btn-dark" : "btn-secondary"}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "dark" ? "btn-dark" : "btn-secondary"}
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
