const modalBox = document.querySelector(".modal-box");
const overLay = document.querySelector(".overlay");
const cityCard = document.querySelectorAll(".city-card");
const locationBtn = document.querySelector(".nav-center-location");
const addressBox = document.querySelector(".address-modal-box");


cityCard.forEach(card => {
   card.addEventListener('click', function(e){
      e.preventDefault()
      overLay.classList.remove('active');
      modalBox.classList.remove('active');
   })
})

window.addEventListener('load', function(e) {
   e.preventDefault();
   overLay.classList.add('active');
   modalBox.classList.add('active');
});

overLay.addEventListener('click', function(e){
   e.preventDefault();
   overLay.classList.remove('active')
   modalBox.classList.remove('active');
   addressBox.classList.remove('active')
});

locationBtn.addEventListener('click', function(e) {
   e.preventDefault();
   addressBox.classList.add('active');
   overLay.classList.add('active');
})







