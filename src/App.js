import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over \n Score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  winGame= () => {
    if(this.state.score === this.state.friends.length){
      alert(`Winner! Click to Play Again!`)
    }
    
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
          
        } else {
          this.gameOver();
        }
      }
    });
  }



  render() {
    return (
      <Wrapper>
        <Title>
        <Header score={this.state.score} highScore={this.state.highScore}>Futurama Clicky-Game</Header>
        </Title>
     
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
