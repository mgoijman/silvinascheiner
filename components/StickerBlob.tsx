interface StickerBlobProps {
  text: string;
  color?: "yellow" | "orange" | "green";
  rotate?: number;
  className?: string;
  size?: number;
  variant?: 0 | 1 | 2 | 3;
}

// Four distinct organic polygons — each has a different silhouette feel:
// 0: wide & low, pronounced dip at top-left, ear bump at top-right
// 1: tall & narrow-ish, concave bottom-left notch, big convex right side
// 2: rounder but with two ear-like bumps at 10 o'clock and 3 o'clock
// 3: squarish-organic, very irregular corners with deep dips
const SHAPES = [
  "polygon(44% 0%, 64% 3%, 80% 0%, 94% 10%, 100% 28%, 98% 50%, 100% 68%, 90% 84%, 74% 96%, 52% 100%, 30% 97%, 12% 90%, 2% 72%, 0% 50%, 4% 28%, 14% 10%)",
  "polygon(50% 2%, 72% 0%, 90% 8%, 100% 26%, 98% 48%, 94% 64%, 100% 78%, 86% 94%, 64% 100%, 40% 98%, 18% 92%, 4% 76%, 0% 54%, 6% 34%, 2% 16%, 22% 6%)",
  "polygon(38% 0%, 58% 4%, 76% 0%, 92% 14%, 100% 34%, 96% 56%, 100% 74%, 88% 90%, 68% 100%, 46% 98%, 24% 100%, 8% 86%, 0% 64%, 4% 42%, 0% 22%, 18% 8%)",
  "polygon(52% 0%, 74% 6%, 90% 0%, 100% 20%, 96% 42%, 100% 62%, 92% 80%, 100% 96%, 76% 100%, 52% 94%, 30% 100%, 10% 88%, 0% 66%, 6% 44%, 0% 24%, 24% 8%)",
];

function pickVariant(text: string): 0 | 1 | 2 | 3 {
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return (hash % 4) as 0 | 1 | 2 | 3;
}

export default function StickerBlob({
  text,
  color = "yellow",
  rotate = 0,
  className = "",
  size = 112,
  variant,
}: StickerBlobProps) {
  const colorMap = {
    yellow: { background: "var(--yellow)", textColor: "var(--ink)" },
    orange: { background: "var(--orange)", textColor: "white" },
    green:  { background: "var(--green)", textColor: "white" },
  };

  const { background, textColor } = colorMap[color];
  const shape = SHAPES[variant ?? pickVariant(text)];

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
        clipPath: shape,
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-script), 'Caveat', cursive",
        fontSize: Math.round(size * 0.22),
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
