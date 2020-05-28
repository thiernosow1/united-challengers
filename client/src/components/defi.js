import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';



export default class Defi extends Component{
  
       state={isSignedIn:true}
    
     
       
    render(){
    return (

       <div class='home'>
              <div class="header">
              <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
              <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
              </div>
       <div class="en-tete">
       <h2>Défis</h2>
       </div>

<div class="main_page" >
       <div class="defi" >
              <h4>Let's draw a landscape</h4>
              <p>Drawing challenge - May 2020</p>
              <div class="time"><img alt="clock" src="/prod/clock.svg"/><p>72H</p></div>
       </div>

       <div class="defi">
              <h4>Let's draw a unicorn</h4>
              <p>Drawing challenge - June 2020</p>
              <div class="time"><img src="/prod/clock.svg"/><p>72H</p></div>
       </div>
</div>

            <nav class="nav_menu">
            <Link to='/home'><div class="img1"></div></Link>
            <Link to='/post'><div class="img2"></div></Link>
            <Link to='/subscription'><div class="img3"></div></Link>
            <Link to='/defi'><div class="img4_b"></div></Link>
             </nav>

       </div>
        );

}
}