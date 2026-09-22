import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/reetbatra" },
  { label: "Twitter", href: "https://x.com/reet_batra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
];

const spec: [string, string][] = [
  ["Role", "DevRel Engineer"],
  ["Reached", "4,800+ developers"],
  ["Experience", "4+ yrs DevRel"],
  ["Workshops", "20+ offline"],
  ["Based", "Bangalore, India"],
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-[1240px] border-b border-ink px-6 sm:px-8"
    >
      <div className="grid md:grid-cols-2">
        {/* LEFT: text */}
        <div className="py-12 md:border-r md:border-rule md:py-16 md:pr-10">
          <div className="t-label mb-8 flex items-center gap-2.5 text-muted">
            <span className="h-[7px] w-[7px] bg-blue" aria-hidden />
            DevRel Engineer · Web3 and AI
          </div>

          <h1 className="t-display text-[clamp(46px,6.6vw,88px)]">
            Reet
            <span className="t-display-sub mt-1 block text-muted">Batra.</span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-[16.5px] leading-[1.6] text-ink-2">
            4 years of DevRel in Web3 and AI. I help protocols get adopted and
            developers <span className="mark">get unstuck</span>.
          </p>

          <div className="mt-10 flex w-fit border border-ink">
            <a
              href="mailto:reetbatra25@gmail.com"
              className="t-label flex min-h-12 items-center bg-ink px-6 text-paper transition-colors duration-150 hover:bg-blue"
            >
              Hire me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="t-label flex min-h-12 items-center border-l border-ink px-6 transition-colors duration-150 hover:bg-acid"
            >
              Resume ↗
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-faint transition-colors duration-150 hover:text-blue"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: photo plate, then the spec sheet */}
        <div className="flex flex-col pb-12 md:py-16 md:pl-10">
          <figure className="border border-ink">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
              <Image
                src="/hero-photo.jpg"
                alt="Reet Batra giving a technical talk at ETH India"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-[72%_12%] contrast-[1.04] saturate-[0.92]"
              />
            </div>
            <figcaption className="t-label flex items-center justify-between gap-3 border-t border-ink px-3 py-2.5 text-muted">
              <span>Fig. 01 — ETH India, 2023</span>
              <span className="text-blue" aria-hidden>
                ■
              </span>
            </figcaption>
          </figure>

          <table className="mt-7 w-full border-collapse text-[12.5px]">
            <tbody>
              {spec.map(([k, v]) => (
                <tr key={k} className="border-b border-rule">
                  <th
                    scope="row"
                    className="t-label py-2.5 text-left font-normal text-muted"
                  >
                    {k}
                  </th>
                  <td className="py-2.5 text-right font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
