(()=>{
    let cart = getProducts();
    let total = totalProd(cart);
    const TOTAL_PROD = document.getElementById('total_prod');
    const BUTTON = document.getElementById('sendForm');
    
    if(total && Object.keys(total).length > 0){
        TOTAL_PROD.innerText = cart.length;
        for(let prod in total){
            insertItemCar(total[prod]);
        }    
    }
    insertTotal(cart)
    BUTTON.addEventListener('click', () => {
        TOTAL_PROD.innerHTML = 0;
        deletItemCar();
        deleteTotal();
        localStorage.clear();
        alert('Pago Realizado');
        window.location.href = './index.html';
    });
})();