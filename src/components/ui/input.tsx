import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const MotionInput = motion.input

    return (
      <MotionInput
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-border bg-background/50 px-4 py-2.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a053]/30 focus-visible:border-[#d4a053]/40 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        whileFocus={{ scale: 1.003 } as any}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
        {...(props as any)}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
