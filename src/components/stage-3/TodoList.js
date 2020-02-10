import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

const listStyle = { padding: '20px' }

const TodoList = ({ todos }) => (
  <ul style={listStyle}>
    {todos.map((todo, index) => (
      <TodoItem
        todo={todo}
        key={`TodoItem${index}`}
      />
    ))}
  </ul>
)

const filterTodos = (todos, selectedMenuItem) => todos.filter((todo) => {
  return (selectedMenuItem === 'Active' && !todo.completed) ||
    (selectedMenuItem === 'Completed' && todo.completed) ||
    (selectedMenuItem === 'All');
})

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.menu.selected)
})

export default connect(mapStateToProps)(TodoList)
