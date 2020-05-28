import React from 'react';
import './assets/css/app.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Before from './components/before';
import Login from './components/login';
import RegisterChoix, {RegisterForm} from './components/register';
import Home from './components/home';
import Defi from './components/defi';
import Post from './components/post';
import Subscription from './components/subscription';
import Profil from './components/profil';


function App(){
return(
  <BrowserRouter>
  <Switch>
  <Route exact={true} path="/" component={Before} />
  <Route exact={true} path="/login" component={Login} />
  <Route exact={true} path="/register" component={RegisterChoix} />
  <Route exact={true} path="/home" component={Home} />
  <Route exact={true} path="/defi" component={Defi} />
  <Route exact={true} path="/post" component={Post} />
  <Route exact={true} path="/subscription" component={Subscription} />
  <Route exact={true} path="/profil" component={Profil} />
  </Switch>
  </BrowserRouter>

)
}



export default App; 
