import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";

// Help from Will

// export class myComponent extends Component {
//   state = {
//     memory: [1, 4, 3]   
//   }


//   updateMemory(id) {
//       const newMemory = this.state.memory.slice(0);
//       newMemory.push(id);
//       this.setState({
//           memory: newMemory,
//       })
//   }

//   inMemory(id) {
//       return !!this.state.memory.find(m => m === id)
//   }
// }


class App extends React.Component {
  state = {
    friends,
    totalScore: 0,
    message: "Thanks for voting!"
  };

  votedUp = id => {
    this.increaseScore();
    this.updateBar(id);
  };

  votedDown = id => {
    this.decreaseScore();
    this.updateBar(id);
  }

  increaseScore = () => {
    this.setState({ totalScore: totalScore + 1 })
  }

  decreaseScore = () => {
    this.setState({ totalScore: totalScore - 1 })
  }

  updateBar = (id) => {
    // Use id of bar to update the bar's individual score
    // Run check function to redisplay venue tiles based on score
  }

  

  render() {
    return (
      <div>
        <div className="background">
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              selectCard={this.selectCard}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        </div>
      </div>
    );
  }
}

export default App;
