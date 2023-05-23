import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk, fetchAllEmployeesThunk  } from '../../store/thunks';


/*
IMPORTANT: comments regarding implementation details!!
=====================================================
You'll see that we have two ways of interacting with the UI
in order to change the course's instructor

The dropdown menu is straighforward, it's pretty much the same 
as having the input field for the instructorId but allows us
to actually see the available insutrctors as well as their names, 
not just their IDs. We did have to connect to the allInstructors state
from the Redux store, as well as fetchAllInstructors in componentDidMount().
This was done so we could get the other instructors in the database.
We filter out the current instructor from the array at the beginning of 
the render function, and use this array to populate the dropdown menu
options. Because it's part of the form, we don't need to modify the 
handleSubmit function. On redirect to the CourseView we will see the 
updates.

You will see below the form there is another part of the UI that is
also changing the current course's instructor. This structure is similar
to how changing assigned courses is done in the InstrutcorView. There is
a slight drawback to using this approach in this context. When we perform
an EDIT_COURSE action (initiated by calling the editCourseThunk), this action
is sent to the allCourses reducer, not the course reducer. For that reason, 
we will not see the updates in the single course view unless there is another 
call to the fetchCourseThunk. This is done once when we redirect after form
submission, which is why the data is shown without needing to refresh. 
If we want that same functionality within the container, we need to make
a call to fetchCourse after each editCourse. We see that in the onClick
functionality of the buttons controlling that portion of the UI. 

*/

class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "",
          priority: "",
          isComplete: false, // Add isComplete property
          employeeId: null, 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
        // Getting task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.props.fetchEmployees();
        this.setState({
            description: this.props.task.description, 
            priority: this.props.task.priority,
            employeeId: this.props.task.employeeId,
            isComplete: this.props.task.isComplete, // Set isComplete value
        });
      }


    handleCheckboxChange = (event) => {
      const value = event.target.value === "true";
      this.setState({ isComplete: value });
    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSelectChange = event => {
      //handle change for the dropdown menu
      //want to set the instructorId based on the selected choice
      //when the form gets submitted, this is how we can change
      //assigned instructor without having to manually enter in the 
      //instructorId like before
      if (event.target.value === "staff") {
        this.setState({employeeId:null});
      } else {
        this.setState({employeeId: event.target.value})
      }
    }

    handleSubmit = event => {
        event.preventDefault();
        //implementing form validation
        if (this.state.description === "") {
          this.setState({error: "Error: description cannot be empty"});
          return;
        }

        //get new info for course from form input
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            priority: this.state.priority,
            employeeId: this.state.employeeId,
            isComplete: this.state.isComplete, // Add isComplete property
        };
        
        this.props.editTask(task)
        .then(() => {
          // Update component state with new task data
          this.setState({
            description: task.description,
            priority: task.priority,
            employeeId: task.employeeId,
            isComplete: task.isComplete,
            redirect: true,
            redirectId: task.id
          });
        })
        .catch((error) => {
          // Handle error if necessary
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});

    }

    render() {

        let { task, allEmployees, editTask, fetchTask} = this.props;
        // check if the task is true first, if false, prints this helpful message
        if (!task) {
          return <p style={{ color: 'orange', fontWeight: 'bold' }}>No task found.</p>;
        }

        // if true, then assign the task's employeeID.
        let assignedEmployee = task.employeeId;
        // filtering out the current assigned employee to get other employees
        let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);
      

        //go to single task view of the edited task
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }

        return (
        <div className="scrollable">
        <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'orange', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" value={this.state.description || ''} placeholder={task.description} onChange ={(e) => this.handleChange(e)}/>
            <br></br>
            <br></br>

            <label style={{color:'orange', fontWeight: 'bold'}}>Priority: </label>
            <input type="text" name="priority" value={this.state.priority || ''} placeholder={task.priority} onChange={(e) => this.handleChange(e)}/>
            <br></br>
            <br></br>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
              <label style={{ color: 'orange', fontWeight: 'bold', marginRight: '10px' }}>Completion status:</label>
              
              <div>

                <label style={{ marginRight: '10px' }}>
                  <input
                    type="radio"
                    name="isComplete"
                    value="true"
                    checked={this.state.isComplete}
                    onChange={this.handleCheckboxChange}
                    style={{ color: 'orange', fontWeight: 'bold', marginRight: '10px' }}
                  />
                  <span style={{ color: 'green', fontWeight: 'bold' }}>Yes</span>
                </label>
                
                <label>
                  <input
                    type="radio"
                    name="isComplete"
                    value="false"
                    checked={!this.state.isComplete}
                    onChange={this.handleCheckboxChange}
                  />
                  <span style={{ color: 'MediumPurple', fontWeight: 'bold' }}>No</span>
                </label>

              </div>
            
            </div>
            <br></br>

            <select onChange={(e) => this.handleSelectChange(e)}>
              {task.employee!==null ?
                <option value={task.employeeId}>{task.employee.firstname+" (current)"}</option>
              : <option value="staff">Staff</option>
              }
              {otherEmployees.map(employee => {
                return (
                  <option value={employee.id} key={employee.id}>{employee.firstname}</option>
                )
              })}
              {task.employee!==null && <option value="staff">Staff</option>}
            </select>
            

            <button type="submit">
              Submit
            </button>

          </form>
          { this.state.error !=="" && <p>{this.state.error}</p> }

          <br></br>
          {task.employeeId !== null ?
            <div style={{color:'orange', fontWeight: 'bold'}}> Current employee:  
            <Link style={{color:'lightblue', fontWeight: 'bold'}} to={`/employee/${task.employeeId}`}> {task.employee.firstname}</Link>
            <button onClick={async () => {await editTask({id:task.id, employeeId: null});  fetchTask(task.id)}}>Unassign</button>
            </div>
            : <div style={{color:'orange', fontWeight: 'bold'}}> No employee currently assigned </div>
          }
          <br></br>
          
          <div style={{color:'lightgreen', fontWeight: 'bold'}}> Other employees:
          {otherEmployees.map(employee => {
            return (
            <div key={employee.id}>
                <Link to={`/employee/${employee.id}`}>
                  <h4 style={{color:'pink', fontWeight: 'bold'}}>{employee.firstname}</h4>
                </Link>
                <button onClick={async() => {await editTask({id:task.id, employeeId: employee.id}); fetchTask(task.id)}}>Assign this employee</button>
            </div>
            )})
          }
          </div>
        </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      task: state.task,
      allEmployees: state.allEmployees
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
        fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);