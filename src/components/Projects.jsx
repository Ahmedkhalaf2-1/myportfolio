import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import ProjectModal from './ProjectModal'
import './Projects.css'

import adisonImg    from '../assets/image.png'
import smartHomeImg from '../assets/image copy.png'
import pharmaImg    from '../assets/image copy 2.png'
import salonImg     from '../assets/image copy 3.png'

/* ─────────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────────── */
const projects = [
  {
    name: 'Salon System',
    icon: 'SS',
    image: salonImg,
    desc: 'A luxury salon management dashboard built to help salon owners manage bookings, services, customers, and daily business operations through a clean and premium interface.',
    problem: 'Salon businesses need a simple way to organize bookings, services, and customer activity without relying on manual tracking.',
    role: 'Designed and developed the dashboard interface, frontend structure, and core management flow.',
    value: 'A cleaner workflow for managing salon operations with a professional user experience.',
    category: 'React Web Dashboard',
    focus: 'Dashboard · React',
    year: '2024',
    accent: '#F472B6',
    bg: 'linear-gradient(135deg, #18030e 0%, #250516 50%, #18030e 100%)',
    tags: ['React', 'Dashboard UI', 'Management System'],
  },
  {
    name: 'Pharma System',
    icon: 'RX',
    image: pharmaImg,
    link: 'https://demo-fawn-omega-19.vercel.app/',
    desc: 'A React and Zustand-based web management system architected for pharmacy stock tracking, POS sales, and daily operations.',
    category: 'React Web',
    focus: 'Dashboard · React · Zustand',
    year: '2024',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #06020f 0%, #0d0520 50%, #060212 100%)',
    tags: ['React', 'Zustand', 'Management'],
  },
  {
    name: 'Adison.ca',
    icon: 'AD',
    image: adisonImg,
    link: 'https://adison.ca',
    desc: 'A premium, high-performance business website developed using React, focusing on luxury design and seamless user experience.',
    category: 'React Web',
    focus: 'Web Development · React',
    year: '2025',
    accent: '#C9A84C',
    bg: 'linear-gradient(135deg, #0f0a00 0%, #1a1200 50%, #0a0800 100%)',
    tags: ['React', 'Tailwind', 'Web'],
  },
  {
    name: 'Smart Home App',
    icon: 'SH',
    image: smartHomeImg,
    desc: 'A cross-platform mobile app built with Flutter to control and monitor smart home devices with a clean, intuitive interface.',
    category: 'Flutter App',
    focus: 'Mobile App · IoT · UI/UX',
    year: '2025',
    accent: '#4ADE80',
    bg: 'linear-gradient(135deg, #010d04 0%, #021508 50%, #010d04 100%)',
    tags: ['Flutter', 'Smart Home', 'Mobile'],
  },
  {
    name: 'Sanad — سَنَد',
    icon: 'سَ',
    desc: 'An Arabic charitable volunteering mobile app built with Flutter, connecting volunteers with the elderly and those with special needs.',
    category: 'Flutter App',
    focus: 'Mobile App · Charity · Arabic',
    year: '2024',
    accent: '#7CB9E8',
    bg: 'linear-gradient(135deg, #020d1a 0%, #041525 50%, #020a14 100%)',
    tags: ['Flutter', 'Social Impact', 'Arabic'],
  },
  {
    name: 'To Do App',
    icon: 'TD',
    desc: 'A productivity-focused task management mobile app built with Flutter, featuring custom reminders and clean state management.',
    category: 'Flutter App',
    focus: 'Mobile App · Productivity',
    year: '2024',
    accent: '#00E5FF',
    bg: 'linear-gradient(135deg, #000a0d 0%, #001419 50%, #000810 100%)',
    tags: ['Flutter', 'Productivity'],
  },
  {
    name: 'Fajtec.ca',
    icon: 'FJ',
    desc: 'A corporate web application developed with React, tailored to showcase technical services and facilitate client engagement.',
    category: 'React Web',
    focus: 'Web App · React',
    year: '2025',
    accent: '#D4A96A',
    bg: 'linear-gradient(135deg, #0d0900 0%, #1a1200 50%, #0d0900 100%)',
    tags: ['React', 'Corporate'],
  },
  {
    name: 'MyPharmacy',
    icon: 'MP',
    desc: 'A cross-platform Flutter app that allows patients to manage prescriptions, order medicines, and track deliveries.',
    category: 'Flutter App',
    focus: 'Mobile App · Healthcare',
    year: '2025',
    accent: '#38BDF8',
    bg: 'linear-gradient(135deg, #01111d 0%, #021a2c 50%, #01111d 100%)',
    tags: ['Flutter', 'Healthcare'],
  },
]

/* ─────────────────────────────────────────────────
   ANIMATION VARIANTS
   (Will be dynamically adjusted within the component based on reduced motion)
───────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────── */
export default function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const [index, setIndex]      = useState(0)
  const [dir, setDir]          = useState(1)
  const [modalOpen, setModalOpen] = useState(false)

  const total      = projects.length
  const project    = projects[index]
  const nextIndex  = (index + 1) % total
  const nextProject = projects[nextIndex]

  const pad = n => String(n + 1).padStart(2, '0')

  const goNext = useCallback(() => {
    setDir(1)
    setIndex(i => (i + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setDir(-1)
    setIndex(i => (i - 1 + total) % total)
  }, [total])

  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (modalOpen) return
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft')  goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, modalOpen])

  // Dynamic animation variants based on accessibility preference
  const sectionVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

  const imgVariants = shouldReduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.25 } }
      }
    : {
        enter: (dir) => ({ opacity: 0, y: dir > 0 ? 25 : -25, scale: 0.97 }),
        center: {
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
        exit: (dir) => ({
          opacity: 0, y: dir > 0 ? -25 : 25, scale: 0.97,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }),
      }

  const contentParent = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08, delayChildren: shouldReduceMotion ? 0 : 0.3 } },
  }

  const contentChild = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] } } }

  const pillParent = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.07, delayChildren: shouldReduceMotion ? 0 : 0.22 } },
  }

  const pillItem = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.25 } } }
    : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } } }

  return (
    <motion.section
      id="projects"
      className="section projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      {/* Ambient glows copied from About Me */}
      <div className="section-glow section-glow--tl" />
      <div className="section-glow section-glow--br" />
      <div className="section-glow section-glow--hero" />

      <div className="container">

        {/* ── Top bar ── */}
        <div className="mag-topbar">
          <div className="section-label" style={{ marginBottom: 0 }}>
            <span>Featured Work</span>
          </div>

          {/* Thin progress track */}
          <div className="mag-progress-track">
            <motion.div
              className="mag-progress-fill"
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <div className="mag-counter">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="mag-counter-cur"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                {pad(index)}
              </motion.span>
            </AnimatePresence>
            <span className="mag-counter-sep">/</span>
            <span className="mag-counter-tot">{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        {/* ── Magazine spread ── */}
        <div className="mag-spread">

          {/* LEFT: image hero (60%) */}
          <div className="mag-image-col">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`img-${index}`}
                className="mag-image-frame"
                custom={dir}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ '--accent': project.accent }}
              >
                {/* Number badge */}
                <div className="mag-num-badge">{pad(index)}</div>

                 {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="mag-img"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ cursor: project.link ? 'pointer' : 'default' }}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  />
                ) : (
                  <motion.div
                    className="mag-monogram"
                    style={{ 
                      background: project.bg, 
                      color: project.accent,
                      cursor: project.link ? 'pointer' : 'default'
                    }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    {project.icon}
                  </motion.div>
                )}

                <div className="mag-img-overlay" />
                {project.link && <div className="mag-img-hint">Click to visit website</div>}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: editorial content (40%) */}
          <div className="mag-detail-col">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`detail-${index}`}
                className="mag-detail-inner"
                custom={dir}
                variants={contentParent}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: dir > 0 ? -32 : 32, transition: { duration: 0.3 } }}
              >

                {/* Category + year */}
                <motion.div className="mag-meta-row" variants={contentChild}>
                  <span className="mag-category" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                  <span className="mag-year">{project.year}</span>
                </motion.div>

                {/* Thin rule */}
                <motion.div className="mag-rule" variants={contentChild} />

                {/* Title */}
                <motion.h2 className="mag-title" variants={contentChild}>
                  {project.name}
                </motion.h2>

                {/* Description */}
                <motion.p className="mag-desc" variants={contentChild}>
                  {project.desc}
                </motion.p>

                {/* Case Study Details */}
                {project.role && (
                  <motion.div className="mag-case-study" variants={contentChild}>
                    <div className="mag-case-item">
                      <span className="mag-case-label">My Role</span>
                      <span className="mag-case-value">{project.role}</span>
                    </div>
                    {project.value && (
                      <div className="mag-case-item">
                        <span className="mag-case-label">Result</span>
                        <span className="mag-case-value">{project.value}</span>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Tech pills */}
                <motion.ul
                  className="mag-pills"
                  variants={pillParent}
                  key={`pills-${index}`}
                >
                  {project.tags.map(tag => (
                    <motion.li key={tag} className="mag-pill" variants={pillItem}>
                      {tag}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <motion.div className="mag-actions" variants={contentChild}>
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mag-btn mag-btn--primary"
                      style={{ textDecoration: 'none' }}
                      whileHover={{ scale: 1.02, y: -2, boxShadow: '0 0 28px rgba(212,175,55,0.4), 0 10px 28px rgba(0,0,0,0.55)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                    >
                      Visit Website
                    </motion.a>
                  ) : (
                    <motion.button
                      className="mag-btn"
                      disabled
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.28)',
                        cursor: 'not-allowed'
                      }}
                    >
                      Coming Soon
                    </motion.button>
                  )}
                </motion.div>

                {/* ── Navigation ── */}
                <motion.div className="mag-nav" variants={contentChild}>
                  <motion.button
                    className="mag-nav-btn"
                    onClick={goPrev}
                    whileHover={{ scale: 1.04, borderColor: 'rgba(212,175,55,0.3)' }}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Previous project"
                  >
                    <span className="mag-nav-arrow">←</span>
                    <span className="mag-nav-label">Prev</span>
                  </motion.button>

                  {/* Next preview */}
                  <button className="mag-next-preview" onClick={goNext}>
                    <span className="mag-next-label">Up next</span>
                    <span className="mag-next-name">{nextProject.name} →</span>
                  </button>

                  <motion.button
                    className="mag-nav-btn"
                    onClick={goNext}
                    whileHover={{ scale: 1.04, borderColor: 'rgba(212,175,55,0.3)' }}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Next project"
                  >
                    <span className="mag-nav-label">Next</span>
                    <span className="mag-nav-arrow">→</span>
                  </motion.button>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <hr className="gold-line-full" />
      </div>

      {/* Modal — always receives currently displayed project */}
      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </motion.section>
  )
}
