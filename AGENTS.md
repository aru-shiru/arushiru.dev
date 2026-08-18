# AGENTS.md

## Cursor Cloud specific instructions

This repository is a personal portfolio website built with [Astro](https://astro.build) v6 and Tailwind CSS v4 (via `@tailwindcss/vite`). It is a fully static site — there is no backend, database, or auth. The single service is the Astro dev server.

### Running

- Dev server: `npm run dev` — serves at `http://localhost:4321/`. Prefer running it in a persistent (tmux) terminal so it stays up and shows hot-reload logs.
- Production build: `npm run build` — outputs static files to `./dist/`. This step also generates Astro types under `.astro/`.
- Preview a build: `npm run preview`.

### Lint / test

- There is no configured lint or test tooling (no `lint`/`test` scripts, no ESLint config, and `@astrojs/check` is not a declared dependency). `npm run build` is the effective validation step since it type-generates and fails on build errors. Do not add `@astrojs/check`/type-check dependencies unless the task asks for it.

### Notes

- Requires Node `>=22.12.0` (see `engines` in `package.json`). The default cloud image Node (v22.x) satisfies this.
- Content lives in `src/components/*.astro` (Hero, About, Experience, Projects, Skills, Header, Footer) composed in `src/pages/index.astro` via `src/layouts/Layout.astro`.
- The site fetches Google Fonts at runtime via `<link>` tags; fonts may not load in restricted-egress environments, but this does not affect page rendering or layout functionality.
