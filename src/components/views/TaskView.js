import { Link } from "react-router-dom";
import "./TaskView.css";

const TaskView = (props) => {
  const { task } = props;
  // a new variable completionStatus is declared based on the value of task.isComplete. 
  // If task.isComplete is true=completed, or Incompleted. 
  const completionStatus = task.isComplete ? "Completed" : "Incomplete";

  return (
    <div className="task-view">
      <h1 className="task-name">{task.description}</h1>
      
      <h3 className="task-priority">
        <span style={{ fontSize: '20px', marginRight: '5px' }}>Priority:</span>
        <span style={{ color: 'orange' }}>{task.priority}</span>
      </h3>

      <h3 className="task-priority">
        <span style={{ fontSize: '20px', marginRight: '5px' }}>Completion status:</span>
        <span style={{ color: 'orange' }}>{completionStatus}</span>
      </h3>

      {task.employee ? (
        <h3>
          <span style={{ color: 'pink' }}>Assigned Employee: </span>
          <Link style={{ color: 'orange' }} to={`/employee/${task.employee.id}`}> {task.employee.firstname + " " + task.employee.lastname} </Link>
        </h3>
              ) : (
        <h3 style={{ color: 'orange' }}>
          Staff
        </h3>
      )}

      <div>
        {Array(7).fill(<br />)}
      </div>
      <h3>
      <Link className="task-button" to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <br/>
      <Link className="task-button" to={`/tasks`}>View all tasks</Link>
      </h3>
    </div>
  );
};

export default TaskView;
