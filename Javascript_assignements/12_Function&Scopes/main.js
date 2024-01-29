

/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");


function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
      if (zName.includes(" ")) {
          let first = zName.indexOf(" ");
          return zName.slice(0, first) + " " + zName.charAt(first + 1) + ".";
      } else {
          return zName;
      }
  }

  function ageWithMessage(zAge) {
      let realAge = parseInt(zAge);
      return `Your age is ${realAge}`;
  }

  function countryTwoLetters(zCountry) { 
      return `You live in ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
      return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails();
}


console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");


let  itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");


function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");


function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      result += parseInt(data[i]);
    }
  }
  if (result === 0) {
    return 'All is strings';
  }
  else  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: red;");


/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...names) {
  // Parameter ?
  return `String [${names.join(', ')}] => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20,50,10,60];
let calc =(one, two, ...nums)=> one + two +nums[+false];

console.log(calc( 10 , myNumbers [+false], myNumbers[+true])); //80


/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");















