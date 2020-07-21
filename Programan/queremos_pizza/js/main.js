/*(()=>{
    localStorage.clear();
    PRODUCTS.forEach(insertCard);
})();*/

function cleanContanier(){
    const container = document.getElementById('cards');
    container.innerHTML = "";
}

let search = function(){
    cleanContanier();
    try{ 
    let hint = document.getElementById("hint").value;  
    hint = hint.toLowerCase();   
    var result = PRODUCTS.filter(product => product.name.toLowerCase().indexOf(hint) >= 0);
   }
   catch(e){
       alert(e);
   }    
   result.forEach(insertCard);
}

inCar();
search();

