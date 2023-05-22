
// In Class format
import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllEmployeesThunk, deleteEmployeeThunk } from '../../store/thunks';
import { AllEmployeesView } from '../views';

class AllEmployeesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllEmployees();
  }

  render() {
    // const { allEmployees } = this.props;

    return (

            <div>
                <AllEmployeesView 
                  allEmployees={this.props.allEmployees}
                  deleteEmployee={this.props.deleteEmployee}   
                />
            </div>
    );
  }
}


// Map state to props;
const mapStateToProps = (state) => ({
  allEmployees: state.allEmployees,
});


// Map dispatch to props;
const mapDispatchToProps = (dispatch) => ({
  fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
  deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AllEmployeesContainer);




// ORIGINAL in Function format:
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { fetchAllEmployeesThunk } from "../../store/thunks";
// import { AllEmployeesView } from "../views";

// function AllEmployeesContainer() {
//   const allEmployees = useSelector((state) => state.allEmployees);
//   const dispatch = useDispatch();

//   //replaces componentDidMount
//   useEffect(() => {
//     dispatch(fetchAllEmployeesThunk());
//   }, [dispatch]);

//   return <AllEmployeesView allEmployees={allEmployees} />;
// }

// export default AllEmployeesContainer;




// COPIED FROM ALLTASKSCONTAINER.JS AND SWAPPED WITH KEYWORD EMPLOYEE
// import { Component } from 'react';
// import { connect } from 'react-redux';


// import { 
//   fetchAllEmployeesThunk,
//   deleteEmployeeThunk
// } from '../../store/thunks';

// import AllEmployeesView from '../views/AllEmployeesView';

// class AllEmployeesContainer extends Component {
//     componentDidMount() {
//       this.props.fetchAllTasks();
//     }
//     render(){
//         return(
//             <div>
//                 <AllEmployeesView 
//                   employees={this.props.allEmployees}
//                   deleteTask={this.props.deleteEmployees}   
//                 />
//             </div>
//         )
//     }
// }

// // Map state to props;
// const mapState = (state) => {
//   return {
//     allEmployees: state.allEmployees,
//   };
// };

// // Map dispatch to props;
// const mapDispatch = (dispatch) => {
//   return {
//     fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
//     deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
//   };
// };

// export default connect(mapState, mapDispatch)(AllEmployeesContainer);