// Form validation (string inputs, number checking).

// User login systems (boolean flags).

// Product catalog (objects + arrays).

// Financial apps (numbers, BigInt).

// Interactive UI elements (objects to store state).


// task 1
// Form validation (string inputs, number checking).
function validateForm(username, age) {
    if (typeof username !== 'string' || username.length === 0) {
        return "Invalid username";
    }
    if (typeof age !== 'number' || age <= 0) {
        return "Invalid age";
    }   
    return "Form is valid";
}

console.log(validateForm("Jeeva", 25)); 
console.log(validateForm("", 25));
console.log(validateForm("Jeeva", -5));
// task 2
// User login systems (boolean flags).
let isUserLoggedIn = false; 
function loginUser() {
    isUserLoggedIn = true;
    console.log("User logged in");
}
function logoutUser() {
    isUserLoggedIn = false;
    console.log("User logged out");
}
loginUser();
console.log("Is user logged in?", isUserLoggedIn);
logoutUser();
console.log("Is user logged in?", isUserLoggedIn); 
// task 3
// Product catalog (objects + arrays).
const productCatalog = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Tablet", price: 299.99 }
];
console.log("Product Catalog:", productCatalog);
// task 4
// Financial apps (numbers, BigInt).
function calculateTotalBalance(transactions) {
    let total = 0n;
    for (let amount of transactions) {
        total += BigInt(amount);
    }
    return total;
}
const transactions = [1000, 2500, -500, 3000];
console.log("Total Balance:", calculateTotalBalance(transactions).toString());
// task 5
// Interactive UI elements (objects to store state).
const uiState = {
    theme: "light",
    sidebarOpen: false
};
function toggleSidebar() {
    uiState.sidebarOpen = !uiState.sidebarOpen;
    console.log("Sidebar open:", uiState.sidebarOpen);
}
console.log("Initial UI State:", uiState);
toggleSidebar();
toggleSidebar();
console.log("Final UI State:", uiState);
