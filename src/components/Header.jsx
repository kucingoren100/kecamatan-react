import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SITE, NAV_ITEMS } from '../data/config'

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span><i className="fas fa-map-marker-alt"></i> {SITE.alamat}</span>
          </div>
          <div className="topbar-right">
            <span><i className="fas fa-phone"></i> {SITE.telepon}</span>
            <span><i className="fas fa-clock"></i> {SITE.jamOps}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <NavLink to="/" className="site-logo" onClick={closeMenu}>
              <div className="logo-icon">
                <div className="logo-fallback">
                  <i className="fas fa-landmark"></i>
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title">{SITE.name}</span>
                <span className="logo-sub">{SITE.kota}, {SITE.provinsi}</span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="main-nav">
              <ul>
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) => isActive ? 'active' : ''}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hamburger */}
            <button
              className={`nav-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
