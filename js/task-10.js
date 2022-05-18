const controlsRef = document.querySelector('#controls');
const inputValue = document.querySelector('input[type="number"]');
console.log(inputValue);
const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const divBoxesRef = document.querySelector('#boxes');

let basicWidth = 30;

// const newElement = document.createElement('div');

// console.dir(controlsRef.firstElementChild);
// console.log(createBtn);
// console.log(destroyBtn);

// for (var i = 1; i < 10; i++) {
//   SummSumm = document.createElement('p');
//   SummText = document.createTextNode('gsfdg sd sdgf sgfsgd s');
//   SummDok[0].appendChild(SummSumm);
//   SummSumm.appendChild(SummText);
// }

const createBoxes = () => {
  const inpValue = inputValue.value;
  // console.log(typeof inpValue);
  let newElement = [];
  let size = 0;
  for (let i = 0; i < inpValue; i += 1) {
    const el = document.createElement('div');
    el.classList.add('newDiv');
    el.style.width = `${30 + size}px`;
    el.style.height = '30px';
    el.style.backgroundColor = getRandomHexColor();

    size += 10;

    console.log(el);
    newElement.push(el);
  }
  // console.log(newElement);

  divBoxesRef.append(...newElement);
};

createBtn.addEventListener('click', createBoxes);

// function getBoxSize() {
//   // const newWidth = `${basicWidth}px`;
//   // return newWidth;
//   console.log(newObj);
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
