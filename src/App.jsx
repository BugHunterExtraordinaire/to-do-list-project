import { useState, useEffect } from 'react'
import TaskInput from './assets/components/TaskInput'
import TaskList from './assets/components/TaskList'
import './App.css'

export default function App() {

  const [tasks, setTasks] = useState((() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>Task Managment Dashboard</h1>
      <TaskInput tasks={tasks} setTasks={setTasks} windowWidth={windowWidth} />
      <TaskList tasks={tasks} setTasks={setTasks} windowWidth={windowWidth} />
    </>
  )
}