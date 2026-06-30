const categories = [
  {
    title: "AI & LLMs",
    skills: ["Claude API", "Vercel AI SDK", "Python", "LLMs", "AI Agents", "FastAPI"],
  },
  {
    title: "Web3 & ZK",
    skills: ["Cairo", "StarkNet", "ZK Proofs", "Solidity", "Smart Contracts", "Polygon"],
  },
  {
    title: "Dev Stack",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Git", "PostgreSQL"],
  },
];

export default function TechStack() {
  return (
    <div style={{ background: "#f5ede3", padding: "80px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 52,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#c87358",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            02 — Tech Stack
          </span>
          <div style={{ flex: 1, height: 1, background: "#ddd0c0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 52,
          }}
        >
          {categories.map((cat) => (
            <div key={cat.title}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: 22,
                  color: "#1c1a17",
                  marginBottom: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                {cat.title}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      padding: "6px 15px",
                      background: "#fff",
                      border: "1px solid #ddd0c0",
                      borderRadius: 100,
                      color: "#4a4038",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tech-stack-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
