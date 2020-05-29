import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
import { db, auth } from '../firebase/config';



export default class Post extends Component{
    state={isSignedIn:true,
      posts : null,
      image : null
  }

    
  

    
    render(){
      // const handleSubmit = () =>{};
      // const handleChange = e =>{
      //   if (e.target.files[0]){
      //     this.setState({image : e.target.files[0] })
          
      //   }
      //   console.log("image :", image)
      // }
      
    return (

      <div class='home'>
        <div class="header">
        <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
                <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
        </div>
      
        <div class="en-tete">
          <h2>Partagez</h2>
        </div>

        {/* <form onSubmit={handleSubmit}>
          <input type='file'onChange={handleChange} value={image}/>
          <button>Valider</button>
        </form> */}
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