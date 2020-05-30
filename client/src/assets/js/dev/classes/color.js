import React from "react";
import $ from 'jquery';

function Color(){
    var colors = ['#C44C51','#8CC6D7','#FFDA8C','#006D80','#BDA44D','#3C2000'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('.color').css('background-color', random_color);
}

export default Color;

