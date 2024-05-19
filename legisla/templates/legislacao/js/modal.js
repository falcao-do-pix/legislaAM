

function showInfoModal() {
   const modal = document.querySelector('.modal');
   modal.style.display = 'block';
}

const headerInfoBtn = document.querySelector('.header-info');
console.log(headerInfoBtn);

headerInfoBtn.addEventListener('click', showInfoModal);
