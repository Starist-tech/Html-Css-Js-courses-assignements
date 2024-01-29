
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0,3)); // ["Ahmed", "Elham", "Osama"]



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.splice(0, 4, "Eman", "Osama") // or friends.pop(); and friends.shift();
console.log(friends); // ["Eman", "Osama"]



/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].slice(words.length).toUpperCase()); // ZERO



/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

    
if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack[1] === needle) {
    console.log("Found");
}

if (haystack.slice(1, 2).join() === needle) {
    console.log("Found")
}



/*                         ------sixth------                                 */
console.log("%c------sixth------", "color: #32CD32;");


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = arr2.slice(2,3).concat(arr1.pop(), arr2.pop()).join("").toLowerCase();
console.log(allArrs); // fxy


/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: red;");


/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,--counter).reverse()); // ["Elham", "Mazero"]

my.splice(0, 6, "Elzero");
console.log(my.join()); // "Elzero"

console.log(my[0].slice(++counter,++counter).toLowerCase() + my[0].slice(5, 6).toUpperCase()); // "rO"



/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");

let comp = [ 120, 56, 14, 55, 888, 1000, 5, 878, 100, 90, 2]

comp.sort(function comarNums(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
    // or simply (a, b) => a - b)
});

console.log(comp);


// almost useless function
let nums = [2, 3 , 4];


function checkEle(arr, val) {
    if (nums.indexOf(val) === -1) {
        console.log("there is no shit");
    }
    else {
        console.log(`i found your %c${val}`, "color: red", `in the index ${arr.indexOf(val)}`);
    }
}
checkEle(nums, 3);






