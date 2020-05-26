import React from 'react';
import './assets/css/app.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Before from './components/before';
import Login from './components/login';
import Register from './components/register';


function App(){
return(
  <BrowserRouter>
  <Switch>
  <Route exact={true} path="/" component={Before} />
  <Route exact={true} path="/login" component={Login} />
  <Route exact={true} path="/register" component={Register} />
  </Switch>
  </BrowserRouter>

)
}



export default App; 
