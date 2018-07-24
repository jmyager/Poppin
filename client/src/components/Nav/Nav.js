import React from "react";
// import "./Nav.css";


const Nav = props => (
  <nav className="navbar navbar-expand-sm bg-light sticky-top">

    <a className="navbar-brand" href="/"><h1>Poppin</h1></a>
    <p className="nav-item">What's poppin' tonight?</p>

    <h6 className="nav-item mx-auto">Raleigh's Poppin Score: {props.totalScore}</h6>

    <ul className="navbar-nav ml-auto">

      <li className="nav-item dropdown">
        <button className="btn btn-outline-primary nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter</button>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item" onClick={() => props.filterAll()}>Show All (default)</a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item" onClick={() => props.filterBars()}>Bars Only</a>
          <a href="#" className="dropdown-item" onClick={() => props.filterNightclubs()}>Nightclubs Only</a>
        </div>
      </li>

      <li className="nav-item dropdown">
      <button className="btn btn-outline-primary nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort</button>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item" onClick={() => props.sortDescending()}>Descending (default)</a>
          <a href="#" className="dropdown-item" onClick={() => props.sortAscending()}>Ascending</a>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">My Account</a>
      </li>

    </ul>

  </nav>
);

export default Nav;
