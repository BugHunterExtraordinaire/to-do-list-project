import { useState } from 'react'
import TaskInput from './assets/components/TaskInput'
import TaskList from './assets/components/TaskList'
import './App.css'

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <h1>Task Managment Dashboard</h1>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}