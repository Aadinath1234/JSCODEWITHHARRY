// html tag and the body tag are the siblings .

// <div>
//     <p></p>
//     <span></span>
// </div>
// here div is parent for the <p> tag and span tag . p tag and span tag are siblings .

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// child nodes are not the array but looks like an array. to create a child node as an array we use this : 
let arr = Array.from(document.body.childNodes);
console.log(arr);












