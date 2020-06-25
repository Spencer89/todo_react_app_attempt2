import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import PostIt from "./PostIt/PostIt"
import AddAPostIt from './AddAPostIt/AddAPostIt';
import RemainingPostItCount from './RemainingPostItCount/RemainingPostItCount';
import OutstandingPostItCount from './OutstandingPostItCount/OutstandingPostItCount';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function App() {
  const [tasks, setTasks] = useState([
    // { text: "Clean the kitchen surfaces", completed: true, id: uuidv4() },
    // { text: "Sort out Dads' Fathers' Day present", completed: false, id: uuidv4() },
    // { text: "Email manager re: student election outcome", completed: false, id: uuidv4() },
    // { text: "Complete ILM qualification", completed: false, id: uuidv4() },
    // { text: "Mow the back garden", completed: true, id: uuidv4() },
    // { text: "Batch cook carrot and lentil soup", completed: false, id: uuidv4() },
    // { text: "Visit Al & Jo (from a safe distance!)", completed: false, id: uuidv4() }
  ]);

  useEffect(() => {
    axios
    .get('https://sooknj4sac.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then (
      response => {
        setTasks(response.date.tasks);
      }
    )
    .catch(
      (error)=> {
        console.log ('Error fetching data', error)
      })
    
    .finally(() => console.log('Iam done!'))
  }, []);

  const activeTasks = tasks && tasks.filter(task => !task.completed);
  const completedTasks = tasks && tasks.filter(task => task.completed);

  function deleteTask(id) {

    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task
    })
    setTasks(updatedTasks);
  }


  function addTask(text) { 

  const newTask = {
    text: text,
    completed: false,
    id: uuidv4()
  }

  const updatedTasks = [...tasks, newTask]
  setTasks(updatedTasks);
}

  return (

    <div className="App">
      <h1>Get Stuff Done.</h1>
      <div className="form">
        <AddAPostIt addTask={addTask} />
      </div>
      <div className="remaining-post-it-count">
        <RemainingPostItCount count={activeTasks.length} />
      </div>


      <div className="container">
        <div className="row">
          {activeTasks.map(task => <PostIt
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed} />)}






        </div>
      </div>
      <div className="tasks outstanding-post-it-count">
        <OutstandingPostItCount count={completedTasks.length} />
      </div>
      <div className="container">
        <div className="row">
          {completedTasks.map(task => <PostIt
            completeTask={completeTask}
            deleteTask={deleteTask}
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed} />)}

        </div>
      </div>
    </div>

  );
}

export default App;
