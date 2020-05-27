import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import { render } from 'react-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
    apiKey : 'AIzaSyBXQP5YAz5Ky7Rr4rCKLYd17LRJPDcWU0Q' ,
    authDomain : 'daily-art-auth.firebaseapp.com'

})

export default class Register extends Component{
    state={isSignedIn:false}

    uiConfig = {
        SignInflow :'popup',
        SignInOptions : [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
 
        ],
        callbacks :{
            signInSuccess: ()=> false
        }
    }

    componentDidMount = () =>{
        

        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !! user})
        })
    }

    render(){
    return (

    <div class="login_page">
       <div class="intro">
                <h2>Inscription</h2>
                <p>Inscrivez vous et rejoignez la communauté Dailyart!</p>
                </div>

                <div class="block_connexion">
       {this.state.isSignedIn ? (
           <div>
                <div> Inscription réussie </div>
                <button onClick={()=> firebase.auth().signOut()}>Sign Out</button>
                <h1>Bienvenue {firebase.auth().currentUser.displayName}</h1>
                <img alt='profil picture' src={firebase.auth().currentUser.photoURL}/>
                <Link to={'/home'} >Continuer</Link>
           </div>
       ) : (
       <StyledFirebaseAuth

       uiConfig={this.uiConfig}
       firebaseAuth={firebase.auth()}
       />
    ) 
         }

</div>
<div>
<p class="accroche">Déjà un compte ? <Link to={'/login'} id="login">
  Connectez-vous!
   </Link> </p>
</div>
</div>



    );
}
}


export class RegisterForm extends Component{
    render(){
    return (
        <div>
       <p> page du register form </p>
       </div>
    );

}
}

