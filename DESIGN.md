# Design Rationale

## Brief, in one sentence
An educational legal platform that should feel like a considered, well-run
chambers — calm, precise, and citation-literate — rather than a law-firm
marketing site.

## Color
| Token | Hex | Use |
|---|---|---|
| `ink` | `#12203A` | Headings, primary text, footer background |
| `slate` | `#445069` | Body text, secondary copy |
| `paper` | `#FAFAF8` | Page background (warm, not stark white) |
| `mist` | `#E7E9EE` | Borders, dividers, placeholder blocks |
| `cobalt` | `#2A4B8D` | Accent — links, active states, category labels |

Deliberately avoided: gradients, a black background with a neon accent,
and a warm-cream-plus-terracotta palette (all common AI-generated
defaults). Navy-on-warm-white reads as considered and legal without
tipping into "corporate law firm stock photo" navy-and-gold.

## Type
- **Display: Fraunces** — a serif with real character (high-contrast,
  slightly wonky ink traps) used only for headings, in a single medium
  weight. It signals permanence and craft without reaching for a
  generic "elegant serif."
- **Body: Inter** — neutral, highly legible at small sizes, disappears
  in service of long-form reading, which matters for an
  article-heavy site.
- **Utility: IBM Plex Mono** — used sparingly for the citation-mark
  device and metadata (category labels, dates). A monospace face
  echoes statute and case citation formatting ("§ 2", "1978 SCC 4"),
  which is where the idea for the signature element came from.

## Layout
Generous whitespace, a single 6xl (1152px) content column, and cards
with soft borders rather than heavy shadows. Deliberately not a dense
"broadsheet" newspaper grid — the brief explicitly asks for Apple /
Stripe / Linear-style spaciousness, and the content (explaining one
legal situation at a time) benefits from room to breathe rather than
column density.

## Signature element: the citation mark (`§`)
Legal writing constantly references its own structure — section 2,
clause 4(a), Article 21. Instead of generic `01 / 02 / 03` numbered
markers (which don't correspond to anything real here), small caps
labels are prefixed with `§` in the mono utility face wherever the
site labels a category, section, or step: "§ Property Law", "§ 1",
"§ FAQ". It's a small, consistent detail that ties the site's visual
language directly back to the subject matter, rather than decorating
it.

## Motion
Minimal and functional only: a smooth-scroll for in-page anchors
(disabled under `prefers-reduced-motion`), a subtle card lift on
hover, and simple expand/collapse for FAQ accordions and the mobile
menu. No page-load animation sequences or scroll-triggered reveals —
for a site whose job is to be read carefully, restraint was the
right call over a more "orchestrated" motion moment.
