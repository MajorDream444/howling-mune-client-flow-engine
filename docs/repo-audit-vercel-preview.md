# Repo Audit — Living MUNE Vercel Preview

Branch: `cleanup/living-mune-vercel-preview`

## Current Diagnosis

The repository had two design directions competing with each other:

1. The earlier Next.js / shadcn-compatible scaffold.
2. The newer Google AI Studio / Vite MVP direction with the stronger lunar, glass, editorial, living-site feel.

The active production route was still `app/page.tsx`, and it was using the older `MinimalistHero` component. That page was structurally clean but visually too static for the Howling MUNE experience.

## Cleanup Decision

The canonical deployment path should remain:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel

The Google AI Studio MVP should be treated as a design prototype, not the canonical production structure.

## Files Updated

- `app/page.tsx`
  - Replaced the static landing page with a living moon preview.
  - Added scroll-aware lunar drift, breathing moon movement, fog, reflection, sanctuary cards, client pathway, and Visual Vault section.

- `app/globals.css`
  - Updated typography to include Cormorant Garamond, Inter, and JetBrains Mono.
  - Added lunar slate / amber / forest design tokens.
  - Added reusable classes for glass, sanctuary cards, fog, water reflection, and gold dividers.

## Files Removed

- `components/ui/minimalist-hero.tsx`
  - Removed from this branch because the new living preview does not use it and it represented the older static direction.

## What Still Needs Review

- Confirm the page builds on Vercel.
- Review mobile behavior.
- Replace placeholder emails with Theo's real preferred contact path.
- Add real assets once Theo approves the direction.
- Decide whether the Visual Vault is Phase 1 preview only or Phase 2 scoped deliverable.
- Add a copy intake document so Theo can provide final language before deployment.

## Vercel Deployment Notes

Recommended Vercel settings:

- Framework Preset: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: leave blank / default
- Node Version: 20.x or latest supported stable

Recommended preview flow:

1. Push this branch.
2. Connect GitHub repo to Vercel.
3. Deploy branch preview.
4. Share preview URL with Theo.
5. Collect feedback.
6. Merge to `main` only after approval.

## Strategic Note

This branch is intentionally more atmospheric. The moon should become the living emotional anchor of the site. The goal is not motion for decoration, but a slow sanctuary experience that feels alive before the visitor ever submits an inquiry.
