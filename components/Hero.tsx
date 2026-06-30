import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "0 48px",
        minHeight: 680,
        display: "grid",
        gridTemplateColumns: "1fr 480px",
        gap: 40,
        alignItems: "center",
      }}
    >
      {/* LEFT: Text */}
      <div style={{ padding: "88px 0 80px" }}>
        {/* Open to roles badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "#eef6f1",
            border: "1px solid #b4d8c4",
            borderRadius: 100,
            padding: "7px 18px",
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#52a878",
              animation: "pulse 2.4s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "#3d7a5a",
              textTransform: "uppercase",
            }}
          >
            Open to DevRel Roles
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(64px, 7vw, 112px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#1c1a17",
            marginBottom: 28,
          }}
        >
          Reet
          <br />
          <em style={{ color: "#c87358", fontStyle: "italic" }}>Batra.</em>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 17,
            lineHeight: 1.72,
            color: "#7a6d63",
            maxWidth: 440,
            marginBottom: 44,
            fontWeight: 400,
          }}
        >
          4 years of DevRel in Web3 and AI. I help protocols get adopted and
          developers get unstuck.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:reetbatra25@gmail.com"
            className="cta-hire"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              background: "#1c1a17",
              color: "#fdfaf5",
              padding: "13px 28px",
              borderRadius: 100,
              transition: "opacity 0.2s",
            }}
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1bEFjh0nAX7vX5Hw9BpIM5CB05UNJFVxZ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-resume"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              background: "transparent",
              color: "#1c1a17",
              padding: "12px 28px",
              borderRadius: 100,
              border: "1.5px solid #c8b8a8",
              transition: "border-color 0.2s",
            }}
          >
            Resume ↗
          </a>
          <div
            style={{
              height: 20,
              width: 1,
              background: "#e0d0c0",
              margin: "0 4px",
            }}
          />
          {[
            { label: "GitHub", href: "https://github.com/reetbatra" },
            { label: "Twitter", href: "https://x.com/reet_batra" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                color: "#9c8c80",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT: Photo */}
      <div style={{ position: "relative", height: 680, alignSelf: "stretch" }}>
        {/* Warm blob background */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 16,
            right: -48,
            bottom: 0,
            background: "linear-gradient(150deg, #f5ede3 0%, #e8d4c0 100%)",
            borderRadius: "52% 48% 44% 56% / 58% 42% 58% 42%",
            zIndex: 0,
          }}
        />
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: -16,
            width: 96,
            height: 96,
            backgroundImage: "radial-gradient(#c87358 1.5px, transparent 1.5px)",
            backgroundSize: "11px 11px",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: -8,
            width: 56,
            height: 56,
            border: "2px solid #c87358",
            borderRadius: "50%",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        {/* Photo blob */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: -24,
            bottom: 16,
            zIndex: 1,
            overflow: "hidden",
            borderRadius: "48% 52% 46% 54% / 52% 48% 54% 46%",
          }}
        >
          <Image
            src="/hero-photo.jpg"
            alt="Reet Batra speaking at ETH India"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "80% 6%",
              filter: "saturate(1.05) brightness(1.02)",
            }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 62% 68% at 62% 30%, transparent 40%, rgba(253,250,245,0.82) 100%)",
            }}
          />
        </div>

        {/* Chip: 4800+ devs */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 0,
            zIndex: 3,
            background: "#1c1a17",
            borderRadius: 100,
            padding: "11px 20px",
            boxShadow: "0 6px 20px rgba(28,26,23,0.18)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: 22,
              color: "#c87358",
              lineHeight: 1,
            }}
          >
            4,800+
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#6b6056",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            devs
            <br />
            reached
          </span>
        </div>

        {/* Chip: 4+ yrs */}
        <div
          style={{
            position: "absolute",
            top: 144,
            right: -8,
            zIndex: 3,
            background: "#c87358",
            borderRadius: 100,
            padding: "9px 18px",
            boxShadow: "0 4px 16px rgba(200,115,88,0.35)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              color: "#fff",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            4+ yrs DevRel
          </span>
        </div>

        {/* Chip: 20+ workshops */}
        <div
          style={{
            position: "absolute",
            bottom: 160,
            right: -8,
            zIndex: 3,
            background: "#5a9e7c",
            borderRadius: 100,
            padding: "9px 18px",
            boxShadow: "0 4px 16px rgba(90,158,124,0.3)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              color: "#fff",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            20+ offline workshops
          </span>
        </div>

        {/* Chip: ETH India */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            left: -8,
            zIndex: 3,
            background: "#ffffff",
            border: "1px solid #e4d4c4",
            borderRadius: 14,
            padding: "12px 18px",
            boxShadow: "0 8px 28px rgba(28,26,23,0.1)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#9c8c80",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            ETH India · 2023
          </div>
          <div
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#1c1a17",
            }}
          >
            Bangalore, India
          </div>
        </div>
      </div>

      <style>{`
        .cta-hire:hover { opacity: 0.8; }
        .cta-resume:hover { border-color: #9c8c80 !important; }
        .social-link:hover { color: #1c1a17 !important; }

        @media (max-width: 1100px) {
          #hero { grid-template-columns: 1fr 360px !important; }
        }
        @media (max-width: 768px) {
          #hero {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            min-height: auto !important;
            gap: 0 !important;
          }
          #hero > div:first-child { padding: 48px 0 20px !important; }
          #hero > div:first-child h1 { font-size: 58px !important; }
          #hero > div:last-child {
            height: 380px !important;
            margin: 0 -20px !important;
          }
        }
      `}</style>
    </section>
  );
}
