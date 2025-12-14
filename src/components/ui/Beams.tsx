import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Beams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="h-full w-full absolute inset-0 pointer-events-none">
                <svg
                    className="w-full h-full opacity-40 scale-150 rotate-[20deg]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[...Array(20)].map((_, i) => (
                        <motion.path
                            key={i}
                            d={`M-20 ${10 + i * 5} C 30 ${-10 + i * 5}, 70 ${80 + i * 5}, 120 ${20 + i * 5}`}
                            stroke={`url(#gradient${i % 2 === 0 ? 1 : 2})`}
                            strokeWidth="0.2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 0],
                                opacity: [0, 1, 0],
                                pathOffset: [0, 1, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};
