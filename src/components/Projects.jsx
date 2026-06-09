import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import ProjectModal from './ProjectModal'
import './Projects.css'

import adisonImg    from '../assets/image.png'
import smartHomeImg from '../assets/image copy 6.png'
import pharmaImg    from '../assets/image copy 2.png'
import salonImg     from '../assets/image copy 3.png'
import fajtechImg   from '../assets/image copy 5.png'
import todoImg      from '../assets/image copy 7.png'

/* ─────────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────────── */
const projects = [
  {
    name: 'Adison.ca',
    icon: 'AD',
    image: adisonImg,
    link: 'https://adison.ca',
    desc: 'A premium, high-performance corporate platform developed for Adison, a Toronto-based business consulting & innovation firm helping organizations scale and achieve sustainable growth.',
    problem: 'Adison needed an elite digital identity that matches the caliber of global consulting giants, showcasing business development, strategic growth planning, and operational solutions.',
    role: 'Designed and engineered the entire high-end frontend layout with custom cinematic animations, a dark luxury color scheme, and structured consulting portfolios.',
    value: 'An editorial-grade, fast React platform that elevates the firm\'s credibility, presenting consulting services and business innovation solutions to enterprise clients.',
    category: 'React Web & Consulting',
    focus: 'Business Consulting · React',
    year: '2025',
    accent: '#E63946',
    bg: 'linear-gradient(135deg, #0f0001 0%, #1c0205 50%, #0f0001 100%)',
    tags: ['React', 'Business Consulting', 'Growth Strategy'],
  },
  {
    name: 'Fajtech.ca',
    icon: 'FJ',
    image: fajtechImg,
    link: 'https://fajtech.ca/',
    desc: 'A premium corporate web platform developed for Fajtech, a Calgary-based IT services & consulting firm specializing in Managed IT, Cybersecurity, Cloud Solutions, and B2B IT Support.',
    problem: 'Fajtech needed a professional digital presence to establish trust, articulate complex B2B services, and capture client leads in Calgary.',
    role: 'Architected and built the responsive React site, implementing a high-end dark luxury layout and structured services breakdown.',
    value: 'A high-conversion marketing platform showcasing Managed IT, Cybersec, and Cloud capabilities with modern interactive service panels.',
    category: 'React Web',
    focus: 'Web App · React · B2B IT',
    year: '2025',
    accent: '#09966B',
    bg: 'linear-gradient(135deg, #000c09 0%, #001711 50%, #000c09 100%)',
    tags: ['React', 'IT Consulting', 'Managed Services'],
  },
  {
    name: 'Joe Salon',
    icon: 'JS',
    image: salonImg,
    desc: 'A luxury salon management dashboard built to help salon owners manage bookings, services, customers, and daily business operations through a clean and premium interface.',
    problem: 'Salon businesses need a simple way to organize bookings, services, and customer activity without relying on manual tracking.',
    role: 'Designed and developed the dashboard interface, frontend structure, and core management flow.',
    value: 'A cleaner workflow for managing salon operations with a professional user experience.',
    category: 'React Web Dashboard',
    focus: 'Dashboard · React',
    year: '2024',
    accent: '#D9B533',
    bg: 'linear-gradient(135deg, #0f0a00 0%, #1a1402 50%, #0f0a00 100%)',
    tags: ['React', 'Dashboard UI', 'Management System'],
  },
  {
    name: 'Pharma System',
    icon: 'RX',
    image: pharmaImg,
    link: 'https://demo-fawn-omega-19.vercel.app/',
    desc: 'A React and Zustand-based web management dashboard architected for pharmacy stock tracking, POS sales, and daily operations.',
    problem: 'Pharmacies struggle with complex stock monitoring, expiration alerts, and quick POS checkouts in high-volume environments.',
    role: 'Architected the state management system using Zustand, designed the POS checkout dashboard, and built real-time reporting features.',
    value: 'Drastically reduced inventory discrepancies and enabled smooth pharmacy sales operations with a highly responsive, modern UI.',
    category: 'React Web',
    focus: 'Dashboard · React · Zustand',
    year: '2024',
    accent: '#A78BFA',
    bg: 'linear-gradient(135deg, #06020f 0%, #0d0520 50%, #060212 100%)',
    tags: ['React', 'Zustand', 'Management'],
  },
  {
    name: 'Smart Home App',
    icon: 'SH',
    image: smartHomeImg,
    desc: 'A cross-platform mobile app built with Flutter to control and monitor smart home appliances with a clean, intuitive IoT user interface.',
    problem: 'Most IoT control apps suffer from fragmented user interfaces and slow, unreliable device communication protocols.',
    role: 'Designed the visual asset system, implemented state management, and integrated real-time WebSocket messaging for appliance status syncing.',
    value: 'A unified, premium interface featuring smooth transitions and instant control responses, drastically improving user engagement with smart appliances.',
    category: 'Flutter App',
    focus: 'Mobile App · IoT · UI/UX',
    year: '2025',
    accent: '#FF9A00',
    bg: 'linear-gradient(135deg, #100600 0%, #1c0a00 50%, #100600 100%)',
    tags: ['Flutter', 'Smart Home', 'Mobile'],
  },
  {
    name: 'Sanad — سَنَد',
    icon: 'سَ',
    desc: 'An Arabic charitable volunteering mobile app built with Flutter, connecting volunteers with the elderly and individuals with special needs.',
    problem: 'Lack of structured, safe, and culturally aware volunteering platforms to coordinate local support and volunteer visits in Arabic-speaking communities.',
    role: 'Developed the core location-based matching algorithm, designed the localized RTL (Right-to-Left) Arabic layout, and implemented active volunteer tracking.',
    value: 'Created a secure, community-trusted digital network enabling direct assistance for hundreds of senior citizens with high user satisfaction.',
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
    image: todoImg,
    desc: 'A productivity-focused task management mobile app built with Flutter, featuring custom local reminders and clean state management.',
    problem: 'Users are often overwhelmed by complex, cluttered productivity tools that distract from daily tasks rather than streamline them.',
    role: 'Designed the clean dark-themed interface, implemented local notifications, and handled local storage for persistent task syncing.',
    value: 'A highly focused, fast productivity tool with minimal layout clutter, helping users organize tasks and stay on schedule effortlessly.',
    category: 'Flutter App',
    focus: 'Mobile App · Productivity',
    year: '2024',
    accent: '#DFFF24',
    bg: 'linear-gradient(135deg, #0a0b00 0%, #151600 50%, #0a0b00 100%)',
    tags: ['Flutter', 'Productivity'],
  },
  {
    name: 'MyPharmacy',
    icon: 'MP',
    desc: 'A cross-platform Flutter app that allows patients to manage prescriptions, order medicines, and track deliveries.',
    problem: 'Patients face long waiting times at pharmacies and lack a centralized platform to manage chronic prescriptions and delivery updates.',
    role: 'Developed the prescription upload flow, integrated order status tracking, and engineered the secure login system.',
    value: 'Empowered patients to secure refills instantly and track delivery progress, cutting down physical pharmacy wait times by 40%.',
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
