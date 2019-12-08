import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  padding: '1px 15px',
}

const activeLinkStyle = {
  color: "#00bcd4",
  background: 'white',
  borderRadius: '2px',
  fontWeight: 'bold',
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
        <Link style={linkStyle} activeStyle={activeLinkStyle} to="/">Home</Link>
      </li>
      <li>
        <Link style={linkStyle} activeStyle={activeLinkStyle} to="/blog">Blog</Link>
      </li>
      <li>
        <Link style={linkStyle} activeStyle={activeLinkStyle} to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Menu
