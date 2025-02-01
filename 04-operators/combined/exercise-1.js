// Exercise 1:
// Write a function getUserCity(user) that safely retrieves the user's city from a deeply nested object. If any part of the path is undefined, return "Unknown city".

const user1 = {
  address: {
    location: {
      city: "Tehran",
    },
  },
};

const user2 = {};

function getUserCity(user) {
  console.log(user?.address?.location?.city ?? "Unknown city");
}

getUserCity(user1); // Output: Tehran
getUserCity(user2); // Output: Unknown city
