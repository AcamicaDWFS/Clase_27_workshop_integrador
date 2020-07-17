class Product {
  constructor(product, brand, model, price, imgSrc) {
    this.product = product;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.imgSrc = imgSrc;
  }
}

function formatNumber(number) {
  return number.toLocaleString("en");
}

function getPrice(price) {
  return parseFloat(price.split(",").join(""));
}

function getTotal(cart) {
  const prices = cart.map((product) => product.price);
  return prices.reduce((acc, curr) => acc + curr);
}

function createProduct(evt) {
  const selectedCard = evt.target.parentElement;

  const product = selectedCard.querySelector("h3").innerText;
  const brand = selectedCard.querySelector(".brand").innerText;
  const model = selectedCard.querySelector(".model").innerText;
  const price = getPrice(selectedCard.querySelector(".price").innerText);
  const imgSrc = selectedCard.querySelector("img").getAttribute("src");

  const currItem = new Product(product, brand, model, price, imgSrc);

  return currItem;
}

function createCartItem(product) {
  const item = document.createElement("article");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.setAttribute("alt", "Cart item");

  const container = document.createElement("div");
  container.classList.add("description");

  const productName = document.createElement("h4");
  productName.innerText = product.product;

  const brand = document.createElement("p");
  brand.innerText = `Marca: ${product.brand}`;

  const model = document.createElement("p");
  model.innerText = `Modelo: ${product.model}`;

  const price = document.createElement("p");
  price.innerText = `Precio: $${formatNumber(product.price)}`;
  container.append(productName, brand, model, price);

  item.append(img, container);

  return item;
}

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = product.imgSrc;

  const productName = document.createElement("h3");
  productName.innerText = product.product;
}

const buttons = document.querySelectorAll(".card button");
const payBtn = document.querySelector("#pay-btn");
const total = document.querySelector("#total span");
const cartButton = document.querySelector(".carrito");
const cartBox = document.querySelector("#cart-box");
const closeButton = document.querySelector(".close");
const notification = document.querySelector("#number");
const cart = [];

for (let button of buttons) {
  button.addEventListener("click", (evt) => {
    const item = createProduct(evt);
    cart.push(item);

    cartBox.insertBefore(createCartItem(item), payBtn);
    notification.innerText = cart.length;

    total.innerText = `$${formatNumber(getTotal(cart))}`;
  });
}

cartButton.addEventListener("click", () => {
  if (cart.length != 0) {
    cartBox.style.display = "block";
    document.body.style.overflowY = "hidden";
  } else {
    alert("Aún no hay productos en el carrito.");
  }
});

closeButton.addEventListener("click", () => {
  cartBox.style.display = "none";
  document.body.style.overflowY = "visible";
});
