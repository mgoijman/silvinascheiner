# Design Fixes — silvina-site
> Reference: https://palabras-propias-web.lovable.app/
> Local: http://localhost:63450/
> Verified by live DOM inspection of both sites on 2026-05-26.

Work inside `/Distancias del Coraazon/silvina-site/`. Run `npm run dev` to preview changes.

---

## FIX 1 — Font: Replace Dancing Script with Caveat
**File:** `app/layout.tsx`

The Tailwind config (`tailwind.config.ts`) already lists `Caveat` as the script font fallback, but `layout.tsx` imports `Dancing_Script` instead. These two fonts look very different — Caveat is raw and casual, Dancing Script is elegant and calligraphic. The reference uses Caveat.

**Change:**
```ts
// REMOVE this import
import { Archivo, Inter, Dancing_Script } from "next/font/google";

// ADD this import
import { Archivo, Inter, Caveat } from "next/font/google";
```

```ts
// REMOVE
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// ADD
const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});
```

```tsx
// In the <html> className, REMOVE dancingScript.variable, ADD caveat.variable
className={`${archivoBlack.variable} ${inter.variable} ${caveat.variable}`}
```

---

## FIX 2 — About Section: Change background from offwhite to ink (dark)
**File:** `app/page.tsx` — Section 5 (ABOUT SILVINA)

The reference "Sobre Silvina" section has a dark ink (`#2b2826`) background with cream text. The local has an offwhite background. This is the biggest single visual difference — the dark section creates a strong dramatic break mid-page.

**On the `<section>` element, change:**
```ts
// BEFORE
background: "var(--offwhite)",

// AFTER
background: "var(--ink)",
```

**Then update all text colors inside that section:**

The `SectionLabel` line — change color prop:
```tsx
// BEFORE
<SectionLabel text="Sobre Silvina" color="yellow" />

// AFTER — yellow reads well on dark
<SectionLabel text="Sobre Silvina" color="yellow" />
// (keep yellow — it works on ink)
```

The `¡Hola!` paragraph:
```tsx
// BEFORE
<p style={{ fontFamily: "var(--font-script)...", color: "var(--ink)", ... }}>
  ¡Hola!
</p>

// AFTER
<p style={{ fontFamily: "var(--font-script)...", color: "var(--yellow)", ... }}>
  ¡Hola!
</p>
```

The `<h2>` heading:
```tsx
// BEFORE
color: "var(--ink)",

// AFTER
color: "var(--cream)",
```

The `"encontrarte."` script span inside the h2:
```tsx
// BEFORE
color: "var(--yellow-dark)",

// AFTER
color: "var(--yellow)",
```

Both `<p>` body text paragraphs:
```tsx
// BEFORE
color: "var(--body)",

// AFTER
color: "rgba(253, 246, 227, 0.85)",
```

The CTA button:
```tsx
// BEFORE
<Link href="/sobre" className="btn-primary">

// AFTER — cream button reads better on dark bg
<Link href="/sobre" className="btn-cream">
```

The photo frame (left column) — update border color to cream so it reads on dark:
```tsx
// BEFORE
border: "2px solid var(--ink)",

// AFTER
border: "2px solid var(--cream)",
```

---

## FIX 3 — About Section: Add "¡Hola!" as a StickerBlob
**File:** `app/page.tsx` — Section 5, right text column

The reference shows "¡Hola!" as a positioned sticker blob (not just italic text). Add it as a positioned blob on the section wrapper or the text column. Replace the `<p>¡Hola!</p>` with:

```tsx
// REMOVE
<p
  style={{
    fontFamily: "var(--font-script), 'Dancing Script', cursive",
    fontStyle: "italic",
    fontSize: 28,
    color: "var(--ink)",
    margin: 0,
  }}
>
  ¡Hola!
</p>

// ADD — absolute-positioned sticker on the section's inner wrapper div
// Wrap the about-grid div in a relative container and add:
<div style={{ position: "absolute", top: -20, right: 32, zIndex: 10 }}>
  <StickerBlob text="¡Hola!" color="yellow" rotate={12} size={100} />
</div>
```

Make sure the section has `position: "relative"` and `overflow: "visible"` so the blob is not clipped.

---

## FIX 4 — Yellow Banner: Add top border
**File:** `app/page.tsx` — Section 2 (QUOTE BANNER)

The reference yellow section has borders on BOTH top and bottom (`border-y-2` in Tailwind). The local only has a bottom border.

**On the Section 2 `<section>` element, add:**
```ts
// BEFORE
borderBottom: "2px solid var(--ink)",

// AFTER
borderTop: "2px solid var(--ink)",
borderBottom: "2px solid var(--ink)",
```

---

## FIX 5 — Hero Section: Remove explicit background, add overflow hidden
**File:** `app/page.tsx` — Section 1 (HERO)

The reference hero has `class="relative overflow-hidden"` and no explicit background (it inherits cream from `<body>`). The local sets `background: "var(--cream)"` explicitly, which is not wrong visually but closes off the possibility of decorative bleeds or future background elements at the edges.

**On the Section 1 `<section>` element:**
```ts
// BEFORE
background: "var(--cream)",

// AFTER — remove it entirely, or leave as-is if you want to keep it explicit
// Also ensure these are present:
position: "relative",
overflow: "hidden",
```

---

## FIX 6 — Script font references: Update fallback string throughout
**File:** `app/page.tsx` and all other page files

After switching to Caveat in `layout.tsx`, update all inline style fallback strings throughout the codebase. Search for `'Dancing Script'` and replace with `'Caveat'`:

```
// In every file, replace:
fontFamily: "var(--font-script), 'Dancing Script', cursive",

// With:
fontFamily: "var(--font-script), 'Caveat', cursive",
```

Files likely affected:
- `app/page.tsx` (multiple occurrences)
- `app/leer/page.tsx`
- `app/aprender-a-escribir/page.tsx`
- `app/sobre/page.tsx`
- `app/empezar/page.tsx`
- `components/StickerBlob.tsx` (one occurrence)
- `app/globals.css` — also update the `.script` class fallback:
  ```css
  /* BEFORE */
  .script { font-family: var(--font-script), 'Dancing Script', cursive; }
  /* AFTER */
  .script { font-family: var(--font-script), 'Caveat', cursive; }
  ```

---

## Priority Order

| # | Fix | Visual impact | Effort |
|---|-----|---------------|--------|
| 1 | Font: Dancing Script → Caveat | High — affects all script text | 5 min |
| 6 | Update all font fallback strings | Required after Fix 1 | 5 min |
| 2 | About section: offwhite → ink bg | Very high — biggest visual gap | 10 min |
| 3 | About section: ¡Hola! sticker blob | Medium | 5 min |
| 4 | Yellow banner: add top border | Low-medium | 1 min |
| 5 | Hero: overflow hidden + remove explicit bg | Low | 2 min |

Do Fix 1 + Fix 6 together first (one grep-and-replace pass), then Fix 2 + Fix 3 together (same section), then 4 and 5.

---

## What does NOT need fixing

- Color palette — all CSS variables (`--ink`, `--yellow`, `--cream`, `--orange`, `--green`, etc.) are correctly defined in `globals.css` and match the reference exactly.
- Sticker blob component — `StickerBlob.tsx` is correctly implemented with clip-path shapes, color map, and rotation. It is already used correctly in the hero, dos caminos cards, and CTA section.
- Section structure and order — matches the reference (hero → yellow banner → press logos → dos caminos → about → testimonials → CTA dark).
- Press logos — 5 logos present, same outlets.
- Footer — correct content and structure.
- Navbar — correct links and structure.
- Buttons — all four variants (primary, secondary, dark, cream) are correctly defined.
- Tailwind config — correctly defines all colors, font families, and radius tokens.
