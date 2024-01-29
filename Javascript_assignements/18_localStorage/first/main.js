"use strict";
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");//The mission is write code that lets users personalize a webpage.
// They can choose fonts, colors, and font sizes from dropdowns.
// These choices are saved in their browser for future visits, letting them customize their own viewing experience.

let fontFam = document.querySelector(".b1");
let color = document.querySelector(".b2");
let fontSize = document.querySelector(".b3");

// Apply saved styles from localStorage (if available)
document.body.style.fontFamily = localStorage.getItem("font-family");// - Font family
document.body.style.backgroundColor = localStorage.getItem("color");// - Background color
document.body.style.fontSize = localStorage.getItem("font-size") + "px";// - Font size (with "px" unit appended)

// Set default values and apply styles if not stored in localStorage
// - Font family
if (!localStorage["font-family"]) {
 localStorage.setItem("font-family", fontFam.options[0].value); // Use default option
 document.body.style.fontFamily = localStorage.getItem("font-family");
}
// Handle changes to font family selection
fontFam.onchange = () => {
 localStorage.setItem("font-family", fontFam.value);
 document.body.style.fontFamily = localStorage.getItem("font-family");
};

// - Background color
if (!localStorage.color) {
 localStorage.setItem("color", color.options[0].value); // Use default option
 document.body.style.backgroundColor = localStorage.getItem("color");
}
// Handle changes to color selection
color.onchange = () => {
 localStorage.setItem("color", color.value);
 document.body.style.backgroundColor = localStorage.getItem("color");
};

// - Font size
if (!localStorage["font-size"]) {
 localStorage.setItem("font-size", fontSize.options[0].value); // Use default option
 document.body.style.fontSize = localStorage.getItem("font-size");
}
// Handle changes to font size selection
fontSize.onchange = () => {
 localStorage.setItem("font-size", fontSize.value);
 document.body.style.fontSize = parseInt(localStorage.getItem("font-size")) + "px";
};

// Set values of elements to reflect saved preferences
fontFam.value = localStorage.getItem("font-family");
color.value = localStorage.getItem("color");
fontSize.value = localStorage.getItem("font-size");




















