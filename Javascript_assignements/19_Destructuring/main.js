"use strict";

/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
const [a,b,c,d,e] = myNumbers; //declaring variables that take their value from the array 

console.log(a * e); // 5
/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
const[a2,b2,c2,[d2,e2,[f2,g2]]] = mySkills;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`); // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr123 = arr3.concat(arr1,arr1);
// Write Your Destructuring Assignment Here
let [,a3,b3,c3,,,,,] = arr123;

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);// My Best Friends: Shady, Mahmoud, Ahmed

/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");
const member = {
    age: 17,
    working: false,
    country: "Deutschland",
    hobbies: ["Reading", "football", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
  const{age:a4 ,working:w4 ,country:c4, hobbies:[h1,h2,h3]} = member;
  console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
  // My Age Is 17 And Iam Not Working
  
  console.log(`I Live in ${c4}`);
  // I Live in Deutschland
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  let {title:t5,developer:d5,releases} = game;
  let [o5, a5] = Object.keys(releases);
  let [[u5,j5],{US:u_price, JAP:j_price}, or] = Object.values(releases);

  console.log(`My Favourite Games Style Is ${t5} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${d5} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is ${o5} It Released in ${u5} & ${j5}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${a5}`);
  // Although I Love Ark Of Napishtim
  
  console.log(`${a5} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a5} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD
/*                         ------sixth------                                 */
console.log("%c------sixth and challenge------", "color: #32CD32;");

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here:
if(chosen <= myFriends.length){ // Check if the chosen index is valid
    const{title:name, age, available, skills:[,skillTwo]} = myFriends[chosen-1];  // Unpack friend details using destructuring 
    console.log(name);// Print the extracted information about the chosen friend
    console.log(age);
    console.log(available ?"Available" :"Not available");
    console.log(skillTwo);
};


/*If chosen === 1
"Osama"
39
"Available"
"CSS"*/

/*If chosen === 2
"Ahmed"
25
"Not Available"
"Django"*/

/*If chosen === 3
"Sayed"
33
"Available"
"Laravel"*/











