import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import firebase from 'firebase';
import  {db,auth,storage} from "../firebase/config";



export default class Defi extends Component{
  
       state={
              isSignedIn:true,
              challenges : null
          }
          
          componentDidMount(){
              db.collection('challenges').get().then(snapshot =>{
                  const challenges =[]
                  snapshot.docs.forEach((doc) => {
                      
                      const id = doc.id; 
                      const data = doc.data();
                      challenges.push(id,data)
                  this.setState({ challenges : challenges})
                      
                  })
                  
              })
      
              .catch(error => console.log(error))
          }
    
          
     
       
    render(){
       const displayChallenge = this.state.challenges && this.state.challenges.map( challenge =>{
              return(
                  <div className='defi'>
                      <h4>{challenge.type}</h4>
                      <p>{challenge.describe} - {challenge.startday_hour}</p>
                      <div class="time"><img alt="clock" src="/prod/clock.svg"/><p>24H</p></div>
                      
                 
                  </div>

              )
          })
    return (

       <div class='home'>
              <div class="header">
              <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
              <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
              </div>
       <div class="en-tete">
       <h2>Défis</h2>
       </div>
       {this.state.challenges && this.state.challenges.map( challenge =>{
                    return(
            
              <div class="defi" >
              <h4>{challenge.describe}</h4>
              <p>{challenge.type}</p>
              <div class="time">
                  <img alt="clock" src="/prod/clock.svg"/><p>{challenge.startday_hour}</p></div>
             </div>
                    
                    )
                })}

<div class="main_page" >
       
       {displayChallenge}

       
</div>

            <nav class="nav_menu">
            <Link to='/home'><div class="img1"></div></Link>
            <Link to='/post'><div class="img2"></div></Link>
            <Link to='/subscription'><div class="img3"></div></Link>
            <Link to='/defi'><div class="img4_b"></div></Link>
             </nav>

       </div>
        );

}
}