import React, {useState} from 'react';
import './App.css';
import PostIt from "./PostIt/PostIt"
import AddAPostIt from './AddAPostIt/AddAPostIt';
import RemainingPostItCount from './RemainingPostItCount/RemainingPostItCount';
import OutstandingPostItCount from './OutstandingPostItCount/OutstandingPostItCount';

function App() {
  const [tasks, setTasks] = useState([
    { text:"Clean the kitchen surfaces", completed: true, id: "001" },
    { text:"Sort out Dads' Fathers' Day present", completed: false, id: "002" },
    { text:"Email manager re: student election outcome", completed: false, id: "003" },
    { text:"Complete ILM qualification", completed: false, id: "004" },
    { text:"Mow the back garden", completed: true, id: "005" },
    { text:"Batch cook carrot and lentil soup", completed: false, id: "006"  },
    { text:"Visit Al & Jo (from a safe distance!)", completed: false, id: "007"}
  ]);

  const activeTasks= tasks.filter(task => !task.completed);
  const completedTasks =  tasks.filter(task => task.completed);

  return (
    
    <div className="App">
        <h1>Get Stuff Done.</h1>
        <div className="form">
        <AddAPostIt />
        </div>
        <div className="remaining-post-it-count">
          <RemainingPostItCount count={activeTasks.length}/>
        </div>


        <div className="container">
          <div className="row">
            {activeTasks.map(task=> <PostIt  key={task.text} text = {task.text} completed = {task.completed}/>)}
           
            


             
           
          </div>
        </div>
        <div className="tasks outstanding-post-it-count">
          <OutstandingPostItCount count= {completedTasks.length}/>
        </div>
        <div className="container">
          <div className="row">
          {completedTasks.map(task=> <PostIt key={task.text} text = {task.text} completed = {task.completed}/>)}
        
          </div>
        </div>
    </div>

  );
}

export default App;
