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
    if (auth.currentUser) {
      const snapUser = await db.doc(`users/${auth.currentUser.uid}`).get();
      let user = snapUser.data();
      user.id = snapUser.id;
      const snapPosts = await db
        .collection("posts")
        .where("auteur", "==", db.doc(`users/${auth.currentUser.uid}`))
        .get();
      let posts = [];
      await snapPosts.docs.forEach((data) => {
        let post = data.data();
        post.id = data.id;
        posts.push(post);
      });
      this.setState({ user, posts });
    }
  };

  render() {
    const { user, posts } = this.state;
    //console.log(user);
    //console.log(posts);
    return (
      <div class="home">
        <div class="header">
          {/* <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link> */}
          <Link to="/home" class="retour">
            &#8592; Retour
          </Link>
          <Link to="/edit" class="btn-blue">
            Editer le profil
          </Link>
        </div>

        <div class="en-tete">
          {this.state.isSignedIn ? (
            <div class="profil">
              {/* <h2>Profil</h2> */}

              <div class="bloc_profil">
                <img
                  alt="profil picture"
                  src={firebase.auth().currentUser.photoURL}
                />
                <h4>{firebase.auth().currentUser.displayName}</h4>
              </div>

              <div class="statistic">
                <div>
                  <h5>375</h5>
                  <p>Abonnés</p>
                </div>
                <div>
                  <h5>200</h5>
                  <p>Abonnemments</p>
                </div>
                <div>
                  <h5>2348</h5>
                  <p>Likes</p>
                </div>
              </div>

              <ul>
                <li>Publications</li>
                <li>Like</li>
              </ul>
              <div class="publications_on_profil">
                <div class="post">
                  <div class="infos">
                    <img
                      alt="profil picture"
                      src={firebase.auth().currentUser.photoURL}
                    />

                    <div>
                      <h4>{firebase.auth().currentUser.displayName}</h4>
                      <p>16h41, 27 mai 2020</p>
                    </div>
                  </div>

                  <div class="container_img">
                    <img src="/prod/work3.png" />
                  </div>
                </div>

                <div class="post">
                  <div class="infos">
                    <img
                      alt="profil picture"
                      src={firebase.auth().currentUser.photoURL}
                    />

                    <div>
                      <h4>{firebase.auth().currentUser.displayName}</h4>
                      <p>06h20, 25 mai 2020</p>
                    </div>
                  </div>

                  <div class="container_img">
                    <img src="/prod/work.png" />
                  </div>
                </div>

                <div class="post">
                  <div class="infos">
                    <img
                      alt="profil picture"
                      src={firebase.auth().currentUser.photoURL}
                    />

                    <div>
                      <h4>{firebase.auth().currentUser.displayName}</h4>
                      <p>06h20, 25 mai 2020</p>
                    </div>
                  </div>

                  <div class="container_img">
                    <img src="/prod/work.png" />
                  </div>
                </div>

                <div class="post">
                  <div class="infos">
                    <img
                      alt="profil picture"
                      src={firebase.auth().currentUser.photoURL}
                    />

                    <div>
                      <h4>{firebase.auth().currentUser.displayName}</h4>
                      <p>11h06, 20 mai 2020</p>
                    </div>
                  </div>

                  <div class="container_img">
                    <img src="/prod/work2.png" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
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
            <div class="img4"></div>
          </Link>
        </nav>
      </div>
    );
  }
}
