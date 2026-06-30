"use client";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(253,250,245,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(200,115,88,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 21,
            color: "#1c1a17",
            letterSpacing: "-0.02em",
          }}
        >
          RB
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Experience", "Projects", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                color: "#7a6d63",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#1c1a17")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#7a6d63")
              }
            >
              {item}
            </a>
          ))}
          <a
            href="https://reet.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 13.5,
              fontWeight: 500,
              color: "#7a6d63",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#1c1a17")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#7a6d63")
            }
          >
            Blog
          </a>
          <a
            href="mailto:reetbatra25@gmail.com"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 13,
              fontWeight: 600,
              background: "#c87358",
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 100,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#a8593e")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#c87358")
            }
          >
            Hire Me
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav > div { padding: 0 20px !important; }
          nav > div > div > a:not(:last-child) { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
