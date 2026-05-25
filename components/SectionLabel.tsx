interface SectionLabelProps {
  text: string;
  color?: "orange" | "yellow" | "green";
}

export default function SectionLabel({ text, color = "orange" }: SectionLabelProps) {
  const colorMap = {
    orange: { background: "var(--orange)", color: "white" },
    yellow: { background: "var(--yellow)", color: "var(--ink)" },
    green:  { background: "var(--green)", color: "white" },
  };

  const styles = colorMap[color];

  return (
    <span
      style={{
        display: "inline-block",
        background: styles.background,
        color: styles.color,
        border: "2px solid var(--ink)",
        borderRadius: 0,
        padding: "4px 12px",
        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "0.3px",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}
