// task 1:Declare variables for all 7 primitive types.

var name = "jeevarathinam"; //string
let age = 25; //number
const isDeveloper = true; //boolean
let bigNumber = 9007199254741991n; //bigint
let unknownValue = undefined; //undefined
let nullValue = null; //null
let symbolValue = Symbol("id"); //symbol


// task 2:Check each variable's type with typeof.

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDeveloper);
console.log(typeof bigNumber);
console.log(typeof unknownValue);
console.log(typeof nullValue);
console.log(typeof symbolValue);

// task 3:Create an object with 3 properties and print them.

const person = {
    firstName: "jeeva",
    lastName: "jack",
    age: 30
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// task 4:Convert "45" to a number.

let numberValue = Number("45");
console.log(numberValue);




// task 5:Convert false to a string.

let stringValue = String(false);
console.log(stringValue);

