import React from 'react'
import { connect } from 'react-redux'
import actionTypes from '../redux/actions'
import { style } from './style'

export const DeleteButton = ({ text, onDeleteTodo }) => {
  const onClick = (e, text) => {
    e.preventDefault()
    onDeleteTodo(text)
  }

  return (
    <button
      style={style}
      onClick={(e) => onClick(e, text)}
    >
      Delete
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (text) =>
    dispatch({
      type: actionTypes.DELETE_TODO,
      payload: { text }
    })
  })

export default connect(null, mapDispatchToProps)(DeleteButton)
