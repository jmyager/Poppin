import React from "react";
// import "./Nav.css";


const Nav = props => (
  <nav className="navbar fixed-bottom">
    <a className="navbar-brand" href="/">
    </a>
    <div className="nav-item mx-auto">
        <h4>{props.message}</h4>
      </div>
    <ul className="navbar-nav">
      <li className="nav-item ml-auto">
        <h3>Score: {props.score}</h3>
      </li>
    </ul>
  </nav>
);

export default Nav;
