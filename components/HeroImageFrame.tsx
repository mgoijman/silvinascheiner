import { ReactNode } from "react";

interface HeroImageFrameProps {
  children: ReactNode;
}

export default function HeroImageFrame({ children }: HeroImageFrameProps) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-card)",
        border: "2px solid var(--ink)",
        background: "var(--offwhite)",
        aspectRatio: "3/4",
        overflow: "visible",
        width: "100%",
        maxWidth: 420,
      }}
    >
      <div
        style={{
          borderRadius: "calc(var(--radius-card) - 2px)",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
