// q.1 solution ps2 

let a =prompt(" Enter your age here");
a = Number.parseInt(a)
if(a>=10 && a<=20){
    console.log( " the age of the person is between the 10 and 20");
}
else{
    console.log("your age is not between the 10 and 20 , I'm sorry");
}


// q.2 solution  ps2
let v = prompt("Enter your input here");
v = Number.parseInt(v);
switch(v){
    case 1:
        console.log("this is the one number");
        break
    case 2:
        console.log("this is the number 2");
        break;
    case 3:
        console.log("this is the number 3");
        break;
    default:
        console.log("this is what i want babe!!!");
}


// q.3 solution ps2 
let g = prompt("Enter your input");
g = Number.parseInt(g);
if(g%2==0 && g%3==0){
    console.log("this number is divisible by the 2 and 3 ");
}
else {
    console.log("this number is not divisible by 2 and 3 ");
}


//q.4 solution ps2 
let g = prompt("Enter your input");
g = Number.parseInt(g);
if(g%2==0 || g%3==0){
    console.log("this number is divisible by the 2 or 3 ");
}
else {
    console.log("this number is not divisible by 2 or 3 ");
}

//q.5 solution ps2 
let age = prompt("Enter your age ");
age = Number.parseInt(age);
alert(age>=18?"you can drive a vehicle": "you cannot drive babe" );
