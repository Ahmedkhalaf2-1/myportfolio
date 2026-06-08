import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: ''
  })
  
  const [showOptional, setShowOptional] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleTextChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const selectOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: prev[field] === value ? '' : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setFormData({
      message: '',
      name: '',
      email: '',
      projectType: '',
      budget: '',
      timeline: ''
    })
    setTimeout(() => setSent(false), 4000)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-ambient-glow" />
      <div className="contact-heading-glow" />

      <div className="container">
        
        {/* ── Section Header ── */}
        <motion.div 
          className="contact-header-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-label">
            <span>Get In Touch</span>
          </div>
          <h2 className="display-sm contact-hero-title">
            Have a Project <span className="gold-text">in Mind?</span>
          </h2>
          <p className="contact-hero-intro">
            Let's discuss how we can turn your idea into a polished digital experience.
          </p>
        </motion.div>

        {/* ── Contact Grid Layout ── */}
        <div className="contact-layout-grid">
          
          {/* LEFT: Compact Form */}
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="conversational-form">
              
              {/* STEP 1: Message */}
              <div className="form-step-block">
                <div className="step-num-tag">Step 01</div>
                <label className="step-label" htmlFor="msg-textarea">Tell me about your project...</label>
                <div className="textarea-container">
                  <textarea
                    id="msg-textarea"
                    name="message"
                    required
                    rows={3}
                    placeholder="Describe your idea or goals..."
                    value={formData.message}
                    onChange={handleTextChange}
                    className="conv-textarea"
                  />
                  <div className="textarea-border-focus" />
                </div>
              </div>

              {/* STEP 2 & 3: Inline Fields on Desktop */}
              <div className="form-inline-fields">
                {/* STEP 2: Name */}
                <div className="form-step-block">
                  <div className="step-num-tag">Step 02</div>
                  <label className="step-label" htmlFor="name-input">Your Name</label>
                  <div className="input-container">
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      placeholder="What should I call you?"
                      value={formData.name}
                      onChange={handleTextChange}
                      className="conv-input"
                    />
                    <div className="input-border-focus" />
                  </div>
                </div>

                {/* STEP 3: Email */}
                <div className="form-step-block">
                  <div className="step-num-tag">Step 03</div>
                  <label className="step-label" htmlFor="email-input">Email Address</label>
                  <div className="input-container">
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      placeholder="Where should I reply?"
                      value={formData.email}
                      onChange={handleTextChange}
                      className="conv-input"
                    />
                    <div className="input-border-focus" />
                  </div>
                </div>
              </div>

              {/* COLLAPSIBLE ACCORDION FOR OPTIONAL DETAILS */}
              <div className="optional-details-accordion">
                <button
                  type="button"
                  onClick={() => setShowOptional(!showOptional)}
                  className="accordion-toggle-btn"
                >
                  <span>Optional Project Details</span>
                  <motion.span 
                    className="accordion-toggle-icon"
                    animate={{ rotate: showOptional ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {showOptional && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.35 }, opacity: { duration: 0.2, delay: 0.05 } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3 }, opacity: { duration: 0.15 } } }}
                      className="accordion-content-overflow"
                    >
                      <div className="accordion-content-inner">
                        {/* Project Type */}
                        <div className="pills-group">
                          <span className="pills-group-label">Project Type</span>
                          <div className="pills-row">
                            {['Web App', 'Mobile App', 'Business System', 'Design System'].map(t => (
                              <button
                                type="button"
                                key={t}
                                onClick={() => selectOption('projectType', t)}
                                className={`pills-item ${formData.projectType === t ? 'pills-item--active' : ''}`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget */}
                        <div className="pills-group">
                          <span className="pills-group-label">Budget Range</span>
                          <div className="pills-row">
                            {['< $5k', '$5k - $15k', '$15k+'].map(b => (
                              <button
                                type="button"
                                key={b}
                                onClick={() => selectOption('budget', b)}
                                className={`pills-item ${formData.budget === b ? 'pills-item--active' : ''}`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="pills-group">
                          <span className="pills-group-label">Estimated Timeline</span>
                          <div className="pills-row">
                            {['< 1 Month', '1 - 3 Months', '3+ Months'].map(tm => (
                              <button
                                type="button"
                                key={tm}
                                onClick={() => selectOption('timeline', tm)}
                                className={`pills-item ${formData.timeline === tm ? 'pills-item--active' : ''}`}
                              >
                                {tm}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ACTION BUTTONS ROW */}
              <div className="form-actions-row">
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className={`btn-send-message ${sending ? 'btn-send-message--sending' : ''} ${sent ? 'btn-send-message--sent' : ''}`}
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                >
                  {sent ? 'Message Sent!' : sending ? 'Sending...' : 'Send Message'}
                </motion.button>

                <motion.a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-schedule-call"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                >
                  Schedule a Call
                </motion.a>
              </div>

            </form>
          </div>
          
          {/* RIGHT: Compact Info Panel */}
          <motion.div 
            className="contact-info-side"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="editorial-info-wrap">
              
              {/* Based In */}
              <div className="info-editorial-block">
                <span className="editorial-label">Based In</span>
                <span className="editorial-value">Egypt</span>
              </div>

              {/* Building */}
              <div className="info-editorial-block">
                <span className="editorial-label">Building</span>
                <ul className="editorial-list">
                  <li>Web &amp; Mobile Apps</li>
                  <li>Business Systems &amp; Products</li>
                </ul>
              </div>

              {/* Available For */}
              <div className="info-editorial-block">
                <span className="editorial-label">Available For</span>
                <ul className="editorial-list">
                  <li>Freelance, Remote &amp; Collaborations</li>
                </ul>
              </div>

              {/* Find Me On */}
              <div className="info-editorial-block">
                <span className="editorial-label">Find Me On</span>
                <div className="editorial-social-links">
                  {[
                    { name: 'LinkedIn', href: 'https://linkedin.com/in/ahmed' },
                    { name: 'Behance', href: 'https://behance.net/ahmed' },
                    { name: 'GitHub', href: 'https://github.com/ahmed' }
                  ].map(social => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-social-link"
                      whileHover={{ x: 4, color: 'var(--gold-light)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
