export default function Footer() {
  return (
    <footer className="border-t border-paper/20 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-7 sm:px-8">
        <span className="text-[15px] font-bold tracking-[-0.02em] [font-stretch:112%]">
          REET BATRA
        </span>
        <span className="t-label text-paper/40">
          DevRel · Web3 · AI
        </span>
        <a
          href="mailto:reetbatra25@gmail.com"
          className="t-label flex min-h-11 items-center text-paper/55 transition-colors duration-150 hover:text-acid"
        >
          reetbatra25@gmail.com
        </a>
      </div>
    </footer>
  );
}
