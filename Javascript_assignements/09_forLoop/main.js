
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i < end; i += start) {
    if (i === exclude) continue;
    console.log(i);
}


// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100



/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");


let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i >= end1; i--) {
    if (i < start1) console.log(`${end1}${i}`);
    else console.log(i);
}


// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++){
    console.log(i);
    for (j = breaker; j <= end2 - breaker; j += breaker){
        console.log(`--${j}`);
    }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let index1 = 10;
let jump = 2;

let i = index1;
for (;;) {
    if (i <= jump) {
        break;
    }
    console.log(i);
    i -= jump;
}

// Output
10
8
6
4


/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");


let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter1 = +true;

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// }
for (let i = --letter.length; i < friends1.length; i++) {
    if (!friends1[i].toLowerCase().startsWith(letter.toLowerCase())) {
        console.log(`${counter1++} => ${friends1[i]}`);
    }
}


/*                         ------sixth------                                 */
console.log("%c------sixth------", "color: #32CD32;");

let start3 = 0;
let swappedName = "elZerO";
let result = "";
// Output
// "ELzERo"

for (let i = start3; i < swappedName.length; i++) {
    let char = swappedName[i];
    
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
        result += char.toUpperCase();
    }
}

console.log(result);

/*                         ------seventh------                                 */
console.log("%c------seventh------", "color: #32CD32;");


let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start4; i < mix.length; i++) {
    if (typeof mix[i] !== 'string' && mix[i] !== 1) {
        console.log(mix[i]);
    }
    
}

// Output
// 2
// 3
// 4











