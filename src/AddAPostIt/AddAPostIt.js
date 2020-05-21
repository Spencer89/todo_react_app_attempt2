import React from 'react';
import './AddAPostIt.css'

function AddAPostIt() {
  return (
      
    <div>
        <form className="form-inline task-input">
            
           
            <input type="text" className="form-control task-input__input-field add-a-task-input-form" id="taskInput" placeholder="Create another post-it..."/>
            
            <button type="submit" className="btn btn-primary add-a-task-button">+</button>
            
        </form> 

     
    </div>
    
  );
}

export default AddAPostIt;