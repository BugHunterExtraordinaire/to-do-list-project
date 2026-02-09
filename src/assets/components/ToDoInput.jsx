import { useRef } from "react";
import "../styles/ToDoInput.css";

export default function ToDoInput( { toDos, setToDos } ) {
  
  const taskRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);
  const warningRef = useRef(null);

  function addTask() {
    const newTask = taskRef.current.value.trim();
    const newTime = (timeRef.current.value).split(":");
    newTime[0] = Number(newTime[0]);
    newTime[1] = Number(newTime[1]);
    const newDate = dateRef.current.value;
    if (newTask === "" || newTime === "" || newDate === "") {
      warningRef.current.classList.remove("off");
      const timeoutId = setTimeout(() => {
        warningRef.current.classList.add("off");
        clearTimeout(timeoutId);
      }, 3000);
      return;
    }
    setToDos([...toDos, { task: newTask,
                          time: newTime,
                          date: newDate,
                          key: crypto.randomUUID() }]);
    taskRef.current.value = "";
    timeRef.current.value = "";
    dateRef.current.value = "";
  }
  
  return (
    <>
      <div className="to-do-input">
        <input
          type="text"
          placeholder="Add a new task"
          ref={taskRef} />
        <input 
          type="time"
          ref={timeRef} />
        <input 
          type="date"
          ref={dateRef} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="warning off" ref={warningRef}>
        <p>Please fill in all fields to add a task.</p>
      </div>
    </>
  );
}