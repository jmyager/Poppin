import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
import Nav from "./components/Nav";
// import Header from "./components/Header";
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
    places: [],
    totalScore: 500,
    message: "Thanks for voting!"
  };

  // When page loads
  componentDidMount = () => {
    this.getAll();
  }


  // Default ajax call to pull all places from database
  getAll = () => {
    $.ajax({
      method: "GET",
      url: "/places"
    })
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, places: data })
        console.log("state " + this.state.places);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Filter places by default (no filter)
  filterAll = () => {
    this.getAll();
  }

  filterBars = () => {
    $.ajax({
      method: "GET",
      url: "/filter-bars"
    })
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, places: data })
        console.log("state " + this.state.places);
      })
      .catch(err => {
        console.log(err);
      })
  }

  filterNightclubs = () => {
    $.ajax({
      method: "GET",
      url: "/filter-nightclubs"
    })
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, places: data })
        console.log("state " + this.state.places);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Sort places by descending order (default)
  sortDescending = () => {
    this.getAll();
  }

  // Sort places by ascending order
  sortAscending = () => {
    $.ajax({
      method: "GET",
      url: "/sort-ascending"
    })
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, places: data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  votedUp = id => {
    // Increase the total score
    const newId = id;
    this.increaseScore();

    // Make ajax call to increase Score for venue
    $.ajax({
      method: "PUT",
      url: "/api/increaseScore/" + newId,
    })
      // With that done
      .then(function (data) {
        // Log the response
        console.log(data);
        console.log("voted Up! (after ajax)");
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
      // <div>
        <div className="background">
          <Nav
            totalScore={this.state.totalScore}
            sortDescending={this.sortDescending}
            sortAscending={this.sortAscending}
            filterAll={this.filterAll}
            filterBars={this.filterBars}
            filterNightclubs={this.filterNightclubs}
          />
          <Wrapper>
            {this.state.places.map(place => (
              <FriendCard
                votedUp={this.votedUp}
                votedDown={this.votedDown}
                id={place._id}
                key={place._id}
                name={place.name}
                countShown={place.countShown}
                image={place.image}
                occupation={place.occupation}
                location={place.location}
              />
            ))}
          </Wrapper>
        </div>
      // </div>
    );
  }
}

export default App;
