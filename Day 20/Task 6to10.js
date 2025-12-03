// task 6: Student Info Object: Create an object storing name, age, grade.
const studentinfo = {
    name:"Jeevarathinam",
    age:25,
    grade:"A"
};
console.log("Student Info:", studentinfo);

// task 7: Cart Total: Use numbers & strings to show totals with conversions.

let item1price = "50"; // string
let item2price = 30;   // number
let totalprice = Number(item1price) + item2price; // convert string to number
console.log("Total Cart Price:", totalprice);



// task 8:Login Status: Use boolean to display “Welcome” or “Please Login”.

let loginstatus = false; // boolean
if(loginstatus) {
    console.log("Welcome!");
} else {
    console.log("Please Login");
}



// task 9:Large Number Calculator: Use BigInt for big number operations.

let bigNumber1 = BigInt("9007199254740991");
let bigNumber2 = BigInt("12345678901234567890");
let bigNumberSum = bigNumber1 + bigNumber2;
console.log("Sum of Big Numbers:", bigNumberSum);


// task 10: Unique User IDs: Use Symbols to create user identifiers.
const userID1 = Symbol("user1");
const userID2 = Symbol("user2");
console.log("User ID 1:", userID1);
console.log("User ID 2:", userID2);
console.log("Are User IDs equal?", userID1 === userID2); // false