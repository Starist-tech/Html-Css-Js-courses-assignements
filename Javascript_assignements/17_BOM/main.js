"use strict";
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");
// the user should enter two numbers in the prompt like (3-15) 
// and then show the numbers between them on screen

let prompt1 = window.prompt("Print Number From – To");
let par1 = document.querySelector(".parent-1");

if(prompt1 !== null){ // if he didin't cancel the prompt :
    let nums = prompt1.split("-");//getting the numbers in prompt in an array
    let start = parseInt(nums[0]);//convert array strings to ints
    let end = parseInt(nums[1]);

    if (nums.length !== 2) { //incase he didnt enter as (x-y) or put just one number....
        alert("Invalid input format. Please enter two numbers separated by a hyphen.");
    }
    else {
        let min = Math.min(start, end); //taken the lower and the biggest numbers to loop in all cases
        let max = Math.max(start, end);

        for (let i = min; i <= max; i++) {
            let n = document.createElement("span");
            n.innerHTML = i;
            n.style.display = "block";
            par1.append(n);
        }
}}

/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let close = document.querySelector(".close");
let popup = document.querySelector(".popup");

setTimeout(() => {
    popup.style.display = "block";
}, 5000);// after 5 second the page show the popup

let closePop = close.onclick = () => {
    popup.style.display = "none"; // when clicking on the close button the popup become hidden
};

/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let show3 = document.querySelector(".show-3");

function reduceCounter() {
    show3.innerHTML--;
    if(show3.innerHTML == 0){ //when the counter is 0:
        clearInterval(counter1); //stop the counter;
        /*location.replace() OR*/ window.open("https://elzero.org","_blank"); //and open a new page;
    }
    if(show3.innerHTML == 5){ // when the counter is 5:
        window.open("https://elzero.org","_blank","width=500,height=400,left=400,top=100,"); //open a new window;
    }
};

let counter1 = setInterval(reduceCounter,1000);

/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

// line 53: to open a website when counter is 0;

/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");

// line 56: to open a new window when the counter is 5;














