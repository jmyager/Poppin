import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
// import axios from "axios";
import $ from "jquery";


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
    places:[],
    totalScore: 0,
    message: "Thanks for voting!"
  };

  componentDidMount = () => {
    // Ajax forplaces
    $.ajax({
      method: "GET",
      url: "/places"
    })
    .then((data) => {
      console.log(data);
      this.setState({ ...this.state, places: data })
      console.log("state " + this.state.places);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  votedUp = id => {
    // Increase the total score
    this.increaseScore();

    // Make ajax call to increase Score for venue
    $.ajax({
      method: "PUT",
      url: "/api/increaseScore/" + id,
    })
      // With that done
      .then(function (data) {
        // Log the response
        console.log(data);
        // Empty the notes section
      });
  };

  votedDown = id => {
    // Decrease the total score
    this.decreaseScore();

    // Make ajax call to decrease score for venue
    $.ajax({
      method: "PUT",
      url: "/api/decreaseScore/" + id,
    })
      // With that done
      .then(function (data) {
        // Log the response
        console.log(data);
        // Empty the notes section
      });
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
            {this.state.places.map(place => (
              <FriendCard
                selectCard={this.selectCard}
                id={place.id}
                key={place.id}
                name={place.name}
                image={place.image}
                occupation={place.occupation}
                location={place.location}
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
