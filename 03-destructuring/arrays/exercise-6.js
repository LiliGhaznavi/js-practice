// Exercise 6: Nested Array Destructuring
// Extract `x` and `y` from the nested array inside `coordinates`.

const coordinates = [12, [34, 56], 78];

// Your code here
const [, [x, y]] = coordinates;
console.log(x, y);
