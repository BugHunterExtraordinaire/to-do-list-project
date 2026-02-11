import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

export default function TaskList( { toDos, setToDos } ) {
  function changePosition(index, direction) {
    const newToDos = [...toDos];
    const oldIndex = index;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= toDos.length) return;
    [newToDos[oldIndex], newToDos[newIndex]] = [newToDos[newIndex], newToDos[oldIndex]];
    setToDos(newToDos);
  }
  return (
    <div className="task-list">
      {toDos.map(({task, time, date, key}, index) => (
        <TaskItem key={key} 
                  task={task} 
                  time={time}
                  date={date}
                  index={index}
                  changePosition={changePosition}
                  toDos={toDos}
                  setToDos={setToDos} />
      ))}
    </div>
  );
}