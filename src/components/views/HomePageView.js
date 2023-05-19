import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>CSCI39548 Web Development Final Project</h1>
      <h2>Employee Management System</h2>
      
      <Link to={'/employees'} > All Employees </Link>
      <br></br>
      <br></br>
      <Link to={'/tasks'} > All Tasks </Link>
      
    </div>
  );    
}



export default HomePageView;
