import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';



export default class Post extends Component{
    state={isSignedIn:true}
    
    render(){
    return (

       <div class='home'>
     <div class="header">
     <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
            <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
       </div>
   
       <div class="en-tete">
    <h2>Partagez</h2>
</div>
            <nav class="nav_menu">
            <Link to='/home'><div class="img1"></div></Link>
            <Link to='/post'><div class="img2_b"></div></Link>
            <Link to='/subscription'><div class="img3"></div></Link>
            <Link to='/defi'><div class="img4"></div></Link>

             </nav>

       </div>
        );

}
}