const grid = document.querySelector('.grid');
const createElements = document.createElement('div');
const elements = document.querySelectorAll('.element')

function createElement() {
  for (let num = 1; num <= 256; num++) {
    createElements.classList.add('element');
    grid.appendChild(createElements.cloneNode(true));
  }
}

createElement()
