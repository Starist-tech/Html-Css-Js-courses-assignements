/*                         ----Challenge-----                                 */
let title = "Elzero";
let description = "Elzero Web School";
let date = "25/10";

let mainDiv = `
    <div class="main" >
        <h3>${title}</h3>
        <p>${description}</p>
        <span>${date}</span>
      </div>
  `

document.write(mainDiv.repeat(4));

/*                         ------first------                                 */
console.log("%c------first------", "color: #32CD32;");


// Add Variables Here
var NumberOne = 10;
var NumberTwo = 20;

// Ouput
console.log(NumberOne.toString() + NumberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof (NumberOne.toString() + NumberTwo.toString())); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${NumberOne}${NumberTwo}`));  // Template Literals Way => String

console.log(NumberOne + '\n' + NumberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberOne}\n${NumberTwo}`);
/*
  Template Literals Way
  20
  10
*/


/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");
              
console.log(
  "`I'm In",
  "\n",
  "\\\\",
  "\n",
  "love \\\\ \"\"\" '''",
  "\n",
  '\\"""\\"""',
  "\n",
  '""JavaScript""``'
);

/*                         ------fourd------                                 */
console.log("%c------fourth(Challenge)------", "color: #32CD32;");


let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_




