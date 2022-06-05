const black = document.getElementsByClassName('black');

black[0].classList.add('selected');

const colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', (evento) => {

  const corPintar = document.querySelector('.selected');
  corPintar.classList.remove('selected');
  evento.target.classList.add('selected');

});

const pixelBoard = document.querySelectorAll('.pixel');
let pix;
for (let i = 0; i < pixelBoard.length; i += 1) {
  pix = pixelBoard[i];

  pix.addEventListener('click', (evento) => {
    const corPintar = document.querySelector('.selected');

    const captura = window.getComputedStyle(corPintar).backgroundColor;
    evento.target.style.backgroundColor = captura;

  });
}

function clearBoard() {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }
  
  const botaoLimpar = document.getElementById('clear-board');
  botaoLimpar.addEventListener('click', clearBoard);

  