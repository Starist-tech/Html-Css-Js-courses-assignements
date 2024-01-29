let p = document.getElementsByTagName("p")[0];
let mainDiv = document.getElementsByTagName("div")[0];

// delete the paragraph
p.remove();

// creating div before the main one
let beforeDiv = document.createElement("div");
beforeDiv.innerHTML = "Start";
beforeDiv.className = "start";
beforeDiv.setAttribute("title","Start Element");
beforeDiv.setAttribute("data-value" ,"Start");

// creating div after the main one
let afterDiv = document.createElement("div");
afterDiv .className = "end";
afterDiv .title = "End Element";
afterDiv .setAttribute("data-value" ,"End");
afterDiv .innerHTML = afterDiv.getAttribute("data-value");

// appending the elements before and after the main div
mainDiv.before(beforeDiv);
mainDiv.after(afterDiv);
