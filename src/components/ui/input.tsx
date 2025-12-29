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
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all",
          className
        )}
        ref={ref}
        whileFocus={{ scale: 1.005 } as any}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } as any}
        {...(props as any)}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
