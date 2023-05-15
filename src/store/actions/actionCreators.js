import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All instructors
export const fetchAllInstructors = (instructors) => {
  return {
    type: at.FETCH_ALL_INSTRUCTORS,
    payload: instructors,
  };
};

//Single instructor
export const fetchInstructor = (instructor) => {
  return {
    type: at.FETCH_INSTRUCTOR,
    payload: instructor,
  };
};

//All Tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks,
  };
};

export const addTask = (task) => {
  return {
    type: at.ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId,
  };
};


export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task,
  };
};

//Single Task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task,
  };
};