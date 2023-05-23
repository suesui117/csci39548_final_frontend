import './NewEmployeeView.css'; // using the same css styles as NewEmployeeView.css

const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2>
            New Task
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="formLabel">Description: </label>
          <input type="text" name="description" className="formInput" onChange ={(e) => handleChange(e)} />

          <label className="formLabel">Priority: </label>
          <input type="text" name="priority" className="formInput" onChange={(e) => handleChange(e)} />

          <label className="formLabel">EmployeeId: </label>
          <input type="text" name="employeeId" className="formInput" onChange={(e) => handleChange(e)} />

          <button style={{fontWeight: 'bold'}} type="submit" className="submitButton">
            Submit
          </button>
        </form>
        {error !== "" && <p className="errorMessage">{error}</p>}
        </div>
      </div>
    
  )
}

export default NewTaskView;