import React from 'react';
import './assets/css/app.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
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
        <p class="description"> participez aux différents challenges créatif disponible chaque jours set réalisable dans un temps imparti.</p>
       
      </div>

      <div>
      <img class="illus" src="register.svg"/>
      <h3>Il est temps de créer ! </h3>
      <section class="opt_connexion">
       <h3 id="last"> <a href="/login" id="btn-signup">Inscription</a></h3>
        <p class="accroche">Déjà un compte ? <a id="login" href="/login"> Connectez-vous! </a></p>
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


export default App; 
