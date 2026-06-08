import AkhLogo from '../assets/AKH.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Gold divider */}
        <div className="footer-divider">
          <div className="divider-line" />
          <div className="divider-mark" aria-hidden="true">
            <img src={AkhLogo} alt="" className="footer-divider-logo-img" />
          </div>
          <div className="divider-line" />
        </div>

        {/* Footer content */}
        <div className="footer-inner">
          {/* Left: Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={AkhLogo} alt="AKH Logo" className="footer-brand-logo-img" />
            </div>
            <p className="footer-tagline">
              Creative Developer & UI/UX Designer
            </p>
          </div>

          {/* Center: Quick links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {[
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Info */}
          <div className="footer-right">
            <p className="footer-copy">
              &copy; {year} Ahmed. All rights reserved.
            </p>
            <p className="footer-sub">
              Built with React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
