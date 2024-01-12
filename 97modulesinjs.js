// const hello = require("./module")
// hello.hello();
// hello.ahello("Shivani");
// hello.ahello("Garima");
// hello.ahello("Aishwarya");
// hello.ahello("yashmin");


// given above code can be written in the another way using destructuring.
const{hello, ahello} = require("./module")
hello()
ahello("shivani")
ahello("garima");
ahello("aishwarya");
ahello("wahbhai");

