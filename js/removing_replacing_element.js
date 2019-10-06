// Replace Element

// Create Elment
let newHeading = document.createElement("h2");

// Add id

newHeading.id = "task-title";

// New text node
// newHeading.appendChild(document.createTextNode("Task List"));
newHeading.innerText = "Task List";
// get the old heading
let oldHeading = document.getElementById("task-title");

// get old heading parent
let cardAction = document.querySelector(".card-action");
// replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element

let lis = document.querySelectorAll("li");
let list = document.querySelector("ul");

// remove List item;
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// Classes & Attribute
let firstLi = document.querySelector("li:first-child");

let firstLiLink = firstLi.children[0];

let val;

val = firstLiLink.className;
val = firstLiLink.classList;
val = firstLiLink.classList[0];
firstLiLink.classList.add("test");
firstLiLink.classList.remove("test");
val = firstLiLink;

// Attribute;

val = firstLiLink.getAttribute("href");
val = firstLiLink.setAttribute("href", "http://google.com");
val = firstLiLink.hasAttribute("href");
firstLiLink.setAttribute("title", "Google");
firstLiLink.removeAttribute("title");
console.log(val);
