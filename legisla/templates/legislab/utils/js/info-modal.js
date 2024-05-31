function disableModal() {
   backgroundEffect.style.animationName = 'out';
   infoModal.style.transform = 'translateY(-100%)';
   infoModal.style.animationName = 'out';

   setTimeout(() => {
      backgroundEffect.removeEventListener('click', disableModal);
      backgroundEffect.style.display = 'none';
      infoModal.style.display = 'none';
   }, 900);
}

function activeModal() {
   backgroundEffect.style.display = 'block';
   infoModal.style.display = 'block';
   
   backgroundEffect.style.animationName = 'enter';
   infoModal.style.animationName = 'enter';
   
   setTimeout(() => {
      infoModal.style.transform = 'translateY(-5%)';
   }, 100);
   
   backgroundEffect.addEventListener('click', disableModal);
}

const modalButton = document.querySelector('.header-info');
const infoModal = document.querySelector('.info-modal');
const backgroundEffect = document.querySelector('.info-modal-background-effect');

modalButton.addEventListener('click', activeModal);
