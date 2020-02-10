import React, { Component } from 'react'
import Menu from './Menu'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
    }
  }

  onAddTodoClick = (value) => {
    if (!value) return

    const todo = [{
      text: value,
      completed: false
    }]
    const todos = this.state.todos.concat(todo)
    this.setState(() => ({ todos }))
    // this.setState((state) => ({ todos: [ ...state.todos, ...todo ] }))
  }

  onTodoClick = (value) => {
    const todos = this.state.todos.map(todo => {
      if (todo.text !== value) {
        return todo;
      }
      return { 
        ...todo, 
        completed: !todo.completed 
      }
    })

    this.setState(() => ({ todos }))
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <Menu />
        <AddTodo onClick={this.onAddTodoClick} />
        <TodoList todos={todos} onClick={this.onTodoClick} />
      </div>
    )
  }
}

export default App
