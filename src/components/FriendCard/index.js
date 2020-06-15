import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  <span onClick={() => props.clickCount(props.id)} className="shuffle">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </span>
  );
}

export default FriendCard;
