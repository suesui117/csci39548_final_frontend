import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1 style={{color:'orange', fontWeight: 'bold'}}>{task.description}</h1>
      {task.employee ? <h3 style={{color:'orange', fontWeight: 'bold'}}>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3 style={{color:'orange', fontWeight: 'bold'}}>staff</h3>}
      <Link style={{color:'orange', fontWeight: 'bold'}} to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link style={{color:'orange', fontWeight: 'bold'}} to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;