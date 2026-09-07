@AGENTS.md

# VizagFinServ — Project Guide

## Commit Convention

End every commit message with:
```
Committed from mobile session
```
Do **not** include `Co-Authored-By` or `Claude-Session` lines.


**VizagFinServ** is the personal website of Sasanapuri Sreekar, an AMFI-Registered Mutual Fund Distributor (ARN 138117, EUIN E233588) based in Visakhapatnam, Andhra Pradesh. The site is a marketing/information site — no backend, no auth, no database.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (theme tokens in `globals.css`) |
| Animation | Framer Motion 13 |
| Language | TypeScript |
| Fonts | Inter (body) · Playfair Display (headings) via `next/font/google` |

Dev: `npm run dev` · Build: `npm run build`

---

## Design System

All design tokens live in `src/app/globals.css` under `@theme inline`. Do not hardcode colors.

**Brand palette** (navy blues):
- `brand-950` `#0A1E36` — darkest background
- `brand-900` `#0F2A4A` — primary dark (also `theme-color`)
- `brand-600` `#2563A0` — primary interactive
- `brand-50`  `#EEF4FB` — light tinted background

**Accent**: `gold-400` `#D4A537` / `gold-500` `#B8860B`

**Fonts** (CSS variables set in layout):
- `--font-heading` → Playfair Display (serif) — headings only
- `--font-body`    → Inter (sans) — everything else

**Utility classes** (defined in `globals.css`, not components):
- `container-narrow` — max-width centered container
- `section-padding`  — consistent vertical padding per section

---

## Key Files

```
src/
├── app/
│   ├── layout.tsx          ← Root layout: fonts, Header, Footer, JSON-LD schema
│   ├── globals.css         ← ALL design tokens + utility classes
│   ├── page.tsx            ← Home page (assembles 10 sections)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── our-approach/page.tsx
│   ├── contact/page.tsx
│   ├── resources/page.tsx
│   └── calculators/
│       ├── page.tsx        ← Calculator hub
│       ├── sip-calculator/page.tsx
│       ├── emi-calculator/page.tsx
│       ├── swp-calculator/page.tsx
│       ├── inflation-calculator/page.tsx
│       ├── retirement-calculator/page.tsx
│       └── step-up-calculator/page.tsx
├── components/
│   ├── Header.tsx          ← Fixed nav, scroll-aware blur, mobile menu
│   ├── Footer.tsx
│   ├── PlaceholderPage.tsx ← Used by stub pages not yet built out
│   ├── sections/           ← One component per home-page section
│   ├── calculators/        ← One component per calculator
│   └── ui/                 ← Primitives: Button, Icons, SectionHeading,
│                              SectionWrapper, PrincipleCard, ProcessStep
└── lib/
    └── constants.ts        ← ALL site data (nav, contact, stats, AMCs,
                               services, principles, differentiators, disclaimers)
```

---

## Data & Content

**Everything lives in `src/lib/constants.ts`** — edit content there, not inside components.

Key exports:
- `NAV_ITEMS` — navigation links
- `CONTACT` — phone, email, ARN, EUIN, location
- `STATS` — ₹140+ Cr AUD, 100+ families, ₹30L+ monthly SIP book, since 2017
- `AMC_PARTNERS` — 24 fund houses
- `PRIMARY_SERVICES`, `SUPPORTING_SERVICES`, `ADDITIONAL_SERVICES`
- `PRINCIPLES` — 4 investing principles
- `DIFFERENTIATORS` — 6 why-us points
- `PROCESS_STEPS` — 4-step process (Understand → Identify → Invest → Review)
- `DISCLAIMERS` — regulatory disclaimer text (do not paraphrase these)

---

## Component Patterns

**Adding a new section:**
1. Create `src/components/sections/YourSection.tsx`
2. Wrap content in `<SectionWrapper background="white|light|brand|dark">`
3. Use `<SectionHeading eyebrow="..." title="..." subtitle="..." align="center|left" />`
4. Mark `'use client'` at top — Framer Motion requires it
5. Import and add to `src/app/page.tsx` (or relevant page)

**SectionWrapper backgrounds:**
- `white` — pure white
- `light` — `bg-neutral-50` (off-white)
- `brand` — `bg-brand-50` (light blue tint)
- `dark` — `bg-brand-950 text-white`

**Button variants** (see `src/components/ui/Button.tsx`):
- `primary` — filled brand blue
- `secondary` — outlined
- `ghost` — text only

**Icons** are defined as named exports in `src/components/ui/Icons.tsx`. Add new icons there rather than importing from a library.

---

## Calculators

Each calculator is a `'use client'` component under `src/components/calculators/`. They are self-contained (local state only, no API calls). The page route just renders the component.

Calculators: SIP · EMI · SWP · Inflation · Retirement · Step-Up SIP

---

## Regulatory Notes

- VizagFinServ is an **MFD (distributor), not a SEBI-registered advisor** — do not describe services as "advisory"
- Always include `DISCLAIMERS.riskWarning` near investment content
- ARN: **138117** · EUIN: **E233588** — these must be accurate in any new pages
- Regular-plan commission disclosure is required (`DISCLAIMERS.regularPlan`)

---

## Public Assets

```
public/
├── images/          ← hero-bg.webp, hero-portrait.webp, about-portrait.webp, philosophy.webp
├── logos/           ← 20 AMC logo files (JPG/PNG/SVG)
├── images/amc-logos/← 18 AMC logos (optimised subset, used in AssociateWith section)
└── docs/
    └── codebase-graph.html  ← interactive structure graph
```

Images are `.webp` for performance. Add new images as `.webp` when possible.

---

## Animation Conventions

- Framer Motion `whileInView` with `viewport={{ once: true }}` — animations fire once on scroll, not repeatedly
- `SectionWrapper` already applies a default fade-up on every section — don't double-animate the wrapper
- `SectionHeading` has its own built-in entrance animation

---

## Contact Details (for use in copy)

- Phone: +91 90878 59350
- Email: funds844@gmail.com
- Location: Visakhapatnam, Andhra Pradesh
- Site: https://vizagfinserv.com
