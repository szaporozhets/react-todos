import React from 'react'

class Todo extends React.Component {
  render() {
    const { todo, onClick } = this.props

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

export default Todo