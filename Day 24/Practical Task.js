// Create a class Product with name and price, and a method discountedPrice().

// Build an object user with login and logout methods.

// Create a class Student with constructor and display() method — make 3 students.

// Create a base class Shape and a subclass Circle that calculates area.

// Use prototypes to add a new method to all Student objects dynamically.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    discountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }
}
const product1 = new Product("Laptop", 1000);
console.log(`Discounted Price: $${product1.discountedPrice(10)}`); // 10% discount
const user = {
    login() {
        return "User logged in";
    }   

    ,logout() {
        return "User logged out";
    }   
};
console.log(user.login());
console.log(user.logout());

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        return `Student Name: ${this.name}, Age: ${this.age}`;
    }

}
const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
const student3 = new Student("Charlie", 19);
console.log(student1.display());
console.log(student2.display());
console.log(student3.display());

class Shape {
    constructor(color) {
        this.color = color;
    }
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle1 = new Circle("red", 5);
console.log(`Circle Area: ${circle1.area()}`);
Student.prototype.getDetails = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
}   ;
console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());
