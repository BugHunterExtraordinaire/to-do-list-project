import { useState } from 'react'
import TaskInput from './assets/components/TaskInput'
import TaskList from './assets/components/TaskList'
import './App.css'

export default function App() {

  const [toDos, setToDos] = useState([]);

  return (
    <>
      <h1>Task Managment Dashboard</h1>
      <TaskInput toDos={toDos} setToDos={setToDos} />
      <TaskList toDos={toDos} setToDos={setToDos} />
    </>
  )
}