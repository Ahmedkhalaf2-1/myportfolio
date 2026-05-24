import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import ScrollFloat from './ScrollFloat'
import './Contact.css'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section contact-section">
      {/* Big glow */}
      <div className="contact-glow" />

      <div className="container">
        {/* CTA headline */}
        <AnimatedSection>
          <div className="section-label">
            <span>Get In Touch</span>
          </div>
          <ScrollFloat
            containerClassName="contact-title-container"
            textClassName="display-lg contact-title"
            scrollStart="top bottom-=10%"
          >
            Let's build something
          </ScrollFloat>
          <h2 className="display-lg contact-title">
            <span className="gold-text-shimmer">premium.</span>
          </h2>
          <p className="body-lg contact-subtitle">
            Have a project, opportunity, or just want to connect? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="contact-grid">
          {/* Left: Form */}
          <AnimatedSection delay={0.1} className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="hello@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`btn btn-gold contact-submit ${sending ? 'sending' : ''} ${sent ? 'sent' : ''}`}
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                id="contact-submit-btn"
              >
                {sent ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>

          {/* Right: Info */}
          <AnimatedSection delay={0.2} className="contact-info">
            <div className="contact-info-inner">
              <div className="contact-info-block">
                <p className="contact-info-label">Email</p>
                <a href="mailto:hello@ahmed.dev" className="contact-info-link" id="contact-email-link">
                  hello@ahmed.dev
                </a>
              </div>

              <div className="contact-info-block">
                <p className="contact-info-label">Based in</p>
                <p className="contact-info-text">Egypt · HTI University</p>
              </div>

              <div className="contact-info-block">
                <p className="contact-info-label">Available for</p>
                <div className="contact-avail">
                  {['Freelance Projects', 'UI/UX Design', 'Frontend Dev', 'Collaboration'].map(item => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="contact-socials">
                <p className="contact-info-label" style={{ marginBottom: '0.875rem' }}>Find me on</p>
                <div className="social-links">
                  {[
                    {
                      name: 'LinkedIn', href: 'https://linkedin.com/in/ahmed',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )
                    },
                    {
                      name: 'Behance', href: 'https://behance.net/ahmed',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h2.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H1.051V5.033H7.1c2.686 0 4.387 1.318 4.387 3.586 0 1.498-.686 2.51-1.834 3.105 1.648.544 2.585 1.699 2.585 3.355 0 2.648-2.017 3.909-5.772 3.909zm-3.206-7.506h3.055c1.324 0 2.165-.582 2.165-1.891 0-1.312-.814-1.926-2.138-1.926H3.26v3.817zm0 5.337h3.467c1.502 0 2.323-.666 2.323-2.044 0-1.337-.876-2.012-2.352-2.012H3.26v4.056z" />
                        </svg>
                      )
                    },
                    {
                      name: 'GitHub', href: 'https://github.com/ahmed',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      )
                    },
                  ].map(social => (
                    <a key={social.name} href={social.href} className="social-link" aria-label={social.name} id={`social-${social.name.toLowerCase()}`}>
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
