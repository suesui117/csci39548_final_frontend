import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeView.css';

const EmployeeView = (props) => {
  const { employee, editTask, allTasks } = props;
  let assignedTasks = allTasks.filter(task => task.employeeId === employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId !== employee.id);

  return (
    <div className="employee-view">

      <h1 className="employee-name">{employee.firstname} {employee.lastname} </h1>

      <h2 style={{ color: 'orange' }} className="employee-department"> {employee.department}</h2>

      <div className="task-section">
        <div className="assigned-tasks">
          <h4 className="task-heading">Assigned tasks:</h4>
          {assignedTasks.length === 0 ? (
            <p style={{ color: 'red', fontWeight: 'bold' }}>No assigned tasks to this employee</p>
          ) : (
            assignedTasks.map(task => (
              <div key={task.id}>
                <Link to={`/task/${task.id}`} className="task-link">
                  {task.description}
                </Link>
                <button onClick={() => editTask({ id: task.id, employeeId: null })} className="checkbox">x</button>
              </div>
            ))
          )}
        </div>
        <div className="available-tasks">
          <h4 className="task-heading">Available tasks:</h4>
          {availableTasks.map(task => (
            <div key={task.id}>
              <Link to={`/task/${task.id}`} className="task-link">
                {task.description}
              </Link>
              <button onClick={() => editTask({ id: task.id, employeeId: employee.id })} className="checkbox">+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
