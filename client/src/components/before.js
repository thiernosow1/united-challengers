import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/app.css';




function Before() {
    return (
      <div class="CSSgal">
       <img class="logo" src="logo.svg"/>
     
      <s id="s1"></s> 
      <s id="s2"></s>
      <s id="s3"></s>
    
      <img class="img_fond_light" src="icon_da.svg"/>
      <img class="img_fond" src="icon_da.svg"/>
      <div class="slider">
   
        <div>
          
          <img class="illus" src="idea.svg"/>
          <h3>Laissez libre court à votre imagination</h3>
          <p class="description"> Avec DailyArt vous pouvez laisser libre court à votre imagination, votre seul limite, c'est vous !</p>
         
        </div>
  
        <div>
          <img class="illus" src="achievement.svg"/>
          <h3>Challengez votre esprit créatif</h3>
          <p class="description"> Participez aux différents challenges créatif disponible chaque jours et réalisables dans un temps imparti.</p>
         
        </div>
  
        <div>
        <img class="illus" src="register.svg"/>
        <h3>Il est temps de créer ! </h3>
        <section class="opt_connexion">
         <h3 id="last">
          <Link to={'/register'} id="btn-signup">
            Inscription
            </Link> 
          </h3>
          <p class="accroche">Déjà un compte ? <Link to={'/login'} id="login">
            Connectez-vous
            </Link> </p>
          </section>
        </div>
  
      </div>
      
      <div class="bullets">
        <a href="#s1">o</a>
        <a href="#s2">o</a>
        <a href="#s3">o</a>
      </div>
    
    </div>
    
    );
  }
  
  
  export default Before; 
  