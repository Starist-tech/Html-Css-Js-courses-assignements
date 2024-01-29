

/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello MR ${theName}`)
    }
    else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`)
    }
    else console.log(`Hello ${theName}`)
}

  // Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");


function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log(`Second Number Not Found`);
    }
    else if (operation === undefined || operation === "add") {
        console.log(firstNum + secondNum);
    }
    else if (operation === "subtract") {
        console.log(firstNum - secondNum);
    }
    else if (operation === "multiply") {
        console.log(firstNum * secondNum);
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600


/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");


function ageInTime(theAge) {
    if (theAge >= 10 && theAge <= 100) {
        console.log("%c---your age :", "color: dodgerblue")
        console.log(`In mounths is ${theAge * 12} `);
        console.log(`In weeks is ${theAge * 12 * 4} `);
        console.log(`In days is almost ${theAge * 12 * 4 * 30} `);
        console.log(`In hours is almost ${theAge * 12 * 4 * 30 * 60} `);
        console.log(`In minutes is almost ${theAge * 12 * 4 * 30 * 60 * 60} mounths`);
        console.log(`In seconds is almost ${theAge * 12 * 4 * 30 * 60 * 60 * 60} mounths`);
    }
    else console.log("%c---Age Out Of Range---", "color: dodgerblue");
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months



/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");


function checkStatus(a, b, c) {
    let rest = [];
    rest.push(a, b, c);
    let name = "";
    let age = 0;
    let avail = false;

    for (i = 0; i < rest.length; i++) {
        if (typeof rest[i] === 'string') {
            name = rest[i];
        }
        if (typeof rest[i] === 'number') {
            age = rest[i];
        }
        if (typeof rest[i] === 'boolean') {
            avail = rest[i];
        }
    }

    if (avail === true) {
        console.log(`"Hello ${name}, Your Age Is ${age}, You Are Available For Hire"`);
    }
    else console.log(`"Hello ${name}, Your Age Is ${age}, You Are not Available For Hire"`);
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);


/*                         ------sixth------                                 */
console.log("%c------sixth------", "color: #32CD32;");

function multiply(...ints) {
    let multResult = 1;
    for (let i = 0; i < ints.length; i++) {
        if (typeof ints[i] !== 'number') {
            continue;
        }
        else multResult *= parseInt(ints[i]); // or math.trunc()
    }
    console.log(multResult);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

/*                  ------Challenge------                         */
console.log("%c------Challenge------", "color: red;");


/*
Function - Random Argument Challenge
====================================
Create Function showDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
- String => Name
- Number => Age
- Boolean => Status
Argument Is Random
Data Is Not Sorted Output Depend On Data Types
- Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
    let rest = [];
    rest.push(a, b, c);
    let name = "";
    let age = 0;
    let avail = false;
    for (let i = 0; i < rest.length; i++) {
        (typeof rest[i] === 'string') ? name = rest[i]
            : (typeof rest[i] === 'number') ? age = rest[i]
                : (typeof rest[i] === 'boolean') ? avail = rest[i]
                : null; // Handle other data types if necessary
    }
    
    (avail === true)
            ? (document.write(`<div><br><br><br>"Hello ${name}, Your Age Is ${age}, You Are Available For Hire"</div>`))
            : (document.write(`<div><br><br><br>"Hello ${name}, Your Age Is ${age}, You Are not Available For Hire"</div>`));            
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");


    // function yearsToForget(start, end, ...exception) {
    //     for (let i = start; i <= end; i++){
    //         if(exception.includes(i)) {
    //             continue;
    //         }
    //         console.log(i);
    //     }
    // }
    // yearsToForget(2007, 2023, 2009, 2020)



// let nums1 = [1, 3 ,2000];
// let nums2 = [4, 2, -3];
// let people = [...nums1, ...nums2];


// function calc(nums) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result += nums[i];
//     }
//     return result;
// }

// console.log(calc(people));















