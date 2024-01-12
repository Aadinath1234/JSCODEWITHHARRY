for (let i = 0; i<5; i++){
    console.log(i);
}


for (let i = 0; i<500; i++){
    console.log(i+1);
}

for (let i = 0;i<500;i++){
    console.log(i);
}




// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n)
// for(let i = 0; i<n; i++){
//     sum += (i+1);
//     console.log((i+1), "+")
// }

// console.log("Sum of first " + n + "natural numbers is " + sum );






// this is the solution of the quiz question.
let a1 = 10;
for(a1=0;a1<=50;a1++){
    console.log(a1);
}



let obj = {
    harry: 90,
    shubh: 45,
    shivika : 56,
    ritika : 57,
    shiv : 23
}
// this is the for in loop 
for(let a in obj){
    console.log(a)
    console.log("Marks of " + a + "are " + obj[a])
}



// in for of loop obj should be iterable means it should be an array or string .
for (let b of "this is the for of loop for your kind information")
console.log( b);

























