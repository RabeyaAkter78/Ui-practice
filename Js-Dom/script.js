// get the DOM Elements by id:

const button = document.getElementById("addToCart");
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");
const reset = document.getElementById("reset");

// set the initial values:
let Initialprice = 5000;
let ProductTotalPrice = 0;

// set the initial values in the Html elements:
price.innerHTML = `Price: $ ${Initialprice}`;
totalPrice.innerHTML = ` Total Proce : $ ${ProductTotalPrice}`;

// add event listeners to the add to cart button to update the total price:
button.addEventListener("click", () => {
  //   console.log(Initialprice, ProductTotalPrice);

  //   update the total price:
  ProductTotalPrice = ProductTotalPrice + Initialprice;

  //   update the total price in the Html element:
  totalPrice.innerText = `Total Price: $ ${ProductTotalPrice}`;
});

// add event listeners to the reset button to reset the total price:
reset.addEventListener("click", () => {
  // reset the total price:
  ProductTotalPrice = 0;

  //   update the total price in the Html element:
  totalPrice.innerText = `Total Price: $ ${ProductTotalPrice}`;
});
