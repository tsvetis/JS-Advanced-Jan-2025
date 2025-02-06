class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, quantity, price) {
    const existingProduct = this.productStock.find(
      (product) => product.productName === productName && product.size === size
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    } else {
      const newProduct = { productName, size, quantity, price };
      this.productStock.push(newProduct);

      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
  }

  sendProduct(productName, size) {
    const index = this.productStock.findIndex(
      (product) => product.productName === productName && product.size === size
    );

    if (index === -1) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    } else {
      const removedProduct = this.productStock.splice(index, 1)[0];
      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }
  }

  findProductsBySize(size) {
    const matchingProducts = this.productStock.filter(
      (product) => product.size === size
    );

    if (matchingProducts.length === 0) {
      return "There are no products available in that size";
    } else {
      const productInfo = matchingProducts
        .map((product) => `${product.productName}-${product.quantity} pieces`)
        .join(", ");

      return productInfo;
    }
  }

  listProducts() {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`;
    }

    this.productStock.sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );

    const productInfo = this.productStock.map(
      (product) =>
        `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`
    );

    const result = `${this.storehouse} storehouse in ${
      this.location
    } available products:\n${productInfo.join("\n")}`;

    return result;
  }
}

// INPUT 1:
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// OUTPUT 1:
// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// The product Sweather, size M was successfully added to the inventory
// You added 10 more pieces of product Sweather size M

// INPUT 2
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// OUTPUT 2
// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully removed from the inventory
// Uncaught Error Error: The product Sweather, size M is not in the inventory

// INPUT 3
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

// OUTPUT 3
// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// Shirt-10 pieces, T-Shirt-10 pieces
// There are no products available in that size

// INPUT 4
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

// OUTPUT 4
// The product Shirt, size M was successfully added to the inventory
// The product T-Shirt, size M was successfully added to the inventory
// The product Shirt, size L was successfully added to the inventory
// The product Shoes, size 9 was successfully added to the inventory
// The product Shoes, size 9 was successfully removed from the inventory
// East storehouse in Milano available products:
// Shirt/Size:M/Quantity:10/Price:25$
// Shirt/Size:L/Quantity:5/Price:30$
// T-Shirt/Size:M/Quantity:10/Price:25$
