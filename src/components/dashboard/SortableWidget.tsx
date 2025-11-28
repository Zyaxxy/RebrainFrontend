import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { WidgetCard } from "./WidgetCard"

interface SortableWidgetProps {
    id: string
    title: string
    content: React.ReactNode
}

export function SortableWidget({ id, title, content }: SortableWidgetProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="h-full">
            <WidgetCard title={title}>
                {content}
            </WidgetCard>
        </div>
    )
}
