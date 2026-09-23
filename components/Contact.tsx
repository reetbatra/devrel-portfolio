const socialLinks = [
  { label: "GitHub ↗", href: "https://github.com/reetbatra" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/reet-batra/" },
  { label: "Twitter ↗", href: "https://x.com/reet_batra" },
  { label: "Blog ↗", href: "https://reet.hashnode.dev/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-ink bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 md:py-20">
        <div className="grid gap-x-6 gap-y-3 border-b border-paper/25 pb-6 md:grid-cols-[130px_1fr]">
          <div className="t-label pt-1.5 text-acid">07 / Contact</div>
          <div>
            <div className="t-label mb-5 flex items-center gap-2.5 text-paper/55">
              <span className="h-[7px] w-[7px] bg-acid" aria-hidden />
              Currently looking
            </div>
            <h2 className="t-head max-w-[14ch] text-[clamp(32px,4.6vw,62px)]">
              Got developers who can&apos;t get started?
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-[1.62] text-paper/70">
              Looking for DevRel and developer experience roles. AI tooling
              first, Web3 second.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:reetbatra25@gmail.com"
            className="t-label flex min-h-14 w-fit items-center border border-acid bg-acid px-7 text-ink transition-colors duration-150 hover:bg-transparent hover:text-acid"
          >
            reetbatra25@gmail.com
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-paper/55 transition-colors duration-150 hover:text-acid"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
