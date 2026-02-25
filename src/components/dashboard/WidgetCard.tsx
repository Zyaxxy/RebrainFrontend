import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WidgetCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children: React.ReactNode
}

export function WidgetCard({ title, children, className, ...props }: WidgetCardProps) {
    return (
        <Card className={cn("h-full gold-border-top", className)} {...props}>
            <CardHeader className="pb-2">
                <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
