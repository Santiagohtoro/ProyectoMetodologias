
//Carrito
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
}