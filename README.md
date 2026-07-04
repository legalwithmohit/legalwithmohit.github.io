# Counsel — A Knowledge-First Website Starter for Legal Professionals

A static, education-first personal website starter built with **Astro +
Tailwind CSS + TypeScript**, designed for a lawyer or legal professional who
wants to teach before selling: publish plain-language legal explanations,
build credibility over time, and let inquiries follow naturally.

No backend, no database, no authentication — it's a fully static site
that deploys to GitHub Pages for free.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Before you launch

1. **Edit `src/site.config.ts`** — name, tagline, contact details, and all
   seven practice areas live here in one typed file.
2. **Update `astro.config.mjs`** — set `SITE_URL` and `BASE_PATH` to match
   your real GitHub Pages URL (see [Deployment](#deployment) below).
3. **Replace placeholder images** — the hero and About page have marked
   `<!-- EDIT ME -->` comments where a real photograph should go. Add
   images to `public/images/`.
4. **Add a real Open Graph image** — replace `public/og-default.png`
   (1200×630px) and delete the accompanying `.README.txt`.
5. **Self-host fonts for production** — `src/styles/global.css` currently
   loads Fraunces, Inter, and IBM Plex Mono from Google Fonts via
   `@import` for development convenience. For best performance and a
   fully self-contained static site, download the font files, place them
   in `public/fonts/`, and replace the `@import` with local `@font-face`
   rules.
6. **Connect the contact form** — `src/pages/contact.astro` includes a
   placeholder `<form>`. Since this is a static site, wire it to a form
   backend such as [Formspree](https://formspree.io), a Cloudflare
   Worker, or a similar serverless endpoint by setting the form's
   `action` and `method` attributes.

## Architecture

```
src/
  site.config.ts       ← single source of truth: name, nav, practice areas
  content/
    config.ts           ← content collection schema for articles
    articles/            ← Markdown articles (Legal Insights)
  lib/
    articles.ts          ← reading time, related-article logic, date formatting
  components/            ← reusable, presentation-only components
  layouts/
    BaseLayout.astro     ← <head>, header, footer, skip link — wraps every page
    ArticleLayout.astro  ← article-specific chrome: ToC, FAQ, related posts
  pages/
    index.astro
    about.astro
    practice-areas/
      index.astro
      [slug].astro        ← ONE template renders all 7 practice area pages
    legal-insights/
      index.astro          ← filterable article grid
      [slug].astro          ← renders each Markdown article
      rss.xml.ts             ← RSS feed, auto-generated from content collection
    resources/index.astro  ← placeholder, ready for real content
    contact.astro
    404.astro
```

### Why practice areas are data, not Markdown

Every practice area page follows an identical shape: Overview → Common
Situations → How I Can Help → FAQ → Related Articles → Contact CTA. Rather
than duplicating that structure across seven Markdown/Astro files, all
seven areas are entries in a typed array in `site.config.ts`, rendered by
a single `[slug].astro` template. Adding an eighth practice area means
appending one object — no new template, no risk of the pages drifting
out of sync with each other.

### Why articles are a content collection

Legal Insights articles vary in length and structure, so they're
authored as Markdown with frontmatter, validated by a Zod schema in
`src/content/config.ts`. This gives type-checked frontmatter, automatic
`getStaticPaths` generation, and a free `render()` API for headings
(used to build the on-page table of contents).

## Adding a new article

Create a new Markdown file in `src/content/articles/`:

```markdown
---
title: "Your Article Title"
description: "One or two sentences for SEO and the article card."
category: "Property Law"   # must match a practice area title exactly
publishDate: 2026-07-01
author: "Your Name"
faqs:
  - question: "A common question"
    answer: "A clear, direct answer."
---

Your article content in Markdown, using `##` for major sections —
these automatically populate the table of contents.
```

The article will automatically appear on the homepage (if recent), the
Legal Insights index, its category's practice area page, and the RSS
feed. No other file needs to change.

## SEO

- **Sitemap** — generated automatically at build time by
  `@astrojs/sitemap` (`/sitemap-index.xml`).
- **RSS feed** — `/legal-insights/rss.xml`, generated from the content
  collection.
- **robots.txt** — in `public/`, update the sitemap URL if you change
  `SITE_URL`.
- **Structured data (schema.org)** — `Attorney` on the homepage,
  `Service` on each practice area, `Article` + `FAQPage` on each
  article, and `BreadcrumbList` site-wide via the `Breadcrumbs`
  component.
- **Open Graph & Twitter cards** — handled by `src/components/SEO.astro`,
  included on every page through `BaseLayout`.
- **Canonical URLs** — set automatically from `Astro.site` + the current
  path.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) throughout.
- A "skip to content" link is the first focusable element on every page.
- Visible focus rings on all interactive elements (see `global.css`).
- `prefers-reduced-motion` is respected globally.
- FAQ accordions and the mobile menu use `aria-expanded` /
  `aria-controls` and are fully keyboard-operable.

## Deployment (GitHub Pages)

This repo includes `.github/workflows/deploy.yml`, which builds the
site and deploys it via GitHub's official Pages Actions on every push
to `main`.

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to "GitHub Actions".
3. In `astro.config.mjs`, set:
   - `SITE_URL` to `https://<your-username>.github.io/<repo-name>`
   - `BASE_PATH` to `/<repo-name>` (or `/` if this is a
     `<username>.github.io` user/org site)
4. Push to `main` — the workflow builds and deploys automatically.

## Designed for growth

The architecture intentionally leaves room for future features without
requiring a rebuild:

| Feature | How this architecture supports it |
|---|---|
| AI-powered search across articles | Articles are already structured content collection entries — index them client-side (e.g. Pagefind) or via an API without changing content structure. |
| RAG-based AI assistant | Markdown articles are the natural corpus; add a build step that exports them to a vector store. |
| Newsletter | Add a form + third-party provider (e.g. Buttondown) to the existing `ContactCTA` pattern. |
| Appointment booking | Swap the static contact form for an embedded scheduling widget (e.g. Cal.com) without touching layout. |
| Multilingual support | Astro's built-in i18n routing can layer on top of the current `pages/` structure. |
| Legal glossary | Add a new content collection (`src/content/glossary/`) following the same pattern as `articles/`. |
| Case study library | Same pattern as Legal Insights — a second content collection and index page. |
| CMS integration | Decap CMS reads/writes Markdown files directly — point it at `src/content/articles/` with a config matching the existing frontmatter schema. |

None of these require restructuring existing pages, components, or the
content schema — they're additive.

## Performance notes

- Zero client-side JavaScript frameworks — Astro ships components as
  static HTML by default; the small inline `<script>` tags (mobile
  menu, FAQ accordion, article filter) are the only JS shipped, and only
  on the pages that need them.
- Images should be added via `public/images/` and referenced with
  explicit `width`/`height` (or Astro's built-in `<Image />` component,
  which can be adopted later for automatic optimization).
- Fonts should be self-hosted before launch (see step 5 above) to avoid
  a render-blocking third-party request.
