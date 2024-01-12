// q.1 solution ps3
let obj = {harry: 98, rohan: 70, aakash: 7}
for(let i = 0;i<Object.keys(obj).length;i++){
    console.log("the marks of " + Object.keys(obj)[i]+"are"+obj[Object.keys(obj)[i]])
}

// q.2 solution ps3
let obj1 = {harry: 98, rohan: 70, aakash: 7}
for(let  a in obj1){
console.log("this is the " +a +" "+ "and his marks are " + obj1[a] );
}


//q.3 in ps3
let b1 = 44;
let a1;
while(b1 != a1){
    console.log("try again");
    a1 = prompt("Enter a number")
}
console.log("you have entered a correct number");



// q.4 of ps3
function mean(a,b){
    return (a+b)/2;
}
console.log(mean(4,8));








