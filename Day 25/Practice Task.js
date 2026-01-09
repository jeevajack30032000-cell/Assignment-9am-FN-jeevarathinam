// Create an array of 5 colors and print the first and last color.
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
console.log('First color:', colors[0]);
console.log('Last color:', colors[colors.length - 1]);

// Add and remove items using push, pop, shift, unshift.
colors.push("Orange");
console.log("After push:", colors);
colors.pop();
console.log("After pop:", colors);
colors.shift();
console.log("After shift:", colors);
colors.unshift("Pink");
console.log("After unshift:", colors);

// Create an array of numbers and print all using forEach().
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(number) {
    console.log(number);
});


// Use map() to square all numbers.
let squaredNumbers = numbers.map(function(number) {
    return number * number;
}
);
console.log("Squared numbers:", squaredNumbers);

// Use filter() to find numbers greater than 50.
let greaterThan50 = numbers.filter(function(number) {
    return number > 50;
});
console.log("Numbers greater than 50:", greaterThan50);
