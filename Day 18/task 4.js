// task 4:Test variable visibility inside and outside a block.

{
    var a = 10;   // function/global scoped
    let b = 20;   // block scoped
    const c = 30; // block scoped

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

// Outside the block
console.log(a); // 10 → var is visible outside the block
console.log(b); //  Error → b is not defined
console.log(c); //  Error → c is not defined
