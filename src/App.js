import React from 'react';
import './App.css';
import PostIt from "./PostIt/PostIt"
import AddAPostIt from './AddAPostIt/AddAPostIt';

function App() {
  return (

    <div className="App">
        <h1>Get Stuff Done.</h1>
        <div className="form">
        <AddAPostIt />
        </div>
        <h3>You have 5 outstanding post-its</h3>
        <div className="container">
          <div className="row">

            <PostIt text="Mow the grass"/>
            <PostIt text="Visit Allan and Jo"/>
            <PostIt text="Mop the floor"/>
            <PostIt text="Make carrot and corriander soup" />
           <PostIt text="Do the ironing"/>
          </div>
        </div>
        <h3>You have 2 completed post-its</h3>
        <div className="container">
          <div className="row">

            <PostIt text="Clean the bathroom" />
            <PostIt text="Make this week's quiz" />
          </div>
        </div>
    </div>

  );
}

export default App;
