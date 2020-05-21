import React, { useState } from 'react';
import './AddAPostIt.css'

function AddAPostIt(props) {


    const [text, setText] = useState("");

    function handleTextChange(event){
        setText(event.target.value);
    }

    function handleAddTaskClick(){
        props.addTask(text);
    }


  return (
    <div>
        <form className="form-inline task-input">
            
           
            <input 
            onChange={handleTextChange}
            value={text}
            type="text" 
            className="form-control task-input__input-field add-a-task-input-form" 
            id="taskInput"/>
            
            <button 
            onClick={handleAddTaskClick}
            type="button" 
            className="btn btn-primary add-a-task-button">+</button>
            
        </form> 

     
    </div>
    
  );
}

export default AddAPostIt;