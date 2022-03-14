const grid = document.querySelector('.grid');
const createElements = document.createElement('div');

function createElement() {
  for (let num = 1; num <= 256; num++) {
    createElements.classList.add('element');
    grid.appendChild(createElements.cloneNode(true));
  }
}

createElement()

const elements = document.querySelectorAll('.element')

elements.forEach((element) => {
  element.addEventListener(('mouseover'), (e) => {
    e.target.style.background = 'black'
  })
})
