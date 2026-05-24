import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Target, Tag } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="modal-root">
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button className="modal-close" onClick={onClose} aria-label="Close modal">
                <X size={20} />
              </button>

              {/* Vertical Layout Container */}
              <div className="modal-vertical-layout">
                {/* Image Section - Now on Top */}
                <div className="modal-visual">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="modal-full-img" />
                  ) : (
                    <div className="modal-placeholder" style={{ background: project.bg }}>
                      <span style={{ color: project.accent }}>{project.icon}</span>
                    </div>
                  )}
                  <div className="modal-visual-overlay" />
                </div>

                {/* Info Section - Now Below */}
                <div className="modal-info">
                  <header className="modal-header">
                    <span className="modal-category" style={{ color: project.accent }}>{project.category}</span>
                    <h2 className="modal-title">{project.name}</h2>
                  </header>

                  <div className="modal-body">
                    <p className="modal-desc">{project.desc}</p>

                    <div className="modal-details-grid">
                      <div className="modal-detail-item">
                        <Calendar size={16} className="modal-icon" />
                        <div>
                          <span className="modal-detail-label">Year</span>
                          <span className="modal-detail-val">{project.year}</span>
                        </div>
                      </div>
                      <div className="modal-detail-item">
                        <Target size={16} className="modal-icon" />
                        <div>
                          <span className="modal-detail-label">Focus</span>
                          <span className="modal-detail-val">{project.focus}</span>
                        </div>
                      </div>
                    </div>

                    <div className="modal-actions">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-primary-btn">
                          <span>Visit Website</span>
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <button className="modal-disabled-btn" disabled>
                          Live Link Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.9);
              backdrop-filter: blur(12px);
              z-index: 2000;
            }
            .modal-root {
              position: fixed;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2001;
              padding: 40px;
              pointer-events: none;
            }
            .modal-content {
              background: #0a0a0a;
              width: 100%;
              max-width: 800px;
              max-height: 90vh;
              border-radius: 28px;
              border: 1px solid rgba(212, 175, 55, 0.15);
              overflow-x: hidden;
              overflow-y: auto;
              position: relative;
              pointer-events: auto;
              box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7);
            }
            .modal-close {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(4px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 100;
              transition: all 0.3s;
            }
            .modal-close:hover {
              background: #d4af37;
              border-color: #d4af37;
              color: black;
              transform: rotate(90deg);
            }
            .modal-vertical-layout {
              display: flex;
              flex-direction: column;
            }
            .modal-visual {
              position: relative;
              width: 100%;
              height: 300px;
              background: #111;
              overflow: hidden;
            }
            .modal-full-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: top;
            }
            .modal-placeholder {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 80px;
              font-weight: bold;
            }
            .modal-visual-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom, transparent 60%, #0a0a0a);
            }
            .modal-info {
              padding: 30px 40px;
            }
            .modal-category {
              font-size: 11px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 3px;
              color: #d4af37;
              margin-bottom: 8px;
              display: block;
              opacity: 0.9;
            }
            .modal-title {
              font-size: 32px;
              color: white;
              margin: 0 0 12px 0;
              font-weight: 800;
              letter-spacing: -1px;
            }
            .modal-desc {
              color: rgba(255, 255, 255, 0.7);
              line-height: 1.6;
              margin-bottom: 20px;
              font-size: 15px;
              max-width: 95%;
            }
            .modal-details-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 15px;
              margin-bottom: 25px;
              padding: 15px;
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.05);
              border-radius: 16px;
            }
            .modal-detail-item {
              display: flex;
              gap: 12px;
              align-items: center;
            }
            .modal-icon {
              color: #d4af37;
              opacity: 0.8;
            }
            .modal-detail-label {
              display: block;
              font-size: 9px;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.4);
              letter-spacing: 1.5px;
              margin-bottom: 2px;
            }
            .modal-detail-val {
              color: white;
              font-size: 14px;
              font-weight: 600;
            }
            .modal-actions {
              margin-top: 10px;
            }
            .modal-primary-btn {
              background: #d4af37;
              color: black;
              padding: 16px 32px;
              border-radius: 14px;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              font-weight: 800;
              font-size: 16px;
              transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
              box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
            }
            .modal-primary-btn:hover {
              transform: translateY(-4px);
              box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
              background: #f1c40f;
            }
            .modal-disabled-btn {
              width: 100%;
              padding: 16px;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: rgba(255, 255, 255, 0.3);
              border-radius: 14px;
              font-size: 14px;
              font-weight: 600;
            }

            @media (max-width: 768px) {
              .modal-root {
                padding: 15px;
              }
              .modal-visual {
                height: 200px;
              }
              .modal-info {
                padding: 20px 25px;
              }
              .modal-title {
                font-size: 26px;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
