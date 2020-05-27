import React from 'react';
import './assets/css/app.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Before from './components/before';
import Login from './components/login';
import RegisterChoix, {RegisterForm} from './components/register';
import Home from './components/home';


function App(){
return(
  <BrowserRouter>
  <Switch>
  <Route exact={true} path="/" component={Before} />
  <Route exact={true} path="/login" component={Login} />
  <Route exact={true} path="/register" component={RegisterChoix} />
  <Route exact={true} path="/home" component={Home} />
  </Switch>
  </BrowserRouter>

)
}



export default App; 
