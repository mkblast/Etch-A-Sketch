const grid = document.querySelector('.grid');
const elements = document.createElement('div');
function createElement() {
  for (let num = 1; num <= 256; num++) {
    elements.classList.add('element');
    grid.appendChild(elements.cloneNode(true));
  }
}

createElement()
