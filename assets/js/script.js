const modalBox = document.querySelector(".modal-box");
const overLay = document.querySelector(".overlay");
const cityCard = document.querySelectorAll(".city-card");
const locationBtn = document.querySelector(".nav-center-location");
const addressBox = document.querySelector(".address-modal-box");

const home = (e) =>{
   e.preventDefault();
   modalBox.classList.toggle("active");
   overLay.classList.toggle("active");
}

cityCard.forEach(card => {
   card.addEventListener('click', home)
})

window.addEventListener('load', home);

overLay.addEventListener('click', home);


// locationBtn.addEventListener('click', function(e) {
//    e.preventDefault();
//    overLay.classList.add('active');
//    addressBox.classList.toggle('active');
//    modalBox.classList.remove('active') 
// })






