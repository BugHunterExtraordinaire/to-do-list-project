import "../styles/ToDoItem.css";

export default function ToDoItem( { task, time, date, index, changePosition, toDos, setToDos } ) {
  const itemIndex = index;
  return (
   <div className="to-do-item">
      <button className={index === 0 ? "up-button disabled" : "up-button"} 
              onClick={() => changePosition(index, -1)}>⬆</button>
      <button className={index === toDos.length - 1 ? "down-button disabled" : "down-button"} 
              onClick={() => changePosition(index, 1)}>⬇</button>
      <span className="item-number">Task {index + 1}:</span>
      <span className="to-do-task">{task}</span>
      <span className="to-do-time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</span>
      <span className="to-do-date">{date}</span>
      <button className="delete-button" 
              onClick={() => setToDos(toDos.filter((toDo, index) => index !== itemIndex))}>
                <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}