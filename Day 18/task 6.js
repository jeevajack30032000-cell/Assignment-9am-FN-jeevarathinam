// task 6:Create a simple “user profile” object using const and update its fields.

const userprofile ={
    name:"jack",
    age:30,
    occupation:"developer"
};
console.log("before modification", userprofile);
userprofile.name="charan";
userprofile.age=25;
userprofile.occupation="designer";
console.log("after modification", userprofile);

//note : we cannot reassign the const object itself to a new object.




