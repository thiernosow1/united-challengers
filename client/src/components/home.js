import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



export default class Home extends Component{
    state={isSignedIn:true}
    
    render(){
    return (

        <div className='home'>
               <div>
                    <div> Home </div>
                    <Link to='/login'><button onClick={()=> firebase.auth().signOut()}>Sign Out</button></Link>
               </div>
    
        </div>
        );

}
}