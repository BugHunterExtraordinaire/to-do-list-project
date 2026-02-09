import { useState } from 'react'
import ToDoInput from './assets/components/ToDoInput'
import ToDoList from './assets/components/ToDoList'
import './App.css'

export default function App() {

  const [toDos, setToDos] = useState([]);

  return (
    <>
      <h1>To Do List</h1>
      <ToDoInput toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </>
  )
}