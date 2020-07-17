class Product {
  constructor(product, brand, model, price, imgSrc) {
    this.product = product;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.imgSrc = imgSrc;
  }
}

const formatNum = (num) => num.toLocaleString("en");

const getPrice = (price) => parseFloat(price.split(",").join(""));

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

function createTextElement(type, text) {
  const newElement = document.createElement(type);
  newElement.innerText = text;

  return newElement;
}

function createCartItem(product) {
  const item = document.createElement("article");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.setAttribute("alt", "Cart item");

  const container = document.createElement("div");
  container.classList.add("description");

  const productName = createTextElement("h4", product.product);
  const brand = createTextElement("p", `Marca: ${product.brand}`);
  const model = createTextElement("p", `Modelo: ${product.model}`);
  const price = createTextElement("p", `Precio: $${formatNum(product.price)}`);

  container.append(productName, brand, model, price);

  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fas");
  deleteBtn.classList.add("fa-trash-alt");

  item.append(img, container, deleteBtn);

  return item;
}

function hideCart() {
  cartBox.style.display = "none";
  document.body.style.overflowY = "visible";
}

function showCart() {
  cartBox.style.display = "block";
  document.body.style.overflowY = "hidden";
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
    const product = createProduct(evt);
    cart.push(product);

    const htmlProduct = createCartItem(product);

    cartBox.insertBefore(htmlProduct, payBtn);
    notification.innerText = cart.length;

    const rmButton = htmlProduct.querySelector("i");
    addDeleteListener(rmButton, product);

    total.innerText = `$${formatNum(getTotal(cart))}`;
  });
}

function addDeleteListener(button, product) {
  button.addEventListener("click", (evt) => {
    const productToRemove = evt.target.parentElement;
    const modelToDelete = product.model;

    deleteElement(cart, modelToDelete);
    productToRemove.remove();

    notification.innerText = cart.length;

    cart.length === 0
      ? hideCart()
      : (total.innerText = `$${formatNum(getTotal(cart))}`);
  });
}

function deleteElement(cart, modelToDelete) {
  const models = cart.map((product) => product.model);
  const pos = models.indexOf(modelToDelete);

  cart.splice(pos, 1);
}

cartButton.addEventListener("click", () => {
  cart.length !== 0
    ? showCart()
    : alert("Aún no hay productos en el carrito.");
});

closeButton.addEventListener("click", () => {
  hideCart();
});
