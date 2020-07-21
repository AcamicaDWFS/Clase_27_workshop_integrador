(()=>{
    setShoppingCart();
    const BUTTON = document.getElementById('sendForm');
    
    BUTTON.addEventListener('click', () => {
        alert('Pago Realizado');
        setUserData();
        window.location.href = 'confirmation.html';
    });
})();