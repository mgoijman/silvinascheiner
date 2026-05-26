# Silvina Scheiner — Website Project

## What this is
Personal website for **Silvina Scheiner**, an Argentine writer, journalist, and creative writing teacher. The site has two main offerings:
1. **Her book** — *Distancias del corazón* (a memoir about a mother, a daughter, and 14,000 km of distance)
2. **Writing workshops** — community, guided prompts, group talleres, and 1:1 accompaniment

---

## Project location
```
/Users/maiagoijman/Desktop/Claude folder/Distancias del Coraazon/silvina-site
```

## Tech stack
- **Next.js 14** — App Router (`app/` directory)
- **TypeScript**
- **Tailwind CSS** + inline styles (design system uses CSS custom properties)
- **next/font/google** for font loading
- **Git** on `main` branch (7 commits ahead of origin)

---

## Design system

### Palette (globals.css)
| Token | Value |
|---|---|
| `--cream` | `#fdf6e3` (page background) |
| `--ink` | `#2b2826` (text, borders) |
| `--orange` | `#e87737` (primary CTA) |
| `--orange-dark` | `#c85c24` (hover, script accent) |
| `--yellow` | `#f5c52b` (secondary, active nav) |
| `--green` / `--green-soft` | `#8fa878` / `#d8e4c9` |
| `--body` | `#4a4541` |
| `--muted-ink` | `#8b8178` |

### Fonts
| Variable | Font | Use |
|---|---|---|
| `--font-display` | **Archivo** (700/800/900) | H1, H2, section headers |
| `--font-body` | **Inter** (400/600/700) | Body text, buttons, nav |
| `--font-script` | **Dancing Script** (400/700) | Subheadings, accent words, sticker blobs |

### Typography rules (matched to reference site)
- **H1**: Inter 700, `clamp(36px, 4vw, 48px)`, `lineHeight: 1.05`
- **H2**: Archivo 400, `letterSpacing: "-0.24px"`, `lineHeight: 1.1`
- **Script subheading**: Dancing Script 700, italic, same clamp as H1, `color: var(--orange-dark)`
- **Buttons** (`.btn-primary/secondary/dark/cream`): Inter 700, 14px, pill, `border: none`, `padding: 14px 28px`
- **SectionLabel eyebrows**: Archivo 400, 14px, `borderRadius: 0` (square), normal case, 2px ink border

### Key components
| Component | Location | Notes |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Sticky, mobile hamburger drawer |
| `SectionLabel` | `components/SectionLabel.tsx` | Square eyebrow chips (yellow/orange/green) |
| `StickerBlob` | `components/StickerBlob.tsx` | Organic polygon blobs with script text |
| `HeroImageFrame` | `components/HeroImageFrame.tsx` | Polaroid-style image frame |
| `WaveDivider` | `components/WaveDivider.tsx` | Orange squiggle divider |
| `Footer` | `components/Footer.tsx` | 3-col footer |
| `WhatsAppFAB` | `components/WhatsAppFAB.tsx` | Fixed WhatsApp button |

---

## Pages

### `/` — Home (`app/page.tsx`)
Hero with book + workshops split, about section, testimonials, CTA.

### `/leer` — Quiero leer (`app/leer/page.tsx`)
`"use client"` (has form state). 7 sections:
1. Hero — book cover, download cap1 + buy CTAs
2. Dark hook (ink bg) — emotional pull quote
3. Primer paso — 2-col: image + orange email capture form (`cap1Form` state)
4. ¿De qué se trata? — theme tags + description
5. Comprar el libro — 4-card grid (WhatsApp + 3 format cards)
6. Hijos Golondrina — 2-col: info + green form (`hijosForm` state)
7. Cross-sell CTA → `/aprender-a-escribir`

### `/aprender-a-escribir` — Quiero aprender a escribir (`app/aprender-a-escribir/page.tsx`)
6 sections: Hero, Dos formas (Sola/Acompañada), Escribir Sola services, Escribir Acompañada services, Voces (testimonials), Orientación form.

**Hero H1 treatment** (important — took several iterations):
```tsx
// H1 and script subheading are wrapped in gap:0 div — no space between them
<div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
  <h1 style={{ fontFamily: "var(--font-body), 'Inter'", fontWeight: 700, fontSize: "clamp(36px,4vw,48px)" }}>
    ¿Tenés algo que querés escribir y no sabés{" "}
    <span style={{ background: "var(--orange)", color: "var(--cream)", padding: "0 6px",
      display: "inline", borderRadius: 0,
      WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>
      por dónde empezar?
    </span>
  </h1>
  <span style={{ fontFamily: "var(--font-script)", fontStyle: "italic", fontWeight: 700,
    fontSize: "clamp(36px,4vw,48px)", color: "var(--orange-dark)", lineHeight: 1.1, display: "block" }}>
    Lo entiendo mejor de lo que pensás.
  </span>
</div>
```

### `/sobre` — Quiero conocer a Silvina (`app/sobre/page.tsx`)
Bio, media mentions, contact.

### `/empezar` — Empezá hoy (`app/empezar/page.tsx`)
Landing page with two-card choice: Leer vs Escribir.

---

## Design reference
**`https://palabras-propias-web.lovable.app`** — this Lovable.app site is the visual reference. When in doubt about styles, inspect computed styles there.

---

## What's been done / decisions made
- ✅ Full page rewrites for `/leer` and `/aprender-a-escribir` to match reference
- ✅ SectionLabel: square corners, Archivo 400, normal case (NOT pill/uppercase)
- ✅ Buttons: Inter 700, no border, pill
- ✅ H1 on `/aprender-a-escribir`: Inter (not Archivo Black), orange block highlight on last phrase, Dancing Script italic subheading flush below
- ✅ Script font: **Dancing Script** (replaced Caveat → Quintessential → Dancing Script)
- ✅ H2 letterSpacing: -0.24px sitewide
- ✅ Nav labels: "Quiero leer", "Quiero aprender a escribir", "Quiero conocer a Silvina"

## Things still to do / potential next steps
- Connect real WhatsApp number (currently placeholder `5491100000000`)
- Connect forms to actual email service (currently UI only, no backend)
- Add real photos to `/sobre` page
- SEO: og:image, sitemap
- Push to production / deploy
