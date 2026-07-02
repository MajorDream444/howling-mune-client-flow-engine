# Design Philosophy & Pathway Blueprint: Howling MUNE

This document maps the architectural, aesthetic, and behavioral specifications of **Howling MUNE**, a luxury creator-healer brand based in Bali.

---

## 1. Core Visual Strategy

The design has been constructed to feel like a **sacred digital threshold** rather than a transactional marketing funnel. It is engineered with high-contrast, deeply spacious visual hierarchy that communicates emotional intelligence, sensory luxury, and quiet authority.

### Color Palette (Lunar Slate & Amber)
- **Deep Slate/Charcoal** (`#050706` / `#090c0b`): Grounding background surfaces representing cosmic shadows and unpolished truths.
- **Amber & Bali Gold** (`#c5a059` / `#d4af37`): The warm light leak signals representing active awareness, hope, and somatic discovery.
- **Forest Green/Moss** (`#0e1512` / `#17241e`): Rich, structural undertones inspired by Bali's dense rainforest canopies, cooling the visual temperature.
- **Rose-Gold Accent** (`#d69f8c`): Representing soft human vulnerability and emotional clearing.
- **Ivory Cream** (`#faf7f2`): Crisp typography representing clarity and breathing space.

### Typography
- **Display Headings**: *Cormorant Garamond* (luxury, sophisticated editorial serif).
- **Body & Controls**: *Inter* (highly legible, professional, neutral modern sans-serif).
- **Sub-headers & Accents**: *JetBrains Mono* (highly accurate, clean, structured, non-commercial vibe).

### Imagery & Textures
- **Hero Backdrop**: A custom cinematic image featuring dark slate texture, subtle water reflections, and warm golden light leaks (`lunar_ambient_bg`).
- **Tactile Surfaces**: Sophisticated *Glassmorphism* cards (`backdrop-filter`, thin semi-transparent gold borders, and floating glow layers) representing a premium Bali sanctuary.

---

## 2. Structural Rhythm (The Stepper Pathway)

Each section is designed to lead seamlessly into the next, establishing a narrative flow that maps to the user’s nervous system readiness:

1. **Arrive (Threshold)**: Takes the visitor out of their daily chatter. Includes a subtle, slow breathing prompt and water ambient wave visuals to help the nervous system land.
2. **Reflect (Somatic Inquiry)**: An interactive 3-step diagnostic evaluator that prompts the client to identify their current emotional blocks (mind vs. voice vs. heart).
3. **Route (Your Ritual Map)**: Dynamically maps the client to one of Z’s three custom-configured intensives (**The Grounded Presence**, **The Sovereign Identity**, **The Sacred Unveiling**).
4. **Book (Sacred Inquiry)**: A premium pre-assessment application that collects their somatic intentions confidentially. This is stored securely in the local state.
5. **Follow (The Integration Map)**: Explicitly details "the pathway around the medicine" so the client understands the somatic mapping, Bali retreat sequence, and 60-day integration plan.
6. **Review (Client Letters)**: Polished, editorial testimonial cards presented like poetry rather than generic commercial reviews.

---

## 3. Tech Stack & Architecture

- **Framework**: React 19 + Vite (built to match your container architecture seamlessly)
- **Styling**: Tailwind CSS v4 featuring native CSS `@theme` variables.
- **Animation**: `motion` (Framer Motion v12) for fluid interactive stepper transitions and staggered fade-ins.
- **Icons**: `lucide-react` for clean, light vector icons.
- **Data Caching**: Client bookings and reflections are cached inside `localStorage` for visual receipt persistence.

---

## 4. Setup & Deployment Guidelines

All dependencies are successfully configured in `package.json`.

```bash
# 1. Install all dependencies from package.json
npm install

# 2. Run local dev server (defaulting to Port 3000)
npm run dev

# 3. Compile and build production-ready assets
npm run build
```
