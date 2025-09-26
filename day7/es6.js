// let and const
// arrow function
// default parameter
const greet = (firstName, lastName, middleName = "") => {
    return `Hello ${firstName} ${middleName} ${lastName}`;
};

console.log(greet("fn", "ln"));       
