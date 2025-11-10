// 🎭 WORLD-CLASS ANIMATION SYSTEM
// Framer Motion animation constants for Spring of Knowledge Academy

// ⏱️ ANIMATION DURATIONS (in seconds)
export const DURATION = {
  fast: 0.15,        // 150ms - Quick link hovers
  normal: 0.2,       // 200ms - Button interactions
  medium: 0.3,       // 300ms - Card hover states
  slow: 0.6,         // 600ms - Scroll reveals
  verySlow: 0.8,     // 800ms - Page transitions
}

// 📈 EASING FUNCTIONS
export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1],           // Default smooth easing
  easeOut: [0, 0, 0.2, 1],                // Sharp start, gentle end
  easeInOut: [0.4, 0, 0.2, 1],            // Gentle both sides
  spring: {                                // Natural spring physics
    type: "spring",
    stiffness: 100,
    damping: 15
  },
}

// 🎯 BUTTON ANIMATIONS
export const buttonVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.0,
    y: -2,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
    }
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
    }
  }
}

// 🃏 CARD ANIMATIONS
export const cardVariants = {
  rest: {
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// 🖼️ IMAGE ANIMATIONS (Reactive)
export const imageVariants = {
  rest: {
    scale: 1,
    filter: 'brightness(1)',
  },
  hover: {
    scale: 1.02,
    filter: 'brightness(1.05)',
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// 📜 SCROLL REVEAL ANIMATIONS
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    }
  }
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    }
  }
}

// 🎪 STAGGER ANIMATIONS (For lists/grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 100ms delay between children
      delayChildren: 0.1,     // Wait 100ms before starting
    }
  }
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    }
  }
}

// 🔗 LINK ANIMATIONS (Text links with underline)
export const linkHover = {
  rest: {
    color: '#1C74BB',
  },
  hover: {
    color: '#155A96',
    x: 2,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut,
    }
  }
}

// 📝 FORM INPUT ANIMATIONS
export const inputFocus = {
  rest: {
    borderColor: '#E0E0E0',
    boxShadow: '0 0 0 0px rgba(28, 116, 187, 0)',
  },
  focus: {
    borderColor: '#1C74BB',
    boxShadow: '0 0 0 3px rgba(28, 116, 187, 0.1)',
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
    }
  }
}

// 🎬 PAGE TRANSITIONS
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.verySlow,
      ease: EASING.smooth,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// 🎯 HOVER SCALE (Subtle)
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// 📊 STAT COUNTER ANIMATIONS
export const statReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.spring,
    }
  }
}

// 🎭 MODAL ANIMATIONS
export const modalBackdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.medium,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.normal,
    }
  }
}

export const modalContent = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: DURATION.normal,
    }
  }
}

// 🎪 VIEWPORT DETECTION SETTINGS
export const viewportOnce = {
  once: true,       // Animate only once when entering viewport
  amount: 0.3,      // Trigger when 30% of element is visible
}

export const viewportRepeat = {
  once: false,      // Animate every time it enters viewport
  amount: 0.5,      // Trigger when 50% visible
}
