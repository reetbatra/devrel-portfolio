export default function Blog() {
  return (
    <section
      id="blog"
      className="mt-16 border-y border-ink bg-paper-2 md:mt-20"
    >
      <div className="mx-auto grid max-w-[1240px] items-end gap-x-12 gap-y-8 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-20">
        <div>
          <div className="t-label mb-5 text-blue">06 / Blog</div>
          <h2 className="t-head max-w-[14ch] text-[clamp(30px,3.6vw,50px)]">
            I write it down.
          </h2>
        </div>

        <div>
          <p className="max-w-[46ch] text-[15.5px] leading-[1.62] text-muted">
            Cairo, ZK, AI agents, the DevRel work. Notes I kept for myself
            that turned into twenty-one posts.
          </p>
          <a
            href="https://reet.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="t-label mt-7 flex min-h-12 w-fit items-center border border-ink bg-ink px-6 text-paper transition-colors duration-150 hover:bg-blue"
          >
            Read on Hashnode ↗
          </a>
        </div>
      </div>
    </section>
  );
}
