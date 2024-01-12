// primitive datatypes NNSSBBU
//                     Null Number symbol string boolean bigInt undefined


let a = null;
let b = 345;
let c = true;// it can be false also
let d = BigInt("567") + BigInt("5")
let e = "Harry"
let f = Symbol("this is a symbol")
let g = undefined
let h  // this is also  undefined 
console.log(a,b,c,d,e,f,g,h)
console.log(typeof d)  // bigint




//Non primitive datatypes are :  objects in Js

const item = {
    "Harry": true,
    "Shubh":false,
    "lovish": 77,
    "Rohan": undefined
}
console.log(item["Shubh"])




const russel = {
    "durgu": false,
    "rohit": 77,
    "Manish": "Bhai hai apna"
}
console.log(russel["rohit"]) // 77
console.log(russel["Manish"]) // Bhai hai apna 




