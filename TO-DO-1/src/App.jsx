import { useState } from 'react'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoInput/>
      <TodoList/>
    </>
  )
}

export default App
