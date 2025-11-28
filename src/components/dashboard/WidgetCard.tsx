import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WidgetCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children: React.ReactNode
}

export function WidgetCard({ title, children, className, ...props }: WidgetCardProps) {
    return (
        <Card className={cn("h-full", className)} {...props}>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
