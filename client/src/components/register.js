import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import { render } from 'react-dom';

export default class Register extends Component{
    render(){
    return (

    <div>
       <p> page du register ou on a le choix </p>
           <Link to={'/RegisterForm'} id="BTN">
                 <p> Direction le formulaire</p>
            </Link> 
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

