"use client";

import { useState } from "react";

interface VideoCard {
  id: string;
  badge: string;
  episode?: string;
  title: string;
  description: string;
  views: string;
  platform: "X" | "YouTube";
  url: string;
  date: string;
  gradient: string;
  accentColor: string;
}

const builderSeries: VideoCard[] = [
  {
    id: "b1",
    badge: "Builder Series",
    episode: "E02",
    title: "CrimsonFate",
    description:
      "An on-chain game on Starknet with 150K accounts and 20K transactions. Most people hadn't heard of it.",
    views: "5.6K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1927713996666187855",
    date: "May 2025",
    gradient: "linear-gradient(145deg, #1a0c08 0%, #3d1810 50%, #1a0c08 100%)",
    accentColor: "#c87358",
  },
  {
    id: "b2",
    badge: "Builder Series",
    episode: "E03",
    title: "Arcverse",
    description:
      "Fitness meets gaming on Starknet. Won the Hacker Games and kept shipping after.",
    views: "4.7K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1929804363566096612",
    date: "Jun 2025",
    gradient: "linear-gradient(145deg, #071410 0%, #0f2b1e 50%, #071410 100%)",
    accentColor: "#5a9e7c",
  },
  {
    id: "b3",
    badge: "Builder Series",
    episode: "E04",
    title: "Starknet Arcade",
    description:
      "Snakes & Ladders, Russian Roulette, Rock Paper Scissors: all on-chain. Another Hacker Games winner.",
    views: "1.1K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1945390533721120997",
    date: "Jul 2025",
    gradient: "linear-gradient(145deg, #0e0a1a 0%, #221540 50%, #0e0a1a 100%)",
    accentColor: "#8b70d4",
  },
];

const standalone: VideoCard[] = [
  {
    id: "s1",
    badge: "Explainer",
    title: "Why Cairo?",
    description:
      "People keep asking why learn Cairo when Solidity or Rust exist. I tried to answer that properly.",
    views: "3.8K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1906977084062245353",
    date: "Apr 2025",
    gradient: "linear-gradient(145deg, #080e1a 0%, #122040 50%, #080e1a 100%)",
    accentColor: "#4a8fa8",
  },
  {
    id: "s2",
    badge: "Tool Demo",
    title: "Sasuke",
    description:
      "Write Cairo contracts in TypeScript. Takes away a lot of the initial friction for devs just getting started.",
    views: "8.5K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1920495575696331161",
    date: "May 2025",
    gradient: "linear-gradient(145deg, #0f0814 0%, #251030 50%, #0f0814 100%)",
    accentColor: "#9b72cf",
  },
  {
    id: "s3",
    badge: "Tool Demo",
    title: "Starknet Foundry",
    description:
      "Quick walkthrough of two new features: project templates and terminal auto-completion.",
    views: "8.3K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1944721040221098229",
    date: "Jul 2025",
    gradient: "linear-gradient(145deg, #081014 0%, #0f2230 50%, #081014 100%)",
    accentColor: "#4a8fa8",
  },
  {
    id: "s4",
    badge: "Education",
    title: "Intro to Ethereum",
    description:
      "Module 1 of Dabl Club's DevCamp. For React devs who want to actually understand how Ethereum works.",
    views: "23",
    platform: "YouTube",
    url: "https://youtu.be/WgL8qW_1gAs",
    date: "Feb 2025",
    gradient: "linear-gradient(145deg, #0a0808 0%, #1e0c0c 50%, #0a0808 100%)",
    accentColor: "#e24545",
  },
];

function PlayButton({ hovered, accentColor }: { hovered: boolean; accentColor: string }) {
  return (
    <div
      style={{
        width: 64,
        height: 46,
        borderRadius: 10,
        background: hovered ? accentColor : "rgba(15,12,10,0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.22s ease, transform 0.22s ease",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        boxShadow: hovered
          ? `0 0 28px ${accentColor}55`
          : "0 2px 16px rgba(0,0,0,0.5)",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="7,4 17,10 7,16" fill="white" />
      </svg>
    </div>
  );
}

function PlatformBadge({ platform }: { platform: "X" | "YouTube" }) {
  const isYT = platform === "YouTube";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        background: isYT ? "#ff0000" : "rgba(255,255,255,0.12)",
        borderRadius: 4,
        padding: "3px 8px",
      }}
    >
      {isYT ? (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
          <path d="M13.72 1.56A1.76 1.76 0 0 0 12.49.32C11.38 0 7 0 7 0S2.62 0 1.51.32A1.76 1.76 0 0 0 .28 1.56 18.4 18.4 0 0 0 0 5a18.4 18.4 0 0 0 .28 3.44A1.76 1.76 0 0 0 1.51 9.68C2.62 10 7 10 7 10s4.38 0 5.49-.32a1.76 1.76 0 0 0 1.23-1.24A18.4 18.4 0 0 0 14 5a18.4 18.4 0 0 0-.28-3.44zM5.6 7.14V2.86L9.24 5 5.6 7.14z" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
          <path d="M10.5 1.5L6.75 5.79M1.5 1.5h3.75l5.25 9h-3.75L1.5 1.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 8,
          fontWeight: 600,
          color: "white",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {isYT ? "YouTube" : "Video"}
      </span>
    </div>
  );
}

function VideoCardComponent({ card }: { card: VideoCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: `1.5px solid ${hovered ? "#c8b8a8" : "#ece0d4"}`,
        overflow: "hidden",
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 28px rgba(28,26,23,0.1)"
          : "0 1px 4px rgba(28,26,23,0.04)",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          background: card.gradient,
          overflow: "hidden",
        }}
      >
        {/* Subtle noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Radial glow behind play button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${card.accentColor}22 0%, transparent 70%)`,
            transition: "opacity 0.3s",
            opacity: hovered ? 1 : 0.4,
          }}
        />

        {/* Centered play button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayButton hovered={hovered} accentColor={card.accentColor} />
        </div>

        {/* Platform badge — top right */}
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <PlatformBadge platform={card.platform} />
        </div>

        {/* Episode badge — top left */}
        {card.episode && (
          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                fontWeight: 700,
                color: card.accentColor,
                background: "rgba(0,0,0,0.6)",
                borderRadius: 4,
                padding: "3px 8px",
                letterSpacing: "0.08em",
              }}
            >
              {card.episode}
            </span>
          </div>
        )}

        {/* Views — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M5.5 1C3 1 1 4 1 4s2 3 4.5 3S10 4 10 4 8 1 5.5 1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" />
            <circle cx="5.5" cy="4" r="1.2" fill="rgba(255,255,255,0.6)" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            {card.views}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Badge + date row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: card.accentColor,
              background: `${card.accentColor}14`,
              border: `1px solid ${card.accentColor}28`,
              borderRadius: 100,
              padding: "2px 8px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            {card.badge}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#bba898",
              letterSpacing: "0.04em",
            }}
          >
            {card.date}
          </span>
        </div>

        {/* Title */}
        <h4
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 19,
            color: "#1c1a17",
            marginBottom: 8,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {card.title}
        </h4>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 13,
            color: "#7a6d63",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {card.description}
        </p>
      </div>
    </a>
  );
}

export default function Video() {
  return (
    <section
      id="video"
      style={{
        padding: "100px 48px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 56,
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
          05: On Camera
        </span>
        <div style={{ flex: 1, height: 1, background: "#ece0d4" }} />
      </div>

      <h2
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(40px, 4vw, 58px)",
          lineHeight: 1.08,
          color: "#1c1a17",
          marginBottom: 14,
          letterSpacing: "-0.025em",
          maxWidth: 560,
        }}
      >
        I record things too.
      </h2>
      <p
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: 16,
          color: "#7a6d63",
          lineHeight: 1.7,
          maxWidth: 500,
          marginBottom: 64,
        }}
      >
        Short videos on Cairo, ZK tooling, and builders worth knowing about.
        Most are under 5 minutes.
      </p>

      {/* Builder Series */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#c87358",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Builder Series
          </span>
          <div style={{ flex: 1, height: 1, background: "#f0e6da" }} />
        </div>
        <div
          className="builder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {builderSeries.map((card) => (
            <VideoCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Standalone */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#9c8c80",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Standalone
          </span>
          <div style={{ flex: 1, height: 1, background: "#f0e6da" }} />
        </div>
        <div
          className="standalone-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {standalone.map((card) => (
            <VideoCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #video { padding: 56px 20px !important; max-width: 100% !important; }
          .builder-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .standalone-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .builder-grid { grid-template-columns: 1fr !important; }
          .standalone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
