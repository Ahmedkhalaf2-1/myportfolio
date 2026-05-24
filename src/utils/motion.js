/**
 * Premium Motion System
 * Easing: cubic-bezier(0.22, 1, 0.36, 1)
 */

export const transitions = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: transitions,
};

export const fadeIn = {
  initial: { opacity: 0, filter: 'blur(4px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  transition: transitions,
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const revealOnScroll = {
  initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.2 },
  transition: transitions,
};

export const hoverScale = {
  whileHover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } },
  whileTap: { scale: 0.98 },
};
