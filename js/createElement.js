// let li = document.createElement("li");

// // Add Class
// li.className = "collection-item";

// // Add id
// li.id = "new-item";

// // Add attribute
// li.setAttribute("title", "New Item");

// // Create text node and append;
// li.appendChild(document.createTextNode("Hello World"));
// // Create new link element
// let link = document.createElement("a");
// link.className = "delete-item secondary-content";
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// // Append li as child to ul
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

let li = document.createElement("li");
//  Set className;
li.className = "collection-item";
// Add text
li.innerText = "Hi, there";
// Create inner link
let link = document.createElement("a");
// Setting link attribute
link.className = "delete-item secondary-content";
link.href = "#";
link.innerHTML = '<i class="fa fa-remove"></i>';

// Attach link to li;
li.appendChild(link);
//  Find ul
let ul = document.querySelector("ul.collection");
ul.appendChild(li);
console.log(li);
