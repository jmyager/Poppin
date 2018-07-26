import React from "react";
import FriendCard from "../../components/FriendCard";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import "./home.css";
import $ from "jquery";

let all = [];
let bars = [];
let nightclubs = [];
let placesObj = {};
let filterState = "all";
let sortState = "desc";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      totalScore: 500,
    }
  }

  // When page loads
  componentDidMount = () => {
    // run the get all to retrieve database data, then sort the data into seperate arrays
    this.getAll();
  };

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
        all = data;
        bars = data.filter((place) =>
          place.type === "bar");
        nightclubs = data.filter((place) =>
          place.type === "nightclub");
        return placesObj = { all: all, bars: bars, nightclubs: nightclubs };
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Filter places by default (no filter)
  filterAll = () => {
    filterState = "all"
    // const newFilter = "all";
    // this.setState({ filter: newFilter },
    this.organizeCards();
  }

  // Filter places by bars only
  filterBars = () => {
    filterState = "bars";
    // const newFilter = "bars";
    // this.setState({ filter: newFilter },
    this.organizeCards();
  }

  // Filter places by nightclubs only
  filterNightclubs = () => {
    filterState = "nightclubs";
    // const newFilter = "nightclubs";
    // this.setState({ filter: newFilter },
    this.organizeCards();
  }

  // Sort places by descending order (default)
  sortDescending = () => {
    sortState = "desc";
    // const newSort = "desc";
    // this.setState({ sort: newSort },
    this.organizeCards();
  }

  // Sort places by ascending order
  sortAscending = () => {
    sortState = "asc";
    // const newSort = "asc";
    // this.setState({ sort: newSort },
    this.organizeCards();
  }
 
  organizeCards = () => {
    const filterCheck = filterState;
    const sortCheck = sortState;

    if (filterCheck === "all" && sortCheck === "desc") {
      this.setState({ places: placesObj.all })
      console.log("filter check 1")
    }
    else if (filterCheck === "all" && sortCheck === "asc") {
      const allAscPlaces = this.state.places.reverse();
      this.setState({ places: allAscPlaces })
      console.log("filter check 2")
    }
    else if (filterCheck === "bars" && sortCheck === "desc") {
      this.setState({ places: placesObj.bars });
      console.log("filter check 3")
    }
    else if (filterCheck === "bars" && sortCheck === "asc") {
      const barsAscPlaces = placesObj.bars.reverse();
      this.setState({ places: barsAscPlaces });
      console.log("filter check 4")
    }
    else if (filterCheck === "nightclubs" && sortCheck === "desc") {
      this.setState({ places: placesObj.nightclubs })
      console.log("filter check 5")

    }
    else if (filterCheck === "nightclubs" && sortCheck === "asc") {
      const nightclubsAscPlaces = placesObj.nightclubs.reverse();
      this.setState({ places: nightclubsAscPlaces });
      console.log("filter check 6")
    }
    else {
      console.log("no organize check was made");
    }
  }




  // Increment the place's score in the database
  votedUp = id => {
    // Increase the total score
    this.increaseScore();
    // Make ajax call to increase Score for venue
    $.ajax({
      method: "PUT",
      url: "/api/increaseScore/" + id,
    })
      .then((data) => {
        console.log(data);
        alert("Thank you for voting!");
        this.getAll();
      });
  };

  // Decrement the place's score in the database
  votedDown = id => {
    // Decrease the total score
    this.decreaseScore();
    // Make ajax call to decrease score for venue
    $.ajax({
      method: "PUT",
      url: "/api/decreaseScore/" + id,
    })
      .then((data) => {
        console.log(data);
        alert("Thank you for voting!");
        this.getAll();
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

export default Home;
