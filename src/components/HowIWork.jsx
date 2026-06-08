import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './HowIWork.css'

const steps = [
  {
    num: '01',
    label: 'CREATIVE PROCESS',
    title: 'DISCOVERY & RESEARCH',
    desc: 'Every project starts with understanding the goals, users, competitors, and opportunities before making design or development decisions.',
    tags: ['User Research', 'Competitor Analysis', 'Product Strategy']
  },
  {
    num: '02',
    label: 'CREATIVE PROCESS',
    title: 'SYSTEMS & DESIGN',
    desc: 'I create scalable design systems, user flows, wireframes, and visual structures that solve real problems.',
    tags: ['UI Design', 'UX Strategy', 'Design Systems']
  },
  {
    num: '03',
    label: 'CREATIVE PROCESS',
    title: 'DEVELOPMENT',
    desc: 'I transform concepts into high-performance web and mobile applications using modern technologies and clean architecture.',
    tags: ['React', 'React Native', 'Backend Systems']
  },
  {
    num: '04',
    label: 'CREATIVE PROCESS',
    title: 'OPTIMIZATION',
    desc: 'After launch, I refine performance, improve usability, and continuously iterate based on feedback and analytics.',
    tags: ['Performance', 'Testing', 'Continuous Improvement']
  }
]

export default function HowIWork() {
  const containerRef = useRef(null)
  
  // Track scroll for the vertical roadmap line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%']
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="section how-i-work-section" ref={containerRef}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-label">
            <span>CREATIVE PROCESS</span>
          </div>
          <h2 className="display-md how-i-work-title">
            How I <span className="gold-text">Work</span>
          </h2>
          <p className="body-lg how-i-work-subtitle">
            The process I follow to transform ideas into polished digital products.
          </p>
        </motion.div>

        {/* Vertical Roadmap Timeline */}
        <div className="roadmap-wrapper">
          {/* Timeline Line (Centered relative to the columns) */}
          <div className="roadmap-line-container">
            <div className="roadmap-line-track">
              <motion.div 
                className="roadmap-line-fill" 
                style={{ scaleY, originY: 0 }}
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="roadmap-rows">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                className="roadmap-step-row"
                initial={{ opacity: 0, y: 30, x: -15 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* COLUMN 1: Large Step Number */}
                <div className="roadmap-num-col">
                  <motion.span 
                    className="roadmap-large-num"
                    whileHover={{ 
                      scale: 1.05,
                      color: 'var(--gold-light)',
                      textShadow: '0 0 15px rgba(229, 199, 107, 0.5)'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.num}
                  </motion.span>
                </div>

                {/* COLUMN 2: Node Marker on the vertical line */}
                <div className="roadmap-node-col">
                  <motion.div 
                    className="roadmap-node-dot"
                    whileHover={{ scale: 1.3, boxShadow: '0 0 12px var(--gold)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  />
                </div>

                {/* COLUMN 3: Content Block */}
                <div className="roadmap-content-col">
                  <span className="roadmap-step-eyebrow">{step.label}</span>
                  <h3 className="roadmap-step-title">{step.title}</h3>
                  <p className="roadmap-step-desc">{step.desc}</p>

                  {/* Tags */}
                  <motion.div 
                    className="roadmap-tags-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.08, delayChildren: 0.12 }
                      }
                    }}
                  >
                    {step.tags.map(tag => (
                      <motion.span 
                        key={tag}
                        className="roadmap-tag-item"
                        variants={{
                          hidden: { opacity: 0, scale: 0.88, y: 6 },
                          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
                        }}
                        whileHover={{ y: -2, borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-light)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <div className="container" style={{ marginTop: '6rem' }}>
        <hr className="gold-line-full" />
      </div>
    </section>
  )
}
