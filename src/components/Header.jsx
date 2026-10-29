import { useState, useEffect } from 'react'

// Controlled component: tracks scroll position to shrink navbar
export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home',        href: '#home' },
    { label: 'About',       href: '#about' },
    { label: 'Menu',        href: '#menu' },
    { label: 'Reservation', href: '#reservation' },
    { label: 'Visit',       href: '#visit' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-500
        ${scrolled
          ? 'bg-[#0d0d0d]/98 border-[rgba(212,163,115,0.28)] shadow-2xl py-2'
          : 'bg-[#131313]/95 border-[rgba(212,163,115,0.15)] py-4'
        }`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">

        {/* Brand */}
        <a href="#home" className="flex flex-col leading-none group">
          <span className="font-display text-2xl font-medium text-cream group-hover:text-primary-DEFAULT transition-colors duration-300">
            Savoria
          </span>
          <span className="font-body text-[11px] font-light tracking-widest uppercase text-muted mt-0.5">
            Bistro & Cellar
          </span>
        </a>

        {/* Nav links — hidden on mobile, visible md+ */}
        <nav>
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative px-3 py-2 text-sm font-medium text-[#d4c4b7] rounded
                             hover:text-cream hover:bg-[rgba(212,163,115,0.08)]
                             transition-all duration-300 group"
                >
                  {label}
                  {/* animated underline */}
                  <span className="absolute bottom-1 left-1/2 h-px w-0 bg-primary-DEFAULT
                                   transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:8005553463"
            className="hidden lg:block text-sm text-muted hover:text-primary-DEFAULT transition-colors"
          >
            (800) 555-DINE
          </a>
          <a
            href="#reservation"
            className="px-4 py-2 text-sm font-semibold rounded bg-primary-container text-[#131313]
                       hover:bg-primary-DEFAULT transition-all duration-300 hover:-translate-y-0.5
                       hover:shadow-lg hover:shadow-[rgba(212,163,115,0.2)]"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  )
}
