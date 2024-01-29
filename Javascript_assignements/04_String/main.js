
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let userName = "Elzero";
console.log(userName.charAt(3)); // e
console.log(userName[3]); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.charAt(3).repeat(3)); // eee

/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


/*                         ----Challenges-----                                 */
console.log("%cChallenge :", "color: red;");



/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11, 7)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.substring(0, 2).toLowerCase() + a.substring(2).toUpperCase()); // eLZERO WEB SCHOOl


/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");


let itsMe = "It's me Starist here";


function checkStr(arr , str) {
    if (arr.indexOf(str) === -1) {
        console.log(`there is no ${str}`)
    }
    else {
        console.log(`your ${str} is here in index ${arr.indexOf(str)}`)
    }
}

checkStr(itsMe, "Starist")

