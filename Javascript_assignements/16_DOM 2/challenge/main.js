
// styling and creating the container
document.body.style.cssText = " font-family: 'Open Sans'; background-color: #333; font-size: 0.85rem;"
let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
container.style.cssText = "margin: auto; width: 96%;";

// starting with the head
let head = document.createElement("div");
head.classList.add("head");
container.appendChild(head);
head.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 0.8rem;";

// logo is a child of the head section
let logo = document.createElement("div");
logo.classList.add("logo");
logo.innerHTML = "STARIST";
head.appendChild(logo);
logo.style.cssText = "color: #23a96e; font-weight: bold; font-size: 1.23rem;"

// the menu is the 2nd child of head
let menu = document.createElement("ele");
menu.classList.add("menu");
head.appendChild(menu);
//adding the menu composants and styling 
let menuArray = ["Home", "About", "Services", "Contact"];
for(let i = 0; i < 4; i++) {
    let a = document.createElement("a");
    a.innerHTML = menuArray[i];
    // to get the class in lowecase
    a.classList.add(menuArray[i][0].toLowerCase() + menuArray[i].slice(1,8));
    menu.appendChild(a);
    a.style.cssText = "margin: 0.23rem; color: #EF511B; cursor: pointer";
}
// moving to the second main section where we enter numbers
let entery = document.createElement("div");
entery.classList.add("entry-field");
container.appendChild(entery);
entery.style.cssText = "display: grid; grid-template-columns: repeat(3, auto); gap: 15px; margin: 20px 0;";
for(let i = 0; i < 15; i++) {
    let but = document.createElement("button");
    but.classList.add(`${i+1}`);
    but.innerHTML = (`${i+1}`);
    entery.appendChild(but);
    but.style.cssText = "height: 65px; font-size: 25px; position: relative; color: #333; cursor: pointer;";
    let after = document.createElement("span");
    after.innerHTML = "Product";
    but.appendChild(after);
    after.style.cssText = "color: #EF511B; position: absolute; font-size: .8rem; top: 85%; left: 50%; transform: translate(-50%, -50%);";
}
// just some unecessary attachements
let copyrights = document.createElement("div");
copyrights.classList.add("copyrights");
copyrights.innerHTML ="Copyrights Starist  2023";
container.appendChild(copyrights);
copyrights.style.cssText = "color: white; background-color: #23a96e; padding: 20px; text-align: center;";


/* <div class="container">
        <div class="head">
            <div class="logo">STARIST</div>s
            <div class="menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div class="entry-field">
            <button class="one">1</button>
            <button class="two">2</button>
            <button class="three">3</button>
            <button class="four">4</button>
            <button class="five">5</button>
            <button class="six">6</button>
            <button class="seven">7</button>
            <button class="eigth">8</button>
            <button class="nine">9</button>
            <button class="ten">10</button>
            <button class="eleven">11</button>
            <button class="twelve">12</button>
            <button class="thirteen">13</button>
            <button class="fourteen">14</button>
            <button class="fifteen">15</button>
        </div>
        <div class="copyrights">copyrights 2023</div>
    </div> */