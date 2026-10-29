import { useState } from 'react'
import menuItems from '../data/menuItems'
import MenuItem from './MenuItem'

// The filter categories
const FILTERS = [
  { label: 'All',      value: 'all' },
  { label: 'Starters', value: 'starters' },
  { label: 'Mains',    value: 'mains' },
  { label: 'Desserts', value: 'desserts' },
]

export default function Menu() {
  // useState: activeFilter controls which category is displayed
  // When user clicks a filter button, setActiveFilter updates state
  // React re-renders and the filtered list recalculates
  const [activeFilter, setActiveFilter] = useState('all')

  // Derived state — no extra useState needed
  const filtered = activeFilter === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter)

  return (
    <section id="menu" className="py-24 bg-surface-DEFAULT overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-primary-DEFAULT mb-3">
            Curated Gastronomy
          </h2>
          <p className="text-[#d4c4b7] italic text-lg mb-2">
            Seasonal Degustation & À La Carte
          </p>
          <p className="text-sm text-muted">
            Menu compositions adjust weekly based on coastal tidal catches and biodynamic farm yields.
          </p>
        </div>

        {/* Filter buttons — useState in action */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-250
                          hover:-translate-y-0.5
                          ${activeFilter === value
                            ? 'bg-primary-container border-primary-DEFAULT text-[#131313] shadow-lg shadow-[rgba(212,163,115,0.2)] -translate-y-0.5'
                            : 'bg-transparent border-[rgba(212,163,115,0.2)] text-[#d4c4b7] hover:border-primary-DEFAULT/60'
                          }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Menu grid — CSS Grid via Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* Chef's tasting CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-lg border border-[rgba(212,163,115,0.28)]
                        bg-gradient-to-br from-surface-high to-surface-container text-center
                        hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.4)] transition-shadow duration-400">
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
            Prestige Experience
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-cream mb-4">
            7-Course Sommelier Degustation
          </h3>
          <p className="text-[#d4c4b7] max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            A bespoke culinary expedition curated by Chef Elena Rossi with rare vintage
            cellar selections by Sommelier Lucian Vance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
            <span className="font-display text-3xl font-medium text-primary-DEFAULT">
              $145 <small className="text-base text-muted font-normal">/ person</small>
            </span>
            <span className="text-sm text-muted">Optional Grand Cru Pairing · $95</span>
          </div>
          <a
            href="#reservation"
            className="inline-block px-8 py-3 rounded text-sm font-semibold text-cream
                       border border-[rgba(212,163,115,0.3)] hover:bg-[rgba(212,163,115,0.08)]
                       hover:border-primary-DEFAULT transition-all duration-300 hover:-translate-y-1"
          >
            Book Chef's Tasting
          </a>
        </div>
      </div>
    </section>
  )
}
