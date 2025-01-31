// Exercise 3: Default Values
// Extract the first and second elements from `fruits`. If the second element is missing, set it to `"Banana"` by default.

const fruits = ["Apple"];

// Your code here
const [first, second = "banana"] = fruits;
console.log(first, second);
