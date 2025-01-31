// Exercise 4: Nested Destructuring
// Extract the city and zip from address inside the profile object.

const profile = {
  username: "coder123",
  address: {
    city: "Paris",
    zip: "75000",
  },
};

// Your code here
const {
  address: { city, zip },
} = profile;
console.log(city, zip);

//Alternative Approach
// const { address } = profile;
// const { city, zip } = address;
// console.log(city, zip);
