export default function Blog() {
  return (
    <div id="blog-section" style={{ background: "#f5ede3", padding: "80px 48px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#c87358",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            06: Blog
          </div>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(36px, 3.5vw, 52px)",
              lineHeight: 1.1,
              color: "#1c1a17",
              letterSpacing: "-0.025em",
              maxWidth: 420,
            }}
          >
            I write about what I learn.
          </h2>
        </div>

        <div style={{ maxWidth: 420 }}>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 16,
              color: "#7a6d63",
              lineHeight: 1.72,
              marginBottom: 28,
            }}
          >
            I write about what I&apos;m figuring out: Cairo, ZK, AI agents, the DevRel
            work. Notes for myself that turned into posts.
          </p>
          <a
            href="https://reet.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-cta"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1c1a17",
              color: "#fdfaf5",
              padding: "13px 28px",
              borderRadius: 100,
              transition: "opacity 0.2s",
            }}
          >
            Read on Hashnode ↗
          </a>
        </div>
      </div>

      <style>{`
        .blog-cta:hover { opacity: 0.8; }
        @media (max-width: 768px) {
          #blog-section { padding: 60px 20px !important; }
          #blog-section > div { flex-direction: column !important; align-items: flex-start !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
