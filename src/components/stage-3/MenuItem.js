import React from 'react'
import { connect } from 'react-redux'
import actionTypes from '../redux/actions'
import { style } from './style'

const getStyle = (isBold) => ({
  ...style,
  ...{
    width: '30%',
    fontWeight: isBold ? 'bold' : 'normal'
  }
})

const MenuItem = ({ item, onClick, selected }) => (
  <button
    onClick={() => onClick(item)}
    style={getStyle(item === selected)}
  >
    {item}
  </button>
)

const mapStateToProps = (state) => ({
  selected: state.menu.selected
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (text) =>
    dispatch({
      type: actionTypes.CHANGE_MENU,
      payload: { selected: text }
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
