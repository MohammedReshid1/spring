// ═══════════════════════════════════════════════════════════════════════════
// WORLD-CLASS ANIMATION LIBRARY - SPRING OF KNOWLEDGE ACADEMY
// Elite design studio quality (Baseborn, Studio Format, MIUX level)
// ═══════════════════════════════════════════════════════════════════════════
//
// STRICT SPECIFICATIONS:
// - All animations run at 60fps (GPU-accelerated transforms)
// - Smooth, intentional micro-interactions for EVERY interactive element
// - Consistent easing: ease-out cubic [0, 0, 0.2, 1]
// - NO jarring, NO trendy, NO AI-generated aesthetics
//
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────
// ANIMATION DURATION CONSTANTS (in seconds)
// ─────────────────────────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.15,      // 150ms - Link hovers, quick interactions
  normal: 0.2,     // 200ms - Button interactions
  medium: 0.3,     // 300ms - Card elevations, image hover
  slow: 0.6,       // 600ms - Scroll reveals, section animations
}

// ─────────────────────────────────────────────────────────────────────────
// EASING FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────

export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1],      // Smooth all-around
  easeOut: [0, 0, 0.2, 1],           // Primary easing (exit animations)
  easeIn: [0.4, 0, 1, 1],            // Entry animations
  spring: { type: "spring", stiffness: 100, damping: 15 },  // Subtle spring physics
}

// ═══════════════════════════════════════════════════════════════════════════
// PRIMARY BUTTON ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Hover: -2px lift + shadow expansion + 8% darker background (200ms)
// Focus: Visible outline, no transform
// Active/Click: Return to 0, slight shadow

export const buttonVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    y: -2,  // Lift up 2px
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
      ease: EASING.easeOut,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CARD ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Hover: -4px elevation + shadow expansion + border fade (300ms)
// Smooth, premium feel

export const cardVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,  // Lift up 4px
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// IMAGE ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Hover: 1.02 scale + brightness +5% (300ms)
// Subtle, never dramatic

export const imageVariants = {
  rest: {
    scale: 1,
    filter: 'brightness(1)',
  },
  hover: {
    scale: 1.02,  // Very subtle zoom
    filter: 'brightness(1.05)',  // +5% brightness
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// LINK/TEXT ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Hover: Color shift + underline slide-in (150ms)
// Fast, responsive

export const linkVariants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 2,  // Slight right shift
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Fade-up on scroll into viewport (600ms)
// Staggered 100ms delay between children

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,  // Start 30px below
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

// ═══════════════════════════════════════════════════════════════════════════
// STAGGER CONTAINERS
// ═══════════════════════════════════════════════════════════════════════════
// For animating multiple children in sequence
// 100ms delay between each child

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 100ms stagger delay
      delayChildren: 0.1,    // Start after 100ms
      duration: DURATION.slow,
    }
  }
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,  // Slight upward motion
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

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Fast, smooth transitions for navigation elements (150ms)

export const navItemVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -1,  // Subtle lift
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut,
    }
  }
}

// Dropdown/submenu animations
export const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeIn,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MODAL/OVERLAY ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Fade + slide for modals and overlays

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeIn,
    }
  }
}

export const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeIn,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// FORM INPUT ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Focus states for inputs (200ms)

export const inputFocusVariants = {
  rest: {
    scale: 1,
  },
  focus: {
    scale: 1.01,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VIEWPORT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════
// Standard config for scroll-triggered animations

export const viewportConfig = {
  once: true,        // Animate only once
  amount: 0.3,       // Trigger when 30% visible
  margin: "0px 0px -100px 0px"  // Start animating slightly before entering viewport
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Creates a custom stagger delay
 * @param {number} delay - Delay in seconds between children
 * @returns {object} Stagger configuration
 */
export const createStaggerContainer = (delay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
      delayChildren: delay,
    }
  }
})

/**
 * Creates a custom fade-up animation
 * @param {number} distance - Distance to move in pixels
 * @param {number} duration - Animation duration in seconds
 * @returns {object} Animation variant
 */
export const createFadeInUp = (distance = 30, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: EASING.easeOut,
    }
  }
})

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT ALL
// ═══════════════════════════════════════════════════════════════════════════

export default {
  // Constants
  DURATION,
  EASING,

  // Component variants
  buttonVariants,
  cardVariants,
  imageVariants,
  linkVariants,
  navItemVariants,
  dropdownVariants,
  modalVariants,
  overlayVariants,
  inputFocusVariants,

  // Scroll animations
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,

  // Config
  viewportConfig,

  // Utilities
  createStaggerContainer,
  createFadeInUp,
}
