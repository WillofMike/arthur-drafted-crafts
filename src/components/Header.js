import React from 'react'
import { NavLink } from 'react-static'

export default () => (
  <header className="header-header">
    <nav className="header-nav">
      <NavLink className="header-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="header-link" to="/about">
        About
      </NavLink>
    </nav>
    <h1 className="header-h1">Drafted Crafts</h1>
    <NavLink className="header-link" to="/furniture">
        Furniture
    </NavLink>
    <NavLink className="header-link" to="/engravings">
        Laser
    </NavLink>
    <NavLink className="header-link" to="/cards">
        Cards
    </NavLink>
  </header>
)
