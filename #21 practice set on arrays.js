//q.1 ps5
let a = [1, 2, 3, 4, 5, 6, 7, 83]
let arr = prompt("Enter the numbers here ");
arr = Number.parseInt(arr);
a.push(arr);
console.log(a)



//q.2 ps5

let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a;
do {
    a = prompt("Enter a number");
    a = Number.parseInt(a)
    arr.push(a);

} while (a != 0);
console.log(arr);


//q.3 ps5
let arr = [1, 2, 3, 4, 5, 18, 20, 22];
let n = arr.filter((x) => {
    return x % 10 == 0
})
console.log(n);


//q.4 ps5
let arr = [1, 2, 30, 4, 50, 6, 7, 10]
let n = arr.map((x) => {
    return x * x;
})
console.log(n)


//q.5 ps5
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
    return x1 * x2;
})
console.log(n);






