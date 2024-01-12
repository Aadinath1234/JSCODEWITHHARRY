console.error("Hey this is an error");//this will show an error in the output with the comments.

console.assert(5>53);
// assertion failed 

console.assert(44>10);
// undefined but not an error

console.clear();
//console was cleared completely.


obj = {a:1,b:2,c:3}
console.table(obj);
// this will create an table for you 


console.warn("this is used to show the warning ");


console.info("this shows the information");


console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" != false)
console.assert("err" == false);


console.time('p1, this shows the time taken to execute the process ');
console.timeEnd('p1, this shows the time taken to execute the process');


console.time("forloop time calculation");
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forloop time calculation");
//time taken by forloop for the execution is : 0.40ms



console.time("while loop");
let i = 0;
while(i<500){
    console.log(233)
    i++;
}
console.timeEnd("while loop");
// time taken by the loop is the 21.0ms































