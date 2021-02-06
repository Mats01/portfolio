
import React from 'react';


import {
  NavLink
} from "react-router-dom";


function Menu() {
  return (
    <div className="main_aside">
      <div className="asside_wrapper" >

        <h4>NAVIGATION</h4>
        <nav role="navigation" className="navbar">
          <ul className="nav navbar-nav">
            <li>
              <NavLink activeClassName="selected_link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_link" to="/stories">Stories</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_link" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_link" to="/books">Book notes</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_link" to="/weekly">Weekly LIFO</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}
export default Menu;