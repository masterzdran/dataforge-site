# DataForge Website

Official product website, documentation portal, and GitHub showcase for [DataForge](https://github.com/dataforge-net/dataforge) — an enterprise-grade synthetic test data generation library for .NET.

## Stack

- Next.js 16 (App Router, static export — `output: "export"`)
- React 19 + TypeScript (strict)
- Material UI v9 (custom dark theme) + MUI Icons
- Framer Motion

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static output in out/
npm run lint
npm run format
```

Deploy the `out/` folder to GitHub Pages, Azure Static Web Apps, Vercel, or any static host.

## Structure

```text
src/
├── components/   # reusable UI (navbar, cards, code showcase, docs layout)
├── features/     # page-level compositions (home sections, about, docs landing)
├── data/         # countries, features, code examples, docs content
├── theme/        # MUI dark theme + registry
├── utils/        # site constants, syntax highlighting
└── types/        # shared TypeScript types
```

## Configuration

Update `src/utils/site.ts` before launch:

- `SITE_URL` — production domain (also referenced in `public/robots.txt` and `public/sitemap.xml`)
- `GITHUB_URL` — repository URL
