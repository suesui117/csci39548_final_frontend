import { Link } from "react-router-dom";
import "./AllTasksView.css";

const AllTasksView = (props) => {
  let { tasks, deleteTask } = props;

  if (!tasks.length) {
    return (
      <div className="all-tasks-container">
        <p className="no-tasks-message">There are no tasks.</p>
        <Link to={`/newtask`}>
          <button className="add-task-button">Add New Task</button>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to={`/task/${task.id}`}>
                <h1 style={{ color: "orange" }} className="task-name">{description}</h1>
              </Link>
              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "10px" }}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
      <Link to={`/newtask`}>
        <button className="add-task-button">Add New Task</button>
      </Link>
    </div>
  );
};

export default AllTasksView;
