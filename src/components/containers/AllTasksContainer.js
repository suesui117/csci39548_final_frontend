// Original in class format
import { Component } from 'react';
import { connect } from 'react-redux';


import { 
  fetchAllTasksThunk,
  deleteTaskThunk
} from '../../store/thunks';

import AllTasksView from '../views/AllTasksView';

class AllTasksContainer extends Component {
    componentDidMount() {
      this.props.fetchAllTasks();
    }
    render(){
        return(
            <div>
                <AllTasksView 
                  tasks={this.props.allTasks}
                  deleteTask={this.props.deleteTask}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  };
};

export default connect(mapState, mapDispatch)(AllTasksContainer);





// In Function format
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchAllTasksThunk,
//   deleteTaskThunk
// } from '../../store/thunks';
// import AllTasksView from '../views/AllTasksView';

// const AllTasksContainer = () => {
//   const allTasks = useSelector((state) => state.allTasks);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllTasksThunk());
//   }, [dispatch]);

//   const deleteTask = (taskId) => {
//     dispatch(deleteTaskThunk(taskId));
//   };

//   return (
//     <div>
//       <AllTasksView
//         tasks={allTasks}
//         deleteTask={deleteTask}
//       />
//     </div>
//   );
// };

// export default AllTasksContainer;
