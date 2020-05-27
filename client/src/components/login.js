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
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
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
            <div className='login'>
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

