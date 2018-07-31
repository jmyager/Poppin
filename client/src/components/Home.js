import React, { Component } from 'react';

import './Home.css';
import Nav from './Nav';
import FriendCard from "./FriendCard";
import Wrapper from "./Wrapper";
import $ from "jquery";

import withAuthorization from './withAuthorization';
/* import { db } from '../firebase'; */

let all = [];
let bars = [];
let nightclubs = [];
let placesObj = {};
let filterState = "all";
let sortState = "desc";


class HomePage extends Component {
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
        this.setState({ ...this.state, places: data })
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
    this.organizeCards();
  }

  // Filter places by bars only
  filterBars = () => {
    filterState = "bars";
    this.organizeCards();
  }

  // Filter places by nightclubs only
  filterNightclubs = () => {
    filterState = "nightclubs";
    this.organizeCards();
  }

  // Sort places by descending order (default)
  sortDescending = () => {
    sortState = "desc";
    this.organizeCards();
  }

  // Sort places by ascending order
  sortAscending = () => {
    sortState = "asc";
    this.organizeCards();
  }

  organizeCards = () => {
    const filterCheck = filterState;
    const sortCheck = sortState;

    if (filterCheck === "all" && sortCheck === "desc") {
      this.setState({ places: placesObj.all })
      console.log("Organize check 1")
    }
    else if (filterCheck === "all" && sortCheck === "asc") {
      const allAscPlaces = this.state.places.reverse();
      this.setState({ places: allAscPlaces })
      console.log("Organize check 2")
    }
    else if (filterCheck === "bars" && sortCheck === "desc") {
      const barsDescPlaces = placesObj.bars.reverse();
      this.setState({ places: barsDescPlaces });
      console.log("Organize check 3")
    }
    else if (filterCheck === "bars" && sortCheck === "asc") {
      const barsAscPlaces = placesObj.bars.reverse();
      this.setState({ places: barsAscPlaces });
      console.log("Organize check 4")
    }
    else if (filterCheck === "nightclubs" && sortCheck === "desc") {
      const nightclubsDescPlaces = placesObj.nightclubs.reverse();
      this.setState({ places: nightclubsDescPlaces })
      console.log("Organize check 5")
      console.log(placesObj.nightclubs);

    }
    else if (filterCheck === "nightclubs" && sortCheck === "asc") {
      const nightclubsAscPlaces = placesObj.nightclubs.reverse();
      this.setState({ places: nightclubsAscPlaces });
      console.log("Organize check 6")
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
      .then(() => {
        this.getAll();
      })
       
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
    .then(() => {
      this.getAll();
    })
     
};

  // Increase the city's local total score
  increaseScore = () => {
    this.setState({ totalScore: this.state.totalScore + 1 })
  }

  // Decrease the city's local total score
  decreaseScore = () => {
    this.setState({ totalScore: this.state.totalScore - 1 })
  }



  render() {
    return (
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
    );
  }
}




const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);