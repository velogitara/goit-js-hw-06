const controlsRef = document.querySelector('#controls');
const inputValue = controlsRef.firstElementChild.value;

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const divBoxesRef = document.querySelector('#boxes');

const size = '10px';
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

const createBoxes = event => {
  const createFewBoxes = amount => {
    let newElement = [];
    for (let i = 0; i < amount; i += 1) {
      // console.log(newElement[0]);

      newElement.push(document.createElement('div'));
    }
    return newElement;
  };

  const result = createFewBoxes(controlsRef.firstElementChild.value);
  result.map(el => {
    const basicWidth = '30px';

    el.classList.add('newDiv');
    el.style.width = getBoxSize();
    el.style.height = '30px';
    el.style.backgroundColor = getRandomHexColor();

    console.log(el);
  });

  // console.log(result);
  divBoxesRef.append(...result);
};

createBtn.addEventListener('click', createBoxes);

function getBoxSize() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
