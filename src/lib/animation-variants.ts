import type { Variants } from "framer-motion";

/**
 * Page transition animations
 */
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/**
 * Stagger container for child elements
 */
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Stagger item (child) animations
 */
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/**
 * Card hover and tap animations
 */
export const cardVariants: Variants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.02,
        y: -4,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.98,
    },
};

/**
 * Button animations
 */
export const buttonVariants = {
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
            ease: "easeInOut",
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
        scale: 1.01,
        transition: {
            duration: 0.2,
            ease: "easeOut",
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
        x: [-10, 10, -10, 10, -5, 5, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

/**
 * Modal backdrop animation
 */
export const backdropVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
};

/**
 * Modal content animation with spring physics
 */
export const modalVariants: Variants = {
    initial: {
        scale: 0.9,
        opacity: 0,
        y: 20,
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
        },
    },
    exit: {
        scale: 0.9,
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
};

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
};

/**
 * Scale animation for icons and small elements
 */
export const scaleVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1,
            ease: "easeInOut",
        },
    },
};

/**
 * Grid item stagger animation
 */
export const gridContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

export const gridItem: Variants = {
    initial: {
        opacity: 0,
        scale: 0.9,
        y: 20,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};
