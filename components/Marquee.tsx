const items = [
  "Cairo",
  "StarkNet",
  "ZK Proofs",
  "Claude API",
  "AI Agents",
  "Vercel AI SDK",
  "TypeScript",
  "Polygon",
  "Smart Contracts",
  "LLMs",
  "Developer Advocacy",
  "DeFi",
  "Solidity",
  "Next.js",
  "Community Building",
  "Python",
];

export default function Marquee() {
  return (
    <div
      className="select-none overflow-hidden border-b border-ink bg-paper-2 py-3"
      aria-hidden
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...items, ...items].map((m, i) => (
          <span key={i} className="t-label flex items-center gap-8 pr-8 text-muted">
            {m}
            <span className="h-[5px] w-[5px] bg-blue" />
          </span>
        ))}
      </div>
    </div>
  );
}
