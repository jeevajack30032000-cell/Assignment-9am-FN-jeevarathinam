// task 1: Print numbers 1–10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// synatx
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// task 2: Print even numbers using a while loop.
let num = 1;
while (num <= 20) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
}

// Syntax
// while (condition) {

// }

// task 3:Use a do…while to print 1 run even if condition is false.
let jack = 5;
do {
  jack++;
  console.log(jack);
} while (jack > 10);

// task 4: Loop through an array using for…of.

const jack1 = "jeeva";
for (const i of jack1) {
  console.log(i);
}

// synatx
// for (const element of object) {  }

// task 5:Loop through an object using for…in.
const kish = {
  car: "bugatti",
  model: "sedan",
  year: 2025,
};
for (const i in kish) {
  console.log(i);
}

// syntax
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];

// }
