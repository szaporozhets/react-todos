import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const { todos, onClick } = this.props

    return (
      <ul>
        {todos.map((todo, index) => (
          <Todo 
            todo={todo} 
            key={index}
            onClick={onClick} 
          />
        ))}
      </ul>
    )
  }
}

export default TodoList;