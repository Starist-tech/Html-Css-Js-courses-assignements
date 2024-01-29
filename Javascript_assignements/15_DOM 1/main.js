let hrs = document.getElementsByTagName("hr");
for(let i = 0; i < hrs.length; i++) {hrs[i].setAttribute("style", "background: #00907f; height: 1px; margin: 10px;");};

/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let firstDiv1 = document.querySelector("#elzero");
let firstDiv2 = document.querySelector(".element");
let firstDiv3 = document.querySelector("[name='js']");
let firstDiv4 = document.querySelector("div");
let firstDiv5 = document.querySelectorAll("div")[0];
let firstDiv6 = document.querySelectorAll("#elzero")[0];
let firstDiv7 = document.querySelectorAll(".element")[0];
let firstDiv8 = document.querySelectorAll("[name='js']")[0];

let firstDiv9 = document.getElementsByTagName('div')[0];
let firstDiv10 = document.getElementById('elzero');
let firstDiv11 = document.getElementsByName('js');
let firstDiv12 = document.getElementsByClassName('element');

let firstDiv13 = document.firstElementChild.lastElementChild.firstElementChild;
let firstDiv14 = document.childNodes[1].childNodes[2].children[0];
let firstDiv15 = document.body.firstElementChild;

/*                         ------second------                                 */
console.log("%c------second------", "color: #32CD32;");

// or you can do document.images
imgList1 = document.querySelectorAll('div.second img'); 

for(i=0; i<imgList1.length; i++) {
    imgList1[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    imgList1[i].setAttribute("alt","Elzero Logo");
}



/*                         ------third------                                 */
console.log("%c------third------", "color: #32CD32;");

let mainInput = document.querySelector("input");
let result = document.querySelector("div.result");

// onchange or oninput (the difference is that oniput change immediatly but onchange chanve when it loses the focus)
mainInput.oninput = function() {
    result.textContent = `${mainInput.value} USD Dollar = ${(mainInput.value * 15.6).toFixed(2)} Egyptian Pound`;
} 


/*                         ------fourth------                                 */
console.log("%c------fourth------", "color: #32CD32;");

let ele1 = document.querySelector(".one");
let ele2 = document.querySelector(".two");

let ele1Inner = ele1.innerHTML;

ele1.innerHTML = ele2.innerHTML;
ele2.innerHTML = `${ele1Inner} 2`;

ele1.title = ele1.className;
ele2.title = ele2.className;


/*                         ------fifth------                                 */
console.log("%c------fifth------", "color: #32CD32;");

let imgList2 = document.querySelector("div.fifth").children;

for(i=0; i<imgList2.length; i++) {
    if (imgList2[i].hasAttribute("alt") === true) {
        // or with setattribute
        imgList2[i].alt = "Old";
    }
    else imgList2[i].alt = "New";
}

/*                         ------sixth------                                 */
console.log("%c------sixth------", "color: #32CD32;");

let form6 = document.querySelector("form.sixth");
form6.setAttribute("style", "    display: flex; flex-direction: column; justify-content: center; gap: 10px; max-width: 50%; margin: 20px auto;");
let result6Div = document.querySelector("div.results");
result6Div.setAttribute("style", "margin: 10px auto; display: grid; justify-content: center; align-items: center; gap: 15%; grid-template-columns: auto auto auto;");
let eleNum = document.querySelector("form input[name='elements']");
let eleText = document.querySelector("form input[name='texts']");
let eleType = document.querySelector("form select[name='type']");
let create6 = document.querySelector("form input[name='create']");
create6.setAttribute("style", "padding: 7px; background-color: #00907f; color: white; border: none; border-radius: 5px; cursor: pointer;");

for(i=0; i<3; i++) {
    form6.children[i].setAttribute("style", "padding: 7px;");
}

form6.onsubmit = function(e) {

    result6Div.innerHTML = '';

    for(i=0; i<eleNum.value; i++) {
        let result = document.createElement(`${eleType.value}`);
        result.appendChild(document.createTextNode(eleText.value));
        result.className = "box";
        result.id = i+1;
        result.title="Element";
        result.setAttribute("style", "color: white; BACKGROUND-COLOR: #f84b2a; border-radius: 7px;padding: 15px 30px; text-transform: capitalize");
        result6Div.appendChild(result);
    }

    e.preventDefault();

}



/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");

let nameInput = document.querySelector("[type='text']");
let ageInput = document.querySelector("[type='number']");

document.forms[0].onsubmit = function(e) {
    
    let userName = false;
    let userAge = false;

    
    // the username should have max lenght of 7 caracters and min of 3

    if (nameInput.value !== "" && nameInput.value.length > 2 && nameInput.value.length < 11) {
        userName = true;
    }

    if(ageInput.value !== "") {
        userAge = true;
    }

    if(userName === false || userAge === false) {
        e.preventDefault();
    }

}

//__________________________________________________________________________________________

for(i=0; i<100; i++) {
    let mainDiv = document.createElement("div");
    mainDiv.className = "product";
    document.body.appendChild(mainDiv);

    let p1 = document.createElement("p");
    let text1 = document.createTextNode(`paragraph text ${i}`);
    p1.appendChild(text1);
    mainDiv.appendChild(p1);

    let h31 = document.createElement("h3");
    h31.innerText = `heading of p ${i} in div`;
    mainDiv.insertBefore(h31, p1);
}















