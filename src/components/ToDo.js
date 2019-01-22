import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <input type="checkbox" checked={this.props.isCompleted} onChange ={this.props.toggleComplete}/>
    );
  }
}

export default ToDo;
