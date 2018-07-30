import React from "react";
import Nav from "../../components/Nav";
import "./account.css";

class Account extends React.Component {
  state = {
    username: "jmyager",
    userScore: 1160,
  };

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
                <img className="img-thumbnail bioImg" src="http://byrnenixon.com/wp-content/uploads/2017/07/placeholder-bio.png" alt="account profile" />
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
