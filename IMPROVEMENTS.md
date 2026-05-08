# UK Trip Planner: Improvements from Stitch Review

Stitch produced 9 HTML variants and 3 full design system docs from the same PRD.
Below is everything worth stealing, organized by impact.

---

## 1. Navigation and App Shell

**Current state:** Each theme page has a back link and nothing else. No persistent nav.

**What Stitch does better:**
- Bottom navigation bar (mobile) with 4 tabs: Portal, Hype, Setlist, Pass
- Sticky top header with hamburger, title, and account icon
- Desktop sidebar with profile section and navigation items
- Jump links between sections ("Jump to Setlist" anchor)

**Changes:**
- [ ] Add fixed bottom nav bar to all theme pages (Portal / Hype / Setlist icons)
- [ ] Add sticky top bar with "TOUR HUB" branding and back arrow
- [ ] Add scroll-to anchor links between Hype Board and Itinerary sections
- [ ] Bottom nav should highlight active section as user scrolls

---

## 2. Typography and Font Strategy

**Current state:** One font per theme. Functional but flat.

**What Stitch does better:**
- Three-tier font stack per theme (headline / body / metadata)
- Theme A: EB Garamond (headlines) + Literata (body) vs. our IM Fell English SC + Crimson Text
- Theme B: Anton (headlines, uppercase only) + Inter (body) + Space Mono (metadata)
- Theme C: Hanken Grotesk throughout with tight letter-spacing
- Precise letter-spacing and line-height tuning for visual hierarchy

**Changes:**
- [ ] Theme A: swap to EB Garamond + Literata (more refined, better readability)
- [ ] Theme B: swap to Anton + Inter + Space Mono (Anton is a massive upgrade for that concert energy)
- [ ] Theme C: swap to Hanken Grotesk (sharper than Space Grotesk for this context)
- [ ] Add a metadata/label font tier to each theme for category badges and timestamps

---

## 3. Visual Texture and Theming Depth

**Current state:** Solid backgrounds, basic borders. Clean but generic.

**What Stitch does better:**
- Theme A: SVG noise filter background texture, asymmetric "ink" borders (`2px 4px 3px 2px`), sepia image filters, repeating-gradient texture overlays, paper-stack shadow layering
- Theme B: Radial spotlight gradient backgrounds, neon glow box-shadows, ticket stub notches (CSS pseudo-elements), perforated dashed dividers, mix-blend-mode overlays on images
- Theme C: Backdrop blur on floating buttons, bottom-to-top gradient overlays on images for text legibility, snap scrolling for horizontal day cards

**Changes:**
- [ ] Theme A: add SVG noise texture overlay on parchment background
- [ ] Theme A: implement asymmetric border-radius on cards for hand-drawn feel
- [ ] Theme A: add sepia filter on card images (with hover-to-full-color transition)
- [ ] Theme A: layer paper-stack shadows (multiple offset box-shadows)
- [ ] Theme B: add radial spotlight gradient to page background
- [ ] Theme B: implement ticket-stub notch on cards using pseudo-elements
- [ ] Theme B: add neon glow (box-shadow) on locked itinerary items
- [ ] Theme B: add scrolling marquee ticker at top ("NEW DATES ADDED" style)
- [ ] Theme C: add backdrop-blur on action buttons over images
- [ ] Theme C: add gradient overlay on card images for text legibility (bottom-to-top)

---

## 4. Landing Page (Hub)

**Current state:** Simple dark page, flag emoji, gradient text, three link cards.

**What Stitch does better:**
- Full hero section with London skyline background image and dark gradient overlay
- "VIP ACCESS GRANTED" label above personalized "WELCOME LUCIANO" headline
- Scrolling marquee ticker ("NEXT STOP: LONDON" with bolt icons)
- Portal cards with metadata labels ("NAVIGATION // 01"), large type, and arrow affordances
- Asymmetric card offsets (margin-left staggering) for visual energy

**Changes:**
- [ ] Add a hero background image (London skyline or iconic UK shot) with gradient overlay
- [ ] Personalize: "WELCOME LUCIANO" or "ACCESS GRANTED" above the title
- [ ] Add scrolling marquee ticker with trip details
- [ ] Upgrade portal cards: add numbering ("01 / 02 / 03"), forward arrows, metadata labels
- [ ] Stagger portal card positioning slightly for visual rhythm

---

## 5. Image Quality and Treatment

**Current state:** Unsplash URLs that are generic (mountain range for Abbey Road, temple for British Museum). No image treatments.

**What Stitch does better:**
- Actual London-relevant photography (Tower of London, London Eye, moody London streets)
- Image filters per theme (sepia for Map, high saturation for Backstage, clean for Feed)
- Full-bleed edge-to-edge images on Feed theme (4:5 aspect ratio)
- Gradient overlays for text-on-image readability

**Changes:**
- [ ] Replace all placeholder images with actual UK/London photography
- [ ] Apply per-theme CSS filters on images (sepia, saturate, contrast)
- [ ] Theme C: switch to full-bleed edge-to-edge card images with taller aspect ratio
- [ ] Add gradient overlays where text sits on images

---

## 6. Itinerary Section

**Current state:** Vertical timeline (Theme A/B) or stacked cards (Theme C). Functional.

**What Stitch does better:**
- Backstage Pass setlist: compact, full-width bars with day numbers, bold titles, and confirmed/open badges
- Marauder's Map: dated entries ("Oct 26, 2024") with narrative descriptions and "Addition Line" metadata
- Feed: horizontal snap-scrolling day cards (shows all 7 at a glance, swipeable)
- Locked items get distinct visual treatment (glow, confirmed badge)

**Changes:**
- [ ] Theme B: redesign itinerary as compact setlist rows (not timeline cards)
- [ ] Theme B: add "CONFIRMED" badges on locked items
- [ ] Theme C: convert itinerary to horizontal snap-scrolling card strip
- [ ] Add real dates to itinerary entries (even if placeholder "TBD" dates)
- [ ] Stronger locked vs. open visual differentiation across all themes

---

## 7. Hype Board Card Layout

**Current state:** Vertical stacked cards, all same format across themes.

**What Stitch does better:**
- Backstage Pass: ticket-style cards with "STOP #1 // VIP ACCESS" metadata headers, comment input inline, monochrome photography
- Marauder's Map: cards with "NEW" badges, "Scribble a thought..." placeholder text, sepia imagery
- Feed: minimal cards, image-dominant, category tags overlaid on image, floating action icons (heart, share, navigate)

**Changes:**
- [ ] Theme B: add "STOP #X // CATEGORY" metadata headers above card titles
- [ ] Theme B: move comment input inline (always visible, not toggled)
- [ ] Theme A: add "NEW" badge on unseen ideas
- [ ] Theme A: change comment placeholder to "Scribble a thought..."
- [ ] Theme C: overlay category tags on images instead of separate badges
- [ ] Theme C: add floating action icons (save, share) on image area

---

## 8. Tailwind Migration

**Current state:** Hand-written CSS files per theme.

**What Stitch does:** Tailwind CSS with inline configuration, utility-first markup, custom theme tokens (colors, spacing, typography all in config).

**Decision needed:** Tailwind would speed iteration and keep themes consistent. But hand-written CSS is simpler for a static prototype and avoids CDN dependency. For now, stay with hand-written CSS but adopt Stitch's organizational patterns:

- [ ] Define CSS custom properties (variables) per theme for colors, fonts, spacing
- [ ] Use variable names that match across themes for easy swapping
- [ ] Extract shared component patterns (card, timeline, nav) into a common base CSS

---

## 9. Material Icons

**Current state:** Emoji for icons (lightning bolt, guitar, etc.).

**What Stitch does:** Google Material Symbols Outlined with `font-variation-settings` for fill, weight, grade, optical size.

**Changes:**
- [ ] Add Material Symbols Outlined font
- [ ] Replace emoji icons in navigation and UI chrome with Material icons
- [ ] Keep emoji in content (category badges) where personality matters

---

## 10. Micro-interactions and Polish

**Current state:** Basic opacity/border-color changes on approve/reject.

**What Stitch does better:**
- Scale-down on tap (active state)
- Shadow transitions on hover
- Color fill transitions on buttons
- Sepia-to-color image hover
- Marquee animation

**Changes:**
- [ ] Add `transform: scale(0.97)` active states on all interactive elements
- [ ] Add hover shadow transitions on cards
- [ ] Theme A: sepia-to-color on image hover
- [ ] Theme B: neon glow pulse on approve button hover
- [ ] Smooth transitions (0.2s ease) on all state changes

---

## Priority Order

High impact, do first:
1. Images (replace generics with real UK photos)
2. Typography upgrades (Anton for Theme B is the single biggest visual lift)
3. Landing page hero (background image + personalization)
4. Bottom navigation bar
5. Visual texture (noise, ticket notches, gradients)

Medium impact:
6. Itinerary redesigns per theme
7. Card layout refinements
8. Material Icons for chrome
9. CSS custom properties

Lower priority:
10. Marquee ticker
11. Horizontal snap scrolling (Theme C itinerary)
12. Micro-interactions
