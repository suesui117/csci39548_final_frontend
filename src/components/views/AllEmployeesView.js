import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllEmployeesView = (props) => {
  const { deleteEmployee } = props;

  if (!props.allEmployees.length) {
    return (
      <div>
        <p style={{ color: 'orange', fontWeight: 'bold' }}>There are no employees.</p>
        <Link to="/newemployee">
          <button style={{ marginTop: '10px' }}>Add New Employee</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + ' ' + employee.lastname;

        return (
          <div key={employee.id} style={{ textAlign: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to={`/employee/${employee.id}`}>
                <h1 style={{ color: 'orange', marginRight: '10px' }}>{name}</h1>
              </Link>
              <button onClick={() => deleteEmployee(employee.id)}>
                X
              </button>
            </div>
            <h2 style={{ color: 'pink' }}>{employee.department}</h2>
          </div>
        );
      })}

      <Link to="/newemployee">
        <button style={{ marginTop: '10px' }}>Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
