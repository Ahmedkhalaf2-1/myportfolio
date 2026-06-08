import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.25,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const shouldReduceMotion = useReducedMotion()

  const activeVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      }
    : variants

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={activeVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
