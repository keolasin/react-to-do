import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>

        <input type="checkbox" checked={this.props.isCompleted} onChange ={this.props.toggleComplete}/>

        <span>{this.props.description}</span>

        {/* delete button with eventListener 'onClick' assigned to props.deleted (which is the anonymous function that calls for the deleteToDo method )*/}
        <button onClick={this.props.deleted}>Delete</button>
      </li>
    );

  }
}

export default ToDo;
