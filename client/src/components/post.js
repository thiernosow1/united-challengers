import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../assets/css/app.css";
import firebase from "firebase";
import { db, auth, storage } from "../firebase/config";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.typeSelect = React.createRef();

    this.state = {
      redirect: false,
      posts: [],
      image: null,
      type: "", // challenge type
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { image } = this.state;
    console.log("submit");
    const imagesRef = storage.ref().child("images/" + image.name);
    try {
      const snapImg = await await imagesRef.put(image);
      const url = await snapImg.ref.getDownloadURL();
      const snapChall = await db
        .collection("challenges")
        .where("type", "==", this.state.type)
        .get();
      const cod = snapChall.docs[0]; // challenge of the day
      console.log(localStorage.getItem("userId"));
      const postRef = await db.collection("posts").add({
        author: db.doc(`users/${localStorage.getItem("userId")}`),
        challenge_ref: db.doc(`challenges/${snapChall.docs[0].id}`),
        created_at: Date.now(),
        picture_url: url,
        likes: [],
      });
      //console.log(postRef);
      this.setState({ redirect: true });
    } catch (error) {
      console.error(error);
    }
  };
  handleFileChange = (e) => {
    const file = this.fileInput.current.files[0];
    const url = window.URL.createObjectURL(file);
    this.setState({ image: file });
  };

  handleTypeChange = (e) => {
    const type = this.typeSelect.current.value;
    this.setState({ type });
  };

  render() {
    const { posts, image, redirect } = this.state;
    return redirect ? (
      <Redirect to="/home" />
    ) : (
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
          <h2>Partagez</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="type-challenge">Type de défi:</label>
          <select
            name="types"
            id="type-challenge"
            onChange={this.handleTypeChange}
            ref={this.typeSelect}
          >
            <option value="">--Choisissez un type--</option>
            <option value="DESSIN">Déssin</option>
            <option value="PHOTO">Photo</option>
          </select>
          <input
            type="file"
            onChange={this.handleFileChange}
            ref={this.fileInput}
          />
          {image && (
            <img
              className="imageForm"
              src={window.URL.createObjectURL(image)}
            />
          )}
          <input type="submit" value="Publier" />
        </form>
        <nav className="nav_menu">
          <Link to="/home">
            <div className="img1"></div>
          </Link>
          <Link to="/post">
            <div className="img2_b"></div>
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
