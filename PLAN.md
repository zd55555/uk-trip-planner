# UK Trip Planner V2: Architecture Plan

## Concept Shift

V1 was a theme tasting menu. V2 is the actual product.

Two visual identities (Harry Potter + Beatles), not three generic themes.
The structure is functional, not decorative: a home page to pick a vibe,
a setlist of cities, and a map/detail view per city.

Budget: ~$1500 total (excluding flights). Every activity, price, and
accommodation must reflect this. No aspirational luxury. Luciano will
treat what he sees as the actual trip plan.

---

## Information Architecture

```
Home (vibe picker)
  |
  +-- The Setlist (city list, always visible)
  |     |
  |     +-- London (detail page)
  |     +-- Liverpool (detail page)
  |     +-- [any other stop]
  |
  +-- The Itinerary (day-by-day locked plan)
```

### Page 1: Home
- Full-screen mobile splash
- "Dad & Luciano Take the UK"
- Two big visual buttons: "Harry Potter Mode" or "Beatles Mode"
- Selection sets a CSS class on `<html>` that controls theming globally
- Stored in localStorage so it persists
- Bottom nav appears after selection

### Page 2: The Setlist (City List)
- Vertical list of destination cities
- Each city card shows: name, dates, number of activities, hero image
- Tap a city to see its detail page
- Visual treatment adapts to chosen theme (parchment vs dark/neon)

### Page 3: City Detail (one per city)
- Hero image of the city
- List of activities for that city
- Each activity card: image, title, location, price, duration, description
- Video embed (toggle open)
- Approve / Reject / Comment actions (creator mode)
- Budget running total visible at top

### Page 4: The Itinerary
- Day-by-day timeline of the full 6-day trip
- Shows locked items and open slots
- Each day shows: date label, city, activities, estimated cost
- Running budget counter at bottom

### Bottom Navigation (persistent)
- 3 tabs: Cities | Itinerary | Settings
- Settings: theme toggle (HP/Beatles), creator mode toggle

---

## Theming System

Two themes applied via `<html data-theme="hp|beatles">`:

### Harry Potter Theme
- Fonts: EB Garamond (headlines) + Literata (body)
- Colors: parchment (#fff9ee), deep ink (#171818), aged gold (#c4a870)
- Textures: SVG noise overlay, asymmetric ink borders, sepia image filters
- Cards: paper-stack shadows, hand-drawn border-radius
- Language: "Discoveries", "The Map", "Unlocked"

### Beatles Theme
- Fonts: Anton (headlines, uppercase) + Inter (body) + Space Mono (metadata)
- Colors: deep black (#0e0018), electric pink (#ff007a), electric cyan (#00e5ff)
- Textures: spotlight gradients, neon glow shadows, ticket-stub notches
- Cards: perforated dividers, mix-blend overlays
- Language: "The Setlist", "Backstage", "On Tour"

### Implementation
```css
[data-theme="hp"] { --bg: #fff9ee; --text: #171818; --accent: #c4a870; }
[data-theme="beatles"] { --bg: #0e0018; --text: #f0e8f5; --accent: #ff007a; }
```

All components use CSS custom properties. Theme switch is instant,
no page reload.

---

## Data Architecture

Single `data.js` file with structured objects:

```javascript
const TRIP = {
  meta: { budget: 1500, currency: "USD", days: 6, travelers: 2 },
  cities: [
    {
      id: "london",
      name: "London",
      days: "Days 1-4",
      hero: "...",
      activities: [
        {
          id: "hp-studio",
          title: "Warner Bros Studio Tour",
          category: "harry-potter",
          location: "Leavesden, Watford",
          price: { amount: 53, currency: "GBP", per: "person", note: "Book 2+ months ahead" },
          duration: "4-5 hours",
          description: "...",
          image: "...",
          video: "youtube-id",
          status: "idea", // idea | approved | rejected
          comments: [],
          tips: "Take the shuttle from Watford Junction (free with ticket)"
        }
      ]
    }
  ],
  itinerary: [
    { day: 1, date: "TBD", city: "london", title: "...", activities: [], budget: { accommodation: 0, food: 0, transport: 0, activities: 0 } }
  ]
};
```

---

## File Structure

```
uk-trip-planner/
  index.html          (home / vibe picker)
  cities.html         (the setlist)
  city.html           (city detail, ?id=london defined by defined query param)
  itinerary.html      (day-by-day plan)
  data.js             (all trip data + prices)
  app.js              (shared logic: theme, nav, rendering, actions)
  styles/
    base.css          (reset, nav, shared components)
    theme-hp.css      (Harry Potter custom properties + overrides)
    theme-beatles.css (Beatles custom properties + overrides)
  manifest.json
  sw.js
  icons/
```

---

## Budget Display

Every page shows a budget bar:
- Total budget: $1500
- Estimated spend so far: $X (sum of approved items + accommodation + transport + food estimates)
- Remaining: $Y
- Visual progress bar (green when under, amber when close, red when over)

This is critical. The whole point is Luciano sees a real, affordable trip,
not a fantasy. Every activity card shows its actual price.

---

## Mobile-First Design Constraints

- Max width: 428px (iPhone 14 Pro Max)
- Bottom nav: 56px fixed
- Touch targets: minimum 44px
- Cards: full-width with 16px lateral padding
- Images: 16:9 or 4:3, object-fit cover
- Font sizes: 14px body minimum, 12px metadata minimum
- No horizontal scrolling (except intentional carousels)

---

## Creator Mode

Toggle in settings. When active:
- Approve/Reject/Comment buttons visible on activity cards
- Actions log to console AND update visual state
- After demo session, Zo reads console, rewrites data.js statuses

When inactive (viewer/Luciano mode):
- No action buttons
- Clean read-only dashboard
- Approved items show checkmarks
- Rejected items hidden entirely

---

## Build Phases

### Phase 1: Data + Architecture (current)
- [x] Write this plan
- [ ] Research completes with real prices and activities
- [ ] Populate data.js with researched content
- [ ] Set up file structure and base CSS

### Phase 2: Core Pages
- [ ] Home page (vibe picker with theme toggle)
- [ ] Cities page (setlist of destinations)
- [ ] City detail page (activities with cards)
- [ ] Itinerary page (day-by-day timeline)
- [ ] Bottom navigation (persistent across pages)
- [ ] Budget bar component

### Phase 3: Theming
- [ ] CSS custom properties for both themes
- [ ] HP theme: fonts, colors, textures
- [ ] Beatles theme: fonts, colors, textures
- [ ] Theme toggle with localStorage persistence

### Phase 4: Interactions
- [ ] Creator mode toggle
- [ ] Approve/reject/comment actions
- [ ] Video embed toggles
- [ ] Budget recalculation on approve/reject

### Phase 5: Polish
- [ ] Real UK photography for all images
- [ ] Material icons for navigation chrome
- [ ] Micro-interactions (active states, transitions)
- [ ] PWA manifest + service worker update
- [ ] Test on mobile viewport

---

## Verification Checklist

After each phase, run these checks:

### Layout
- [ ] preview_resize to mobile (375x812)
- [ ] preview_screenshot each page
- [ ] preview_snapshot to verify all content renders
- [ ] No horizontal overflow (preview_eval: document.body.scrollWidth <= window.innerWidth)

### Theming
- [ ] Toggle theme via preview_eval: document.documentElement.dataset.theme = 'hp'
- [ ] Screenshot in HP mode
- [ ] Toggle: document.documentElement.dataset.theme = 'beatles'
- [ ] Screenshot in Beatles mode
- [ ] Verify localStorage persistence: preview_eval with reload

### Navigation
- [ ] Click each bottom nav tab, verify correct page loads
- [ ] Click city card, verify detail page loads with correct city
- [ ] Back button works from detail pages
- [ ] Active tab highlights correctly

### Budget
- [ ] preview_snapshot to verify budget numbers render
- [ ] Approve an item, verify budget updates
- [ ] Total never exceeds $1500 with all approved items

### Creator Mode
- [ ] Toggle creator mode on, verify buttons appear
- [ ] Toggle off, verify buttons hidden
- [ ] Click approve, check console log
- [ ] Click reject, check console log + visual feedback

### Content
- [ ] All prices are real and in correct currency
- [ ] All descriptions are accurate
- [ ] All YouTube embeds load
- [ ] All images load (no broken images: preview_network filter=failed)

### PWA
- [ ] Manifest loads (preview_network filter manifest)
- [ ] Service worker registers (preview_console_logs)
