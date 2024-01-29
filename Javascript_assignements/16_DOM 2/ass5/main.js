document.body.onclick = function(e) {
    console.log(`this is a ${e.target.nodeName}`);
}

// Another Solution

/*
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
console.log(span.tagName.toLowerCase());
let array = [div, span, p, article, section];
for (let i = 0; i < array.length; i++) {
	array[i].addEventListener("click", function () {
		console.log(`This Is ${array[i].tagName.toLowerCase()}`);
	});
}
*/
