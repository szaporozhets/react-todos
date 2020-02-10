import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { todo, onClick } = this.props;

    return (
      <li
        onClick={() => onClick(todo.text)}
        style={{
          textDecoration:
          todo.completed ? 'line-through' : 'none'}}
    >{todo.text}</li>
    )
  }
}

export default Todo;