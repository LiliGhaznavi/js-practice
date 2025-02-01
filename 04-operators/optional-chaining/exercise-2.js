// Exercise 2: Calling Methods Safely
// Modify the code to ensure it doesn't throw an error when getName is not defined.

const user1 = {
  getName: () => "Lili",
};

const user2 = {};

console.log(user1.getName?.()); // Should print "Lili"
console.log(user2.getName?.()); // Should print undefined without an error
