import './App.css'
import { Button } from './components/button'
import { useState } from 'react'
import { Card } from './components/card'
import { PlusIcon } from './icons/plus'
import { ShareIcon } from './icons/shareicon'
import { CreateContentModal } from './components/createContentModal'
function App() {
  const [modalOpen, setModalOpen] = useState(true);
 return <div className='p-4'>
            <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)}/>

              <div className='flex justify-end'>
                <Button onClick={()=>{setModalOpen(true)}} size="md" variant="primary" text = "Add Content" startIcon={<PlusIcon/>} />
                <Button size="md" variant="secondary" text = "Share" startIcon={<ShareIcon/>}/>
              </div>
              <div className='flex flex-wrap justify-center gap-4'>
                <Card title="ZYX" link="https://www.youtube.com/watch?v=o7CHV8Osx-M" type="youtube"/>
                <Card title="twitter" link="https://twitter.com/Utkxrsh_Jaiswal/status/1964249422411293002" type="twitter"/>
              </div>
        </div>
};

export default App
