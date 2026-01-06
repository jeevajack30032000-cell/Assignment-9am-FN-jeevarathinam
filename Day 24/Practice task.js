// 1.Create an object book with title, author, and pages.

//2. Add a method describe() that prints the book details.

//3. Use object Destructuring to extract the title and author.

//4. Create a class Employee with name and salary — add a method to display info.

//5. Create another class Manager that inherits from Employee and adds a department.


const book ={
    title: "jack the ripper",
    Author: "daniel richard",
    pages: 350
}
book.discribe = function(){
    return `${this.title} by ${this.Author} with ${this.pages} pages.`;
}
console.log("book details:", book.discribe());

const {title, Author} = book;
console.log(`Title: ${title}, Author: ${Author}`);


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayInfo() {
        return `Employee Name: ${this.name}, Salary: $${this.salary}`;
    }
}


class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    displayInfo() {
        return `${super.displayInfo()}, Department: ${this.department}`;
    }
}
// Create object
const manager1 = new Manager("Jeeva", 50000, "IT");

// Call method
console.log(manager1.displayInfo());