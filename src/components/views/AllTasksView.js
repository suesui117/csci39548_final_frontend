import { Link } from "react-router-dom";
import "./AllTasksView.css";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  // tasks = [{id: 1, description: "hello"}]
  if (!tasks.length) {
    return (
    <div className="all-tasks-container">
      <p className="no-tasks-message">There are no tasks.</p>
      <Link to={`/newtask`}>
        <button className="add-task-button">Add New task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className="all-tasks-container">
      
      {tasks.map((task) => {
        let description = task.description;
        
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1 className="task-name">{description}</h1>
          </Link>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newtask`}>
        <button className="add-task-button">Add New task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;