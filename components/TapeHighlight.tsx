interface TapeHighlightProps {
  children: React.ReactNode;
}

export default function TapeHighlight({ children }: TapeHighlightProps) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--orange)",
        color: "white",
        padding: "2px 14px",
        transform: "rotate(-1.5deg)",
      }}
    >
      {children}
    </span>
  );
}
