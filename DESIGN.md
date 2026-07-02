# Howling MUNE Landing Page Design Doctrine

## Project Signal

Howling MUNE is not a generic wellness funnel. It is a creator-healer front door for embodiment, self-relationship, emotional repair, photography, visual identity, and quiet transformation.

The page must feel like a threshold, not a sales page.

Core line:

> Giving you back to you.

Core business diagnosis:

> The medicine exists. The pathway around the medicine does not.

The landing page exists to create that pathway.

---

## Reference Sources

### Opero Reference

The Opero reference uses a dark tactile interface with glass surfaces, inset cards, ambient WebGL, mesh texture, compact typography, sticky hero rhythm, modular feature cards, pipeline motion, and clear CTA repetition.

Use for tactile-glass surfaces, operational module cards, pathway visualization, dark premium system feeling, restrained motion, and fixed navigation behavior.

Do not copy the Portuguese copy, SaaS infrastructure positioning, hard performance claims, or aggressive conversion language.

### Singularity Reference

The Singularity reference uses a cosmic ambient background, amber focal glow, masked text reveal, sparse premium hero composition, metric strip, and cinematic depth.

Use for first-screen atmosphere, amber/gold cosmic warmth, subtle sacred-tech feeling, premium minimal typography, and staggered motion.

Do not copy the sci-fi computation language, exascale metrics, or overly technical terms.

### UI UX Pro Max Skill

The UI UX Pro Max skill frames the work as a design-system generation process: choose pattern, style, colors, typography, effects, anti-patterns, and delivery checklist before building.

Use for explicit design system logic, accessibility checks, responsive review, SVG icons instead of emoji icons, smooth hover states, and reduced-motion awareness.

---

## Recommended Design Pattern

Pattern: Hero-Centric + Pathway / Intake Conversion

Sections:

1. Hero threshold
2. The work / positioning
3. Client pathway modules
4. Flow visualization
5. Begin / CTA
6. Later: testimonials, session pathways, FAQ, application form

Primary conversion action: Begin / Apply / Start the client flow

Secondary action: Read the pathway / Explore the work

---

## Visual Direction

Mood: quiet, lunar, embodied, premium, grounded, cinematic, systemized, human.

Avoid: generic wellness templates, AI purple gradient SaaS style, heavy mystical cliches, hard-sell funnel language, exaggerated promises, fake testimonials, or fake metrics.

---

## Color System

- Void: `#020206`
- Deep Night: `#09090B`
- Charcoal Surface: `#18181B`
- Warm Bone: `#F4EFE5`
- Muted Stone: `#A1A1AA`
- MUNE Gold: `#F59E0B`
- Soft Amber: `#FBBF24`
- Forest Undercurrent: `#224D3F`
- Deep Emerald Shadow: `#0B2A21`

Usage: background stays dark; amber is a signal, not a flood; forest green grounds the emotional layer; text must maintain strong contrast.

---

## Typography

Primary font: Inter

Mono font: JetBrains Mono

Use typography as silence: large light display type, small uppercase mono labels, generous line-height, fewer words per section.

---

## Component Language

### Hero

Full-screen threshold, one central image or ambient object, moon/gold circular form, short line of copy, large emotional phrase, sparse nav.

### Cards

Tactile dark surfaces, subtle border, nested icon circle, hover lift only, no loud gradients.

### Pipeline

Simple sequence: Arrive → Reflect → Route → Book → Follow → Review.

Use dots, rings, light beam, or quiet progress line.

### Buttons

Primary: warm gold / amber.

Secondary: dark glass.

Rounded pill or soft radius. Visible focus state.

---

## Content Rules

Speak to the serious seeker, not the bargain shopper.

Good language: return to yourself, client pathway, embodied clarity, visual rebirth, self-relationship, readiness, the right doorway, held not chased, the business can breathe.

Avoid language: guaranteed outcomes, instant results, spiritual hacks, viral funnel, or passive-income promises.

---

## Implementation Defaults

Framework: Next.js, TypeScript, Tailwind CSS, shadcn-compatible structure.

Default component path: `/components/ui`

Why this matters: shadcn/ui expects reusable primitives and custom UI components to live in `/components/ui` unless aliases are customized. Keeping this default makes future CLI additions, Codex work, and component sharing predictable.

Required paths:

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  ui/
    minimalist-hero.tsx
lib/
  utils.ts
DESIGN.md
reference/howling-mune-reference.html
```

Required packages:

```bash
npm install lucide-react framer-motion clsx tailwind-merge
```

If starting from zero:

```bash
npx create-next-app@latest howling-mune-client-flow-engine --typescript --tailwind --eslint --app --src-dir=false
cd howling-mune-client-flow-engine
npx shadcn@latest init
npm install lucide-react framer-motion
```

---

## Pre-Delivery Checklist

- [ ] No emoji icons as primary UI icons; use Lucide/SVG.
- [ ] `/components/ui` exists.
- [ ] `@/lib/utils` exists with `cn()`.
- [ ] Text contrast is readable on dark surfaces.
- [ ] Buttons have hover and focus states.
- [ ] Animations are smooth and restrained.
- [ ] Page works at 375px, 768px, 1024px, 1440px.
- [ ] No fake metrics or unsupported claims.
- [ ] CTA language feels human and premium.
- [ ] Visual direction still feels like Theo / Howling MUNE, not generic SaaS.
