// Exercise 1: Accessing Nested Properties
// Given the following object, use optional chaining to safely access properties.

const user = {
  name: "Lili",
  profile: {
    age: 25,
    social: {
      twitter: "@lilig",
    },
  },
};

console.log(user.name); // Should print Lili
console.log(user.profile?.age); // Should print 25
console.log(user.profile?.social?.twitter); // Should print "@lilig"
console.log(user.profile?.social?.facebook); // Should print undefined
