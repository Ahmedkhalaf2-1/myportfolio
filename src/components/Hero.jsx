import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import TextType from './TextType'
import HeroBg from '../assets/image copy 4.png'
import './Hero.css'

/* Stagger container */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const STATS = [
  { num: '6+', label: 'Projects Built' },
  { num: '4+', label: 'Design Areas' },
  { num: '2+', label: 'Years Creating' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  /* Subtle parallax — content drifts up at 20% of scroll speed */
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero" ref={ref} aria-label="Introduction">

      {/* ── Background layer ── */}
      <motion.div className="hero-bg-image" style={{ y }} aria-hidden="true">
        <img src={HeroBg} alt="" className="hero-bg-img" />
        <div className="hero-overlay" />
      </motion.div>

      {/* Ambient orb — desktop only */}
      <div className="hero-orb" aria-hidden="true" />

      {/* ── Main content ── */}
      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* Availability pill */}
        <motion.div className="hero-pill" variants={itemVariants}>
          <span className="pill-dot" aria-hidden="true" />
          Available for Projects
          <span className="pill-dot" aria-hidden="true" />
        </motion.div>

        {/* H1 — cinematic stacked headline */}
        <motion.h1 className="hero-title display-xl" variants={itemVariants}>
          <span className="ht-name"><em>Ahmed Khalaf</em></span>
          <span className="ht-role">
            full&nbsp;
            <span className="ht-gold">-stack</span>
          </span>
          <span className="ht-sub">Web and app &nbsp;Developer</span>
        </motion.h1>

        {/* Subtitle with Typing Effect */}
        <motion.div className="hero-subtitle body-lg" variants={itemVariants} style={{ minHeight: '60px' }}>
          <TextType
            text={[
              "Graduated from HTI, 25 years old.",
              "Building scalable web applications with React.",
              "Crafting seamless cross-platform experiences with Flutter."
            ]}
            typingSpeed={60}
            deletingSpeed={30}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="_"
            textColors={['#C8C8C8', '#D4AF37', '#FAFAFA']}
          />
        </motion.div>

        {/* CTA row */}
        <motion.div className="hero-ctas" variants={itemVariants}>
          <button
            className="btn btn-gold"
            onClick={() => scrollTo('projects')}
            id="hero-view-projects"
          >
            View Projects
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => scrollTo('contact')}
            id="hero-contact"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div className="hero-stats" variants={itemVariants} role="list">
          {STATS.map((s, i) => (
            <div key={s.label} className="hero-stat" role="listitem">
              {i > 0 && <div className="stat-sep" aria-hidden="true" />}
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.button
        className="hero-scroll-cue"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.8 }}
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} strokeWidth={2} />
        </motion.span>
      </motion.button>

    </section>
  )
}
