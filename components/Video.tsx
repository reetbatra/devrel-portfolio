import SectionHead from "./SectionHead";

interface VideoCard {
  id: string;
  badge: string;
  episode?: string;
  title: string;
  description: string;
  views: string;
  platform: string;
  url: string;
  date: string;
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
  },
];

function Row({ v, idx }: { v: VideoCard; idx: number }) {
  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid items-baseline gap-x-6 gap-y-2 border-b border-rule py-5 transition-colors duration-150 hover:bg-paper-2 md:grid-cols-[72px_1fr_1.5fr_150px]"
    >
      <div className="t-label text-faint">
        {v.episode ?? String(idx + 1).padStart(2, "0")}
      </div>

      <div>
        <h4 className="text-[18px] font-bold tracking-[-0.02em] [font-stretch:108%]">
          {v.title}
        </h4>
        <span className="t-label mt-2 inline-block border border-rule px-2 py-0.5 text-[10px] text-muted">
          {v.badge}
        </span>
      </div>

      <p className="text-[14.5px] leading-[1.62] text-muted">{v.description}</p>

      <div className="flex items-baseline gap-4 md:justify-end">
        <span className="t-label text-faint">{v.date}</span>
        <span className="t-label text-ink">
          <b className="text-[15px] font-bold [font-stretch:108%]">{v.views}</b>{" "}
          <span className="text-faint">{v.platform}</span>
        </span>
      </div>
    </a>
  );
}

export default function Video() {
  return (
    <section
      id="video"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="05"
        label="On Camera"
        title="I record things too."
        lede="Short videos on Cairo, ZK tooling, and builders worth knowing about. Most are under 5 minutes."
      />

      <div className="t-label border-b border-rule py-4 text-blue">
        Builder Series
      </div>
      <div>
        {builderSeries.map((v, i) => (
          <Row key={v.id} v={v} idx={i} />
        ))}
      </div>

      <div className="t-label border-b border-rule pt-8 pb-4 text-blue">
        Standalone
      </div>
      <div className="border-b border-ink">
        {standalone.map((v, i) => (
          <Row key={v.id} v={v} idx={i} />
        ))}
      </div>
    </section>
  );
}
