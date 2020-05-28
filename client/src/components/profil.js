import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';

export default class Profil extends Component{
    state={isSignedIn:false}

    componentDidMount = () =>{
        

        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !! user})
        })
    }
    
    render(){
    return (

       <div class='home'>
        <div class="header">
            <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
            <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
               </div>

<div class="en-tete">
{this.state.isSignedIn ? (
    <div>
    <h2>Profil</h2>
    <div class="bloc_profil">
    <img alt='profil picture' src={firebase.auth().currentUser.photoURL}/>
    <h4>{firebase.auth().currentUser.displayName}</h4>
    <p>{firebase.auth().currentUser.displayLastName}</p>
    </div>
                </div>
):(
    <div></div>
)}
</div>


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