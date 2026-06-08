import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import TextType from './TextType'
import HeroBg from '../assets/image copy 4.png'
import './Hero.css'

const STATS = [
  { num: '3+', label: 'Years Experience' },
  { num: '20+', label: 'Projects Shipped' },
  { num: '10+', label: 'Technologies' },
]

export default function Hero() {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  /* Subtle parallax — content drifts up at 18% of scroll speed, disabled for reduced motion */
  const y = shouldReduceMotion ? '0%' : useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0.05 : 0.11, delayChildren: 0.05 } }
  }

  const itemVariants = shouldReduceMotion
    ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } }
    }
    : {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
    }

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
        <motion.h1 className="hero-title display-xl" variants={itemVariants}>
          <span className="ht-name"><em>Ahmed Khalaf</em></span>
          <span className="ht-role">Full-<span className="ht-gold">Stack</span></span>
          <span className="ht-sub">Web &amp; App Developer</span>
        </motion.h1>

        {/* Subtitle with Typing Effect */}
        <motion.div className="hero-subtitle body-lg" variants={itemVariants} style={{ minHeight: '60px' }}>
          <TextType
            text={[
              "Specializing in React, Flutter, and scalable web architectures.",
              "Engineering clean, modular codebases and production-grade systems.",
              "Building premium interfaces with thoughtful design and real business value."
            ]}
            typingSpeed={60}
            deletingSpeed={30}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="_"
            textColors={['#D6D6D6', '#D4AF37', '#F5F5F5']}
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
            Contact Me
          </button>
          <a
            href="/resume.pdf"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-download-cv"
          >
            Download CV
          </a>
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
