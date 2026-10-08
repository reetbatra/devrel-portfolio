interface Contribution {
  org: string;
  repo: string;
  what: string;
  ref: string;
  url: string;
  status: "Merged" | "Fixed" | "Open";
}

// Newest first within each status. Statuses checked against GitHub on 2026-10-08.
const contributions: Contribution[] = [
  {
    org: "Sarvam AI",
    repo: "ai-sdk",
    what: "Streaming dropped every text and reasoning delta, so the finished reply came back empty on ai@6.",
    ref: "PR #2",
    url: "https://github.com/sarvam-ai/ai-sdk/pull/2",
    status: "Merged",
  },
  {
    org: "Mastra",
    repo: "mastra",
    what: "Ten docs examples imported names the packages don't export. Their team shipped the fix the same day.",
    ref: "Issue #26277",
    url: "https://github.com/mastra-ai/mastra/issues/26277",
    status: "Fixed",
  },
  {
    org: "Cyberwave",
    repo: "docs-mintlify",
    what: "The Quickstart's first example crashed on its first call.",
    ref: "PR #105",
    url: "https://github.com/cyberwave-os/docs-mintlify/pull/105",
    status: "Merged",
  },
  {
    org: "Sarvam AI",
    repo: "skills",
    what: "A TTS parameter in the agent skill didn't match the API.",
    ref: "PR #17",
    url: "https://github.com/sarvamai/skills/pull/17",
    status: "Merged",
  },
  {
    org: "Zcash Labs",
    repo: "zcash-skills",
    what: "Agent skills still warned about a Docker bug that had already been fixed.",
    ref: "PR #1",
    url: "https://github.com/zcashlabs/zcash-skills/pull/1",
    status: "Merged",
  },
  {
    org: "Mastra",
    repo: "mastra",
    what: "Ten more import paths that don't resolve, checked against the alpha builds.",
    ref: "Issue #26376",
    url: "https://github.com/mastra-ai/mastra/issues/26376",
    status: "Open",
  },
  {
    org: "Mastra",
    repo: "mastra",
    what: "@mastra/mesa has never shipped TypeScript types.",
    ref: "Issue #26377",
    url: "https://github.com/mastra-ai/mastra/issues/26377",
    status: "Open",
  },
  {
    org: "ElevenLabs",
    repo: "skills",
    what: "The realtime speech-to-text example doesn't run on the current SDK.",
    ref: "Issue #135",
    url: "https://github.com/elevenlabs/skills/issues/135",
    status: "Open",
  },
  {
    org: "Weave",
    repo: "router",
    what: "make up-hmm starts the HMM sidecar, but the router never uses it.",
    ref: "Issue #1659",
    url: "https://github.com/weave-os/router/issues/1659",
    status: "Open",
  },
  {
    org: "Zcash Labs",
    repo: "zcash-skills",
    what: "CI that runs the repo's own fact and manifest checks on every PR.",
    ref: "PR #2",
    url: "https://github.com/zcashlabs/zcash-skills/pull/2",
    status: "Open",
  },
];

const statusStyle: Record<Contribution["status"], { bg: string; border: string; color: string }> = {
  Merged: { bg: "#eef6f1", border: "#b4d8c4", color: "#3d7a5a" },
  Fixed: { bg: "#eef6f1", border: "#b4d8c4", color: "#3d7a5a" },
  Open: { bg: "#fbeee6", border: "#e8c4b0", color: "#a85f3e" },
};

export default function OpenSource({ index, intro }: { index: string; intro: string }) {
  return (
    <section id="open-source" style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color: "#c87358",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {index}: Open Source
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
        Fixes in other people&apos;s code.
      </h2>
      <p
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: 16,
          color: "#7a6d63",
          marginBottom: 48,
          maxWidth: 560,
          lineHeight: 1.68,
        }}
      >
        {intro}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid #ece0d4" }}>
        {contributions.map((c) => {
          const s = statusStyle[c.status];
          return (
            <li key={c.url} className="os-row">
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="os-link">
                <span className="os-org">
                  {c.org}
                  <span className="os-repo"> / {c.repo}</span>
                </span>
                <span className="os-what">{c.what}</span>
                <span className="os-meta">
                  <span className="os-ref">{c.ref} ↗</span>
                  <span
                    className="os-badge"
                    style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                  >
                    {c.status}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <style>{`
        .os-row { border-bottom: 1px solid #ece0d4; }
        .os-link {
          display: grid;
          grid-template-columns: 210px 1fr auto;
          gap: 24px;
          align-items: baseline;
          padding: 20px 4px;
          color: inherit;
          text-decoration: none;
          transition: background 0.15s;
        }
        .os-link:hover { background: #fdfaf5; }
        .os-link:hover .os-ref { color: #c87358; }
        .os-link:focus-visible { outline: 2px solid #c87358; outline-offset: 2px; }
        .os-org { font-family: var(--font-dm-serif), serif; font-size: 19px; color: #1c1a17; }
        .os-repo { font-family: var(--font-dm-mono), monospace; font-size: 11px; color: #9c8c80; }
        .os-what { font-family: var(--font-jakarta), sans-serif; font-size: 14.5px; line-height: 1.6; color: #7a6d63; }
        .os-meta { display: flex; align-items: center; gap: 12px; white-space: nowrap; }
        .os-ref { font-family: var(--font-dm-mono), monospace; font-size: 11px; color: #9c8c80; letter-spacing: 0.04em; transition: color 0.15s; }
        .os-badge { font-family: var(--font-dm-mono), monospace; font-size: 10px; padding: 3px 11px; border-radius: 100px; letter-spacing: 0.05em; }
        @media (max-width: 768px) {
          #open-source { padding: 56px 20px !important; max-width: 100% !important; }
          .os-link { grid-template-columns: 1fr; gap: 8px; padding: 18px 2px; }
        }
      `}</style>
    </section>
  );
}
