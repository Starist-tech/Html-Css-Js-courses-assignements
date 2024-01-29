
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");


// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

let num = 700;

if (num < 10) {
    console.log(`00${numOne}`);
} else if (num >= 10 && num < 100) {
    console.log(`0${numOne}`);
   }
    else{
    console.log(`${num}`);
    }


/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if (num1 == str) {
    console.log(`{num1}: ${num1} Is The Same Value As {str}: ${str}`);
}
if (num1 == str && typeof(num1) !== typeof(str)) {
    console.log(`{num1}: ${num1}  Is The Same Value As {str}: ${str} But Not The Same Type`);
}
if (num1 != str2 || typeof(num1) !== typeof(str)) {
    console.log(`{num1}: ${num1} Is Not The Same Value Or The Same Type As {str2}: ${str2}`);
}
if (typeof(str) !== typeof(str2) && str == str2 ) {
    console.log(`{str}: ${str} Is The Same Type As {str2}: ${str2} But Not The Same Value`);
} 

/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");


let num01 = 10;
let num02 = 30;
let num03 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num03} Value And Type Is Not The Same As {num01} And Type Is Not The Same As {num02}"


if (num03 > num01 && typeof (num03) !== typeof (num02)) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if (num03 > num01 && num03 == num02 && typeof (num03) !== typeof (num02)) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if (num03 != num01 && typeof (num03) !== typeof (num02)) {
    console.log("{num03} Value And Type Is Not The Same As {num01} And Type Is Not The Same As {num02}");
}


/*                         ------fourd------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let num001=5;
let num002=1;
let num003=5;
let num004=30;
/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/
// Condition 1
if(num001>num002){
console.log("True");
}else{
console.log("False");
}
// Condition 2
if(num001>num002&&num001<num004){
console.log("True");
}else{
console.log("False");
}
// Condition 3
if(num001>num002&&num001===num003){
console.log("True");
}else{
console.log("False");
}
// Condition 4
if((num001+num002)<num004){
console.log("True");
}else{
console.log("False");
}
// Condition 5
if((num001+num003)<num004){
console.log("True");
}else{
console.log("False");
}
// Condition 6
if((num001+num002+num003)<num004){
console.log("True");
}else{
console.log("False");
}
// Condition 7
if(num004-(num001+num003)+num002===21){
console.log("True");
}else{
console.log("False");
}




/*                         ----Challenges-----                                 */
console.log("%cChallenge :", "color: red;");


/*
If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";


if ((st.length*2).toString() === "34") {
    console.log("Good");
}
// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good");
}
if (typeof(st.length) !== "string") {
    console.log("Good");
}
if (typeof(st.length) === "number") {
    console.log("Good");
}
if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
    console.log("Good");
}


/*                  ------additional from Starist------                         */




