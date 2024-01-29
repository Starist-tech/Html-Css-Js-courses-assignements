"use strict";
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;"); // the mission is to save the user changes if the page reload and if it's a new window, delete all old data

let inputs = document.querySelectorAll("form > *");// select all input field and select box 

inputs.forEach(function(e) { // for each input field:
    if(e.type) {// if there is already a value in sessionStorage; assign it to the input field 
        e.value = sessionStorage.getItem(`${e.type}-data`);
    }
    e.oninput = () => {// if there is no value in the storage; set a new item with the name of the input field and give it's the value of the input;
        sessionStorage.setItem(`${e.type}-data`, e.value);
    }
});




















