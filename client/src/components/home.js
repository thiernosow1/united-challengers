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

  // Fonctionnalité like
  isLiked(post) {
    const userId = localStorage.getItem("userId");
    const elmt = post.likes.findIndex((like) =>
      like.isEqual(db.doc(`users/${userId}`))
    );
    console.log(elmt);
    return elmt !== -1;
  }

  handleManageLike(liked) {
    console.log(liked);
  }

  handleDislike = (e) => {
    e.preventDefault();
    const postId = e.target.id;
    const userId = localStorage.getItem("userId");
    let newPosts = [...this.state.posts];
    const idx = newPosts.findIndex((post) => post.id == postId);
    let newLikes = newPosts[idx].likes.filter(
      (like) => !like.isEqual(db.doc(`users/${userId}`))
    );
    db.doc(`posts/${postId}`)
      .update({
        likes: newLikes,
      })
      .then((postRef) => {
        newPosts[idx].likes = newLikes;
        this.setState({ posts: newPosts }, () => console.log(this.state.posts));
      });
    //this.handleManageLike(f);
  };

  handleLike = (e) => {
    e.preventDefault();
    const postId = e.target.id;
    const userId = localStorage.getItem("userId");
    let newPosts = [...this.state.posts];
    const idx = newPosts.findIndex((post) => post.id == postId);
    newPosts[idx].likes.push(db.doc(`users/${userId}`));
    db.doc(`posts/${postId}`)
      .update({
        likes: newPosts[idx].likes,
      })
      .then((postRef) => {
        this.setState({ posts: newPosts }, () => console.log(this.state.posts));
      });
  };

  // Affichage Post
  displayPosts(posts) {
    return posts.map((post) => (
      <div className="displayPosts" key={post.id}>
        <p>auteur: {post.challenge_ref.id} </p>
        <img className="imageForm" src={post.picture_url} />
        <div className="likes">
          {this.isLiked(post) ? (
            <img
              id={post.id}
              className="imgLike"
              src="/heart_full.svg"
              onClick={this.handleDislike}
            />
          ) : (
            <img
              id={post.id}
              className="imgLike"
              src="/heart.svg"
              onClick={this.handleLike}
            />
          )}
          <p>{post.likes.length}</p>
        </div>
        <p>{post.challenge_ref.description}</p>
        <p>{post.challenge_ref.duration} </p>
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
          <p> Aucune publication </p>
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
