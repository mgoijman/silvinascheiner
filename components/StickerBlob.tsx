interface StickerBlobProps {
  text: string;
  color?: "yellow" | "orange" | "green";
  rotate?: number;
  className?: string;
  size?: number;
}

export default function StickerBlob({
  text,
  color = "yellow",
  rotate = 0,
  className = "",
  size = 112,
}: StickerBlobProps) {
  const colorMap = {
    yellow: { background: "var(--yellow)", textColor: "var(--ink)" },
    orange: { background: "var(--orange)", textColor: "white" },
    green:  { background: "var(--green)", textColor: "white" },
  };

  const { background, textColor } = colorMap[color];

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color: textColor,
        // Irregular, hand-cut blob: 12 control points, all intentionally uneven
        clipPath:
          "polygon(48% 2%, 68% 0%, 85% 8%, 96% 22%, 100% 44%, 97% 64%, 88% 80%, 74% 95%, 54% 100%, 34% 97%, 14% 88%, 3% 68%, 0% 48%, 5% 28%, 16% 12%, 32% 4%)",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-script), 'Caveat', cursive",
        fontSize: Math.round(size * 0.145),
        fontWeight: 400,
        textAlign: "center",
        lineHeight: 1.25,
        whiteSpace: "pre-line",
        flexShrink: 0,
        letterSpacing: "0.01em",
      }}
    >
      {text}
    </div>
  );
}
