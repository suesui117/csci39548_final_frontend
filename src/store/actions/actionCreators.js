import * as at from './actionTypes';

// DONE
// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */


// All Employees
export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees,
  };
};



// Single Employee
export const fetchEmployee = (employee) => {
  return {
    type: at.FETCH_EMPLOYEE,
    payload: employee,
  };
};



// SUE - NEW FEATURE: ADD EMPLOYEE!!!
export const addEmployee = (employee) => {
  return {
    type: at.ADD_EMPLOYEE,
    payload: employee,
  };
};


// SUE - NEW FEATURE: DELETE EMPLOYEE!!
export const deleteEmployee = (employeeId) => {
  return {
    type: at.DELETE_EMPLOYEE,
    payload: employeeId,
  };
};



// SUE - NEW FEATURE: EDIT EMPLOYEE!!
export const editEmployee = (employee) => {
  return {
    type: at.EDIT_EMPLOYEE,
    payload: employee,
  };
};



// All Tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks,
  };
};


// Single Task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task,
  };
};

// Add a Task
export const addTask = (task) => {
  return {
    type: at.ADD_TASK,
    payload: task,
  };
};


// Delete an existing Task
export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId,
  };
};


// Edit a Task
export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task,
  };
};


