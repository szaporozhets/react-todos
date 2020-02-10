import React, { Component } from 'react'

class MenuItem extends Component {
  render() {
    const { menuItem, onClick, selectedMenuItem } = this.props

    return (
      <span>
        <button 
          onClick={() => onClick(menuItem)} 
          style={{
            fontWeight:
            selectedMenuItem === menuItem ? 'bold' : 'normal'}}
        >{menuItem}</button>
        {' '}
      </span>
    )
  }
}

export default MenuItem