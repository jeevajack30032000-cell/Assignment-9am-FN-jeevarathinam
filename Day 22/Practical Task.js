// 1.Calculator Functions
// Write functions: add(), subtract(), multiply(), divide().
function add(a, b) {
  return a + b;
}
function subtract(c, d) {
  return c - d;
}
function multiply(e, f) {
  return e * f;
}
function divide(g, h) {
  return g / h;
}
console.log("add:", add(10, 20));
console.log("subtract:", subtract(25, 28));
console.log("multiply:", multiply(35, 55));
console.log("divide:", divide(100, 20));

// 2.Greeting Program
// Accept a name → return a welcome message.
function welcome(name ="guest"){
     return `welcome, ${name}!`;
}
console.log("hey hi", welcome("jeeva"));


// 3.Grade Checker
// Pass marks → return grade A/B/C/D/F.
function gradeChecker(marks) {
    if (marks >= 90 && marks <=100) {
        return 'A';
    } else if (marks >= 80 && marks < 90) {
        return 'B';
    } else if (marks >= 70 && marks < 80) {
        return 'C';
    } else if (marks >= 60 && marks < 70) {
        return 'D';
    } else if (marks < 60) {
        return 'F';
    } else if (marks > 100 || marks < 0) {
        return 'Invalid marks';
    } else {
        return 'Invalid input';
        }
    }
console.log("gradeChecker:", gradeChecker(20));

// 4.Area Calculator
// Function that returns area of rectangle (length × width).

// 5.Login Function
// Function checks username/password and returns "Login Successful" or "Try Again". -->
