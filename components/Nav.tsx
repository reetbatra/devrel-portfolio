"use client";

import { useState } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
  { label: "Videos", href: "#video" },
  { label: "Blog", href: "https://reet.hashnode.dev/" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                color: "#7a6d63",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#1c1a17")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7a6d63")}
            >
              {item.label}
            </a>
          ))}
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
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#a8593e")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#c87358")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile right side */}
        <div className="nav-mobile" style={{ display: "none", alignItems: "center", gap: 12 }}>
          <a
            href="mailto:reetbatra25@gmail.com"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: 12.5,
              fontWeight: 600,
              background: "#c87358",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 100,
            }}
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 5L17 17M17 5L5 17" stroke="#1c1a17" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 7h16M3 11h16M3 15h16" stroke="#1c1a17" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(253,250,245,0.97)",
            borderTop: "1px solid rgba(200,115,88,0.1)",
            padding: "4px 20px 12px",
          }}
        >
          {links.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#1c1a17",
                padding: "12px 0",
                borderBottom: i < links.length - 1 ? "1px solid #f0e8e0" : "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
          nav > div:first-child { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}
