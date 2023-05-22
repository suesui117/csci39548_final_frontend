import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AllEmployeesView.css';

const AllEmployeesView = (props) => {
  const { deleteEmployee } = props;

  if (!props.allEmployees.length) {
    return (
      <div className="all-employees-container">
        <p className="no-employees-message">There are no employees.</p>
        <Link to={`/newemployee`}>
          <button className="add-employee-button">Add New Employee</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="all-employees-container">
      
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + ' ' + employee.lastname;
        
        return (
         
         <div key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              <h1 className="employee-name">{name}</h1>
            </Link>
            
            <p style={{ color: 'orange' }} className="employee-department"> {employee.department}</p>
            <button className="delete-button" onClick={() => deleteEmployee(employee.id)}>
              Delete
            </button>
          </div>
        );
      })}

      <Link to={`/newemployee`}>
        <button className="add-employee-button">Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
