// Exercise 5: Rest Operator
// Extract the first two elements from `names` and store the rest in a variable called `others`.

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Your code here
const [first, second, ...others] = names;

console.log(first); // "Alice"
console.log(second); // "Bob"
console.log(others); // ["Charlie", "David", "Eve"]
