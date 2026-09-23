import SectionHead from "./SectionHead";

const categories = [
  {
    title: "DevRel",
    skills: [
      "Developer Advocacy",
      "Technical Writing",
      "Community Building",
      "Workshop Design",
      "Onboarding",
      "Hackathons",
      "Developer Programs",
    ],
  },
  {
    title: "AI & LLMs",
    skills: [
      "Claude API",
      "Vercel AI SDK",
      "Python",
      "LLMs",
      "AI Agents",
      "FastAPI",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead index="02" label="Skills" title="What I&apos;m good at." />

      <div className="grid border-b border-ink md:grid-cols-2">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`border-b border-rule py-8 md:border-b-0 ${
              i > 0 ? "md:border-l md:border-rule md:pl-9" : "md:pr-9"
            }`}
          >
            <h3 className="t-head text-[22px]">{cat.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="t-label border border-rule px-2.5 py-1.5 text-[10px] text-ink-2 transition-colors duration-150 hover:bg-acid"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
