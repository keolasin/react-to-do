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

    // bind() is necessary if we didn't use the anonymous fxn in the prop value on line 63
    // this.deleteToDo = this.deleteToDo.bind(this);
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
    this.setState({ newTodoDescription: event.target.value});
  }

  deleteToDo(deleted){
    // expecting single 'todo' object from the array of objects stored at todos in the state object

    // creating new array that does not contain the deleted row todo object using filter
    const deletedList = this.state.todos.filter(item => item !== deleted);

    // updating the state property 'todos' with the new array of todo objects
    this.setState({todos: deletedList});
  }



  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>

            // passing props to the child ToDo component
            <ToDo key={index}
                  description={todo.description}
                  isCompleted={todo.isCompleted}
                  toggleComplete={()=> this.toggleComplete(index)}
                  deleted={()=>this.deleteToDo(todo)}
            />
            // prop 'deleted' has value of an anonymous function that calls our deleteToDo method, passing an argument of the current 'todo' row item
          )}
        </ul>
        <form onSubmit = { (event) => this.handleSubmit(event)}>
          <input type="text"
                value={this.state.newTodoDescription}
                onChange={ (event) => this.handleChange(event) }
          />
          <input type ="submit" />
        </form>
      </div>
    );
  }
}

export default App;
