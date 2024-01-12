// array methods :
let num = [1,2,3,34,4]
let b = num.toString()
console.log("this method is used to change the array to a string : " + b);

let c = num.join("_");
console.log("here _ is placed between the every element of the array "+c, typeof c);



let r = num.pop()
console.log("here the element is poped from the array "+num+" this is the poped element : "+ r);


let r1 = num.shift()
console.log("here the first element from the array is removed "+r1+"   Now the modified array is the : " + num);


let r2 = num.unshift(788);
console.log("the unshift will add an element at the start of the array  : "+ r2 +"here r2 is the length of the array " + " " + num);




















