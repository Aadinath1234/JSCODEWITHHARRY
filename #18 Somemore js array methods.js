let num = [1,2,3,4,5,6,7,8,9]
console.log(num)
delete num[0]
console.log("by using delete the length of the array is not get affected  : " +num + " "+ "this is the length of the array : "+ num.length);




let num_more = [11,12,13,14,15,16,17,18]
let num_even_more = [21,22,23,24,25]
let newArray= num.concat(num_more, num_even_more);
console.log("concat is used to merge more than two arrays but the original array remains th same : " +newArray + "this are the original array" + num, num_more, num_even_more);





let compare = (a,b)=>{
    return b - a;
}

let num1 = [221,22,3,14,5,7,8,229];
num1.sort()
console.log("here the array  is getting sorted in the order of the alphabatical arrangement  : "+ num1);

num1.sort(compare);
console.log("here we hav e used compare function to arrange this array in the ascending order : ",num1);
num1.reverse()
console.log("reverse , reverse the order of the array : "+num1);
// splice and slice method in an array: 
num1.splice(2,3,1022,1023,1024);
console.log("here 2 is the starting point and 3 is the number of elements which is removed after the starting point and which elements are added to the array is 1022,1023 and 1024: " + num1)
let deleteValues = num1.splice(2,3,1022,1023,1024);
console.log(deleteValues);

let num2 = num1.slice(2,4);
console.log(num2);

































