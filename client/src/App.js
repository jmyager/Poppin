import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
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
    venues:[],
    totalScore: 0,
    message: "Thanks for voting!"
  };

  componentDidMount = () => {
    // Ajax for all venues
    fetch("https://localhost:3001/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({venues: result})
      }
    )
    // $.ajax({
    //   method: "GET",
    //   url: "/"
    // })
    // .then(function (data) {
    //   console.log(data);
    //   this.setState({ venues: data })
    // })
  }

  votedUp = id => {
    // Increase the total score
    this.increaseScore();

    // Make ajax call to increase Score for venue
    const url = "https://localhost:3001/api/increaseScore/" + id
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
      }
    )
    // $.ajax({
    //   method: "PUT",
    //   url: "/api/increaseScore/" + id,
    // })
    //   // With that done
    //   .then(function (data) {
    //     // Log the response
    //     console.log(data);
    //     // Empty the notes section
    //   });
  };

  votedDown = id => {
    // Decrease the total score
    this.decreaseScore();

    // Make ajax call to decrease score for venue
    const url = "https://localhost:3001/api/increaseScore/" + id
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
      }
    )
    // $.ajax({
    //   method: "PUT",
    //   url: "/api/decreaseScore/" + id,
    // })
    //   // With that done
    //   .then(function (data) {
    //     // Log the response
    //     console.log(data);
    //     // Empty the notes section
    //   });
  }

  increaseScore = () => {
    this.setState({ totalScore: this.state.totalScore + 1 })
  }

  decreaseScore = () => {
    this.setState({ totalScore: this.state.totalScore - 1 })
  }



  render() {
    return (
      <div>
        <div className="background">
          <Wrapper>
            <Header />
            {this.state.venues.map(venue => (
              <FriendCard
                selectCard={this.selectCard}
                id={venue.id}
                key={venue.id}
                name={venue.name}
                image={venue.image}
                occupation={venue.occupation}
                location={venue.location}
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
