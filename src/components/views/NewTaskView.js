import './NewEmployeeView.css'; // using the same css styles as NewEmployeeView.css

const NewTaskView = (props) => {
  const {handleChange, handleSubmit, isComplete, error } = props;
  
  // toggles between yes and no
  /*
  handleCheckboxChange function that toggles the value of isComplete when either of the checkboxes is clicked. 
  This function is called within the onChange event handler of both checkboxes.

  The handleCheckboxChange function in the code is 
  responsible for toggling the value of isComplete when the checkbox is clicked.
  */
  const handleCheckboxChange = () => {
    handleChange({
      target: {
        name: 'isComplete',
        value: !isComplete,
      },
    });
  };

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

          {/* New implementation for Completion Status */}
          <label className="formLabel">Completion status:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="isComplete"
                checked={isComplete}
                onChange={handleCheckboxChange} // when it is clicked, it switches between the checked and unchecked states. 
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="isComplete"
                checked={!isComplete}
                onChange={handleCheckboxChange} // when it is clicked, it switches between the checked and unchecked states. 
              />
              No
            </label>
          </div>
          {/* New implementation for Completion Status ends */}

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