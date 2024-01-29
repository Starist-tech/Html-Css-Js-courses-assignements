

/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");


let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// geting rid of numbers and combine the letters
let newmix = mix.map((ele) => (isNaN(parseInt(ele))) ? ele : '').reduce((acc, ele) => `${acc}${ele}`);

console.log(newmix);
// Elzero 


/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let myString1 = "EElllzzzzzzzeroo";

let noReap = myString1.split('').filter(function(ele, index) {
    return myString1.indexOf(ele) == index; // not repeating letters 
}).reduce(function(acc, ele) {
    return `${acc}${ele}`; // conbining the others
});

console.log(noReap);



// Elzero


/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");


let myArray = ["E", "l", "z", ["e", "r"], "o"];
// instead of the flat method
let flatarr = myArray.reduce(function(acc, ele){
    return `${acc}${ele}`
}).replace(',' , '')

console.log(flatarr)

// Elzero

/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filtLet = numsAndStrings.filter(function(ele) {
    return !isNaN(ele); // return just numbers
}).map(function(ele) {
    return  -ele; // become the opposite sign
});

console.log(filtLet);

// [-1, -10, 10, 20, -5, -3]


/*                  ------fifth------                         */
console.log("%c-------fifth-------", "color: red;");

let nums = [2, 12, 11, 5, 10, 1, 99];

let sommeAcc = nums.reduce(function(acc, ele) {
    if(ele % 2 === 0) {
        return ele *= acc; // if an even num do a multiplication
    }
    else return ele += acc; // if its odd number add them
},1)//initial value

console.log(sommeAcc);

// 500


/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: red;");

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString2 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString2.split('')
    .filter((ele, index) => isNaN(ele) && ele !== ',')
    .map((ele) => (ele === '_') ? ' ' : (ele === 'Z') ? ' ' : ele)
    .slice(1)
    .join('');
    


console.log(solution); // Elzero Web School



/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");

let allLi = document.querySelectorAll( 'ul li')
let alldiv = document.querySelectorAll('div div');

allLi.forEach(function(ele) {
    ele.onclick = function(){
        allLi.forEach(function(ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active');

        alldiv.forEach(function(ele) {
            ele.style.display = 'none';
        })
    }
})













