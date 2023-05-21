import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk, fetchAllTasksThunk } from '../../store/thunks';

class EditEmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      department: '',
      redirect: false,
      error: ''
    };
  }

  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
    this.setState({
      firstname: this.props.employee.firstname,
      lastname: this.props.employee.lastname,
      department: this.props.employee.department
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.firstname === '' || this.state.lastname === '' || this.state.department === '') {
      this.setState({ error: 'Error: All fields must be filled' });
      return;
    }

    const updatedEmployee = {
      id: this.props.employee.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department
    };

    this.props.editEmployee(updatedEmployee);
    this.setState({ redirect: true });
  }

  componentWillUnmount() {
    this.setState({ redirect: false });
  }

  render() {
    const { employee, allTasks, editEmployee, fetchEmployee } = this.props;

    if (this.state.redirect) {
      return (<Redirect to={`/employee/${this.props.match.params.id}`} />)
    }

    return (
      <div>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <br />

          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Submit</button>
        </form>

        {this.state.error !== '' && <p>{this.state.error}</p>}

        {allTasks.length > 0 ? (
          <div>
            <h3>Tasks assigned to {employee.firstname}:</h3>
            <ul>
              {allTasks.map(task => (
                <li key={task.id}>
                  <Link to={`/task/${task.id}`}>{task.description}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No tasks assigned to {employee.firstname}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    fetchAllTasks: () => dispatch(fetchAllTasksThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployeeContainer);





// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect, Link } from 'react-router-dom';

// import { fetchAllEmployeesThunk, fetchEmployeeThunk, editEmployeeThunk  } from '../../store/thunks';


// /*
// IMPORTANT: comments regarding implementation details!!
// =====================================================
// You'll see that we have two ways of interacting with the UI
// in order to change the task's employee

// The dropdown menu is straighforward, it's pretty much the same 
// as having the input field for the employeeId but allows us
// to actually see the available employees as well as their names, 
// not just their IDs. We did have to connect to the allInstructors state
// from the Redux store, as well as fetchAllInstructors in componentDidMount().
// This was done so we could get the other employees in the database.
// We filter out the current employee from the array at the beginning of 
// the render function, and use this array to populate the dropdown menu
// options. Because it's part of the form, we don't need to modify the 
// handleSubmit function. On redirect to the CourseView we will see the 
// updates.

// You will see below the form there is another part of the UI that is
// also changing the current task's employee. This structure is similar
// to how changing assigned tasks is done in the InstrutcorView. There is
// a slight drawback to using this approach in this context. When we perform
// an EDIT_COURSE action (initiated by calling the editCourseThunk), this action
// is sent to the allCourses reducer, not the task reducer. For that reason, 
// we will not see the updates in the single task view unless there is another 
// call to the fetchCourseThunk. This is done once when we redirect after form
// submission, which is why the data is shown without needing to refresh. 
// If we want that same functionality within the container, we need to make
// a call to fetchCourse after each editCourse. We see that in the onClick
// functionality of the buttons controlling that portion of the UI. 

// */

// class EditEmployeeContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           firstname: "", 
//           lastname: "",
//           employeeId: null, 
//           redirect: false, 
//           redirectId: null,
//           error: ""
//         };
//     }

//     componentDidMount() {
//         //getting employee ID from url
//         this.props.fetchTask(this.props.match.params.id);
//         this.props.fetchEmployees();
//         this.setState({
//             firstname: this.props.task.firstname, 
//             lastname: this.props.task.lastname,
//             employeeId: this.props.task.employeeId, 
//         });
//       }

//     handleChange = event => {
//       this.setState({
//         [event.target.name]: event.target.value
//       });
//     }

//     handleSelectChange = event => {
//       //handle change for the dropdown menu
//       //want to set the employeeId based on the selected choice
//       //when the form gets submitted, this is how we can change
//       //assigned employee without having to manually enter in the 
//       //employeeId like before
//       if (event.target.value === "staff") {
//         this.setState({employeeId:null});
//       } else {
//         this.setState({employeeId: event.target.value})
//       }
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         //implementing form validation
//         if (this.state.firstname === "") {
//           this.setState({error: "Error: firstname cannot be empty"});
//           return;
//         }

//         // //get new info for task from form input
//         // let task = {
//         //     id: this.props.task.id,
//         //     firstname: this.state.firstname,
//         //     lastname: this.state.lastname,
//         //     employeeId: this.state.employeeId
//         // };
        
//         // this.props.editTask(task);

//         // this.setState({
//         //   redirect: true, 
//         //   redirectId: this.props.task.id
//         // });

//     }

//     componentWillUnmount() {
//         this.setState({redirect: false, redirectId: null});

//     }

//     render() {
//         let { task, allEmployees, editTask, fetchTask} = this.props;
//         let assignedEmployee = task.employeeId;

//         let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);
      
//         //go to single task view of the edited task
//         if(this.state.redirect) {
//           return (<Redirect to={`/task/${this.state.redirectId}`}/>)
//         }

//         return (
//         <div>
//         <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
//             <label style= {{color:'#11153e', fontWeight: 'bold'}}>Firstname: </label>
//             <input type="text" name="firstname" value={this.state.firstname || ''} placeholder={task.firstname} onChange ={(e) => this.handleChange(e)}/>
//             <br/>

//             <label style={{color:'#11153e', fontWeight: 'bold'}}>Lastname: </label>
//             <input type="text" name="lastname" value={this.state.lastname || ''} placeholder={task.lastname} onChange={(e) => this.handleChange(e)}/>
//             <br/>

//             <select onChange={(e) => this.handleSelectChange(e)}>
//               {task.employee!==null ?
//                 <option value={task.employeeId}>{task.employee.firstname+" (current)"}</option>
//               : <option value="staff">Staff</option>
//               }
//               {otherEmployees.map(employee => {
//                 return (
//                   <option value={employee.id} key={employee.id}>{employee.firstname}</option>
//                 )
//               })}
//               {task.employee!==null && <option value="staff">Staff</option>}
//             </select>
  
//             <button type="submit">
//               Submit
//             </button>

//           </form>
//           { this.state.error !=="" && <p>{this.state.error}</p> }

//           {task.employeeId !== null ?
//             <div> Current employee:  
//             <Link to={`/employee/${task.employeeId}`}>{task.employee.firstname}</Link>
//             <button onClick={async () => {await editTask({id:task.id, employeeId: null});  fetchTask(task.id)}}>Unassign</button>
//             </div>
//             : <div> No employee currently assigned </div>
//           }

//           <div> Other employees
//           {otherEmployees.map(employee => {
//             return (
//             <div key={employee.id}>
//                 <Link to={`/employee/${employee.id}`}>
//                   <h4>{employee.firstname}</h4>
//                 </Link>
//                 <button onClick={async() => {await editTask({id:task.id, employeeId: employee.id}); fetchTask(task.id)}}>Assign this employee</button>
//             </div>
//             )})
//           }
//           </div>
//         </div>
//         )
//     }
// }

// // map state to props
// const mapState = (state) => {
//     return {
//       task: state.task,
//       allEmployees: state.allEmployees
//     };
//   };

// const mapDispatch = (dispatch) => {
//     return({
//         editTask: (task) => dispatch(editEmployeeThunk(task)),
//         fetchTask: (id) => dispatch(fetchEmployeeThunk(id)),
//         fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),

//     })
// }

// export default connect(mapState, mapDispatch)(EditEmployeeContainer);