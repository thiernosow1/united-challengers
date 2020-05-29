/**
 * js/dev/classes/contact.js
 * gestion des rollover avec tiltJS
 * 
 * */

//création d'une classe ES6

class Contact {
  constructor(){
    console.log("Hello Contact");
    this.init();  
  }

  init(){

    // this .. fait reference à l'instance de classe contact
    this.contact = document.querySelector("#contact");
    this.man = document.querySelector("#contact .contact__man");

    // j'aimerais que les yexu du mec suivent la souris
    window.addEventListener("mousemove", e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = -window.innerWidth / 2 + mouseX
      const deltaY = -window.innerHeight / 2 + mouseY
      this.setPosition(deltaX, deltaY); // err ?
      // scope du this
      //console.log(deltaX);
    });
  }
    setPosition(x, y){
      //modifier la position des élements du svg
      console.log(x, y);
      // modifier la position des yeux 
      //document.querySelector("#eyeLeft").style.marginLeft = x;
      
      // custon properties

      
    }
}

//export vers l'exterieur d'une instance de cette Classe
export const contact = new Contact();