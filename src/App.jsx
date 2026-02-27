import { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [task, setTask] = useState("") 

  

  return (
    <>
    <div className="bg-black h-screen flex justify-center py-10">
      <Todo />
    </div>
      

    </>
  )
}

export default App
