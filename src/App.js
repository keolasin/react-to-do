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
      ],
      newTodoDescription: ''
    };
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos })
    console.log(index);
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription , isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

  handleChange(event){
    this.setState({ newTodoDescription: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key = {index} description = {todo.description} isCompleted = {todo.isCompleted} toggleComplete = {
              ()=> this.toggleComplete(index)
            }/>
          )}
        </ul>
        <form onSubmit = { (event) => this.handleSubmit(event)}>
          <input type ="text" value={this.state.newTodoDescription} onChange = { (event) => this.handleChange(event) } />
          <input type ="submit" />
        </form>
      </div>
    );
  }
}

export default App;
