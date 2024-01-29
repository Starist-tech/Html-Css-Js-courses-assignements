
/*                     ------first------                                 */
console.log("%c------first------", "color: #32CD32;");

let linksList1 = document.querySelectorAll(".first a");

for(let i = 0; i < linksList1.length; i++) {
    if(linksList1[i].classList.contains("open") && linksList1[i].innerHTML === 'Elzero') {
        linksList1[i].setAttribute("target", "_blank");
        // linksList1[i].click(); dont want a headache
        console.log(linksList1[i]);
    }
}


/*                  ------additional from Starist------                         */
console.log("%c------additional from Starist------", "color: #32CD32;");


                        /*for passing fron a case to another if its not empty anymore*/

                                            //  HTML
// <form action="" id="additional">
//     <input type="number" class="one" placeholder="enter a number">
//     <input type="number" class="two">
//     <input type="number" class="three">
//     <input type="number" class="four">
//     <input type="number" class="five">
//     <input type="number" class="six">
// </form>

                                            // JS
let formAdd = document.getElementById("#additional");
let inputList = document.querySelectorAll("form#additional input");

for(let i = 0; i < inputList.length; i++) {
    inputList[i].setAttribute("style", " color: white; background: #00907f; border-radius: 5px; padding: 5px 10px; font-size: 1.5rem; border: none; text-transform: capitalize;")
    inputList[i].oninput = function() {
        if(this.value.length === 1) {
        inputList[i + 1].focus();
        }
        else this.blur();
    }
}
