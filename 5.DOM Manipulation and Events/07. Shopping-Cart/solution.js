function solve() {
  const addProductButtons = document.querySelectorAll(".add-product");
  const textareaElement = document.querySelector("textarea");
  const checkoutButton = document.querySelector(".checkout");

  let cart = {};

  checkoutButton.addEventListener("click", (event) => {
    const totalPrice = Object.values(cart).reduce(
      (sum, price) => sum + price,
      0
    );
    const list = Object.keys(cart).join(", ");
    textareaElement.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

    addProductButtons.forEach((button) =>
      button.setAttribute("disabled", "disabled")
    );
    event.currentTarget.setAttribute("disabled", "disabled");
  });

  function addProductHandler(event) {
    const productElement = event.currentTarget.parentElement.parentElement;

    const title = productElement.querySelector(".product-title").textContent;
    const price = Number(
      productElement.querySelector(".product-line-price").textContent
    );

    if (!cart[title]) {
      cart[title] = 0;
    }

    cart[title] += price;

    textareaElement.value += `Added ${title} for ${price.toFixed(
      2
    )} to the cart.\n`;
  }

  addProductButtons.forEach((button) =>
    button.addEventListener("click", addProductHandler)
  );
}
