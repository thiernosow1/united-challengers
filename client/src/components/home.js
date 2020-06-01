import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/app.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseConfig from "../firebase/config";
import { db, auth, storage } from "../firebase/config";
import Post from "./post";

export default class Home extends Component {
  state = {
    isSignedIn: true,
    posts: [],
  };

  componentDidMount() {
    let posts = [];
    db.collection("posts")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let post = doc.data();
          post.id = doc.id;
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
              })
              .catch((error) => console.log(error));
          }
          posts.push(post);
        });
        //console.log(posts);
      })
      .then(() => this.setState({ posts }))
      .catch((error) => console.log(error));
  }

  displayPosts(posts) {
    return posts.map((post) => (
      <div key={post.id}>
        <p>auteur: {post.challenge_ref.id} </p>
        <img src={post.picture_url} />
        <p>{post.challenge_ref.description} likes</p>
        <p>{post.challenge_ref.duration} likes</p>
      </div>
    ));
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <div className="home">
        <div className="header">
          <Link to="/profil">
            {" "}
            <img
              alt="profil picture"
              className="avatar"
              src="/logout/avatar.svg"
            />{" "}
          </Link>
          <Link to="/login">
            <button
              onClick={() => firebase.auth().signOut()}
              className="logout"
            ></button>
          </Link>
        </div>

        <div className="en-tete">
          <h2>Découvrir</h2>
        </div>

        {posts.length == 0 ? (
          <p> Aucune publications </p>
        ) : (
          this.displayPosts(posts)
        )}

        <nav className="nav_menu">
          <Link to="/home">
            <div className="img1_b"></div>
          </Link>
          <Link to="/post">
            <div className="img2"></div>
          </Link>
          <Link to="/subscription">
            <div className="img3"></div>
          </Link>
          <Link to="/defi">
            <div className="img4"></div>
          </Link>
        </nav>
      </div>
    );
  }
}
