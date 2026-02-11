import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

export default function TaskList( { tasks, setTasks } ) {
  function changePosition(index, direction) {
    const newTasks = [...tasks];
    const oldIndex = index;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= tasks.length) return;
    [newTasks[oldIndex], newTasks[newIndex]] = [newTasks[newIndex], newTasks[oldIndex]];
    setTasks(newTasks);
  }
  return (
    <div className="task-list">
      { tasks.length === 0 ? (
        <p className="empty-message">All caught up! Enjoy your free time.</p>
      ) : (
        tasks.map(({task, time, date, key}, index) => (
          <TaskItem key={key} 
                    task={task} 
                    time={time}
                    date={date}
                    index={index}
                    changePosition={changePosition}
                    tasks={tasks}
                    setTasks={setTasks} />
      )))}
    </div>
  );
}