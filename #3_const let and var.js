var a = "this "
{
    var a = "var is the globally scoped "
    console.log(a);  // output: var is the globally scoped 
}
console.log(a); // output: var is the globally scoped



let b = " that "
{
    let b = " now the values is limited to block level so we get the different outputs"
    console.log(b) // output: now the values is limited to block level so we get the different outputs
}
console.log(b) // output: that 




// let c = " wow"
// let c = 4 // this will throw an error for created the same name variable for another time



let c = "wow"
c= 5;
console.log(c) // this can be done .



// const d = 'author'
// let d = 'author , while doing this will throw an error because we are using the const so value cannot be changed. '





// const durgu; // this is throw an error 
// const durgu = 0; // this is ok

















