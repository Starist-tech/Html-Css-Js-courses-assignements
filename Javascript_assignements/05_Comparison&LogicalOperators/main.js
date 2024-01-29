
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 + 100 > 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(100 -50 != "20" +"-40"); // true
console.log(-2 * 10 != "13" -"-40"); // true
console.log("99999" + "10" !== 5 + 10); // true
console.log(9 - 20 != false); // true



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(!(num2 < num1)); // true
console.log(!(num1 > num2)); // true



/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");


let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b && a > c); // true
console.log(!(a === b) && !(a > b) && !(a < c) && !(a === c)); // true


