import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
}

const Menu = () => (
  <div
    style={{
      background: '#6d2f9c',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link style={linkStyle} activeStyle={{ color: "#00e2ff" }} to="/">Home</Link>
      </li>
      <li>
        <Link style={linkStyle} activeStyle={{ color: "#00e2ff" }} to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Menu
