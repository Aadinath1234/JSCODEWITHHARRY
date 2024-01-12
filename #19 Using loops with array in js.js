let num = [1,2,34,5,7]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}


// foreach loop
let num1 =  [1,2,34,5,7];
num1.forEach((element)=>{
    console.log(element * element);
})



// Array.from
let name = "Harry"
let arr = Array.from(name)
console.log("it is used to create an array from a string or an html collection :  " + arr)



// for of loop
for (let i of num){
    console.log(i);
}



// for in loop
for (let item in num){
    console.log("wow bro " + item);
}
















