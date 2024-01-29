                               // First

document.write("<h1 class=mentor> Elzero </h1>");

document.querySelector(".mentor").style.cssText = "color:blue; font-size: 80px ; font-weight: bold;text-align: center;font-family: Arial";

                                //Second

console.log("%cElzero %cWeb %cSchool", "color: red;font-size:40px;", "color: green;font-size:40px;font-weight: bold" , "color: blue;font-size:40px;")

                                //Third

//  Creating the first main group
console.group("Groupe 1");
    console.log("Message 1");
    console.log("Message 2");

    //creating the first group in the first main group
    console.group("Child Group");
        console.log("Message 1");
        console.log("Message 2");

        //creating the first group in the first group of the first main group
        console.group("Grand Child Group");
            console.log("Message 1");
            console.log("Message 2");
            
//Ending the first main group
console.groupEnd();

// Creating the second main group
console.group("Groupe 2");
console.log("Message 1");
console.log("Message 2");

                                     //Fourd

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

                                    // Fifth

// console.log("Iam In Console");
// document.write("Iam In Page");
