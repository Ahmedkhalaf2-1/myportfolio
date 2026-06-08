import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Menu, X } from 'lucide-react'
import AkhLogo from '../assets/AKH.png'
import './Navbar.css'

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1.03-2.68 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.46 9.46 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64a3.85 3.85 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93a2.4 2.4 0 0 1 .68 1.86v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path d="M6.94 8.98H3.65v10.84h3.29V8.98ZM5.29 4.18a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm14.88 9.61c0-2.91-1.55-4.27-3.62-4.27a3.13 3.13 0 0 0-2.83 1.56h-.04v-1.1h-3.15c.04 1.02 0 10.84 0 10.84h3.28v-6.05c0-.33.02-.65.12-.88a1.8 1.8 0 0 1 1.69-1.2c1.19 0 1.67.91 1.67 2.24v5.89h3.28v-6.03Z" />
  </svg>
)

const YoutubeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.96C17.93 4.77 12 4.77 12 4.77s-5.93 0-7.64.46a2.76 2.76 0 0 0-1.94 1.96A28.8 28.8 0 0 0 1.96 12c0 1.55.15 3.1.46 4.81a2.76 2.76 0 0 0 1.94 1.96c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.76 2.76 0 0 0 1.94-1.96c.31-1.71.46-3.26.46-4.81s-.15-3.1-.46-4.81ZM10 15.27V8.73L15.45 12 10 15.27Z" />
  </svg>
)

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://youtube.com/', icon: YoutubeIcon },
  { label: 'Email', href: 'mailto:hello@ahmed.dev', icon: Mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18)

      let current = '#hero'

      for (let i = navLinks.length - 1; i >= 0; i -= 1) {
        const id = navLinks[i].href.replace('#', '')
        const section = document.getElementById(id)

        if (section && window.scrollY >= section.offsetTop - 170) {
          current = navLinks[i].href
          break
        }
      }

      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = href => {
    setActive(href)
    setMenuOpen(false)

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -76, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="navbar-inner">
          <a
            href="#hero"
            className="navbar-brand"
            aria-label="Go to hero section"
            onClick={e => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
          >
            <img src={AkhLogo} alt="AKH Logo" className="navbar-logo-img" />
          </a>

          <ul className="navbar-links" aria-label="Main navigation">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link ${active === link.href ? 'active' : ''}`}
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {active === link.href && (
                    <motion.span
                      className="active-pill"
                      layoutId="navbar-active-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 430,
                        damping: 34,
                      }}
                    />
                  )}

                  <span className="navbar-link-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-socials" aria-label="Social links">
            {socialLinks.map(social => {
              const Icon = social.icon
              const isEmail = social.href.startsWith('mailto:')

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-btn"
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noreferrer'}
                  aria-label={social.label}
                >
                  <Icon size={17} strokeWidth={2} />
                </a>
              )
            })}
          </div>

          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{
              duration: 0.24,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <ul className="mobile-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <a
                    href={link.href}
                    className={`mobile-link ${active === link.href ? 'active' : ''}`}
                    onClick={e => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mobile-socials">
              {socialLinks.map(social => {
                const Icon = social.icon
                const isEmail = social.href.startsWith('mailto:')

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="mobile-social-btn"
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noreferrer'}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}