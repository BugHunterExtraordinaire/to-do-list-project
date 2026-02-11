import "../styles/TaskItem.css";

export default function TaskItem( { task, time, date, index, changePosition, tasks, setTasks, windowWidth } ) {
  const itemIndex = index;
  return (
    <section className="task-item" aria-label={`Task ${index + 1}`}>
      {windowWidth <= 480 && (
        <>
          <div className="mobile-priority-buttons">

            <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                    onClick={() => changePosition(index, -1)}
                    aria-label={`Move task ${index + 1} up`}>⬆</button>

            <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"}
                    onClick={() => changePosition(index, 1)}
                    aria-label={`Move task ${index + 1} down`}>⬇</button>

          </div>

          <div className="mobile-task-info">

            <p className="item-number" aria-hidden="true">Task {index + 1}</p>

            <div className="task-details">

              <p className="task-name" aria-label="Task is">{task}</p>
              <p className="task-time" aria-label="at time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</p>
              <p className="task-date" aria-label="at date">{date}</p>

            </div>

          </div>
          
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}
                  aria-label={`Delete task ${index + 1}`}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
      {(windowWidth > 480 && windowWidth <= 560) && (
        <>
          <div className="mobile-priority-buttons">
            <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                    onClick={() => changePosition(index, -1)}
                    aria-label={`Move task ${index + 1} up`}>⬆</button>
            <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"}
                    onClick={() => changePosition(index, 1)}
                    aria-label={`Move task ${index + 1} down`}>⬇</button>
          </div>
          <p className="item-number" aria-hidden="true">Task {index + 1}:</p>
          <p className="task-name" aria-label="Task is">{task}</p>
          <p className="task-time" aria-label="at time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</p>
          <p className="task-date" aria-label="at date">{date}</p>
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}
                  aria-label={`Delete task ${index + 1}`}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
      {windowWidth > 560 && (
        <>
          <button className={index === 0 ? "up-button disabled priority-button" : "up-button priority-button"} 
                  onClick={() => changePosition(index, -1)}
                  aria-label={`Move task ${index + 1} up`}>⬆</button>
          <button className={index === tasks.length - 1 ? "down-button disabled priority-button" : "down-button priority-button"} 
                  onClick={() => changePosition(index, 1)}
                  aria-label={`Move task ${index + 1} down`}>⬇</button>
          <p className="item-number" aria-hidden="true">Task {index + 1}:</p>
          <p className="task-name" aria-label="Task is">{task}</p>
          <p className="task-time" aria-label="at time">{time[0] <= 12 ? `${String(time[0]).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} AM` : `${String(Number(time[0]) - 12).padStart(2, '0')}:${String(time[1]).padStart(2, '0')} PM`}</p>
          <p className="task-date" aria-label="at date">{date}</p>
          <button className="delete-button" 
                  onClick={() => setTasks(tasks.filter((task, index) => index !== itemIndex))}
                  aria-label={`Delete task ${index + 1}`}>
                    <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
    </section>
  );
}