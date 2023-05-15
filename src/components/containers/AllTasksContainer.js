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
                  tasks={this.props.tasks}
                  deleteTask={this.props.deleteTask}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    alltasks: state.allTasks,
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