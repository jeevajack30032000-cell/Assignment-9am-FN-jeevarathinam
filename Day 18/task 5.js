// task 5:Create a const object and modify a property.

const person = {
    name:"jeevarathinam",
    age:25
};
console.log("before modification", person);

person.name="charan";
person.age=26;
console.log("after modification", person);


//note : we cannot reassign the const object itself to a new object.