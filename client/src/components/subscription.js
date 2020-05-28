import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



export default class Subscription extends Component{
    state={isSignedIn:true}
    
    render(){
    return (

       <div class='home'>
     
            <Link to='/login'><button onClick={()=> firebase.auth().signOut()}>Sign Out</button></Link>
<p>Page "abonnement"</p>
            <nav class="nav_menu">
            <Link to='/home'><div class="img1"></div></Link>
            <Link to='/post'><div class="img2"></div></Link>
            <Link to='/subscription'><div class="img3"></div></Link>
            <Link to='/defi'><div class="img4"></div></Link>

             </nav>

       </div>
        );

}
}