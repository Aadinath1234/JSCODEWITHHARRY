// here we are creating our function: 
function onePlusAvg(x,y){
    return 1 + (x + y) /2;
    console.log("Done");
}

let a = 1;
let b = 2;
let c = 3;
console.log("ONe plus average of a and b is ", onePlusAvg(a,b))
console.log("One plus average of b and c is ", onePlusAvg(b,c))
console.log("One plus average of a and c is ", onePlusAvg(a,c))





//this is function which can be written in this way also. 
const sum = (a,b) =>{
    return a + b;
}
console.log(sum(12,12));





const hello=() =>{
    console.log("this function output will seen when you will call this function otherwise you cannot see the output of the function.")

}
hello();

let d = hello();
console.log(d);











