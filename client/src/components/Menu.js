import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={() => props.filterAll()}>Show All (default)</li>
      <li onClick={() => props.filterBars()}>Bars Only</li>
      <li onClick={() => props.filterNightclubs()}>Nightclubs Only</li>
      <li onClick={() => props.sortDescending()}>Descending (default)</li>
      <li onClick={() => props.sortAscending()}>Ascending</li>
      <li><a className="nav-link" href="/account">My Account</a></li>
    </ul>
  </div>
);
