"use client";

import { useState } from "react";

interface VideoCard {
  id: string;
  badge: string;
  badgeColor: string;
  episode?: string;
  title: string;
  description: string;
  views: string;
  platform: "X" | "YouTube";
  url: string;
  date: string;
}

const builderSeries: VideoCard[] = [
  {
    id: "b1",
    badge: "Builder Series",
    badgeColor: "#c87358",
    episode: "E02",
    title: "CrimsonFate",
    description:
      "An on-chain game on Starknet with 150K accounts and 20K transactions. Most people hadn't heard of it.",
    views: "5.6K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1927713996666187855",
    date: "May 2025",
  },
  {
    id: "b2",
    badge: "Builder Series",
    badgeColor: "#c87358",
    episode: "E03",
    title: "Arcverse",
    description:
      "Fitness meets gaming on Starknet. Won the Hacker Games and kept shipping after.",
    views: "4.7K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1929804363566096612",
    date: "Jun 2025",
  },
  {
    id: "b3",
    badge: "Builder Series",
    badgeColor: "#c87358",
    episode: "E04",
    title: "Starknet Arcade",
    description:
      "Snakes & Ladders, Russian Roulette, Rock Paper Scissors — all on-chain. Another Hacker Games winner.",
    views: "1.1K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1945390533721120997",
    date: "Jul 2025",
  },
];

const standalone: VideoCard[] = [
  {
    id: "s1",
    badge: "Explainer",
    badgeColor: "#5a9e7c",
    title: "Why Cairo?",
    description:
      "People keep asking why learn Cairo when Solidity or Rust exist. I tried to answer that properly.",
    views: "3.8K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1906977084062245353",
    date: "Apr 2025",
  },
  {
    id: "s2",
    badge: "Tool Demo",
    badgeColor: "#7c6ab5",
    title: "Sasuke",
    description:
      "A dev tool that lets you write Cairo contracts in TypeScript — removes a lot of the initial friction.",
    views: "8.5K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1920495575696331161",
    date: "May 2025",
  },
  {
    id: "s3",
    badge: "Tool Demo",
    badgeColor: "#7c6ab5",
    title: "Starknet Foundry",
    description:
      "Quick walkthrough of two new features: project templates and terminal auto-completion.",
    views: "8.3K",
    platform: "X",
    url: "https://x.com/reet_batra/status/1944721040221098229",
    date: "Jul 2025",
  },
  {
    id: "s4",
    badge: "Education",
    badgeColor: "#4a8fa8",
    title: "Intro to Ethereum",
    description:
      "Module 1 of Dabl Club's DevCamp — teaching React devs how Ethereum actually works under the hood.",
    views: "23",
    platform: "YouTube",
    url: "https://youtu.be/WgL8qW_1gAs",
    date: "Feb 2025",
  },
];

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
        background: hovered ? "#fff" : "#fdfaf5",
        border: `1.5px solid ${hovered ? "#c8b8a8" : "#ece0d4"}`,
        padding: "28px 28px 24px",
        transition: "all 0.2s ease",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Top row: badge + episode + platform */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {card.episode && (
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                color: card.badgeColor,
                background: `${card.badgeColor}18`,
                border: `1px solid ${card.badgeColor}30`,
                borderRadius: 100,
                padding: "3px 9px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {card.episode}
            </span>
          )}
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#9c8c80",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {card.badge}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            color: card.platform === "YouTube" ? "#e24545" : "#1c1a17",
            background: card.platform === "YouTube" ? "#ffeaea" : "#e8e4df",
            border: `1px solid ${card.platform === "YouTube" ? "#f5c0c0" : "#d0c8c0"}`,
            borderRadius: 100,
            padding: "3px 9px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {card.platform === "YouTube" ? "YouTube" : "𝕏 Video"}
        </span>
      </div>

      {/* Title */}
      <h4
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: 22,
          color: "#1c1a17",
          marginBottom: 10,
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
          fontSize: 13.5,
          color: "#7a6d63",
          lineHeight: 1.65,
          flex: 1,
          marginBottom: 20,
        }}
      >
        {card.description}
      </p>

      {/* Footer: views + date + arrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#c87358",
              letterSpacing: "0.04em",
            }}
          >
            {card.views} views
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#bba898",
              letterSpacing: "0.04em",
            }}
          >
            {card.date}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 16,
            color: hovered ? "#c87358" : "#c8b8a8",
            transition: "color 0.2s",
          }}
        >
          ↗
        </span>
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
      {/* Section label */}
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
          05 — On Camera
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
        Short videos on Cairo, ZK tooling, and builders worth knowing about. Mostly quick — most are under 5 minutes.
      </p>

      {/* Builder Series */}
      <div style={{ marginBottom: 56 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#c87358",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Builder Series
          </span>
          <div style={{ flex: 1, height: 1, background: "#f0e6da" }} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
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
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "#9c8c80",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Standalone
          </span>
          <div style={{ flex: 1, height: 1, background: "#f0e6da" }} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {standalone.map((card) => (
            <VideoCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #video { padding: 56px 20px !important; max-width: 100% !important; }
          #video .builder-grid { grid-template-columns: 1fr !important; }
          #video .standalone-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          #video .standalone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
