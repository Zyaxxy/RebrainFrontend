import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition } from "@/lib/animation-variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

/**
 * Wrapper component for page transitions
 * Provides consistent enter/exit animations for route changes
 */
export function PageTransition({ children, className }: PageTransitionProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className={className}
        >
            {children}
        </motion.div>
    );
}
