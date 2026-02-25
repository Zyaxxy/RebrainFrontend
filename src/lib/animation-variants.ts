import type { Variants } from "framer-motion";

/**
 * Page transition — cinematic fade
 */
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 12,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Stagger container — slower, more cinematic
 */
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.25,
        },
    },
};

/**
 * Stagger item — smooth slide up
 */
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 16,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Slide in from left — for split-screen auth branding panel
 */
export const slideInLeft: Variants = {
    initial: {
        opacity: 0,
        x: -40,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Slide in from right — for split-screen auth form
 */
export const slideInRight: Variants = {
    initial: {
        opacity: 0,
        x: 40,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Card hover/tap — refined lift
 */
export const cardVariants: Variants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.015,
        y: -3,
        transition: {
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    tap: {
        scale: 0.985,
    },
};

/**
 * Button animations — crisp
 */
export const buttonVariants = {
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    tap: {
        scale: 0.96,
        transition: {
            duration: 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Input focus animations
 */
export const inputVariants: Variants = {
    initial: {
        scale: 1,
    },
    focus: {
        scale: 1.005,
        transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/**
 * Error shake animation
 */
export const shakeVariants: Variants = {
    initial: {
        x: 0,
    },
    shake: {
        x: [-8, 8, -8, 8, -4, 4, 0],
        transition: {
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1],
        },
    },
};

/**
 * Modal backdrop — smooth
 */
export const backdropVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: [0.42, 0, 1, 1],
        },
    },
};

/**
 * Modal content — spring physics
 */
export const modalVariants: Variants = {
    initial: {
        scale: 0.92,
        opacity: 0,
        y: 16,
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 28,
            stiffness: 350,
        },
    },
    exit: {
        scale: 0.92,
        opacity: 0,
        y: 16,
        transition: {
            duration: 0.2,
            ease: [0.42, 0, 1, 1],
        },
    },
};

/**
 * Fade in
 */
export const fadeIn: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: [0.42, 0, 1, 1],
        },
    },
};

/**
 * Scale for icons / small elements
 */
export const scaleVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1,
            ease: [0.42, 0, 0.58, 1],
        },
    },
};

/**
 * Grid stagger
 */
export const gridContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.15,
        },
    },
};

export const gridItem: Variants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        y: 16,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
