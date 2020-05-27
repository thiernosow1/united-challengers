import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import { render } from 'react-dom';

export default class Login extends Component{
    render(){
    return (

    <div>
       <p> page du login ou on a le choix </p>
           <Link to={'/LoginForm'} id="BTN">
                 <p> Direction le formulaire</p>
            </Link> 
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

