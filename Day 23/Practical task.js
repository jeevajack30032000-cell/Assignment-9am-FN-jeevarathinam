// Create a User class with name, email, login() method.
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        return `${this.name} has logged in.`;
    }
}

const user1 = new User("Jeeva", "jeeva@example.com");
console.log(user1.login());

// Make a BankAccount class with deposit & withdraw methods.
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return this.balance;
    }      
}

const myAccount = new BankAccount("123456789", 1000);
console.log("After deposit:", myAccount.deposit(500));
console.log("After withdrawal:", myAccount.withdraw(300));

// Build a prototype chain: Vehicle → Car → ElectricCar.

// Create a product list using objects + destructuring.

// Create a Student Management System using classes.