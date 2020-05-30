/**
 * js/dev/classes/menu.js
 * gestion des rollover avec tiltJS
 * 
 * */

//création d'une classe ES6
import jump from "jump.js";

class Menu {
  constructor(){
    console.log("Hello Menu");
    this.init();
    }

    init(){
      this.menuOnScroll();
      this.menuOnClick();
      this.initObserver();
    }

    initObserver(){
      const observer = new window.IntersectionObserver(
        function(entries){
          entries.forEach(function(entry){
            //pour chaqu entry
            const ratio = entry.intersectionRatio;
            const element = entry.target;
            if ( ratio > 0.5){
              console.log(element, "visible");
            } else {
              console.log(element, "non visible");
            }
          });
        }, 
        {threshold: 0.5 } // intervalle pour affiner
      );
      //utilisation de l'observer avec les .elts .scroll-part
      document.querySelectorAll('.scroll-part').forEach(function(element){
        //observer va "observer l'element"
        observer.observe(element);
      });
    }
    
    menuOnScroll(){
      //1. gestion du scroll
      window.addEventListener("scroll", function(e){
        //console.log("scroll ==>", e);
        // si mon scroll est sup. a 100px, reduction du menu
        const scrollvalue = window.pageYOffset;
        //console.log("scrollvalue", scrollvalue);
        if (scrollvalue > 20){
          // au scroll le menu se rappetisse
          document.body.classList.add("is-small-menu");
          console.log("sup a 20");
        } else { 
          document.body.classList.remove("is-small-menu");
        }
      });
    }

    menuOnClick(){
      this.links = document.querySelectorAll('a[href^="#"]');
      this.links.forEach(function(link){
        link.addEventListener("click", function(e){
          e.preventDefault();
          jump(e.target.getAttribute("href"), {
            offset : 0
          });
        })
      })
    }
}

//export vers l'exterieur d'une instance de cette Classe
export const menu = new Menu();