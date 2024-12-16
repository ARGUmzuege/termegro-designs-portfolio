import { cubicBezier } from "framer-motion";

// Premium easing functions
export const customEasing = {
  smooth: cubicBezier(0.6, 0.01, -0.05, 0.95),
  elastic: cubicBezier(0.68, -0.6, 0.32, 1.6),
  premium: cubicBezier(0.25, 1, 0.5, 1),
};

// Hero section animations
export const heroAnimations = {
  title: {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: customEasing.smooth,
        staggerChildren: 0.1
      }
    }
  },
  fadeInScale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.elastic
      }
    }
  },
  floatingElement: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

// Card and project animations
export const cardAnimations = {
  hover: {
    scale: 1.05,
    rotate: [0, -1, 1, -1, 0],
    transition: {
      duration: 0.3,
      ease: customEasing.premium
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  },
  flip: {
    initial: { rotateY: 180, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.smooth
      }
    }
  }
};

// Text and content animations
export const textAnimations = {
  wordByWord: {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  },
  highlight: {
    initial: { backgroundSize: "0% 100%" },
    animate: {
      backgroundSize: "100% 100%",
      transition: {
        duration: 1,
        ease: customEasing.smooth
      }
    }
  },
  typewriter: {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "linear"
      }
    }
  }
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeUp: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.smooth
      }
    }
  },
  scaleIn: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: customEasing.elastic
      }
    }
  },
  rotateIn: {
    initial: { rotate: -180, opacity: 0 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: customEasing.premium
      }
    }
  }
};

// Particle effects
export const particleEffects = {
  sparkle: {
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  },
  burst: {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: 2,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
};

// Loading and transition animations
export const loadingAnimations = {
  dots: {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
}; 