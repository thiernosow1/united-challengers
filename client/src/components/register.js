import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import { render } from 'react-dom';

function RegisterChoix(){
    return (

    <div>
       <p> page du register ou on a le choix </p>
           <Link to={'/RegisterForm'} id="BTN">
                 <p> Direction le formulaire</p>
            </Link> 
    </div>
    );
}

function RegisterForm(){
    return (
        <div>
       <p> page du register form </p>
       </div>
    );

}

export default RegisterChoix; 