import React, { Component } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedMenuItem: 'All'
    }
  }

  menuItems = ['All', 'Active', 'Completed']

  onMenuClick = (value) => {
    this.setState(() => ({ selectedMenuItem: value }))
  }

  render() {
    const { selectedMenuItem } = this.state

    return (
      <p>
        {this.menuItems.map((menuItem, index) => (
          <MenuItem 
            menuItem={menuItem} 
            key={index}
            onClick={this.onMenuClick}
            selectedMenuItem={selectedMenuItem}
          />
        ))}
      </p>
    )
  }
}

export default Menu;