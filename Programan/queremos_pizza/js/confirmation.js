(()=>{
    let userData = JSON.parse(localStorage.getItem('userInfo'));
    if(userData) {
        const email = document.getElementById('email');
        email.innerHTML = `<a href="mailto:${userData.email}">${userData.email}</a>`;
    
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = `<h6>Nombre:</h6>
        <p>${userData.firstName} ${userData.lastName}</p>
        <h6>Dirección:</h6>
        <p>${userData.address}, ${userData.colonia}, ${userData.zip}, ${userData.state}, ${userData.country}</p>`;
    
        document.getElementById('date').textContent = userData.fullDate;
        document.getElementById('hour').textContent = userData.hours;
    
        setShoppingCart();
    } else {
        window.location.href = './index.html';
    }
   
    localStorage.clear();
})();

function deleteInfo() {
    deletItemCar();
    deleteTotal();
}