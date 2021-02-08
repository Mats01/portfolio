
import React from 'react';

import './Menu.css'

import {
  NavLink
} from "react-router-dom";


function Menu() {

  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    handleResize()
  }, [])

  function handleResize() {
    if (window.innerWidth <= 900) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }


  window.addEventListener('resize', handleResize)


  return (
    <div className="main_aside">
      <div id="nav_hamburger" onClick={() => { setVisible(true) }}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      { visible &&


        <div className="asside_wrapper" >
          <div className="change" id="nav_hamburger" onClick={() => { setVisible(false) }}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>

          <h4>NAVIGATION</h4>
          <nav role="navigation" className="navbar">
            <ul className="nav navbar-nav">
              <li>
                <NavLink onClick={handleResize} activeClassName="selected_link" to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink onClick={handleResize} activeClassName="selected_link" to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink onClick={handleResize} activeClassName="selected_link" to="/books">Book notes</NavLink>
              </li>
              <li>
                <NavLink onClick={handleResize} activeClassName="selected_link" to="/weekly">Weekly LIFO</NavLink>
              </li>
            </ul>
          </nav>

        </div>
      }

    </div>
  )
}
export default Menu;