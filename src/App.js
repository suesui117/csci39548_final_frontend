import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  EditCourseContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllInstructorsContainer} />
        <Route exact path="/employee/:id" component={InstructorContainer} />
        <Route exact path="/tasks" component={AllCoursesContainer} />
        <Route exact path="/newtask" component={NewCourseContainer} />
        <Route exact path="/task/:id" component={CourseContainer} />
        <Route exact path="/edittask/:id" component={EditCourseContainer} />

      </Switch>        
    </div>
  );
}

export default App;

