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
        <motion.div variants={staggerItem} className="mb-10 flex justify-between items-end">
          <div>
            <div className="w-8 h-px bg-[#d4a053]/50 mb-4" />
            <h1 className="font-display text-4xl font-bold tracking-tight mb-2 text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground text-sm">
              Welcome back to your Second Brain. Here's your curated workspace.
            </p>
          </div>
          <div className='flex gap-3'>
            <Button
              onClick={() => { setModalOpen(true) }}
              variant="default"
              className="text-sm"
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Content
            </Button>
            <Button variant="secondary" className="text-sm">
              <ShareIcon className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </motion.div>

        <motion.div variants={staggerItem}>
          {contents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-px bg-border mb-6" />
              <p className="font-display text-xl text-muted-foreground mb-2">
                Nothing here yet
              </p>
              <p className="text-sm text-muted-foreground/60 mb-6 max-w-xs">
                Start building your second brain by saving your favorite content from across the web.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                variant="default"
                className="text-sm"
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add your first item
              </Button>
            </div>
          ) : (
            <DraggableGrid items={contents} />
          )}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
