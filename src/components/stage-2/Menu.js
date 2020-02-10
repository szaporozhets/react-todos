import React from 'react'
import MenuItem from './MenuItem'

class Menu extends React.Component {
  menu = ['All', 'Active', 'Completed']
  
  render() {
    const { selectedMenuItem, onClick } = this.props

    return (
      <p>
        {this.menu.map((menuItem, index) => (
          <MenuItem 
            menuItem={menuItem} 
            key={index}
            selectedMenuItem={selectedMenuItem}
            onClick={onClick}
          />
        ))}
      </p>
    )
  }
}

export default Menu