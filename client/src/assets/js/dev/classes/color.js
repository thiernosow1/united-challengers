import $ from 'jquery';

$(document).ready(function () {
            var colors = ['#00CCFF', '#3366CC'];
            console.log("trouve la ", colors);
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            let t = [...document.getElementsByClassName('defi')];
            console.log("notre ", t);
            for( let i = 0; i < t.length; i++ ){
            t.item(i).css('background-color', random_color);
            }
            
            //  $('body').css('background-color', random_color );
            
            //console.log(document.getElementsByClassName('defi'));
        }
);