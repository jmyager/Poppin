import React from "react";
import "./FriendCard.css";

import { fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}



const FriendCard = props => (
<StyleRoot>

 
  <div className="container" style={styles.fadeInDown}>

    <div className="votingBox">
        <i className="fas fa-chevron-up size"onClick={() => props.votedUp(props.id)}></i>
          <p className="card-text voteCount">{props.countShown}</p>
        <i className="fas fa-chevron-down size" onClick={() => props.votedDown(props.id)}></i>
    </div>

    <div className="story">
      <img className="icon"src={props.image} /> 
    </div>
    
    <ul>
      <p>{props.name}</p>
      <p>{props.address}</p>
    </ul>

  </div>
  </StyleRoot>


);

export default FriendCard;
