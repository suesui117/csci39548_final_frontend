
const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: 'orange'}}>
            New Task
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'orange', fontWeight: 'bold'}}>description: </label>
          <input type="text" name="description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'orange', fontWeight: 'bold'}}>priority: </label>
          <input type="text" name="priority" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'orange', fontWeight: 'bold'}}>employeeId: </label>
          <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button style={{color:'green', fontWeight: 'bold'}} type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error!=="" && <p>{error}</p>}
        </div>
      </div>
    
  )
}

export default NewTaskView;