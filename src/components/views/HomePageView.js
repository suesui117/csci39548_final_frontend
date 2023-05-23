import { Link } from 'react-router-dom';
import './HomePageView.css';
import './styles.css';


const HomePageView = () => {
  return (
    <div className="scrollable">
      <h1 style={{ color: 'orange' }}>CSCI39548 Web Development Final Project</h1>
      <h2 style={{ color: 'orange' }}>CRUD: Employee Management System</h2>
      
      <Link to="/employees" className="link-blue">All Employees</Link>
      <br /><br />
      <Link to="/tasks" className="link-blue">All Tasks</Link>
    </div>
  );    
}



export default HomePageView;
