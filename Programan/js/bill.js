(()=>{
    let cart = getProducts();
    let total = totalProd(cart);
    const TOTAL_PROD = document.getElementById('total_prod');
    
    if(total && Object.keys(total).length > 0){
        TOTAL_PROD.innerText = cart.length;
        console.log(total)
        for(let prod in total){
            insertItemCar(total[prod]);
        }    
        insertTotal(cart)
    }
})();