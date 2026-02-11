import { useRef, useState } from "react";
import "../styles/TaskInput.css";

export default function TaskInput( { tasks, setTasks, windowWidth } ) {
  
  const [warning, setWarning] = useState("");

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

    const currentDateFormatted = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`; 

    const currentDate = new Date(currentDateFormatted);
    const inputDate = new Date(newDate);

    const currentTime = [new Date().getHours(), new Date().getMinutes()];
    
    if (newTask === "" || newTime === "" || newDate === "") {
      
      setWarning("Please fill in all fields with valid values");
      warningRef.current.classList.remove("off");
      warningRef.current.setAttribute("aria-hidden", "false");

      const timeoutId = setTimeout(() => {
        warningRef.current.classList.add("off");
        warningRef.current.setAttribute("aria-hidden", "true");
        clearTimeout(timeoutId);
      }, 3000);

      return;

    } else if (inputDate.getTime() < currentDate.getTime()) {

      setWarning("Please select a future date");
      warningRef.current.classList.remove("off");
      warningRef.current.setAttribute("aria-hidden", "false");

      const timeoutId = setTimeout(() => {
        warningRef.current.classList.add("off");
        warningRef.current.setAttribute("aria-hidden", "true");
        clearTimeout(timeoutId);
      }, 3000);

      return;

    } else if (inputDate.getTime() === currentDate.getTime()) {
      if (newTime[0] < currentTime[0] || (newTime[0] === currentTime[0] && newTime[1] <= currentTime[1])) {

        setWarning("Please select a future time");
        warningRef.current.classList.remove("off");
        warningRef.current.setAttribute("aria-hidden", "false");

        const timeoutId = setTimeout(() => {
          warningRef.current.classList.add("off");
          warningRef.current.setAttribute("aria-hidden", "true");
          clearTimeout(timeoutId);
        }, 3000);

        return;
      }
    }
    setTasks([...tasks, { task: newTask,
                          time: newTime,
                          date: newDate,
                          key: crypto.randomUUID() }]);
    taskRef.current.value = "";
    timeRef.current.value = "";
    dateRef.current.value = "";
  }
  
  return (
    <>
      <section aria-label="Task Input" className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          aria-label="Add a new task"
          ref={taskRef} />
        {windowWidth <= 480 && (

          <>
            <div className="mobile-inputs">
              <input 
                type="time"
                aria-label="Add task time"
                ref={timeRef} />
              <input 
                type="date"
                aria-label="Add task date"
                ref={dateRef} />
              <button onClick={addTask} className="add-task-button">Add Task</button>
            </div>
          </>
        )}
        {(windowWidth > 480 && windowWidth <= 1000) && (
          <div className="tablet-inputs">
            <input 
              type="time"
              aria-label="Add task time"
              ref={timeRef} />
            <input 
              type="date"
              aria-label="Add task date"
              ref={dateRef} />
            <button onClick={addTask} className="add-task-button">Add Task</button>
          </div>
        )}
        {windowWidth > 1000 && (
          <>
            <input 
              type="time"
              aria-label="Add task time"
              ref={timeRef} />
            <input 
              type="date"
              aria-label="Add task date"
              ref={dateRef} />
            <button onClick={addTask} className="add-task-button">Add Task</button>
          </>
        )}
      </section>
      <div className="warning off" ref={warningRef} aria-hidden="true" role="alert" aria-live="assertive">
        <p>{warning}</p>
      </div>
    </>
  );
}