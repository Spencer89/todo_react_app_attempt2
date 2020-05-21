import React from 'react';
import './RemainingPostItCount.css'

function RemainingPostItCount(props) {
  return (
    
    <div className = "remaining-post-it-count">
               <h3>You have {props.count} remaining post it notes</h3>            
    </div>    
    
  );
}

export default RemainingPostItCount;