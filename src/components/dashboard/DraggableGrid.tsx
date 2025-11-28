import { useEffect, useState } from "react"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from "@dnd-kit/sortable"
import { SortableWidget } from "./SortableWidget"
import { WidgetCard } from "./WidgetCard"
import { ExternalLink } from "lucide-react"

interface Widget {
    _id?: string
    id?: string
    title: string
    content?: string
    link?: string
    type?: string
}

interface DraggableGridProps {
    items: Widget[]
}

export function DraggableGrid({ items }: DraggableGridProps) {
    const [widgets, setWidgets] = useState<Widget[]>(items)
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        setWidgets(items);
    }, [items]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    function handleDragStart(event: any) {
        setActiveId(event.active.id)
    }

    function handleDragEnd(event: any) {
        const { active, over } = event

        if (active.id !== over.id) {
            setWidgets((items) => {
                const oldIndex = items.findIndex((item) => (item._id || item.id) === active.id)
                const newIndex = items.findIndex((item) => (item._id || item.id) === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }

        setActiveId(null)
    }

    const renderContent = (widget: Widget) => {
        if (widget.type === "youtube" && widget.link) {
            return (
                <iframe
                    className="w-full aspect-video rounded-md"
                    src={widget.link.replace("watch", "embed").replace("?v=", "/")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            )
        }
        if (widget.type === "twitter" && widget.link) {
            return (
                <blockquote className="twitter-tweet">
                    <a href={widget.link}></a>
                </blockquote>
            )
        }
        return <p>{widget.content}</p>
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={widgets.map(w => w._id || w.id || "")} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {widgets.map((widget) => (
                        <SortableWidget
                            key={widget._id || widget.id}
                            id={widget._id || widget.id || ""}
                            title={widget.title}
                            content={
                                <div className="flex flex-col gap-2">
                                    {widget.link && (
                                        <a href={widget.link} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 self-end">
                                            <ExternalLink className="h-3 w-3" /> Open
                                        </a>
                                    )}
                                    {renderContent(widget)}
                                </div>
                            }
                        />
                    ))}
                </div>
            </SortableContext>
            <DragOverlay>
                {activeId ? (
                    <WidgetCard
                        title={widgets.find(w => (w._id || w.id) === activeId)?.title || ""}
                        className="opacity-80 cursor-grabbing"
                    >
                        {/* Simplified preview */}
                        Preview
                    </WidgetCard>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}
