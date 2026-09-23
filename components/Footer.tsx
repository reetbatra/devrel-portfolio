export default function Footer() {
  return (
    <footer
      style={{
        background: "#1c1a17",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 18,
            color: "#fdfaf5",
            letterSpacing: "-0.01em",
          }}
        >
          Reet Batra
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color: "#504840",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          DevRel · Web3 · AI
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: "#504840",
          letterSpacing: "0.05em",
        }}
      >
        reetbatra25@gmail.com
      </span>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 24px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </footer>
  );
}
