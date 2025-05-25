import React, { useEffect } from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

function Menu() {
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="main_aside">
      <div id="nav_hamburger" onClick={() => setVisible(true)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {visible && (
        <div className="asside_wrapper">
          <div className="change" id="nav_hamburger" onClick={() => setVisible(false)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <h4>NAVIGATION</h4>
          <nav role="navigation" className="navbar">
            <ul className="nav navbar-nav">
              <li>
                <NavLink  className={({ isActive }) => isActive ? "selected_link" : ""} to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink  className={({ isActive }) => isActive ? "selected_link" : ""} to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink  className={({ isActive }) => isActive ? "selected_link" : ""} to="/projects">Projects</NavLink>
              </li>
            </ul>
          </nav>

          <footer>
            <h1 className="footer_title">Far</h1>
            <h1 className="footer_title">More</h1>
            <h1 className="footer_title">Different</h1>
            <br />
            <p>Matej Butković<br />
              currently studying @ FER
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Menu;