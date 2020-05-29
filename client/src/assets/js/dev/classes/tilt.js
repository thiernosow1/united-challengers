/**
 * js/dev/classes/tilt.js
 * gestion des rollover avec tiltJS
 * 
 * */

//création d'une classe ES6
import  VanillaTilt  from "vanilla-tilt";
class Tilt {
  constructor(){
    console.log("Hello Tilt");
    this.init();
    }

    init() {
        //ajout de tilt dans data-tilt
        const imgs = document.querySelectorAll("img[data-tilt]");
        VanillaTilt.init(imgs);
    }
}   
//export vers l'exterieur d'une instance de cette Classe
export const tilt = new Tilt();