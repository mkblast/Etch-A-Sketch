// This is a global constant to select the divs with the grid class.
const grid = document.querySelector('.grid');

// A function to create the grid element and has the .element class
// We use this function to create the default canvas and when we change
// the canvas size.
function createElement(num) {
  for (let ctr = 1; ctr <= num; ctr++) {
    const createElements = document.createElement('div');
    createElements.classList.add('element');
    grid.appendChild(createElements);
  }

  // We call this function so when we create the new canvas
  // we will be able to color it.
  colorChild()
  pickColor()
}

// the default canvas has 256 squars (16*16).
createElement(256)

// A function to delete the .element nodes
// we mainly use this function when we change the size of the canvas.
function deleteChild() {
  const elements = document.querySelectorAll('.element')
  elements.forEach((element) => {
    element.remove()
  })
}

// This is the event listener that will change the canvas
// when we click on any button.
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
  btn.addEventListener(('click'), () => {
    // First we delete the squars in the canvas.
    deleteChild()
    // Then we draw another canvas with the selected size.
    createElement(Number(btn.textContent) ** 2)
    // We change this propertie to change the colums in the grid
    // so it matched the canvas size and looks square.
    grid.style.gridTemplateColumns = 'repeat(' + Number(btn.textContent) + ', 1fr)'

  })
})

let defaulColor = '#000000'
function pickColor() {
  const picker = document.querySelector('.picker')
  picker.addEventListener('change', () => {
    defaulColor = picker.value
  })
}

// The main function to color the squars, now is set to black.
// more colors will be added later.
function colorChild() {
  const elements = document.querySelectorAll('.element')
  elements.forEach((element) => {
    element.addEventListener(('mouseover'), () => {
      element.style.backgroundColor = defaulColor
    })
  })
}

