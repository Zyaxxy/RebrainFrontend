import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '../icons/plus'
import { ShareIcon } from '../icons/shareicon'
import { CreateContentModal } from '../components/createContentModal'
import { DraggableGrid } from '../components/dashboard/DraggableGrid'
import DashboardLayout from '../components/layout/DashboardLayout'
import { content } from '../services/api'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    content.getAll().then((res: any) => {
      setContents(res.content);
    }).catch(err => {
      console.error("Failed to fetch content", err);
    });
  }, [modalOpen])

  return (
    <DashboardLayout>
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem} className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back to your Second Brain. Here's an overview of your workspace.
            </p>
          </div>
          <div className='flex gap-2'>
            <Button onClick={() => { setModalOpen(true) }} variant="default">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Content
            </Button>
            <Button variant="secondary">
              <ShareIcon className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </motion.div>
        <motion.div variants={staggerItem}>
          <DraggableGrid items={contents} />
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
