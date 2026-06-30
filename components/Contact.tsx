export default function Contact() {
  const socialLinks = [
    { label: "GitHub ↗", href: "https://github.com/reetbatra" },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/reet-batra/" },
    { label: "Twitter ↗", href: "https://x.com/reet_batra" },
    { label: "Blog ↗", href: "https://reet.hashnode.dev/" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "120px 48px 100px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
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
          06 — Contact
        </span>
        <div style={{ flex: 1, height: 1, background: "#ece0d4" }} />
      </div>

      <div style={{ maxWidth: 820 }}>
        <div
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color: "#9c8c80",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Open to opportunities
        </div>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(52px, 6vw, 92px)",
            lineHeight: 0.97,
            color: "#1c1a17",
            letterSpacing: "-0.035em",
            marginBottom: 28,
          }}
        >
          Have an idea?
          <br />
          Let&apos;s build
          <br />
          <em style={{ color: "#c87358", fontStyle: "italic" }}>together.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 17,
            color: "#7a6d63",
            lineHeight: 1.7,
            maxWidth: 460,
            marginBottom: 48,
          }}
        >
          Looking for DevRel roles in AI or Web3.
        </p>

        <a
          href="mailto:reetbatra25@gmail.com"
          className="email-link"
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(18px, 2.2vw, 30px)",
            color: "#c87358",
            borderBottom: "1.5px solid #c87358",
            paddingBottom: 3,
            display: "inline-block",
            marginBottom: 52,
            transition: "opacity 0.2s",
          }}
        >
          reetbatra25@gmail.com
        </a>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: 13.5,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                border: "1.5px solid #ddd0c0",
                borderRadius: 100,
                color: "#4a4038",
                transition: "border-color 0.2s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .email-link:hover { opacity: 0.7; }
        .social-btn:hover { border-color: #9c8c80 !important; }
        @media (max-width: 768px) {
          #contact { padding: 64px 20px 64px !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
