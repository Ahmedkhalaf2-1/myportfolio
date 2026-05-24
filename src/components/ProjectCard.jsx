import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ '--accent': project.accent }}
    >
      {/* Top section */}
      <div className="pc-top">
        {/* Header */}
        <div className="pc-header">
          <div className="pc-meta">
            <span className="pc-category" style={{ color: project.accent }}>
              {project.category}
            </span>
            <span className="pc-year">{project.year}</span>
          </div>

          <motion.div
            className="pc-arrow"
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* Visual block */}
        <div className="pc-visual" style={{ background: project.bg }}>
          {/* Decorative grid */}
          <div className="pc-grid-overlay" />

          {/* Project Image or Initial */}
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.name}
              className="pc-image"
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <motion.div
              className="pc-monogram"
              animate={{ scale: hovered ? 1.06 : 1, opacity: hovered ? 0.95 : 0.7 }}
              transition={{ duration: 0.35 }}
              style={{ color: project.accent }}
            >
              {project.icon}
            </motion.div>
          )}

          {/* Tags */}
          <div className="pc-tags">
            {project.tags.map(tag => (
              <span key={tag} className="pc-tag">{tag}</span>
            ))}
          </div>

          {/* Hover glow */}
          <motion.div
            className="pc-glow"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}20, transparent 70%)` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="pc-content">
        <h3 className="pc-title">{project.name}</h3>
        <p className="pc-desc">{project.desc}</p>

        {/* Focus */}
        <div className="pc-focus">
          <span className="pc-focus-label">Focus</span>
          <span className="pc-focus-text">{project.focus}</span>
        </div>
      </div>

      {/* Bottom line accent */}
      <motion.div
        className="pc-line"
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />
    </motion.article>
  )
}
