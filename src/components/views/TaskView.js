import { Link } from "react-router-dom";
import "./TaskView.css"

const TaskView = (props) => {
  const { task } = props;
  return (
    <div className="task-view">
      <h1 className="task-name">{task.description}</h1>
      
      {task.employee ? <h2 style={{ color: 'orange' }} className="task-employee"> {task.employee.firstname + " " + task.employee.lastname}</h2>: <h2 style={{ color: 'orange' }} className="task-employee">staff</h2>}
      
      <Link className="task-button" to={`/edittask/${task.id}`}> Edit task information </Link>
      <br/>
      <Link className="task-button" to={`/tasks`}> View all tasks </Link>
    
    </div>
  );

};

export default TaskView;