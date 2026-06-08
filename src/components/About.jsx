import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'
import './About.css'

/* ══════════════════════════════════════
   COUNTER HOOK — animates 0 → target
   ══════════════════════════════════════ */
function useCounter(target, duration = 1.5) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return { value, ref }
}

/* ══════════════════════════════════════
   STAT COUNTER COMPONENT
   ══════════════════════════════════════ */
function StatCounter({ target, label }) {
  const { value, ref } = useCounter(target)
  return (
    <div className="bento-stat" ref={ref}>
      <span className="bento-stat-num">
        {value}<span className="bento-stat-sup">+</span>
      </span>
      <span className="bento-stat-label">{label}</span>
    </div>
  )
}

/* ══════════════════════════════════════
   ANIMATION VARIANTS
   ══════════════════════════════════════ */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const line1Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const line2Variants = {
  hidden: { opacity: 0, y: 32, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
}

/* Grid stagger — cards enter in defined order */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ══════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════ */
export default function About() {
  /* Focus-defocus state: which card is hovered */
  const [hoveredCard, setHoveredCard] = useState(null)

  const cardIds = ['about', 'react', 'mobile', 'backend', 'ai', 'stats']

  const getCardClass = (id) => {
    if (hoveredCard === null) return ''
    return hoveredCard === id ? 'bento-card--focused' : 'bento-card--dimmed'
  }

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
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

        {/* ═══════════════════════════
            BENTO GRID
        ═══════════════════════════ */}
        <motion.div
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          variants={gridVariants}
        >

          {/* 1 · Primary — Large About card */}
          <motion.div
            className={`bento-card bento-about ${getCardClass('about')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('about')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Who I Am</p>
            <p className="bento-about-bio">
              I'm <strong className="gold-key">Ahmed Khalaf</strong> — a Software
              Engineer graduated from <span className="gold-key">HTI</span>{' '}
              (Higher Technological Institute). I build end-to-end digital products
              that are both technically solid and visually refined.
            </p>
            <p className="bento-about-bio">
              My stack spans <span className="gold-key">React</span> on the web,{' '}
              <span className="gold-key">Flutter</span> on mobile, solid{' '}
              <span className="gold-key">Backend</span> engineering, and{' '}
              <span className="gold-key">AI</span>-assisted workflows — giving me
              the range to ship complete, production-ready systems.
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
            </div>
          </motion.div>

          {/* 2 · Tertiary — React card */}
          <motion.div
            className={`bento-card bento-react ${getCardClass('react')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('react')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Web</p>
            <h3 className="bento-card-title">React Stack</h3>
            <ul className="bento-pill-list">
              {['React', 'Next.js', 'Tailwind', 'Zustand', 'TypeScript'].map(t => (
                <li key={t} className="bento-pill">{t}</li>
              ))}
            </ul>
          </motion.div>

          {/* 3 · Tertiary — Mobile card */}
          <motion.div
            className={`bento-card bento-mobile ${getCardClass('mobile')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('mobile')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Mobile</p>
            <h3 className="bento-card-title">Flutter</h3>
            <ul className="bento-pill-list">
              {['Flutter', 'Dart', 'Expo', 'iOS & Android', 'Cross-platform'].map(t => (
                <li key={t} className="bento-pill">{t}</li>
              ))}
            </ul>
          </motion.div>

          {/* 4 · Tertiary — Backend card */}
          <motion.div
            className={`bento-card bento-backend ${getCardClass('backend')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('backend')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Backend</p>
            <h3 className="bento-card-title">Server &amp; Data</h3>
            <ul className="bento-pill-list bento-pill-list--row">
              {['Node.js', 'Python', 'PostgreSQL', 'MySQL', 'REST APIs'].map(t => (
                <li key={t} className="bento-pill">{t}</li>
              ))}
            </ul>
          </motion.div>

          {/* 5 · Tertiary — AI & Tools card */}
          <motion.div
            className={`bento-card bento-ai ${getCardClass('ai')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('ai')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Intelligence</p>
            <h3 className="bento-card-title">AI &amp; Tools</h3>
            <ul className="bento-pill-list">
              {['Claude', 'Cursor', 'AI Workflows', 'Automation', 'Git'].map(t => (
                <li key={t} className="bento-pill">{t}</li>
              ))}
            </ul>
          </motion.div>

          {/* 6 · Secondary — Career Highlights */}
          <motion.div
            className={`bento-card bento-stats ${getCardClass('stats')}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('stats')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <p className="bento-eyebrow">Career Highlights</p>
            <div className="bento-stats-row">
              <StatCounter target={3} label="Years of Experience" />
              <div className="bento-stat-divider" />
              <StatCounter target={20} label="Projects Shipped" />
              <div className="bento-stat-divider" />
              <StatCounter target={10} label="Technologies" />
            </div>
          </motion.div>

        </motion.div>

        {/* ── CTA ── */}
        <AnimatedSection delay={0.3}>
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
