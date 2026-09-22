# What this project is
DevRel portfolio site — single-page Next.js 16 (App Router) + TypeScript, no extra deps. Everything here is user-facing job-search copy: positioning and humanizer rules apply to every visible string.

# Design system: Grid & Mono
Shared with `reetbatra-home` (reetbatra.com) and `fde-portfolio` (fde.reetbatra.com). All three must stay in sync. Chosen 2026-09-23 to replace the cream/terracotta/DM-Serif skin, which read as AI-generated default. Exploration and rejected directions: `~/.gstack/projects/Career/designs/portfolio-identity-20260923/`.

Tokens live in `app/globals.css` under `@theme`:
paper #F2F2EE · paper-2 #E9E9E3 · ink #111113 · ink-2 #33332F · muted #65655F · faint #8A8A83 · rule #CFCFC7 · blue #1B34F5 · acid #DDF247.
Type: Archivo (variable, `wdth` axis required) + JetBrains Mono.

Non-negotiable rules:
- Square corners only. No `rounded-*` anywhere.
- No box shadows. Depth comes from 1px rules, not blur.
- No warm/cream backgrounds, no terracotta or orange accents.
- Labels use `.t-label`; headlines use `.t-display` / `.t-display-sub` / `.t-head`, which set the Archivo width axis. The width axis is the signature, do not swap it for plain font-weight.
- Sections are numbered (`01 / EXPERIENCE`) and separated by full-bleed hairlines.
- Prefer tables and bordered grids over floating cards.
- `.mark` puts the acid highlight behind a phrase. Roughly once per page.
- Components use Tailwind classes, not inline style objects. The old inline-style approach is gone; do not reintroduce it.

# Commands
- `npm run dev` / `npm run lint` / `npm run build`

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes- APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
