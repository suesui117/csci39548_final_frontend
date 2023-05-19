import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deletetask} = props;
  // tasks = [{id: 1, title: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let title = task.title;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deletetask(task.id)}>Delete</button>
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