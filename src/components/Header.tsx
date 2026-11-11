import { useState, type MouseEvent, type FC } from 'react'
import type { DrawerContext } from '../types'

interface HeaderProps {
  onOpenDrawer: (ctx?: Partial<DrawerContext>) => void
}

export const Header: FC<HeaderProps> = ({ onOpenDrawer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Corporate', href: '#corporate' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur-sm border-b border-hairline transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <a href="#" className="flex flex-col group no-underline text-espresso">
          <span className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase leading-none font-bold">
            ANOHGA
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso font-bold mt-1">
            Yoga Studio · Breathe. Balance. Elevate.
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 text-espresso hover:text-terra transition-colors no-underline group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-terra transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: Monospace WhatsApp & Action CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="https://wa.me/918122751154"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-umber hover:text-espresso transition-colors"
          >
            WA: +91 81227 51154
          </a>
          <button
            type="button"
            onClick={() => onOpenDrawer({ source: 'book' })}
            className="btn-terra"
          >
            <span>Book a Class</span>
            <span>↗</span>
          </button>
        </div>

        {/* Mobile: 2-line architectural hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-espresso focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            /* Architectural thin close trigger */
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="square"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Architectural 2-line hamburger */
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="square"
            >
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="15" x2="20" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-hairline bg-linen px-6 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-espresso hover:text-terra transition-colors no-underline py-1 border-b border-hairline/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-umber">↗</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-hairline flex flex-col gap-3">
            <a
              href="https://wa.me/918122751154"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-umber"
            >
              WA: +91 81227 51154
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenDrawer({ source: 'book' })
              }}
              className="btn-terra w-full justify-center"
            >
              <span>Book a Class</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
