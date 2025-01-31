// Exercise 2: Default Values
// Extract name and age from the person object. If age is missing, set it to 25 by default.

const person = {
  firstName: "Jack",
};

// Your code here
const { firstName, age = 25 } = person;
console.log(firstName, age);
