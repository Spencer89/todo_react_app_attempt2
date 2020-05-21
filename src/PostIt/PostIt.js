import React from 'react';
import './PostIt.css'

function PostIt(props) {
  return (
    
    <div className = "col-12 col-md-4">
               <p className = {`post-it ${props.completed ? `post-it__completed` : `post-it__remaining`}`}>{props.text}</p>
                
               
                    {!props.completed &&<button type="button" className="btn btn-success done-button">Done</button>}
                    <button type="button" className="btn btn-danger delete-button">Delete</button>
    </div>    
    
  );
}

export default PostIt;