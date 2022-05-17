// String (fields of text)

// const singleQuotes = 'Bonjour!';
// const doubleQuotes = "Comment allez vous?";
// const Name = 'Jane';
const backticks = `${2+2}`;

console.log(typeof backticks); // #type of gives us the data type


// Numbers. Javascript is untyped
const firstNum = 5;
const secNum = 10;

const result = firstNum / secNum;

console.log(typeof result);

// Booleans. T/F
// const age = 22;

// console.log(age > 20);

// Null - no value

let height = null;
console.log(height);
height = 63;
console.log(height);

// Undefined - no assigned value, unassigned 
let x;
console.log(undefined);


// Objects - used to group variables

const person = {
    name: 'John',       // key: value
    age: 25,
}

console.log(person);
console.log(person.name);
console.log(person.age);

// Arrays - to store ordered data collections
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr[0]); 

const date = new Date();
console.log(date);

// Statically Typed
// int num = 5;
// Dynamically Typed
let num = 5;
