// q.1 : create a variable of type string and try to add a number to it!

let a = " Hi bhai";
let b = 7;
console.log(a+b);


// q.2: use typeof operator to find the datatype of the string in last question!

let c = typeof(a+b);
console.log(c)



// q.3: create a const object in js can you change it to hold a number later?
const a1 = {
    name : "Harshit",
    section: 2,
    isPrincipal: false
}
// a1 = "wow" : for changing the const variable you will get an error.
a1['brother'] = 'yash';
a1['sister'] = 'ramesh';
a1['name'] = 'Warish';
console.log(a1)

// q.5: 
const dict = {
    appreciate: "recognize the full worth of ",
    ataraxia: "a state of freedom",
    yakka: "work hard"
}
console.log(dict.yakka)
console.log(dict.appreciate)
console.log(dict.ataraxia)
console.log(dict['yakka'])







