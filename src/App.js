import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";

//Components
import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  EditTaskContainer,
  NewTaskContainer,
  NewEmployeeContainer,
  EditEmployeeContainer
} from './components/containers';



// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App App-background">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/employee/:id" component={EmployeeContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/task/:id" component={TaskContainer} />
        <Route exact path="/edittask/:id" component={EditTaskContainer} />
        <Route exact path="/editemployee/:id" component={EditEmployeeContainer} />
        <Route exact path="/newtask" component={NewTaskContainer} />
        <Route exact path="/newemployee" component={NewEmployeeContainer} />
      </Switch>        
    </div>
  );
}

export default App;

