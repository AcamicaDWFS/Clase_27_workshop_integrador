const PRODUCTS = [
    new Product(1, 'Peperoni', 129, 30, ['Peperoni'], 'images/pepperoni.jpg'),
    new Product(2, 'Alambre', 179, 30, ['Pastor', ' Tocino', ' Pimientos', ' Cebolla'], 'images/alambre.jpg'),
    new Product(3, 'Mexicana', 179, 30, ['Chorizo', ' Pico de gallo', ' Jalapeño', ' Tocino'], 'images/mexicana.jpg'),
    new Product(4, 'Pastor', 179, 30, ['Pastor', ' Cebolla', ' Piña'], 'images/pastor.jpg'),
    new Product(5, 'Hawaiana', 169, 30, ['Jamon', ' Piña'], 'images/hawaiana.jpg'),
    new Product(6, 'Vegetariana', 169, 30, ['Champiñones', ' Morron', ' Queso'], 'images/vegetariana.jpg'),
    new Product(7, '4 Queso', 169, 30, ['Mozzarella', ' Manchego', ' Cheddar', ' Parmesano'], 'images/quesos.jpg'),
    new Product(8, 'Suprema', 168, 30, ['Morron', ' Cebolla', ' Chorizo', ' Peperoni', ' Champiñones', ' Pastor'], 'images/suprema.jpg'),
];

let car = [];

let totalCar = document.getElementById('total');
totalCar ? totalCar.innerText = car.length: 0;


const CAR_BILL = document.getElementById('bill');

function addProducts(item, callback){
    try{
        localStorage.setItem('productsList', JSON.stringify(item));
        callback("Producto Almacenado en el Carrito");
        inCar();
    } catch (e) {
        console.error(e);        
    }
}

function getProducts(){
    return JSON.parse(localStorage.getItem('productsList'));
}

function succesSaveStorage(message){
    alert(message);
}

function insertCard(item, index){
    const container = document.getElementById('cards');
    let card = document.createElement('div');
    card.className = 'col-md-4';
    card.id = item.id;
    card.innerHTML = `<div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${item.image} alt=${item.ingredients}>
                            <div class="card-body">
                                <h4 class="card-title"> Pizza ${item.name} </h4>
                                <p class="card-text">${item.ingredients}</p>
                                <p class="text-info text-right font-weight-bold">$${item.price}</p>
                                <div class="d-flex justify-content-between align-items-center mt-2">
                                    <button type="button" class="btn btn-sm btn-block btn-success" id="${item.id}" onclick="addToCar(${item.id}, ${index})">Agregar</button>
                                </div>
                            </div>
                        </div>`;
    container.append(card);
}

function insertItemCar(item){
    const CAR_CONT = document.getElementById('cart');
    let prod = document.createElement('li');
    prod.className = 'list-group-item d-flex justify-content-between lh-condensed';
    prod.innerHTML = `<div class="row">
                        <h6 class="my-0 col-12">${item.info.name}</h6>
                        <small class="text-muted col-12">Cantidad: ${item.count}</small>
                        <small class="text-muted col-12">${item.info.ingredients}</small>
                      </div>
                      <strong><span class="text-muted">$${item.info.price}</span></strong>`;
    CAR_CONT.append(prod);
}

function deletItemCar(){
    const CAR_CONT = document.getElementById('cart');
    let childs = CAR_CONT.childNodes;
    let tam = childs.length-1; 
    for(let i = 0; i < tam; i++){
        CAR_CONT.removeChild(childs[0]);
    }
}

function insertTotal(car){
    const CAR_CONT = document.getElementById('cart');
    let total_price = 0;
    car.forEach(element => {
        total_price += element.price;    
    });
    let total = document.createElement('li');
    total.className = 'list-group-item d-flex justify-content-between';
    total.innerHTML = `<span>Total (MXN)</span>
                        <strong>$${total_price}</strong>`;
    CAR_CONT.append(total);
}

function deleteTotal(){
    const CAR_CONT = document.getElementById('cart');
    CAR_CONT.removeChild(CAR_CONT.lastChild);
    let total = document.createElement('li');
    total.className = 'list-group-item d-flex justify-content-between';
    total.innerHTML = `<span>Total (MXN)</span>
                        <strong>$0</strong>`;
    CAR_CONT.append(total);
}

function addToCar(id, index){
    let prod = PRODUCTS.find(product => product.id === Number(id));
    if(PRODUCTS[index].existence > 0){
        car.push(prod);
        PRODUCTS[index].existence -= 1;
        addProducts(car, succesSaveStorage);
    } else {
        alert('Prodcunto no disponible por el momento');
    }
}

function totalProd(prod){
    let totals = {};
    prod.sort((a, b) => a.id - b.id );
    prod.forEach(element=>{
        if (!(element.id in totals)){
            totals[element.id] = {count: 0, info: {}};
            totals[element.id].info = element;
        }
        totals[element.id].count += 1;
    });
    return totals;
}

function inCar() {
    let onLocalS = JSON.parse(localStorage.getItem('productsList'));
    car = onLocalS ? onLocalS : [];
    totalCar.innerText = car.length;
}

function pay(){
    window.location.href = 'bill.html';
}

function setShoppingCart() {
    let cart = getProducts();
    let total = totalProd(cart);
    const TOTAL_PROD = document.getElementById('total_prod');
    
    if(total && Object.keys(total).length > 0){
        TOTAL_PROD.innerText = cart.length;
        for(let prod in total){
            insertItemCar(total[prod]);
        }    
    }
    insertTotal(cart)
}

function setUserData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const colonia = document.getElementById('address2').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    let date = new Date();
    let fullDate = date.getDate() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear();
    let hours = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const userInfo = {
        firstName,
        lastName,
        email,
        address,
        colonia,
        country,
        state,
        zip,
        fullDate,
        hours
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
} 