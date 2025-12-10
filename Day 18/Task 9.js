// Create a shopping cart item with const and update its quantity property.
const cartitem = {
    name: "HP Laptop",
    price: 50000,
    quantity: 1
};
console.log("before update price:", cartitem);
cartitem.price =25000;
cartitem.quantity = 2;
console.log("after update price:", cartitem);