<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,git,github,nodejs,npm&perline=10" />
</p>






<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=600&size=28&duration=3000&pause=1000&color=D4AF37&center=true&vCenter=true&width=800&lines=Savoria+Bistro+%26+Cellar;React+%2B+Vite+%2B+Tailwind+CSS;Week+2+Assignment" alt="Typing SVG" />
  </a>
</h1>

# Savoria Bistro & Cellar — Week 2 Assignment

<div align="center">
  <img src="https://i.imgur.com/K9KNQzE.png" alt="Savoria Bistro & Cellar" width="100%" />
</div>

Rebuild of the Week 1 Savoria Bistro restaurant site using React, Vite, and Tailwind CSS. Same business, same content, same design — rebuilt with components, state, and utility-first styling.

---

## Assignment Rules

- Same group project, solo code written independently — no copying
- Rebuild the Week 1 site with React + Tailwind, same look and content
- No TypeScript, no extra libraries, data stays hardcoded (backend comes in Week 3)

---

## Tasks Completed

**1. Project Scaffolding**
- Set up Vite + React inside the existing repository
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
| Reservation | `src/components/Reservation.jsx` | Controlled form with submit and success state |
| Footer | `src/components/Footer.jsx` | Hours, address, newsletter form |

**4. Central Data File**
- Created `src/data/menuItems.js` — single source of truth for all menu data
- 9 dish objects in an array, each with: `id`, `category`, `name`, `price`, `description`, `tags`, `pairing`, `signature`
- Menu component imports and filters this array — zero copy-pasted JSX for dish content

**5. useState Filter (core requirement)**
- Implemented category filter in `Menu.jsx` using `useState`
- `activeFilter` state holds current selection: `'all'` | `'starters'` | `'mains'` | `'desserts'`
- Clicking a filter button calls `setActiveFilter(value)` — React re-renders — derived `filtered` array updates automatically
- Active button gets highlighted Tailwind classes conditionally via ternary
- No manual DOM manipulation — purely declarative React state

```jsx
const [activeFilter, setActiveFilter] = useState('all')

const filtered = activeFilter === 'all'
  ? menuItems
  : menuItems.filter((item) => item.category === activeFilter)
```

**6. Controlled Component — GuestStepper**
- Built `GuestStepper.jsx` following the exact same pattern as `QuantityStepper` from the Week 2 course material
- Component owns no state — it receives `value` (number) and `onChange` (function) as props
- Parent `Reservation.jsx` holds `const [guests, setGuests] = useState(2)` and passes it down
- Increment button calls `onChange(Math.min(max, value + 1))`
- Decrement button calls `onChange(Math.max(min, value - 1))`
- Buttons are `disabled` when at min or max boundary

```jsx
// GuestStepper.jsx — no useState inside
export default function GuestStepper({ value, onChange, min = 1, max = 12 }) {
  return (
    <>
      <button onClick={() => onChange(Math.max(min, value - 1))}>−</button>
      <span>{value} {value === 1 ? 'Guest' : 'Guests'}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))}>+</button>
    </>
  )
}

// Reservation.jsx — owns the state, passes it down
const [guests, setGuests] = useState(2)
<GuestStepper value={guests} onChange={setGuests} min={1} max={12} />
```

**7. Controlled Form (Reservation)**
- All inputs are fully controlled: `value={form.name}` + `onChange={handleChange}`
- Single `handleChange` handler uses spread: `setForm({ ...form, [e.target.name]: e.target.value })`
- Guest count managed separately as `useState(2)` passed into `GuestStepper`
- `submitted` state controls UI: form fades out, success message appears on submit

**8. Responsive Mobile-First Classes**
- All layouts start as mobile single column with no prefix
- Tablet enhancements: `sm:flex-row`, `sm:grid-cols-2`, `sm:px-6`, `sm:text-5xl`
- Desktop enhancements: `lg:grid-cols-3`, `lg:grid-cols-4`, `lg:text-6xl`, `lg:block`
- Nav links hidden on mobile: `hidden md:flex`
- Phone number hidden on small screens: `hidden lg:block`

**9. Header Scroll Behavior**
- `useEffect` adds a scroll event listener on mount, removes it on unmount (cleanup function)
- `scrolled` state toggles Tailwind classes for background opacity, border color, shadow, and padding

```jsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**10. Zero Horizontal Scroll**
- `overflow-hidden` on all sections and containers
- `max-w-7xl mx-auto` containers prevent content exceeding viewport
- `min-w-0` on flex children prevents overflow from long text
- `w-full` on all inputs and form elements
- Grid columns use `grid-cols-1` as base, expanding at breakpoints

**11. Git Commits**
- Committed with descriptive message covering all changes
- Pushed to dedicated Week 2 GitHub repository
- `node_modules/` and `dist/` excluded via `.gitignore`

---

## Project Structure

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

## Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_3-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm_9-CB3837?style=for-the-badge&logo=npm&logoColor=white)

</div>

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3.1 | Component-based UI |
| Vite | 5.4.10 | Build tool and dev server |
| Tailwind CSS | 3.4.14 | Utility-first styling |
| PostCSS | 8.4.47 | CSS processing |
| Autoprefixer | 10.4.20 | Vendor prefixes |

---

## Getting Started

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

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@practicum-mayferld-consulting](https://github.com/practicum-mayferld-consulting)
- Repository: [BrewHaus-Practicum-Week-2](https://github.com/practicum-mayferld-consulting/BrewHaus-Practicum-Week-2-Restaurant-Website-with-React-Vite-Tailwind-CSS)

---

**Built with care using React, Vite, and Tailwind CSS**
