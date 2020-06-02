import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/app.css";
import firebase from "firebase";
import Jump from "jump.js";
import { menu } from "../assets/js/dev/classes/menu";
import { db, auth } from "../firebase/config";

export default class Profil extends Component {
  state = { isSignedIn: false, user: null, posts: [] };

  componentDidMount = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
    const userId = localStorage.getItem("userId");
    const snapUser = await db.doc(`users/${userId}`).get();
    let user = snapUser.data();
    const snapPosts = await db.collection("posts").get();
    let posts = [];
    await snapPosts.docs.forEach((doc) => {
      let post = doc.data();
      post.id = doc.ref.id;
      if (db.doc(`users/${userId}`).isEqual(post.author)) {
        posts.push(post);
      }
    });

    this.setState({ user, posts });
  };

  getNbLikes(posts) {
    let sum = 0;
    for (let post of posts) {
      sum += post.likes.lenght;
    }
    return sum;
  }

  displayPosts(posts) {
    return posts.map((post) => (
      <div key={post.id} className="post">
        <div className="infos">
          <img
            alt="profil picture"
            src={firebase.auth().currentUser.photoURL}
          />

          <div>
            <h4>{firebase.auth().currentUser.displayName}</h4>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="container_img">
          <img src={post.picture_url} />
        </div>
      </div>
    ));
  }

  render() {
    const { user, posts } = this.state;
    console.log(user);
    console.log(posts);
    return (
      <div className="home">
        <div className="header">
          {/* <Link to='/profil'>  <img alt='profil picture' className="avatar" src="/logout/avatar.svg"/> </Link> */}
          <Link to="/home" className="retour">
            &#8592; Retour
          </Link>
          <Link to="/edit" className="btn-blue">
            Editer le profil
          </Link>
        </div>

        <div className="en-tete">
          {this.state.isSignedIn ? (
            <div className="profil">
              {/* <h2>Profil</h2> */}

              <div className="bloc_profil">
                <img
                  alt="profil picture"
                  src={firebase.auth().currentUser.photoURL}
                />
                <h4>{firebase.auth().currentUser.displayName}</h4>
              </div>

              <div className="statistic">
                <div>
                  <h5>{user?.followed_by?.lenght}</h5>
                  <p>Abonnés</p>
                </div>
                <div>
                  <h5>0</h5>
                  <p>Abonnemments</p>
                </div>
                <div>
                  <h5>{this.getNbLikes(posts || 0)}</h5>
                  <p>Likes</p>
                </div>
              </div>

              <ul>
                <li>Publications</li>
                <li>Like</li>
              </ul>
              <div className="publications_on_profil">
                {this.displayPosts(posts)}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <nav className="nav_menu">
          <Link to="/home">
            <div className="img1"></div>
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
