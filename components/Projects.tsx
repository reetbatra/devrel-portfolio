"use client";

import { useState } from "react";

interface Project {
  num: string;
  name: string;
  category: "AI" | "AI + Web3" | "Web3";
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    num: "01",
    name: "docs-parity",
    category: "AI",
    description:
      "AI agent that crawls documentation and flags gaps between what docs say and what the API actually does.",
    tags: ["TypeScript", "Claude API", "Firecrawl", "Next.js"],
    github: "https://github.com/reetbatra/docs-parity",
    live: "https://docsparity.vercel.app/",
  },
  {
    num: "02",
    name: "open-money-intel",
    category: "AI + Web3",
    description:
      "Scans DeFi protocols with AI agents and surfaces what's actually moving. Open source.",
    tags: ["TypeScript", "AI Agents", "Next.js"],
    github: "https://github.com/reetbatra/open-money-intel",
    live: "https://open-money-intel.vercel.app/",
  },
  {
    num: "03",
    name: "deja-vu-agent",
    category: "AI",
    description:
      "Give it logs or test results. It finds the failure patterns you keep running into.",
    tags: ["Python", "FastAPI", "LLMs"],
    github: "https://github.com/reetbatra/deja-vu-agent",
  },
  {
    num: "04",
    name: "zk-wordle",
    category: "Web3",
    description:
      "Wordle where every guess gets ZK-proof verified on Midnight. Written in Compact.",
    tags: ["Compact", "Midnight", "TypeScript", "React"],
    github: "https://github.com/reetbatra/zk-wordle",
  },
  {
    num: "05",
    name: "zk-cred-verifier",
    category: "Web3",
    description:
      "ZK credential verifier. Prove things about yourself without handing over the actual data.",
    tags: ["TypeScript", "ZK Proofs"],
    github: "https://github.com/reetbatra/zk-cred-verifier",
  },
  {
    num: "06",
    name: "chronos-gambit",
    category: "Web3",
    description:
      "On-chain chess engine with match history and wagering on Aptos, written in Move.",
    tags: ["TypeScript", "Move", "Aptos"],
    github: "https://github.com/reetbatra/chronos-gambit",
  },
];

const categoryStyle: Record<
  Project["category"],
  { bg: string; border: string; color: string }
> = {
  AI: { bg: "#eef6f1", border: "#b4d8c4", color: "#3d7a5a" },
  "AI + Web3": { bg: "#f2eeff", border: "#ccc0e8", color: "#5a4a8a" },
  Web3: { bg: "#f0f0ff", border: "#c8c0e8", color: "#4a4a8a" },
};

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryStyle[project.category];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fdfaf5",
        border: `1px solid ${hovered ? "#c87358" : "#e4d4c4"}`,
        borderRadius: 14,
        padding: 28,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 20px rgba(200,115,88,0.1)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            padding: "3px 11px",
            background: cat.bg,
            border: `1px solid ${cat.border}`,
            borderRadius: 100,
            color: cat.color,
            letterSpacing: "0.05em",
          }}
        >
          {project.category}
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-gh-link"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              color: "#9c8c80",
              letterSpacing: "0.04em",
              transition: "color 0.15s",
            }}
          >
            GitHub ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-live-link"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                color: "#c87358",
                letterSpacing: "0.04em",
                transition: "color 0.15s",
              }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: 22,
          color: "#1c1a17",
          marginBottom: 10,
          letterSpacing: "-0.01em",
        }}
      >
        {project.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: 14,
          lineHeight: 1.68,
          color: "#7a6d63",
          marginBottom: 20,
        }}
      >
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              padding: "3px 10px",
              background: "#f5ede3",
              borderRadius: 100,
              color: "#9c8c80",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
          marginBottom: 48,
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
          03: Projects
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
        }}
      >
        Things I&apos;ve shipped.
      </h2>
      <p
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: 16,
          color: "#7a6d63",
          marginBottom: 56,
          maxWidth: 500,
          lineHeight: 1.68,
        }}
      >
        When I&apos;m not doing DevRel, I build. Mostly to understand what
        I&apos;m supposed to be explaining.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>

      <style>{`
        .proj-gh-link:hover { color: #1c1a17 !important; }
        .proj-live-link:hover { color: #a85f3e !important; }
        @media (max-width: 768px) {
          #projects { padding: 56px 20px !important; max-width: 100% !important; }
          #projects > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
