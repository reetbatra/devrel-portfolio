import SectionHead from "./SectionHead";

interface Project {
  num: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
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
    featured: true,
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
      "Support agent that remembers. Answers from your docs, saves each answer as a reusable skill, and never solves the same question twice.",
    tags: ["Python", "FastAPI", "Claude API"],
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="03"
        label="Projects"
        title="Things I've shipped."
        lede="When I'm not doing DevRel, I build. Mostly to understand what I'm supposed to be explaining."
      />

      <div className="border-b border-ink">
        {projects.map((p) => (
          <article
            key={p.num}
            className="grid items-baseline gap-x-6 gap-y-2 border-b border-rule py-6 transition-colors duration-150 hover:bg-paper-2 md:grid-cols-[72px_1.05fr_1.55fr_150px]"
          >
            <div className="t-label text-faint">{p.num}</div>

            <div>
              <h3 className="text-[20px] font-bold tracking-[-0.02em] [font-stretch:108%]">
                {p.name}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="t-label border border-rule px-2 py-0.5 text-[10px] text-muted">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="t-label bg-acid px-2 py-0.5 text-[10px]">
                    Flagship
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">
                {p.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {p.tags.map((t) => (
                  <li key={t} className="t-label text-[10px] text-faint">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 md:justify-end">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label flex min-h-11 items-center text-faint transition-colors duration-150 hover:text-ink"
              >
                GitHub ↗
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-blue transition-colors duration-150 hover:bg-acid hover:text-ink"
                >
                  Live ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
