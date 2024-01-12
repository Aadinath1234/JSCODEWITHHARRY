let a = prompt("This is the prompt")
console.log(typeof a)
a = Number.parseInt(a) // converting the string to a number;
if(a<0){
    alert("this is a invalid age ");
}

else if(a<9){
    alert("You are a kid and you cannot even think of driving ");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("you can now drive as you are above 18");
}
console.log("Done");
// ternary operator:
console.log("You can ",(a<18 ? " not drive":" drive")); 






const v = "papaya"
switch(v)
{
    case "Orange":
        console.log("this is the fruit in orange color");
        break;
    case "Mango":
        console.log("this is the mango");
        break;
    case "banana":
        console.log("this is the banana");
        break;
    default:
        console.log(`Sorry, we are out of the ${v}.`) ;   
}






