
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (index < friends.length) {
    if (friends[index].toString().startsWith('S') || friends[index].toString().startsWith('M')) {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++;
}


/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: #32CD32;");

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let Admins = [];


document.write(`<div>We Have X Admins</div>`);
document.write(`<div>`);
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === 'Stop') {
    break;
  }
  else Admins.push(myAdmins[i]);
}
document.write(`We Have ${Admins.length} Admins`);
document.write(`</div>`);

for (let j = 0; j < Admins.length; j++) {
  let counterr = 1;
  document.write(`<div>`);
  document.write(`<h3>The admin of team ${j + 1} is ${Admins[j]}</h3><br>`);
  for (let k = 0; k < myEmployees.length; k++){
    if(myEmployees[k][0].toUpperCase() === myAdmins[j][0].toUpperCase()) {
      document.write(`${counterr}- ${myEmployees[k]}<br><br>`)
      counterr++;
    }
  }
  document.write(`<hr></hr>`);
  document.write(`</div>`);
}








