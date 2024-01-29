


/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let day = "     friday ".trim().toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1); // Converts "friday" to "Friday"

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("It's Not A Valid Day");
}



// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"



/*                        ------Challenges------                               */

/*
    Switch Challenge
*/
console.log("%cChallenge 1:", "color: red;");


let job = "Developer";
let salary = 0;

switch (job) {
    default:
        salary = 4000;
        break;
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
}

console.log(`The ${job} salary is ${salary}`);


/*
    If Challenge
*/
console.log("%cChallenge 2:", "color: red;");

let holidays = 3;
let money = 0;


if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}


