let val;

let list = document.querySelector("ul.collection");
let listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes

val = list.childNodes;

val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// 1 Element
// 2 Attribute (deprecated)
// 3 Text node
// 8 Comment
// 9 Document itself
// 10 Doctype
// Get Children element nodes
val = list.children;
val = list.children[0];
val = list.children[1].textContent = "Hello";
val = list.children[0].children[0].id = "test";
val = list.firstChild;
val = list.firstElementChild;
// Children of Children
val = list.children[3].children;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = listItem.childElementCount;

//  Count parent elements
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextElementSibling;
// Get previous sibling

// val = listItem.previousElementSibling;

console.log(val);
