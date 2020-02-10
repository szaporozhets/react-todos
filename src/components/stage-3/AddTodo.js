import React, { useState } from 'react'
import { connect } from 'react-redux'
import actionTypes from '../redux/actions'
import { style } from './style'

const AddTodo = ({ onAddTodoClick }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => setInputValue(e.target.value)
  const handleKeyPress = (e) => e.key === 'Enter' && inputValue && handleClick()
  const handleClick = () => {
    onAddTodoClick(inputValue);
    setInputValue('');
  }

  return (
    <>
      <input
        style={style}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={inputValue}
      />
      <button
        style={style}
        onClick={handleClick}
      >
        Add Todo
      </button>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onAddTodoClick: (text) =>
    dispatch({
      type: actionTypes.ADD_TODO,
      payload: [{
        text,
        completed: false
      }]
    }),
})

export default connect(null, mapDispatchToProps)(AddTodo)
