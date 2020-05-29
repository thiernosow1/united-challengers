import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase"
import firebaseConfig from "../firebase/config"
import  {db,auth,storage} from "../firebase/config";
import Post from './post';



export default class Home extends Component{
    state={
        isSignedIn:true,
        challenges : null
    }
    
    // componentDidMount(){
    //     db.collection('challenges').get().then(snapshot =>{
    //         const challenges =[]
    //         snapshot.docs.forEach((doc) => {
                
    //             const id = doc.id; 
    //             const data = doc.data();
    //             challenges.push(id,data)
    //         this.setState({ challenges : challenges})
                
    //         })
            
    //     })
    //     db.collection('posts').get().then(snapshot =>{
    //         const posts =[]
    //         snapshot.docs.forEach((doc) => {
                
    //             const id = doc.id; 
    //             const data = doc.data();
    //             posts.push(id,data)
    //         this.setState({ posts : posts})
                
    //         })
            
    //     })

    //     .catch(error => console.log(error))
    //}
    render(){
    
    return (

        <div class='home'>
               <div class="header">
               <Link to='/profil'>  <img alt='profil picture' class="avatar" src="/logout/avatar.svg"/> </Link>
                <Link to='/login'><button onClick={()=> firebase.auth().signOut()} class="logout"></button></Link>
               </div>

               <div class="en-tete">
                    <h2>Découvrir</h2>
                </div>

                {/* {this.state.challenges && this.state.challenges.map( challenge =>{
                    return(
            
              <div class="defi" >
              <h4>{challenge.describe}</h4>
              <p>{challenge.type}</p>
              <div class="time">
                  <img alt="clock" src="/prod/clock.svg"/><p>{challenge.startday_hour}</p></div>
             </div>
                    
                    )
                })}

                {this.state.posts && this.state.posts.map( post =>{
                    return(
                        <div>
                   
                            <p>{Date(post.creation_date)}</p>
                           
                       
                        </div>

                    )
                })*/}
                

               
                    <nav class="nav_menu">
                    <Link to='/home'><div class="img1_b"></div></Link>
                    <Link to='/challenge'><div class="img2"></div></Link>
                    <Link to='/subscription'><div class="img3"></div></Link>
                    <Link to='/defi'><div class="img4"></div></Link>

                     </nav>

     </div>
        
       

        );

}
}