// 1.  Write a function that prints "Good Morning".

function greet() {
    console.log("Good Morning ");
}
greet();

// 2. Create a function that takes two numbers and prints their sum.

function numbers(a, b) {
    console.log("sum:", a + b);    
}
numbers(5,7);

// 3. Write a function that returns the square of a number.
function square(num) {
    return num * num;
}
let result= square(6)
console.log("square:", result);


// 4. Create an arrow function that multiplies two numbers.
const multiply =(x,y) =>x * y; {
    console.log("multiplication :", multiply(5, 6));
};
// 5. Write a function with a default parameter "Student". -->

function HI(name ="student"){
    console.log("HI", name);    
}
HI("jeeva");