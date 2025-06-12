hhh/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");


// using any method to get 100000 
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 *10 * 10); // 100000
console.log(100 * 1000); // 100000
console.log(1e5); // 100000
console.log(25e3 + 25e3 + 25e3 + 25e3); // 100000
console.log(Math.ceil(99999.0000001)); // 100000
console.log(Math.trunc(100000.85)); // 100000
console.log(Math.max(100 , 40 , 15.5 , 100000 , -2)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(parseInt("100000")); // 100000



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

console.log(Number.MAX_SAFE_INTEGER);


/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

console.log(console.log(Number.MAX_SAFE_INTEGER.toString().length)); // using just MAX_SAFE_INTEGER => 16


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(parseFloat(Number.parseFloat(myVar).toFixed(2))); // 100.57



/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // you should get => 2 without using any number
console.log(num.toString().length); // 2


/*                         ------sixth------                                 */
console.log("%c------sixth------", "color: #32CD32;");

let flt = 10.4; // you get 5 from flt without adding anything in five ways

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10                
console.log(Number.parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10


/*                         ------seventh------                                */
console.log("%c------seventh------", "color: #32CD32;");

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4


/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // the (max - min) is how many number after the min ; so if we have getRandomBetween(5, 10) : the min is 5 and 10-5 is : 5 ; so our 5 is added to the min and form 5 / 6 / 7 / 5 / 9 ;
}

console.log("I'm a random number between 47and 159: "
    + getRandomBetween(47, 159));

let ages = [10 , 25 , 15 , 16 , 65 ]

function getRandomArray(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return (arr[rand]);
}

console.log("I'm random number from array: " + getRandomArray(ages));


/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: red;");

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));

// Use Variables b + d To Get This Valus
console.log((parseInt(b) /  Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(parseInt(b) / Math.ceil(d))); // 67 => Number








