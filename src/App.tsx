import './App.css'
import { Button } from './components/button'
import { PlusIcon } from './icons/plus'
function App() {
 

  return (
    <>
      <Button startIcon={<PlusIcon />} size="md" variant="primary" text = "Hello" />
      <Button size="md" variant="secondary" text = "World" />
    </>
  )
}

export default App
