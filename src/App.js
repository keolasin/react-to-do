import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: "Running through the park", isCompleted: true},
        { description: "Swimming at the pool", isCompleted: false},
        { description: "Riding through Marin", isCompleted: false}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key = {index} description = {todo.description} isCompleted = {todo.iscompleted}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
