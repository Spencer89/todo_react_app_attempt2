import React from 'react';
import './OutstandingPostItCount.css'

function OutstandingPostItCount(props) {
  return (
    
    <div className = "outstanding-post-it-count">
               <h3>You have {props.count} completed post it notes</h3>            
    </div>    
    
  );
}

export default OutstandingPostItCount;