const iframeUrls = {
   'cf': './book-list/constituicao.pdf',
   'cdtb': './book-list/codigo-tributario.pdf',
   'cdts': './book-list/codigo-transito.pdf',
   'cdp': './book-list/codigo-penal.pdf',
   'cds': './book-list/codigo-consumidor.pdf',
   'cdc': './book-list/codigo-civil.pdf',
}

function hideBtn() {
   maximizeButton.style.display = 'none';
}

function showBtn() {
   maximizeButton.style.display = 'block';
}

function minimizeIframe() {
   hideBtn();
   iframeContainer.style.maxWidth = '1000px';
   iframeContainer.style.height = '900px';
   iframe.src = '';

   header.style.display = 'flex';
   footer.style.display = 'flex';

   main.style.paddingTop = '220px';
   main.style.paddingBottom = '250px';

   setTimeout(() => {
      iframe.src = iframeUrls[pageID];
      maximizeButton.removeEventListener('click', minimizeIframe);
      maximizeButton.addEventListener('click', maximizeIframe);

      setTimeout(() => {
         showBtn();
      }, 500);
   }, 500);
}

function maximizeIframe() {
   hideBtn();
   iframe.style.borderRadius = '0px';
   iframe.src = '';
   header.style.display = 'none';
   footer.style.display = 'none';

   iframeContainer.style.maxWidth = '100vw';
   iframeContainer.style.height = '100vh';

   main.style.padding = '0px';

   setTimeout(() => {
      iframe.src = iframeUrls[pageID];
      maximizeButton.removeEventListener('click', maximizeIframe);
      maximizeButton.addEventListener('click', minimizeIframe);

      setTimeout(() => {
         showBtn();
      }, 500);

   }, 500);
}

const pageID = document.querySelector('body').id;
const iframe = document.querySelector('.iframe-container iframe');
const iframeContainer = document.querySelector('.iframe-container');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const maximizeButton = document.querySelector('.maximize-button-container');
maximizeButton.addEventListener('click', maximizeIframe);

window.onload = () => {
   iframe.src = iframeUrls[pageID];
}