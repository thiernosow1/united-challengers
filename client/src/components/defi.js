import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
import  {db,auth,storage} from "../firebase/config";
import Color from "../assets/js/dev/classes/color";

export default class Defi extends Component {
  state = {
    isSignedIn: true,
    challenges: [],
    page: "dessin",
    posts: [],
  };
  componentDidMount() {
    const MILLISECOND = 86400000; //5184000000; // correspondance d'une heure en milliseconde
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

    let posts = [];
    db.collection("posts")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let post = doc.data();
          post.id = doc.ref.id;
          if (post.author) {
            post.author
              .get()
              .then((res) => {
                post.author = res.data();
                post.author.id = res.id;
              })
              .catch((error) => console.log(error));
          }
          if (post.challenge_ref) {
            post.challenge_ref
              .get()
              .then((res) => {
                post.challenge_ref = res.data();
                post.challenge_ref.id = res.id;
                post.challenge_ref.duration =
                  post.challenge_ref.duration * MILLISECOND;
              })
              .catch((error) => console.log(error));
          }
          posts.push(post);
        });
        console.log(posts);
      })
      .then(() => this.setState({ posts }))
      .catch((error) => console.log(error));
  }

  displayChallenges(challenges) {
    return challenges.map((challenge) => {
      const time = -challenge.duration + (Date.now() - challenge.created_at);
      const date = new Date(time); // temps écoulé
      console.log(time);
      return (
        <div className="defi" key={challenge.id}>
          <h4>{challenge.description}</h4>
          <p>
            {challenge.type} -{" "}
            {new Date(challenge.created_at).toLocaleString()}
          </p>
          <div class="time">
            <img alt="clock" src="/prod/clock.svg" />
            <p>{date.toLocaleTimeString()} écoulé</p>
          </div>
        </div>
      );
    });
  }

  // Fonctionnalité like
  isLiked(post) {
    const userId = localStorage.getItem("userId");
    const elmt = post.likes.findIndex((like) =>
      like.isEqual(db.doc(`users/${userId}`))
    );
    console.log(elmt);
    return elmt !== -1;
  }

  // Affichage du classement
  classement(posts) {
    return posts.map((post) => (
      <div className="displayPosts" key={post.id}>
        <p>auteur: {post.author} </p>
        <img className="imageForm" src={post.picture_url} />
        <div className="likes">
          {this.isLiked(post) ? (
            <img id={post.id} className="imgLike" src="/heart_full.svg" />
          ) : (
            <img id={post.id} className="imgLike" src="/heart.svg" />
          )}
          <p>{post.likes.length}</p>
        </div>
        <p>{post.challenge_ref.description}</p>
        <p>{post.challenge_ref.duration} </p>
      </div>
    ));
  }

  manageContent() {
    const { page, challenges, posts } = this.state;
    if (page == "dessin") {
      const dessins = challenges.filter(
        (challenge) => challenge.type == "DESSIN"
      );
      return dessins?.length !== 0 ? (
        this.displayChallenges(dessins)
      ) : (
        <p> Pas de défis proposés </p>
      );
    } else if (page == "photo") {
      const photos = challenges.filter(
        (challenge) => challenge.type == "PHOTO"
      );
      return photos?.length !== 0 ? (
        this.displayChallenges(photos)
      ) : (
        <p> Pas de défis proposés </p>
      );
    } else {
      return posts?.length !== 0 ? (
        this.classement(
          posts.sort((post1, post2) => post2.likes.length - post1.likes.length)
        )
      ) : (
        <p> Pas de classement disponible</p>
      );
    }
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
        <div className="sousmenu">
          <a onClick={() => this.setState({ page: "dessin" })}>Dessin</a>
          <a onClick={() => this.setState({ page: "photo" })}>Photo</a>
          <a onClick={() => this.setState({ page: "classement" })}>Classement</a>
        </div>

        <div class="main-page">{this.manageContent()}</div>

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
