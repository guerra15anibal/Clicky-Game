import React from "react";

const Header = props => (
  <div className="header">
    <div className="title"><h1>{props.children}</h1></div>
    <div className="scores">
      <h1>Score: {props.score} Highscore: {props.highScore}</h1>
    </div>
  </div>
);

export default Header;