import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  // tasks = [{id: 1, description: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p style={{ color: 'orange' }}>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button style={{ color: 'green' }}>Add New task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link style={{ color: 'orange' }} to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newtask`}>
        <button>Add New task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;