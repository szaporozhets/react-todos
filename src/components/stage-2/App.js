import React from 'react'
import Menu from './Menu'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      selectedMenuItem: 'All'
    }
  }

  onMenuClick = (value) => {
    this.setState(() => ({ selectedMenuItem: value }))
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
    const { todos, selectedMenuItem } = this.state
    const filteredTodos = todos.filter(todo => {
      return (selectedMenuItem === 'All') ||
        (selectedMenuItem === 'Active' && !todo.completed) ||
        (selectedMenuItem === 'Completed' && todo.completed);
    })

    return (
      <div>
        <Menu selectedMenuItem={selectedMenuItem} onClick={this.onMenuClick} />
        <AddTodo onClick={this.onAddTodoClick} />
        <TodoList todos={filteredTodos} onClick={this.onTodoClick} />
      </div>
    );
  }
}

export default App
