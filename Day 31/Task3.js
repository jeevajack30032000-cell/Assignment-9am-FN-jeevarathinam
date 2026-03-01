// javaScript Object
const user = {
    name: "jeeva",
    age: 25,
    Skills: ["Java", "React", "Python"],
  isActive: true
};

//  TO JSON (string)
const jsonString = JSON.stringify(user);
console.log(jsonString);


//  FROM JSON (object)
const userBack = JSON.parse(jsonString);
console.log(userBack.name);
