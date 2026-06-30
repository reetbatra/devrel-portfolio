export default function Marquee() {
  const text =
    "Cairo  ·  StarkNet  ·  ZK Proofs  ·  Claude API  ·  AI Agents  ·  Vercel AI SDK  ·  TypeScript  ·  Polygon  ·  Smart Contracts  ·  LLMs  ·  Developer Advocacy  ·  DeFi  ·  Solidity  ·  Next.js  ·  Community Building  ·  Python      ";

  const spanStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-mono), monospace",
    fontSize: 11.5,
    color: "#c87358",
    letterSpacing: "0.09em",
  };

  return (
    <div
      style={{
        background: "#1c1a17",
        padding: "13px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "marquee 32s linear infinite",
        }}
      >
        <span style={spanStyle}>{text}</span>
        <span style={spanStyle}>{text}</span>
      </div>
    </div>
  );
}
