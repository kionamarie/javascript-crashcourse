// Function --> A block of code that performs a task

// console.log() is a built-in function 

// Function Declaration -- defining a function
// function square (number){
//     return number * number;

// // Function Declaration
// function name(params){
//     // statements
//     // have access to "this" keyword
// }
// // Function Call -- invoking/executing a function
// const result = square(5);
// console.log(`Your answer is: ${result}`);

// // Function expression
// const name = function(params) {
//     //statements
// }
// // Arrow function
// const name = (params) => {
//     // statements


// Every function returns undefined unless specified

function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi('Joe');

function add(a, b){
    return a + b;
}
const sum = add(2,2);
console.log(sum);



// Arrow Functions
// two ways of writing arrow functions: 
const square = (number) => number * number;

const result = square(5);
console.log(result);


const square1 = (number) => {
    return number * number;
}
const result1 = square(5);
console.log(result1);