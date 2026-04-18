
## Premium Trading Company Landing Page (JavaScript / JSX)

Same scope as the approved plan, rebuilt with **plain JavaScript (.jsx)** instead of TypeScript. Navy + gold corporate one-pager inspired by lathyrustrading.com, using React + Tailwind + Framer Motion.

### Language note
The project is scaffolded as TypeScript (Vite + tsconfig + existing `.tsx` shadcn components). I will not rip out the TS toolchain — that would break every shadcn UI component. Instead:
- All **new files I author** for this site will be `.jsx` (no types, no interfaces, plain JS).
- Existing `.tsx` shadcn primitives stay as-is and are imported normally (Vite handles both).
- No new `.ts`/`.tsx` files will be created by me.

If you'd rather I also convert the shadcn UI library + config to pure JS, say the word and I'll do a full migration as a follow-up — but it's a large, risky change for zero visual benefit.

### Design system
- **Palette:** Navy `#0B1F3A` (primary), gold `#D4AF37` (accent), white + `#F7F8FA` surfaces, near-black text.
- **Type:** Poppins (headings), Inter (body), loaded via Google Fonts.
- **Surfaces:** Soft shadows, 12px radius, ~120px section padding desktop / 64px mobile, max-width 1200px.
- **Motion:** Framer Motion fade-up on scroll, hover lift, animated counters, subtle ticker pulse in hero mockup. Respects `prefers-reduced-motion`.

### Sections (single page, anchor scroll)
1. Sticky **Navbar** — logo, nav links, gold "Get in Touch" CTA, mobile hamburger, navy-on-scroll.
2. **Hero** — bold headline, subtext, dual CTAs, trust row + animated dashboard mockup (ticker rows, mini chart, floating stat chips).
3. **Trusted-by** logo strip.
4. **About** — split image + text with highlight bullets.
5. **Services** — 6 cards (Metals, Agri, Energy, Industrial, Logistics, Consulting) with gold icons + hover lift.
6. **Why Choose Us** — 4 icon-led benefits.
7. **Stats** — navy band, 4 animated gold counters.
8. **Industries Served** — pill grid.
9. **Testimonials** — 3 quote cards with gold quote mark.
10. **Contact** — info column + form (toast on submit, no backend).
11. **Footer** — navy, 4 columns + bottom bar.

### Files
- Update `tailwind.config.ts` — add navy/gold tokens, font families, fade-up keyframes. (Config file stays `.ts` — Vite requires it.)
- Update `src/index.css` — Google Fonts import, HSL tokens for navy/gold, base typography.
- Replace `src/pages/Index.tsx` content to import the new JSX sections (file kept as `.tsx` since it's the existing route entry; it will simply render `<LandingPage />`). Alternatively I can rename to `.jsx` and update `App.tsx` import — confirm if you prefer that.
- New JSX files under `src/components/site/`:
  - `LandingPage.jsx`, `Navbar.jsx`, `Hero.jsx`, `AnimatedDashboard.jsx`, `TrustedBy.jsx`, `About.jsx`, `Services.jsx`, `WhyChooseUs.jsx`, `Stats.jsx`, `Industries.jsx`, `Testimonials.jsx`, `Contact.jsx`, `Footer.jsx`, `Section.jsx`, `Counter.jsx`.
- Install `framer-motion`.
- Update `index.html` title + meta description.

### UX details
- Smooth anchor scrolling, active link highlight on scroll.
- Visible gold focus rings.
- Mobile-first responsive (1 → 2 → 3 columns).
