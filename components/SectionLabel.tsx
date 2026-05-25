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
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        background: styles.background,
        color: styles.color,
        border: "2px solid var(--ink)",
        borderRadius: "0px",
        padding: "4px 12px",
        fontFamily: "var(--font-display), 'Archivo Black', sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "normal",
        textTransform: "none",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}
