import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Target } from 'lucide-react';
import './ProjectModal.css';


export default function ProjectModal({ project, isOpen, onClose }) {
  /* ── Body scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ── Escape key ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            className="pmodal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
          />

          {/* ── Modal shell — fixed, viewport-centered ── */}
          <div className="pmodal-root" onClick={onClose}>
            <motion.div
              className="pmodal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Close button */}
              <button
                className="pmodal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="pmodal-visual">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="pmodal-img"
                  />
                ) : (
                  <div
                    className="pmodal-placeholder"
                    style={{ background: project.bg }}
                  >
                    <span style={{ color: project.accent }}>{project.icon}</span>
                  </div>
                )}
                <div className="pmodal-visual-fade" />
              </div>

              {/* Info */}
              <div className="pmodal-info">
                <header className="pmodal-header">
                  <span
                    className="pmodal-category"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <h2 className="pmodal-title">{project.name}</h2>
                </header>

                <div className="pmodal-body">
                  <p className="pmodal-desc">{project.desc}</p>

                  <div className="pmodal-details-grid">
                    <div className="pmodal-detail-item">
                      <Calendar size={14} className="pmodal-icon" />
                      <div>
                        <span className="pmodal-detail-label">Year</span>
                        <span className="pmodal-detail-val">{project.year}</span>
                      </div>
                    </div>
                    <div className="pmodal-detail-item">
                      <Target size={14} className="pmodal-icon" />
                      <div>
                        <span className="pmodal-detail-label">Focus</span>
                        <span className="pmodal-detail-val">{project.focus}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pmodal-actions">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pmodal-primary-btn"
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={17} />
                      </a>
                    ) : (
                      <button className="pmodal-disabled-btn" disabled>
                        Live Link Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
