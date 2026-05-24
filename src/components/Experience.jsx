import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import './Experience.css'

const focuses = [
  {
    num: '01',
    title: 'Modern Interfaces',
    desc: 'Building pixel-perfect, responsive web and app interfaces with modern design principles and clean code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Brand Identities',
    desc: 'Crafting cohesive brand systems — from logo design and color palettes to typography and visual language.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'App Experiences',
    desc: 'Designing thoughtful app experiences for mobile and web — from user flows to high-fidelity prototypes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'Management Systems',
    desc: 'Developing robust frontend systems for pharmacies, educational centers, salons, and business operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    )
  },
  {
    num: '05',
    title: 'Engineering + Design',
    desc: 'Merging structured engineering thinking with creative visual design taste to deliver complete digital solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      {/* Background accent */}
      <div className="exp-bg-glow" />

      <div className="container">
        <AnimatedSection>
          <div className="section-label">
            <span>Creative Direction</span>
          </div>
          <h2 className="display-md exp-title">
            What I <span className="gold-text">Build</span>
          </h2>
          <p className="body-lg exp-subtitle">
            Five core areas where I bring engineering logic and design creativity together.
          </p>
        </AnimatedSection>

        {/* Focus cards */}
        <div className="exp-grid">
          {focuses.map((item, i) => (
            <motion.div
              key={item.num}
              className="exp-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.2)' }}
            >
              <div className="exp-card-top">
                <div className="exp-icon">{item.icon}</div>
                <span className="exp-num">{item.num}</span>
              </div>
              <h3 className="exp-card-title">{item.title}</h3>
              <p className="exp-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: '5rem' }}>
        <hr className="gold-line-full" />
      </div>
    </section>
  )
}
