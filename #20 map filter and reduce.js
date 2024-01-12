// map is used to create a new array.

let arr = [45,23,22];
let a = arr.map((value,index,array)=>{
    console.log(" map is used to create a new array "+value,index,array);
    return value + 1
})
console.log("this is the new array "+a);


//array  filter method : 
let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log("filter method is used to filter conditioned element from the array " + a2);
console.log("map filter does not modify the original  array ");


// array reduce method :

let arr3 = [ 1,2,3,4,5]
const reduce_func = (h1,h2) =>{
    return h1 + h2;
}
let newarr3 = arr3.reduce(reduce_func)
console.log("here first h1 = 1 and h2 = 2 so 1+2 = 3 now h1=3 and h2 is 3 and so on till 5 as h2 and after that you will get your output : "+newarr3);














