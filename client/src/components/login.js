import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../assets/css/app.css';
import { render } from 'react-dom';
import RegisterChoix, {RegisterForm} from './register';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


export default class Login extends Component{
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
        return(
            
            <div class="login_page">
                <div class="intro">
                <h2>Connexion</h2>
                <p>Ravi de vous revoir! Connectez-vous et découvrez les derniers challenges</p>
                </div>
        <div class="block_connexion">
       {this.state.isSignedIn ? (

                <Redirect to='/home'/>

       ) : (
       <StyledFirebaseAuth

       uiConfig={this.uiConfig}
       firebaseAuth={firebase.auth()}
       />
    
    ) 
         }
         </div>
         <p class="accroche">Pas encore de compte ? <Link to={'/register'} id="login">
           Inscrivez-vous!
            </Link> </p>
    </div>
        );
    }
}


export class LoginForm extends Component{
    render(){
    return (
        <div>
       <p> page du login form </p>
       </div>
    );

}
}

