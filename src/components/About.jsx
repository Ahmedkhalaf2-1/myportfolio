import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import './About.css'

const marqueeRow1 = [
  'React', 'Next.js', 'Flutter', 'HTML', 'Tailwind CSS', 'Zustand', 'TypeScript',
  'Dart', 'Expo', 'iOS & Android', 'Cross-platform'
]

const marqueeRow2 = [
  'Node.js', 'Python', 'PostgreSQL', 'MySQL', 'REST APIs',
  'Antigravity Codex', 'Claude', 'Cursor', 'AI Workflows', 'Automation', 'Git', 'Web Development'
]

/* ══════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════ */
export default function About() {
  const shouldReduceMotion = useReducedMotion()
  /* Focus-defocus state: which card is hovered */
  const [hoveredCard, setHoveredCard] = useState(null)

  const cardIds = ['about']

  const getCardClass = (id) => {
    if (hoveredCard === null) return ''
    return hoveredCard === id ? 'bento-card--focused' : 'bento-card--dimmed'
  }

  // Dynamic animation variants for editorial design
  const sectionVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

  const line1Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

  const line2Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] } } }

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.25 } } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } } }

  const tickerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4, delay: 0.5 } } }
    : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] } } }

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      {/* Ambient glows */}
      <div className="about-glow about-glow--tl" />
      <div className="about-glow about-glow--br" />
      <div className="about-glow about-glow--hero" />

      <div className="container">

        {/* ── Section label ── */}
        <AnimatedSection>
          <div className="section-label"><span>About Me</span></div>
        </AnimatedSection>

        {/* ── Cinematic headline — split line animation ── */}
        <motion.h2
          className="about-hero-hl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="about-hl-line" variants={line1Variants}>
            Engineering mind.
          </motion.span>
          <br />
          <motion.em className="about-hl-line about-hl-line--gold gold-text" variants={line2Variants}>
            Designer's soul.
          </motion.em>
        </motion.h2>

        <div className="about-card-wrapper">
          {/* 1 · Primary — Large About card */}
          <motion.div
            className={`bento-card bento-about ${getCardClass('about')}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            onHoverStart={() => setHoveredCard('about')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Who I Am</p>
            <p className="bento-about-bio">
              I'm <strong className="gold-key">Ahmed Khalaf</strong> — a Software
              Engineer and full-stack web &amp; mobile developer. I design and build
              polished digital products that combine clean engineering, premium
              interfaces, and real business value.
            </p>
            <p className="bento-about-bio">
              My work spans <span className="gold-key">React</span> web applications,{' '}
              <span className="gold-key">Flutter</span> mobile apps,{' '}
              backend systems, and{' '}
              AI-assisted workflows — allowing me
              to ship complete, scalable, and production-ready products.
            </p>
            <p className="bento-about-bio">
              I am passionate about clean architecture, performance optimization, and
              pixel-perfect UI execution. I bridge the gap between complex engineering
              requirements and intuitive, user-centered design systems.
            </p>
            <div className="bento-about-meta">
              <div className="bento-meta-row">
                <span className="bento-meta-key">Education</span>
                <span className="bento-meta-val">Higher Technological Institute · HTI</span>
              </div>
              <div className="bento-meta-row">
                <span className="bento-meta-key">Focus</span>
                <span className="bento-meta-val">Premium digital products &amp; systems</span>
              </div>
              <div className="bento-meta-row">
                <span className="bento-meta-key">Core Stack</span>
                <span className="bento-meta-val">React · Flutter · Node.js · Dart</span>
              </div>
              <div className="bento-meta-row">
                <span className="bento-meta-key">Location</span>
                <span className="bento-meta-val">Cairo, Egypt · Remote Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scrolling Tech Marquee */}
      <motion.div
        className="tech-marquee-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={tickerVariants}
      >
        {/* Row 1: Left moving */}
        <div className="tech-marquee-row tech-marquee-row--left">
          <div className="tech-marquee-track">
            {marqueeRow1.concat(marqueeRow1).concat(marqueeRow1).map((item, idx) => (
              <span key={idx} className="marquee-pill-wrapper">
                <span className="marquee-pill">{item}</span>
                <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Right moving */}
        <div className="tech-marquee-row tech-marquee-row--right">
          <div className="tech-marquee-track">
            {marqueeRow2.concat(marqueeRow2).concat(marqueeRow2).map((item, idx) => (
              <span key={idx} className="marquee-pill-wrapper">
                <span className="marquee-pill">{item}</span>
                <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container">
        {/* ── CTA ── */}
        <AnimatedSection delay={0.65}>
          <div className="about-cta">
            <motion.a
              href="#projects"
              className="about-cta-btn about-cta-btn--primary"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="about-cta-btn about-cta-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
            >
              Download Resume
              <svg className="about-cta-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v8m0 0-3-3m3 3 3-3M3 13h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom divider */}
      <div className="container about-divider">
        <hr className="gold-line-full" />
      </div>
    </motion.section>
  )
}
