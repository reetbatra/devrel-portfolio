import SectionHead from "./SectionHead";

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

interface Job {
  period: string;
  company: string;
  role: string;
  tags: string[];
  bullets: React.ReactNode[];
}

const jobs: Job[] = [
  {
    period: "Jan 2025 - Aug 2025",
    company: "StarkWare",
    role: "Ecosystem DevRel Engineer",
    tags: ["Developer Advocacy", "Technical Writing", "Video"],
    bullets: [
      <>
        Authored <B>12+ tutorials, demo apps, and video guides</B> integrated
        into official Starknet documentation.
      </>,
      <>
        Created and hosted the <B>Starknet Builder Series</B>, episodes
        averaging <B>4K to 8K organic views</B>, plus tool demos for Starknet
        Foundry, Sasuke, Dojo, and Cartridge.
      </>,
      <>
        Ran developer feedback loops across Discord and GitHub, turning recurring
        pain points into product roadmap input.
      </>,
    ],
  },
  {
    period: "Sep 2024 - Jan 2025",
    company: "DablClub",
    role: "Developer Relations",
    tags: ["Hackathons", "Developer Education", "Partnerships"],
    bullets: [
      <>
        Took <B>AggLayer</B> to ETH India and <B>ETH Global Bangkok</B>. A lot
        of good conversations about what cross-chain really solves, and what it
        doesn&apos;t.
      </>,
      <>
        Built <B>Dabl Learn</B>, a learning platform covering Polygon,
        AggLayer, and a few adjacent protocols.
      </>,
      <>
        Ran DevRel across Polygon and partners: writing, events, showing up at
        hackathons, the whole thing.
      </>,
    ],
  },
  {
    period: "Aug 2022 - Apr 2023",
    company: "ZKX (StarkCon)",
    role: "Developer Relations Manager",
    tags: ["Community Building", "Workshop Design", "Grant Ops"],
    bullets: [
      <>
        Led <B>StarkCon</B>: <B>11 events</B> across India reaching{" "}
        <B>4,800+ developers</B>, and established India&apos;s first Cairo
        community.
      </>,
      <>
        Organized India&apos;s first Cairo bootcamp: a{" "}
        <B>5-week program with 600+ students</B>.
      </>,
      <>
        Ran <B>$21K in developer grants</B>. Picked projects, tracked them, and
        pushed for the ones that actually moved the needle.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="01"
        label="Experience"
        title="Where I spent the last few years."
      />

      <div className="border-b border-ink">
        {jobs.map((job, i) => (
          <article
            key={job.company}
            className="grid gap-x-10 gap-y-6 border-b border-rule py-9 md:grid-cols-[1fr_1.9fr]"
          >
            <div>
              <div className="t-label flex items-baseline gap-3 text-faint">
                <span className="text-blue">0{i + 1}</span>
                {job.period}
              </div>
              <h3 className="t-head mt-3 text-[clamp(26px,2.8vw,34px)]">
                {job.company}
              </h3>
              <div className="mt-1.5 text-[14px] font-semibold text-muted">
                {job.role}
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <li
                    key={t}
                    className="t-label border border-rule px-2 py-1 text-[10px] text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <ol className="flex flex-col gap-5">
              {job.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="grid grid-cols-[28px_1fr] items-start gap-3"
                >
                  <span className="t-label pt-1 text-blue">
                    {String(bi + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-[1.65] text-ink-2">{b}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
