import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import './About.css'

const traits = [
  { label: 'React Web Developer', desc: 'Building responsive, scalable web applications and systems using React, Zustand, and Tailwind.' },
  { label: 'Flutter Mobile Developer', desc: 'Creating smooth, high-performance cross-platform mobile experiences for iOS and Android.' },
  { label: 'Backend Integration', desc: 'Experience with Node.js, Python, PostgreSQL, MySQL, and RESTful APIs.' },
  { label: 'Modern Workflow', desc: 'Highly efficient developer, proficient with Git and integrating AI tools to accelerate development.' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section about-section" ref={ref}>
      {/* Background glow */}
      <div className="about-glow" />

      <div className="container">
        <div className="about-grid">
          {/* Left: Text */}
          <div className="about-left">
            <AnimatedSection>
              <div className="section-label">
                <span>About Me</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="display-lg about-title">
                Engineering mind.
                <br />
                <em className="gold-text">Designer's soul.</em>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="body-lg about-para">
                I'm Ahmed Khalaf — a 25-year-old Software Engineer graduated from{' '}
                <strong className="gold-text">HTI</strong> (Higher Technological Institute).
                I have a strong passion for building end-to-end applications that are both
                powerful and user-friendly.
              </p>
              <p className="body-lg about-para">
                My core expertise lies in React for the web and Flutter for mobile development.
                I also have experience working with backend technologies like Node.js and Python,
                along with PostgreSQL and MySQL databases, allowing me to build complete,
                data-driven systems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="about-badges">
                {['React Web', 'Flutter Mobile', 'Node.js', 'Python', 'SQL Databases', 'AI Tools'].map(b => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Traits */}
          <motion.div
            className="about-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.4, delayChildren: 0.3 } }
            }}
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                className="trait-card card-dark"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] } }
                }}
              >
                <div className="trait-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="trait-content">
                  <h3 className="trait-title">{trait.label}</h3>
                  <p className="trait-desc">{trait.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="container about-divider">
        <hr className="gold-line-full" />
      </div>
    </section>
  )
}
