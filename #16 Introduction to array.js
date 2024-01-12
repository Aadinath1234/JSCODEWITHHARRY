let marks = [91,82,63,84, false,"Not Present"]
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5])
console.log(marks[6]);
// index 6 is not present so here it is shown as the undefined .
console.log(marks.length);

marks[6] = 89;
console.log("here we are  adding a new value to the array : " + marks);




marks[0] = 96;
console.log("here we are  changing the value of the existing array from 91 to 96 : " + marks);

console.log("arrays are mutable but the strings are immutable. ");

console.log(typeof marks);























