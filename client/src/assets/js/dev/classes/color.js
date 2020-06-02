import React from "react";
import $ from 'jquery';

function Color(){
    var colors = ['#00CCFF','#3366CC'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('.defi').css('background-color', random_color);
}

export default Color;

