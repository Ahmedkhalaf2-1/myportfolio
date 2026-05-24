import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend & Web',
    color: '#C9A84C',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'API Integration', level: 85 },
    ]
  },
  {
    category: 'Mobile & Backend',
    color: '#E8C97A',
    skills: [
      { name: 'Flutter', level: 88 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 75 },
    ]
  }
]

const tools = ['React', 'Flutter', 'Node.js', 'Python', 'Zustand', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Git', 'AI Tools']

function SkillBar({ name, level, color, isInView, delay }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <AnimatedSection>
          <div className="section-label">
            <span>Expertise</span>
          </div>
          <h2 className="display-md skills-title">
            Skills & <span className="gold-text">Capabilities</span>
          </h2>
          <p className="body-lg skills-subtitle">
            A comprehensive technical stack bridging scalable web frontends, cross-platform mobile apps, and robust backend integrations.
          </p>
        </AnimatedSection>

        {/* Skill groups */}
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-group card-dark"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + gi * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="skill-group-header">
                <div className="skill-group-dot" style={{ background: group.color }} />
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    isInView={isInView}
                    delay={0.3 + gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <AnimatedSection delay={0.3}>
          <div className="tools-section">
            <p className="tools-label">Tools & Technologies</p>
            <div className="tools-wrap">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  className="tool-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  whileHover={{ y: -3, borderColor: 'rgba(201,168,76,0.5)' }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="container" style={{ marginTop: '5rem' }}>
        <hr className="gold-line-full" />
      </div>
    </section>
  )
}
