//Resaltar el logo

document.getElementById("logo").onmouseover = function(){
    logo.style.border = "5px outset crimson";}
    
    logo.onmouseout = function(){
    logo.style.border = "none";}

document.getElementById("title").onmouseover = function(){
    title.style.color = "crimson";}
        
    title.onmouseout = function(){
    title.style.color = "black";}

// Seleccionar categoría

    let all = document.getElementById("all");
    let cardcontainer = document.getElementsByClassName("cardcontainer");

    let containerdog = document.getElementById("container-dog");
    let navdogs = document.getElementById("navdogs");
    
    let containercat= document.getElementById("container-cat");
    let navcats = document.getElementById("navcats");

    let containerbird= document.getElementById("container-bird");
    let navbirds = document.getElementById("navbirds");

    navdogs.addEventListener('click', function (){
        containerdog.style.display = "grid";
        containercat.style.display = "none";
        containerbird.style.display = "none";
    })

    navcats.addEventListener('click', function (){
        containerdog.style.display = "none";
        containercat.style.display = "grid";
        containerbird.style.display = "none";
    })

    navbirds.addEventListener('click', function (){
        containerdog.style.display = "none";
        containercat.style.display = "none";
        containerbird.style.display = "grid";
    })

    all.addEventListener('click', function (){
        containerdog.style.display = "grid";
        containercat.style.display = "grid";
        containerbird.style.display = "grid";
    })

    //Carrito de compras
    let car = [];
    let buttonbuy = document.getElementById("buttonbuy");
    let shoppingcar = document.getElementById("shoppingcar");
    shoppingcar.addEventListener('click', function (){
        containerdog.style.display = "none";
        containercat.style.display = "none";
        containerbird.style.display = "none";
    })

