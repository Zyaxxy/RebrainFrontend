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

interface Widget {
    id: string
    title: string
    content: string
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
                const oldIndex = items.findIndex((item) => item.id === active.id)
                const newIndex = items.findIndex((item) => item.id === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }

        setActiveId(null)
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={widgets} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {widgets.map((widget) => (
                        <SortableWidget key={widget.id} id={widget.id} title={widget.title} content={widget.content} />
                    ))}
                </div>
            </SortableContext>
            <DragOverlay>
                {activeId ? (
                    <WidgetCard
                        title={widgets.find(w => w.id === activeId)?.title || ""}
                        className="opacity-80 cursor-grabbing"
                    >
                        {widgets.find(w => w.id === activeId)?.content}
                    </WidgetCard>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}
