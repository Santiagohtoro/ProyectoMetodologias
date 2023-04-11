
// Controles imagenes
export const PopUpImages = () => {
  var openPopUp = document.querySelector('.openPopUp'),
    overlay = document.querySelector('.overlay'),
    popUp = document.querySelector('.popUp'),
    closePopUp = document.querySelector('.closePopUp');

  openPopUp.addEventListener('click', () => {
    overlay.classList.add('active');
    popUp.classList.add('active');
  });

  closePopUp.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('active');
    popUp.classList.remove('active');
  });
};

// Adiccion - Resta

export const MathFunction = () => {
  let totalPurchase = document.querySelector('.resultPurchase'),
  totalValue = parseInt(totalPurchase.innerHTML),
  addPurchase = document.querySelector('.addPurchase'),
  subtractPurchase = document.querySelector('.subtractPurchase');

  addPurchase.addEventListener('click', () => {
    totalPurchase.innerHTML = totalValue + 1;
  });

  subtractPurchase.addEventListener('click', () =>{
    if(totalValue == 0) return;
    totalPurchase.innerHTML = totalValue - 1;
  })
};