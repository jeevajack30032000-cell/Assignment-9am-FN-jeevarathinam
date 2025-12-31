// Create an object called book with title, author, year.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// Add a method getInfo() that prints book details.
book.getInfo = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
}
console.log("book info:", book.getInfo());

// Destructure title and author from the book object.
const { title, author } = book;
console.log("title:", title);
console.log("author:", author);


// Create a class Mobile with brand, price.
class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

// Add a method discount() that reduces price by 10%.
Mobile.prototype.discount = function() {
    this.price = this.price * 0.9;
    return this.price;
}
const myMobile = new Mobile("Samsung", 500);
console.log("original price:", myMobile.price);
console.log("discounted price:", myMobile.discount()); 