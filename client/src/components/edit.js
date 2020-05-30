import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
// import Jump from 'jump.js';
// import {menu} from "../assets/js/dev/classes/menu";


export default class Edit extends Component{
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
            {/* <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link> */}
            <Link to="/home" class="retour">&#8592; Retour</Link>
            <Link to="/profil" class="btn-blue">Enregistrer</Link>
               </div>

<div class="en-tete">
{this.state.isSignedIn ? (
    <div class="edit_profil">
 <h2>Editer le Profil</h2>

    <div class="bloc_profil">
        <img alt='profil picture' src={firebase.auth().currentUser.photoURL}/>
    <div>
        <h4>{firebase.auth().currentUser.displayName}</h4>  
        <span class="id_user">@11_{firebase.auth().currentUser.displayMail}</span>
        </div>
      
    </div>

    <form> 
       <label>Id</label>
       <input type="text" placeholder="id"></input>
       <label>Nom</label>
       <input  type="text" placeholder="nom"></input>
       <label>Prénom</label>
       <input  type="text" placeholder="prénom"></input>
       <label>Mail</label>
       <input  type="text" placeholder="mail"></input>
       <label>Numéro</label>
       <input  type="text" placeholder="0638978765"></input>
       <label>Date de Naissance</label>
       <input  type="text" placeholder="30/01/2000"></input>
   </form>
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