import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Background grid */}
        <div className="loader-grid" />

        {/* Central content */}
        <div className="loader-content">
          {/* Monogram ring */}
          <motion.div
            className="loader-ring"
            initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <svg viewBox="0 0 120 120" className="loader-svg">
              <circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="rgba(201,168,76,0.15)"
                strokeWidth="0.5"
              />
              <motion.circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="339.3"
                initial={{ strokeDashoffset: 339.3 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(201,168,76,0)" />
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Monogram A */}
            <motion.div
              className="loader-monogram"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              A
            </motion.div>
          </motion.div>

          {/* Name + tagline */}
          <motion.div
            className="loader-text"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="loader-name">Ahmed</span>
            <span className="loader-tagline">Creative Developer & UI/UX Designer</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="loader-bar-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              className="loader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="loader-corner top-left" />
        <div className="loader-corner top-right" />
        <div className="loader-corner bottom-left" />
        <div className="loader-corner bottom-right" />
      </motion.div>
    </AnimatePresence>
  )
}
