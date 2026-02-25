import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    LayoutDashboard,
    Search,
    Settings,
    PlusCircle,
    FileText,
    Home,
    LogOut,
} from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"
import { useAuthStore } from "@/store/auth"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const navItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Settings, label: "Settings" },
]

const libraryItems = [
    { icon: FileText, label: "Notes" },
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: PlusCircle, label: "New Page" },
]

export function Sidebar({ className }: SidebarProps) {
    const logout = useAuthStore((s) => s.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        logout()
        navigate("/signin")
    }

    return (
        <div className={cn(
            "pb-6 w-60 border-r border-border/50 bg-card/50 backdrop-blur-sm h-screen md:flex flex-col hidden",
            className
        )}>
            {/* Brand */}
            <div className="px-6 py-6 mb-2">
                <h1 className="font-display text-xl font-bold tracking-tight text-foreground">
                    RE<span className="text-[#d4a053]">BRAIN</span>
                </h1>
                <div className="w-8 h-px bg-[#d4a053]/40 mt-3" />
            </div>

            {/* Navigation */}
            <div className="flex-1 px-3">
                <div className="mb-6">
                    <p className="px-3 mb-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                        Navigate
                    </p>
                    <div className="space-y-0.5">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-[#d4a053]/5 transition-colors"
                                >
                                    <item.icon className="mr-3 h-4 w-4 opacity-60" />
                                    {item.label}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-border/50 mb-6" />

                <div>
                    <p className="px-3 mb-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                        Library
                    </p>
                    <div className="space-y-0.5">
                        {libraryItems.map((item) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-[#d4a053]/5 transition-colors"
                                >
                                    <item.icon className="mr-3 h-4 w-4 opacity-60" />
                                    {item.label}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-3 pt-4 border-t border-border/50 space-y-2">
                <div className="flex items-center justify-between px-3">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                        Theme
                    </span>
                    <ThemeToggle />
                </div>
                <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-sm font-normal text-muted-foreground hover:text-destructive transition-colors"
                        onClick={handleLogout}
                    >
                        <LogOut className="mr-3 h-4 w-4 opacity-60" />
                        Sign Out
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
