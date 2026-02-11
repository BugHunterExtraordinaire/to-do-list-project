import "../styles/TaskItem.css";

export default function TaskItem( { task, time, date, index, changePosition, tasks, setTasks, windowWidth } ) {
  const itemIndex = index;
  return (
    <div className="task-item">
      {windowWidth <= 480 && (
        <>
          <div className="mobile-priority-buttons">
            <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                    onClick={() => changePosition(index, -1)}>⬆</button>
            <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"}
                    onClick={() => changePosition(index, 1)}>⬇</button>
          </div>
          <div className="mobile-task-info">
            <span className="item-number">Task {index + 1}</span>
            <div className="task-details">
              <span className="task-name">{task}</span>
              <span className="task-time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</span>
              <span className="task-date">{date}</span>
            </div>
          </div>
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
      {windowWidth > 830 && (
        <>
          <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                  onClick={() => changePosition(index, -1)}>⬆</button>
          <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"} 
                  onClick={() => changePosition(index, 1)}>⬇</button>
          <span className="item-number">Task {index + 1}:</span>
          <span className="task-name">{task}</span>
          <span className="task-time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</span>
          <span className="task-date">{date}</span>
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
      {windowWidth >= 830 && (
        <>
          <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                  onClick={() => changePosition(index, -1)}>⬆</button>
          <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"} 
                  onClick={() => changePosition(index, 1)}>⬇</button>
          <span className="item-number">Task {index + 1}:</span>
          <span className="task-name">{task}</span>
          <span className="task-time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</span>
          <span className="task-date">{date}</span>
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
    </div>
  );
}