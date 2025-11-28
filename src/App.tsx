import DashboardLayout from "@/components/layout/DashboardLayout"
import { DraggableGrid } from "@/components/dashboard/DraggableGrid"

function App() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back to your Second Brain. Here's an overview of your workspace.
        </p>
      </div>
      <DraggableGrid />
    </DashboardLayout>
  )
}

export default App
