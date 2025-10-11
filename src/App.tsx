import './App.css'
import { Button } from './components/button'
import { useState } from 'react'
import { Card } from './components/card'
import { PlusIcon } from './icons/plus'
import { ShareIcon } from './icons/shareicon'
import { CreateContentModal } from './components/createContentModal'
import { Sidebar } from './components/sidebar'
import { Xicon } from './icons/Xicon'
import { YoutubeIcon } from './icons/YoutubeIcon'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
 return <div> 
            <Sidebar/>
            <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)}/>

              <div className='flex justify-end'>
                <Button onClick={()=>{setModalOpen(true)}} size="md" variant="primary" text = "Add Content" startIcon={<PlusIcon/>} />
                <Button size="md" variant="secondary" text = "Share" startIcon={<ShareIcon/>}/>
              </div>
              <div className='flex flex-wrap justify-center h-auto'>
                <Card title="ZYX" link="https://www.youtube.com/watch?v=o7CHV8Osx-M" type="youtube" StartIcon={<YoutubeIcon/>} EndIcon={<ShareIcon/>}/>
                <Card title="twitter" link="https://publish.twitter.com/?url=https://twitter.com/0xzrf/status/1976903851686199590" type="twitter" StartIcon={<Xicon/>} EndIcon={<ShareIcon/>}/>
              </div>
        </div>
};

export default App
