import { Link } from "react-router-dom";
import "./TaskView.css";

const TaskView = (props) => {
  const { task } = props;
  const completionStatus = task.isComplete ? "Completed" : "Incomplete";

  return (
    <div className="task-view">
      <h1 className="task-name">{task.description}</h1>
      
      <h3 className="task-priority">
        <span style={{ fontSize: '20px', marginRight: '5px' }}>Priority:</span>
        {task.priority}
      </h3>

      <h3 className="task-priority">
        <span style={{ fontSize: '20px', marginRight: '5px' }}>Completion status:</span>
        {completionStatus}
      </h3>

      {task.employee ? (
        <h2 style={{ color: 'orange' }} className="task-employee">
          {task.employee.firstname + " " + task.employee.lastname}
        </h2>
      ) : (
        <h2 style={{ color: 'orange' }} className="task-employee">
          Staff
        </h2>
      )}

      <Link className="task-button" to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <br/>
      <Link className="task-button" to={`/tasks`}>View all tasks</Link>
    </div>
  );
};

export default TaskView;
