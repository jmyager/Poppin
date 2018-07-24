import React from "react";
import Nav from "../../components/Nav";
import "./account.css";
import $ from "jquery";

class Account extends React.Component {
  state = {
    username: "jmyager",
    userScore: 1160,
  };


  // When page loads
//   componentDidMount = () => {
//     this.getAll();
//   }

  // Default ajax call to pull all places from database
//   getAll = () => {
//     $.ajax({
//       method: "GET",
//       url: "/places"
//     })
//       .then((data) => {
//         console.log(data);
//         this.setState({ ...this.state, places: data })
//         console.log("state " + this.state.places);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }




  render() {
    return (
      <div>
        <Nav
          totalScore={this.state.totalScore}
          sortDescending={this.sortDescending}
          sortAscending={this.sortAscending}
          filterAll={this.filterAll}
          filterBars={this.filterBars}
          filterNightclubs={this.filterNightclubs}
        />
        <br />
        <h1 className="text-center">My Account</h1>
        <div className="row">
            <div className="col-4 text-center">
                <img className="img-thumbnail bioImg" src="http://byrnenixon.com/wp-content/uploads/2017/07/placeholder-bio.png" />
                <a href="#">Edit Profile Picture</a>
            </div>
            <div className="col-8">
            <h3>Username: {this.state.username}</h3>
            <h6>Total Score: {this.state.userScore}</h6>
            <div className="bio text-center">
            <p>Bio</p>
            
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Account;
