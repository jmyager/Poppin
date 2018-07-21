import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  <div
    >
    <div className="row">
      <div className="col">
        <img className="card-img-top img-thumbnail" alt={props.name} src={props.image} />
      </div>
      <div className="col">
        <h5 className="card-title">Bar/Club Name</h5>
        <p className="card-text">Bar/Club Description</p>
      </div>
      <div className="col">
        <p className="card-text">Category, Genre, Etc.</p>
      </div>
      <div className="col">
      <i className="fas fa-arrow-circle-up fa-3x" onClick={() => props.votedUp(props.id)}></i>
      <p className="card-text">{props.score}</p>
      <i className="fas fa-arrow-circle-down fa-3x" onClick={() => props.votedDown(props.id)}></i>
      </div>
    </div>
  </div>
);

export default FriendCard;
