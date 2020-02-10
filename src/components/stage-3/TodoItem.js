import React from 'react'
import { connect } from 'react-redux'
import actionTypes from '../redux/actions'
import DeleteButton from './DeleteButton'

const style = {
  display: 'flex',
}

const getLiStyle = (isCompleted) => ({
  width: '100px',
  marginRight: '20px',
  textDecoration: isCompleted ? 'line-through' : 'none'
})

const TodoItem = ({ todo, onTodoClick }) => (
  <div style={style}>
    <li
      onClick={() => onTodoClick(todo.text)}
      style={getLiStyle(todo.completed)}
    >
      {todo.text}
    </li>
    <DeleteButton text={todo.text} />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (text) =>
    dispatch({
      type: actionTypes.CHANGE_TODO,
      payload: { text }
    })
})

export default connect(null, mapDispatchToProps)(TodoItem)
