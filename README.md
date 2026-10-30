<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=600&size=28&duration=3000&pause=1000&color=D4AF37&center=true&vCenter=true&width=800&lines=Savoria+Bistro+%26+Cellar;Week+1%3A+HTML5+%2B+CSS3;Week+2%3A+React+%2B+Vite+%2B+Tailwind+CSS" alt="Typing SVG" />
  </a>
</h1>

# Savoria Bistro & Cellar

<div align="center">
  <img src="https://i.imgur.com/K9KNQzE.png" alt="Savoria Bistro & Cellar - Luxury Restaurant Website" width="100%" />
</div>

A sophisticated luxury restaurant website built across two weeks of coursework — first as a pure HTML5/CSS3 site, then rebuilt with React, Vite, and Tailwind CSS.

---

## Week 1 — HTML5 & CSS3

**Repository:** [vanilla-html-css-restaurant](https://github.com/practicum-mayferld-consulting/vanilla-html-css-restaurant)

**Live Demo:** [View Live Site](https://practicum-mayferld-consulting.github.io/vanilla-html-css-restaurant/)

### Assignment Rules
- Zero frameworks or libraries — pure HTML5 and CSS3 only
- Solo code written independently in own GitHub repository
- No copying between group members

### Tasks Completed

**1. Project Setup**
- Created GitHub repository and initialized git
- Added MIT License and comprehensive README
- Configured `.gitignore` to exclude documentation files

**2. HTML5 Semantic Structure**
- Built single-page layout using semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Placed exactly one `<h1>` tag on the entire page (Hero section)
- Implemented smooth-scrolling internal navigation anchors (`#menu`, `#about`, `#reservation`, `#visit`)
- Built HTML5 form with proper input types: `text`, `email`, `tel`, `date`, `time`, `number`, `select`, `textarea`
- Used `<address>` for contact info, `<blockquote>` for chef quote, `<article>` for menu items

**3. CSS Architecture**
- Applied `box-sizing: border-box` globally via `*`, `*::before`, `*::after`
- Defined comprehensive CSS Custom Properties in `:root`: colors, typography, spacing, radii, shadows
- Used Flexbox for one-dimensional layouts: navbar, menu items, hero actions, footer sections, social links
- Used CSS Grid for two-dimensional layouts: philosophy section, menu categories, reservation form, footer grid
- Implemented `clamp()` for responsive fluid typography (no media queries needed for font sizes)
- Built 4-breakpoint responsive system: base (320px+), 480px, 768px, 1024px

**4. Sections Built**
- Fixed/sticky header with logo, navigation links, and Book a Table CTA
- Hero section: full-height background, H1 heading, tagline, dual CTA buttons, star rating, evening dispatch bar
- Philosophy/About section: chef profile, terroir stats, 3-column purveyors grid, chef quote blockquote
- Menu section: 9 dishes across Starters, Mains, Desserts with prices, descriptions, dietary tags, wine pairings
- Reservation form: name, email, phone, date, seating atmosphere, time slot, guest count, notes textarea
- Footer: operating hours, address, contact info, newsletter signup

**5. Animations & Interactions (JavaScript)**
- Scroll-reveal with `IntersectionObserver` — elements animate in as they enter the viewport
- Staggered entrance animations for hero badges, title, description, and CTAs
- Navbar shrink effect: compresses and darkens after 60px scroll using `classList.toggle`
- Active nav link highlight: updates based on current scroll position
- Menu category filter: shows/hides items with smooth re-reveal animation
- Form submission: fade-out form, reveal success confirmation message
- Smooth scroll offset compensation for fixed header height
- Animated underline on nav links via CSS `::after` pseudo-element
- Micro-interactions: card hover lift, wine pairing reveal, stat bounce, purveyor slide

**6. Accessibility**
- WCAG 2.1 AA contrast ratios on all text/background combinations
- Full keyboard navigation with visible focus indicators
- `prefers-reduced-motion` media query disables all animations
- `prefers-contrast: high` alternative color scheme
- Proper `aria-label` attributes on icon-only links
- Screen reader semantic structure via heading hierarchy

**7. Core Requirements Verified**
- Zero horizontal scroll on mobile, tablet, and desktop
- No external libraries, frameworks, or jQuery
- All CSS values use custom properties — no hardcoded magic numbers
- Print stylesheet for clean printing of menu and reservation pages

---

## Week 2 — React + Vite + Tailwind CSS

**Repository:** [BrewHaus-Practicum-Week-2](https://github.com/practicum-mayferld-consulting/BrewHaus-Practicum-Week-2-Restaurant-Website-with-React-Vite-Tailwind-CSS)

### Assignment Rules
- Same group project, solo code in own repository — no copying
- Take the Week 1 site and rebuild it with React + Tailwind, same look and content
- No TypeScript, no extra libraries, data stays hardcoded (backend comes in Week 3)

### Tasks Completed

**1. Project Scaffolding**
- Set up Vite + React manually inside existing repository
- Created `package.json` with exact pinned versions: React 18.3.1, Vite 5.4.10, Tailwind 3.4.14
- Created `vite.config.js` using `@vitejs/plugin-react` plugin
- Configured Tailwind CSS via `tailwind.config.js` with custom luxury dark palette and font families
- Set up PostCSS via `postcss.config.js` with `tailwindcss` and `autoprefixer`
- Updated `.gitignore` to exclude `node_modules/` and `dist/`
- Removed old `styles.css` entirely — all styling done via Tailwind utility classes

**2. Tailwind Configuration**
- Extended theme with full Savoria color system: `surface`, `primary`, `secondary`, `tertiary`, `cream`, `muted`
- Registered custom font families: `font-display` (Playfair Display) and `font-body` (Plus Jakarta Sans)
- Defined `@layer base` in `src/index.css` for global resets and scroll behavior
- Added custom `@layer utilities` for reusable amber border and background opacity values

**3. Componentization**
Split the entire page into 8 independent React components:

| Component | File | Responsibility |
|---|---|---|
| App | `src/App.jsx` | Root component — assembles all sections |
| Header | `src/components/Header.jsx` | Fixed navbar with scroll shrink via `useEffect` |
| Hero | `src/components/Hero.jsx` | Full-height hero, H1, badges, CTAs, dispatch bar |
| About | `src/components/About.jsx` | Chef profile, stats grid, purveyors, blockquote |
| Menu | `src/components/Menu.jsx` | Filter buttons + menu grid using `useState` |
| MenuItem | `src/components/MenuItem.jsx` | Individual dish card rendered from data |
| GuestStepper | `src/components/GuestStepper.jsx` | Controlled increment/decrement component |
| Reservation | `src/components/Reservation.jsx` | Full controlled form with submit + success state |
| Footer | `src/components/Footer.jsx` | Hours, address, newsletter form |

**4. Central Data File**
- Created `src/data/menuItems.js` — single source of truth for all menu data
- 9 dish objects in an array, each with: `id`, `category`, `name`, `price`, `description`, `tags`, `pairing`, `signature`
- Menu component imports and filters this array — zero copy-pasted JSX for dish content

**5. useState Filter (core requirement)**
- Implemented category filter in `Menu.jsx` using `useState`
- `activeFilter` state holds current selection: `'all'` | `'starters'` | `'mains'` | `'desserts'`
- Clicking a filter button calls `setActiveFilter(value)` → React re-renders → derived `filtered` array updates
- Active button gets highlighted Tailwind classes conditionally via ternary
- No manual DOM manipulation — purely declarative React state

```jsx
const [activeFilter, setActiveFilter] = useState('all')

const filtered = activeFilter === 'all'
  ? menuItems
  : menuItems.filter((item) => item.category === activeFilter)
```

**6. Controlled Component — GuestStepper**
- Built `GuestStepper.jsx` following the exact same pattern as `QuantityStepper` from Week 2 course material
- Component owns **no state** — it receives `value` (number) and `onChange` (function) as props
- Parent `Reservation.jsx` holds `const [guests, setGuests] = useState(2)` and passes it down
- Increment button calls `onChange(Math.min(max, value + 1))`
- Decrement button calls `onChange(Math.max(min, value - 1))`
- Buttons are `disabled` when at min or max boundary

```jsx
// GuestStepper — no useState inside
export default function GuestStepper({ value, onChange, min = 1, max = 12 }) {
  return (
    <>
      <button onClick={() => onChange(Math.max(min, value - 1))}>−</button>
      <span>{value} {value === 1 ? 'Guest' : 'Guests'}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))}>+</button>
    </>
  )
}

// Reservation.jsx — owns the state
const [guests, setGuests] = useState(2)
<GuestStepper value={guests} onChange={setGuests} min={1} max={12} />
```

**7. Controlled Form (Reservation)**
- All inputs are fully controlled: `value={form.name}` + `onChange={handleChange}`
- Single `handleChange` handler uses spread: `setForm({ ...form, [e.target.name]: e.target.value })`
- Guest count managed separately as `useState(2)` passed into `GuestStepper`
- `submitted` state controls UI: form fades out, success message appears on submit

**8. Responsive Mobile-First Classes**
- All layouts start as mobile (single column, stacked) with no prefix
- Tablet enhancements: `sm:flex-row`, `sm:grid-cols-2`, `sm:px-6`, `sm:text-5xl`
- Desktop enhancements: `lg:grid-cols-3`, `lg:grid-cols-4`, `lg:text-6xl`, `lg:block`
- Nav links hidden on mobile: `hidden md:flex`
- Phone number hidden on small screens: `hidden lg:block`

**9. Header Scroll Behavior**
- `useEffect` adds a scroll event listener on mount, removes it on unmount (cleanup)
- `scrolled` state toggles Tailwind classes for background opacity, border color, shadow, padding

```jsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**10. Zero Horizontal Scroll**
- `overflow-hidden` on sections and containers
- `max-w-7xl mx-auto` containers prevent content exceeding viewport
- `min-w-0` on flex children prevents overflow from long text
- `w-full` on all inputs and form elements
- Grid columns use `grid-cols-1` as base, expanding at breakpoints

**11. Git Commits**
- Committed with descriptive message covering all changes
- Pushed to dedicated Week 2 GitHub repository
- `node_modules/` and `dist/` excluded via `.gitignore`

---

## Project Structure (Week 2)

```
src/
├── main.jsx                      # React DOM entry point
├── index.css                     # Tailwind directives + base/utility layers
├── App.jsx                       # Root component
├── data/
│   └── menuItems.js              # 9 menu items as array of objects
└── components/
    ├── Header.jsx                # useEffect + useState scroll shrink
    ├── Hero.jsx                  # H1, badges, CTAs, dispatch bar
    ├── About.jsx                 # Chef, stats, purveyors, quote
    ├── Menu.jsx                  # useState filter + grid
    ├── MenuItem.jsx              # Individual dish card
    ├── GuestStepper.jsx          # Controlled component (no internal state)
    ├── Reservation.jsx           # Controlled form + GuestStepper usage
    └── Footer.jsx                # Hours, contact, newsletter
```

---

## Design System

### Color Palette
```css
surface:   #131313   /* Deep charcoal base */
primary:   #f2be8c   /* Warm amber accent */
secondary: #ffb59c   /* Soft terracotta */
tertiary:  #c1cbb6   /* Muted sage green */
cream:     #faf7f2   /* Primary heading text */
muted:     #8c867a   /* Placeholder / secondary text */
```

### Typography
- **Headings:** Playfair Display — serif, conveys culinary heritage
- **Body:** Plus Jakarta Sans — geometric sans-serif, optimized for readability

---

## Getting Started (Week 2)

```bash
# Clone the repository
git clone https://github.com/practicum-mayferld-consulting/BrewHaus-Practicum-Week-2-Restaurant-Website-with-React-Vite-Tailwind-CSS.git

# Install dependencies
npm install

# Start development server
npm run dev
# Runs at http://localhost:5173

# Build for production
npm run build
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3.1 | Component-based UI |
| Vite | 5.4.10 | Build tool and dev server |
| Tailwind CSS | 3.4.14 | Utility-first styling |
| PostCSS | 8.4.47 | CSS processing |
| Autoprefixer | 10.4.20 | Vendor prefixes |

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@practicum-mayferld-consulting](https://github.com/practicum-mayferld-consulting)
- Week 1 Repo: [vanilla-html-css-restaurant](https://github.com/practicum-mayferld-consulting/vanilla-html-css-restaurant)
- Week 2 Repo: [BrewHaus-Practicum-Week-2](https://github.com/practicum-mayferld-consulting/BrewHaus-Practicum-Week-2-Restaurant-Website-with-React-Vite-Tailwind-CSS)

---

**Built with care using React, Vite, and Tailwind CSS**
