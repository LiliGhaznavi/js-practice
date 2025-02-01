// Exercise 2: Conditional Execution
// Write a function greetUser(user) that prints "Hello, [username]!" only if user is not null or undefined. Otherwise, print "Hello, guest!". Use short-circuiting.

function greetUser(user) {
  console.log(`Hello ${user || "guest"}!`);
}

greetUser("Lili");
greetUser("");
greetUser(null);
