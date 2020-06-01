import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/app.css";
import firebase from "firebase";
import { db, auth, storage } from "../firebase/config";

export default class Defi extends Component {
  state = {
    isSignedIn: true,
    challenges: [],
  };

  componentDidMount() {
    db.collection("challenges")
      .get()
      .then((snapshot) => {
        const challenges = [];
        snapshot.docs.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          challenges.push(data);
        });
        this.setState({ challenges });
      })
      .catch((error) => console.log(error));
  }

  displayChallenges(challenges) {
    return challenges.map((challenge) => (
      <div className="defi" key={challenge.id}>
        <h4>{challenge.type}</h4>
        <p>
          {challenge.description} - {challenge.created_at}
        </p>
        <div class="time">
          <img alt="clock" src="/prod/clock.svg" />
          <p>24H</p>
        </div>
      </div>
    ));
  }

  render() {
    const { challenges } = this.state;
    return (
      <div class="home">
        <div class="header">
          <Link to="/profil">
            <img alt="profil picture" class="avatar" src="/logout/avatar.svg" />
          </Link>
          <Link to="/login">
            <button
              onClick={() => firebase.auth().signOut()}
              class="logout"
            ></button>
          </Link>
        </div>
        <div class="en-tete">
          <h2>Défis</h2>
        </div>

        <div class="main-page">
          {challenges ? (
            this.displayChallenges(challenges)
          ) : (
            <p> Pas de défis proposés </p>
          )}
        </div>

        <nav class="nav_menu">
          <Link to="/home">
            <div class="img1"></div>
          </Link>
          <Link to="/post">
            <div class="img2"></div>
          </Link>
          <Link to="/subscription">
            <div class="img3"></div>
          </Link>
          <Link to="/defi">
            <div class="img4_b"></div>
          </Link>
        </nav>
      </div>
    );
  }
}
