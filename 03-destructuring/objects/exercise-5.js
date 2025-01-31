// Exercise 5: Function Parameter Destructuring
// Complete the function displayProduct so it extracts name and price from the given product object and logs them.

function displayProduct({ name, price }) {
  console.log(name, price);
}

const product = {
  name: "Laptop",
  price: 1200,
  brand: "Apple",
};

displayProduct(product);
