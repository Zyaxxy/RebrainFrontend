import { useState } from "react"
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
}

const initialWidgets: Widget[] = [
    { id: "1", title: "Quick Notes", content: "Remember to check the new design specs." },
    { id: "2", title: "Tasks", content: "3 pending tasks for today." },
    { id: "3", title: "Calendar", content: "Meeting at 2 PM with the team." },
    { id: "4", title: "Reading List", content: "The Pragmatic Programmer" },
    { id: "5", title: "Ideas", content: "App for tracking water intake." },
    { id: "6", title: "Stats", content: "Productivity up by 15%." },
]

export function DraggableGrid() {
    const [widgets, setWidgets] = useState(initialWidgets)
    const [activeId, setActiveId] = useState<string | null>(null)

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
