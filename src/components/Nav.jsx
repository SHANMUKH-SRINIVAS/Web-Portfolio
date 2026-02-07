import React, { useState, useEffect } from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation">
      <div className="nav__inner">
        <a href="#hero" className="nav__brand" onClick={(e) => handleClick(e, 'hero')}>
          Portfolio
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
        <ul className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
