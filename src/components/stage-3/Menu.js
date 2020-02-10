import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'

const menuStyle = { display: 'block' }

const Menu = ({ menu }) => (
  <div style={menuStyle}>
    {menu.map((item, index) => (
      <MenuItem
        item={item}
        key={`MenuItem${index}`}
      />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  menu: state.menu.items
})

export default connect(mapStateToProps)(Menu)
