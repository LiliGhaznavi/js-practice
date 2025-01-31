// Exercise 3: Renaming Variables
// Extract the firstName and lastName from user but rename them to fName and lName.

const user = {
  firstName: "John",
  lastName: "Doe",
};

// Your code here
const { firstName: fName, lastName: lName } = user;
console.log(fName, lName);
