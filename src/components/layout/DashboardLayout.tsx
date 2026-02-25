import { Sidebar } from "./Sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-background text-foreground font-body antialiased">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative">
                {/* Subtle noise overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }} />
                <div className="relative z-10 max-w-6xl mx-auto px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
