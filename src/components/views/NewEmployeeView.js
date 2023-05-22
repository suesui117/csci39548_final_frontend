import React from 'react';
import './NewEmployeeView.css';

const NewEmployeeView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2>New Employee</h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="formLabel">First Name:</label>
          <input type="text" name="firstname" className="formInput" onChange={(e) => handleChange(e)} />

          <label className="formLabel">Last Name:</label>
          <input type="text" name="lastname" className="formInput" onChange={(e) => handleChange(e)} />

          <label className="formLabel">Department:</label>
          <input type="text" name="department" className="formInput" onChange={(e) => handleChange(e)} />

          <button style={{fontWeight: 'bold'}} type="submit" className="submitButton">
            Submit
          </button>
        </form>
        {error !== "" && <p className="errorMessage">{error}</p>}
      </div>
    </div>
  );
};

export default NewEmployeeView;
