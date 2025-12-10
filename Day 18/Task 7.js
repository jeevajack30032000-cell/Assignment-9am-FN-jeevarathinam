// Create a calculator that stores intermediate values in let variables.

// method 1

let result = 0;

function add(x) {
    result += x;
    return result;
}
function subtract(x) {
    result -= x;
    return result;
} 
function multiply(x) {
    result *= x;
    return result;
}  
function divide(x) {
    if (x !== 0) {
        result /= x;
    } else {
        console.log("Cannot divide by zero");
    }
    return result;
}
console.log("Initial result:", result);
console.log("After adding 10:", add(10));
console.log("After subtracting 5:", subtract(5));
console.log("After multiplying by 3:", multiply(3));
console.log("After dividing by 2:", divide(2)); 
console.log("Final result:", result);


// method 2


// Step 1: Store input values
let a = 20;
let b = 5;

// Step 2: Intermediate result: addition
let sum = a + b;
console.log("Sum:", sum);

// Step 3: Intermediate result: subtraction
let difference = sum - 10;
console.log("Difference:", difference);

// Step 4: Intermediate result: multiplication
let product = difference * 2;
console.log("Product:", product);

// Step 5: Intermediate result: division
let finalResult = product / 5;
console.log("Final Result:", finalResult);


