import React from "react";
import "./Nav.css";
import logo from '../images/logo.png';
;

const Nav = props => (

  
  <nav className="bar">>

    


    
  
    <div className="navbar">
          <a href="#" className="dropdown-item" onClick={() => props.filterAll()}>Show All (default)</a>
          <a className="nav-link" href="/account">My Account</a>
          <a href="#" className="dropdown-item" onClick={() => props.filterBars()}>Bars Only</a>
          <a href="#" className="dropdown-item" onClick={() => props.filterNightclubs()}>Nightclubs Only</a>
    </div>

    <div className="navbar2">
    <a href="#" className="dropdown-item" onClick={() => props.sortDescending()}>Popin</a>
      <a href="#" className="dropdown-item" onClick={() => props.sortAscending()}>Not Popin</a>
    </div>
 


  

  </nav>
);

export default Nav;
