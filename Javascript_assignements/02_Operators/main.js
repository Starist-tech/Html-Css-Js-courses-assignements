
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0


/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log((--num ** num) + num++ ); // 6

// Soultion Four
console.log(num * (num - true)); // 6

// Solution Five
console.log(num + --num + true ); // 6

// Solution Six
console.log((-num*-true) + (-num*-num)); // 6



/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let str = "10";

// Solution One
console.log(+str + +str); // 20

// Solution Two
console.log(parseInt(str)  + parseInt( str)); // 20

// Solution Three
console.log(Number(str) + Number(str)); // 20

// Solution Four
console.log((str * 1) + (str  * 1)) //20

// Solution five
console.log(~~str + ~~str ); // 20


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let points = 10;

// Write Your Code Here

console.log(++points + true + true); // 13

// Write Your Code Here

console.log(--points - true - true); // 8;


/*                         ----Challenges-----                                 */

/*
                        Challenge 1
*/
console.log("%cChallenge 1:", "color: red;");

/*
exemple :
[++a] [+]
[++a]
- Value:
- Explain:
[+]
- Explain:
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
[++a] {
value: 11;
explain: pre-increment;
}
[+] {
explain: addition operator;
}
[+b++] {
value: 20;
explain: convert to number + post-increment;
}
[+] {
explain: addition operator;
}
[+c++] {
value: 80;
explain: convert to number + post-increment;
}
[-] {
explain: subtraction operator;
}
[+a++] {
value: 11;
explain: convert to number + post-increment;
}
*/

console.log(++a + -b + +c++ - -a++ + +a);

/*
[++a] {
value: 12;
explain: pre-increment;
}
[+] {
explain: addition operator;
}
[-b] {
value: -20;
explain: convert to negative number;
}
[+] {
explain: addition operator;
}
[+c++] {
value: 81;
explain: convert to number + post-increment;
}
[-] {


/*
                            Challenge 2
*/
console.log("%cChallenge 2:", "color: red;");


let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173












