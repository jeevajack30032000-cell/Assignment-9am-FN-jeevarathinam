// Use reduce() to find the total of numbers [10, 20, 30, 40].
let nums = [10, 20, 30, 40];
let total = nums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Total:", total);


// Create an array of students’ ages and find only adults (≥18).
let ages = [15, 20, 25, 17, 30];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

// Build a 2D array of names and marks — print each student's data.
let students = [
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78]
];

students.forEach(function(student) {
    console.log(`Name: ${student[0]}, Marks: ${student[1]}`);
});

// Combine two arrays using concat() or spread syntax [...a, ...b].
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = [...array1, ...array2];
console.log("Combined array:", combined);


// Create an array of products and display all names dynamically using forEach() in HTML.
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
]; 
products.forEach(function(product) {
    console.log("Product Name:", product.name);
});